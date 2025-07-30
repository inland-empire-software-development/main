use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use uuid::Uuid;
use validator::Validate;

use super::user::PublicUser;

/// Login request
#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct LoginRequest {
    #[validate(email)]
    pub email: String,
    
    #[validate(length(min = 6))]
    pub password: String,
    
    /// Remember me flag for extended session
    pub remember_me: Option<bool>,
}

/// Registration request
#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct RegisterRequest {
    #[validate(email)]
    pub email: String,
    
    #[validate(length(min = 6))]
    pub password: String,
    
    #[validate(length(min = 6))]
    pub password_confirmation: String,
    
    #[validate(length(min = 3, max = 50))]
    pub username: Option<String>,
    
    #[validate(length(min = 1, max = 255))]
    pub full_name: Option<String>,
}

/// Token refresh request
#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct RefreshTokenRequest {
    pub refresh_token: String,
}

/// Logout request
#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct LogoutRequest {
    /// Logout from all devices
    pub all_devices: Option<bool>,
}

/// Authentication response
#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct AuthResponse {
    pub user: PublicUser,
    pub access_token: String,
    pub refresh_token: String,
    pub expires_at: DateTime<Utc>,
    pub token_type: String,
}

impl AuthResponse {
    pub fn new(
        user: PublicUser,
        access_token: String,
        refresh_token: String,
        expires_at: DateTime<Utc>,
    ) -> Self {
        Self {
            user,
            access_token,
            refresh_token,
            expires_at,
            token_type: "Bearer".to_string(),
        }
    }
}

/// JWT token claims
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TokenClaims {
    pub sub: Uuid,           // Subject (user ID)
    pub email: String,       // User email
    pub role: String,        // User role
    pub iat: i64,           // Issued at
    pub exp: i64,           // Expires at
    pub iss: String,        // Issuer
    pub aud: String,        // Audience
}

/// Password reset request
#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct PasswordResetRequest {
    #[validate(email)]
    pub email: String,
}

/// Password reset confirmation
#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct PasswordResetConfirmation {
    pub token: String,
    
    #[validate(length(min = 6))]
    pub new_password: String,
    
    #[validate(length(min = 6))]
    pub password_confirmation: String,
}

/// Change password request
#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct ChangePasswordRequest {
    #[validate(length(min = 6))]
    pub current_password: String,
    
    #[validate(length(min = 6))]
    pub new_password: String,
    
    #[validate(length(min = 6))]
    pub password_confirmation: String,
}

/// Email verification request
#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct EmailVerificationRequest {
    pub token: String,
}

/// Resend verification email request
#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct ResendVerificationRequest {
    #[validate(email)]
    pub email: String,
}

/// Authentication error types
#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub enum AuthError {
    InvalidCredentials,
    UserNotFound,
    UserAlreadyExists,
    EmailNotVerified,
    AccountLocked,
    TokenExpired,
    TokenInvalid,
    PasswordTooWeak,
    PasswordMismatch,
    EmailAlreadyTaken,
    UsernameAlreadyTaken,
    InvalidEmail,
    PermissionDenied,
}

impl std::fmt::Display for AuthError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            AuthError::InvalidCredentials => write!(f, "Invalid email or password"),
            AuthError::UserNotFound => write!(f, "User not found"),
            AuthError::UserAlreadyExists => write!(f, "User already exists"),
            AuthError::EmailNotVerified => write!(f, "Email not verified"),
            AuthError::AccountLocked => write!(f, "Account is locked"),
            AuthError::TokenExpired => write!(f, "Token has expired"),
            AuthError::TokenInvalid => write!(f, "Invalid token"),
            AuthError::PasswordTooWeak => write!(f, "Password is too weak"),
            AuthError::PasswordMismatch => write!(f, "Passwords do not match"),
            AuthError::EmailAlreadyTaken => write!(f, "Email is already taken"),
            AuthError::UsernameAlreadyTaken => write!(f, "Username is already taken"),
            AuthError::InvalidEmail => write!(f, "Invalid email format"),
            AuthError::PermissionDenied => write!(f, "Permission denied"),
        }
    }
}

impl std::error::Error for AuthError {}

/// Two-factor authentication setup request
#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct TwoFactorSetupRequest {
    pub secret: String,
    pub code: String,
}

/// Two-factor authentication verification request
#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct TwoFactorVerificationRequest {
    pub code: String,
    pub recovery_code: Option<String>,
} 