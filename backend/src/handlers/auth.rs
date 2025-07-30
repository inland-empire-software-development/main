use axum::{
    extract::State,
    http::StatusCode,
    response::Json,
};
use validator::Validate;

use crate::{
    models::{
        auth::{AuthResponse, LoginRequest, RegisterRequest, RefreshTokenRequest, LogoutRequest},
        user::{PublicUser, CreateUserRequest},
    },
    utils::response::{ApiResponse, ErrorResponse},
    AppState,
};

/// Register a new user
pub async fn register(
    State(state): State<AppState>,
    Json(payload): Json<RegisterRequest>,
) -> Result<Json<ApiResponse<AuthResponse>>, (StatusCode, Json<ErrorResponse>)> {
    // Validate request
    if let Err(errors) = payload.validate() {
        return Err((
            StatusCode::BAD_REQUEST,
            Json(ErrorResponse::validation_error(errors)),
        ));
    }

    // Check if passwords match
    if payload.password != payload.password_confirmation {
        return Err((
            StatusCode::BAD_REQUEST,
            Json(ErrorResponse::bad_request("Passwords do not match")),
        ));
    }

    // Check if email already exists
    if state.db.email_exists(&payload.email).await.map_err(|_e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(ErrorResponse::internal_error()),
        )
    })? {
        return Err((
            StatusCode::CONFLICT,
            Json(ErrorResponse::conflict("Email already exists")),
        ));
    }

    // Check if username already exists (if provided)
    if let Some(username) = &payload.username {
        if state.db.username_exists(username).await.map_err(|_e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse::internal_error()),
            )
        })? {
            return Err((
                StatusCode::CONFLICT,
                Json(ErrorResponse::conflict("Username already exists")),
            ));
        }
    }

    // Register user with Supabase
    let supabase_response = state
        .supabase
        .sign_up(&payload.email, &payload.password, None)
        .await
        .map_err(|_| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse::internal_error()),
            )
        })?;

    // Create user in our database
    let create_user_request = CreateUserRequest {
        email: payload.email.clone(),
        username: payload.username.clone(),
        full_name: payload.full_name.clone(),
        avatar_url: None,
        supabase_user_id: Some(supabase_response.user.id),
    };

    let user = state.db.create_user(create_user_request).await.map_err(|_e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(ErrorResponse::internal_error()),
        )
    })?;

    // Create session if we have one
    if let Some(session) = supabase_response.session {
        state
            .db
            .create_session(
                user.id,
                &session.access_token,
                chrono::Utc::now() + chrono::Duration::seconds(session.expires_in),
                None,
                None,
            )
            .await
            .map_err(|_e| {
                (
                    StatusCode::INTERNAL_SERVER_ERROR,
                    Json(ErrorResponse::internal_error()),
                )
            })?;

        let auth_response = AuthResponse::new(
            user.into(),
            session.access_token,
            session.refresh_token,
            chrono::Utc::now() + chrono::Duration::seconds(session.expires_in),
        );

        Ok(Json(ApiResponse::success(auth_response)))
    } else {
        // Return user without session (email verification required)
        let dummy_response = AuthResponse::new(
            user.into(),
            "".to_string(),
            "".to_string(),
            chrono::Utc::now(),
        );
        Ok(Json(ApiResponse::success(dummy_response)))
    }
}

