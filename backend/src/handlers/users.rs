use axum::{
    extract::{Path, State},
    http::StatusCode,
    response::Json,
};
use uuid::Uuid;
use validator::Validate;

use crate::{
    models::{
        user::{PublicUser, UpdateProfileRequest, UserWithProfile},
    },
    utils::response::{ApiResponse, ErrorResponse},
    AppState,
};

/// Get user profile
pub async fn get_profile(
    State(_state): State<AppState>,
) -> Result<Json<ApiResponse<UserWithProfile>>, (StatusCode, Json<ErrorResponse>)> {
    // TODO: Implement profile retrieval
    // - Extract user ID from JWT token
    // - Get user with profile from database
    Err((
        StatusCode::NOT_IMPLEMENTED,
        Json(ErrorResponse::new("not_implemented", "Endpoint not implemented yet")),
    ))
}

/// Update user profile
pub async fn update_profile(
    State(_state): State<AppState>,
    Json(payload): Json<UpdateProfileRequest>,
) -> Result<Json<ApiResponse<UserWithProfile>>, (StatusCode, Json<ErrorResponse>)> {
    // Validate request
    if let Err(errors) = payload.validate() {
        return Err((
            StatusCode::BAD_REQUEST,
            Json(ErrorResponse::validation_error(errors)),
        ));
    }

    // TODO: Implement profile update
    // - Extract user ID from JWT token
    // - Update profile in database
    // - Return updated user with profile
    Err((
        StatusCode::NOT_IMPLEMENTED,
        Json(ErrorResponse::new("not_implemented", "Endpoint not implemented yet")),
    ))
}

/// Get public user information
pub async fn get_user(
    State(state): State<AppState>,
    Path(user_id): Path<Uuid>,
) -> Result<Json<ApiResponse<PublicUser>>, (StatusCode, Json<ErrorResponse>)> {
    let user = state
        .db
        .get_user_by_id(user_id)
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

    Ok(Json(ApiResponse::success(user.into())))
} 