/// Login user
pub async fn login(
    State(state): State<AppState>,
    Json(payload): Json<LoginRequest>,
) -> Result<Json<ApiResponse<AuthResponse>>, (StatusCode, Json<ErrorResponse>)> {
    // Validate request
    if let Err(errors) = payload.validate() {
        return Err((
            StatusCode::BAD_REQUEST,
            Json(ErrorResponse::validation_error(errors)),
        ));
    }

    // Authenticate with Supabase
    let supabase_response = state
        .supabase
        .sign_in(&payload.email, &payload.password)
        .await
        .map_err(|_e| {
            (
                StatusCode::UNAUTHORIZED,
                Json(ErrorResponse::unauthorized()),
            )
        })?;

    // Find or create user in our database
    let user = if let Some(existing_user) = state
        .db
        .get_user_by_supabase_id(supabase_response.user.id)
        .await
        .map_err(|_e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse::internal_error()),
            )
        })?
    {
        existing_user
    } else {
        // Create user if doesn't exist
        let create_user_request = CreateUserRequest {
            email: supabase_response.user.email.clone(),
            username: None,
            full_name: None,
            avatar_url: None,
            supabase_user_id: Some(supabase_response.user.id),
        };

        state.db.create_user(create_user_request).await.map_err(|_e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse::internal_error()),
            )
        })?
    };

    // Create session
    if let Some(session) = supabase_response.session {
        state
            .db
            .create_session(
                user.id,
                &session.access_token,
                chrono::Utc::now() + chrono::Duration::seconds(session.expires_in),
                None,
                None,
            )
            .await
            .map_err(|_e| {
                (
                    StatusCode::INTERNAL_SERVER_ERROR,
                    Json(ErrorResponse::internal_error()),
                )
            })?;

        let auth_response = AuthResponse::new(
            user.into(),
            session.access_token,
            session.refresh_token,
            chrono::Utc::now() + chrono::Duration::seconds(session.expires_in),
        );

        Ok(Json(ApiResponse::success(auth_response)))
    } else {
        Err((
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(ErrorResponse::internal_error()),
        ))
    }
}

/// Logout user
pub async fn logout(
    State(_state): State<AppState>,
    Json(_payload): Json<Option<LogoutRequest>>,
) -> Result<Json<ApiResponse<()>>, (StatusCode, Json<ErrorResponse>)> {
    // TODO: Implement logout logic
    // - Invalidate session in database
    // - Call Supabase logout
    Ok(Json(ApiResponse::success(())))
}

/// Refresh authentication token
pub async fn refresh_token(
    State(state): State<AppState>,
    Json(payload): Json<RefreshTokenRequest>,
) -> Result<Json<ApiResponse<AuthResponse>>, (StatusCode, Json<ErrorResponse>)> {
    // Refresh token with Supabase
    let supabase_response = state
        .supabase
        .refresh_token(&payload.refresh_token)
        .await
        .map_err(|_e| {
            (
                StatusCode::UNAUTHORIZED,
                Json(ErrorResponse::unauthorized()),
            )
        })?;

    // Get user from database
    let user = state
        .db
        .get_user_by_supabase_id(supabase_response.user.id)
        .await
        .map_err(|_e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse::internal_error()),
            )
        })?
        .ok_or_else(|| {
            (
                StatusCode::NOT_FOUND,
                Json(ErrorResponse::not_found("User")),
            )
        })?;

    // Update session
    if let Some(session) = supabase_response.session {
        state
            .db
            .create_session(
                user.id,
                &session.access_token,
                chrono::Utc::now() + chrono::Duration::seconds(session.expires_in),
                None,
                None,
            )
            .await
            .map_err(|_e| {
                (
                    StatusCode::INTERNAL_SERVER_ERROR,
                    Json(ErrorResponse::internal_error()),
                )
            })?;

        let auth_response = AuthResponse::new(
            user.into(),
            session.access_token,
            session.refresh_token,
            chrono::Utc::now() + chrono::Duration::seconds(session.expires_in),
        );

        Ok(Json(ApiResponse::success(auth_response)))
    } else {
        Err((
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(ErrorResponse::internal_error()),
        ))
    }
}

/// Get current user information
pub async fn get_current_user(
    State(_state): State<AppState>,
) -> Result<Json<ApiResponse<PublicUser>>, (StatusCode, Json<ErrorResponse>)> {
    // TODO: Implement current user logic
    // - Extract JWT from Authorization header
    // - Validate token
    // - Get user from database
    Err((
        StatusCode::NOT_IMPLEMENTED,
        Json(ErrorResponse::new("not_implemented", "Endpoint not implemented yet")),
    ))
} 