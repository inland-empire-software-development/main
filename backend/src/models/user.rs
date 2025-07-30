use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use utoipa::ToSchema;
use uuid::Uuid;
use validator::Validate;

/// User role enumeration
#[derive(Debug, Clone, Serialize, Deserialize, sqlx::Type, ToSchema)]
#[serde(rename_all = "lowercase")]
#[sqlx(type_name = "user_role", rename_all = "lowercase")]
pub enum UserRole {
    User,
    Admin,
    Moderator,
}

impl Default for UserRole {
    fn default() -> Self {
        Self::User
    }
}

/// Main user model from database
#[derive(Debug, Clone, Serialize, Deserialize, FromRow, ToSchema)]
pub struct User {
    pub id: Uuid,
    pub supabase_user_id: Option<Uuid>,
    pub email: String,
    pub username: Option<String>,
    pub full_name: Option<String>,
    pub avatar_url: Option<String>,
    pub role: UserRole,
    pub is_active: bool,
    pub metadata: serde_json::Value,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

/// User profile model
#[derive(Debug, Clone, Serialize, Deserialize, FromRow, ToSchema)]
pub struct UserProfile {
    pub id: Uuid,
    pub user_id: Uuid,
    pub bio: Option<String>,
    pub website_url: Option<String>,
    pub location: Option<String>,
    pub birth_date: Option<chrono::NaiveDate>,
    pub preferences: serde_json::Value,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

/// User with profile information
#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct UserWithProfile {
    #[serde(flatten)]
    pub user: User,
    pub profile: Option<UserProfile>,
}

/// User creation request
#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct CreateUserRequest {
    #[validate(email)]
    pub email: String,
    
    #[validate(length(min = 3, max = 50))]
    pub username: Option<String>,
    
    #[validate(length(min = 1, max = 255))]
    pub full_name: Option<String>,
    
    #[validate(url)]
    pub avatar_url: Option<String>,
    
    pub supabase_user_id: Option<Uuid>,
}

/// User update request
#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct UpdateUserRequest {
    #[validate(length(min = 3, max = 50))]
    pub username: Option<String>,
    
    #[validate(length(min = 1, max = 255))]
    pub full_name: Option<String>,
    
    #[validate(url)]
    pub avatar_url: Option<String>,
    
    pub metadata: Option<serde_json::Value>,
}

/// User profile update request
#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct UpdateProfileRequest {
    #[validate(length(max = 500))]
    pub bio: Option<String>,
    
    #[validate(url)]
    pub website_url: Option<String>,
    
    #[validate(length(max = 255))]
    pub location: Option<String>,
    
    pub birth_date: Option<chrono::NaiveDate>,
    pub preferences: Option<serde_json::Value>,
}

/// Public user information (safe to expose)
#[derive(Debug, Clone, Serialize, Deserialize, ToSchema)]
pub struct PublicUser {
    pub id: Uuid,
    pub username: Option<String>,
    pub full_name: Option<String>,
    pub avatar_url: Option<String>,
    pub created_at: DateTime<Utc>,
}

impl From<User> for PublicUser {
    fn from(user: User) -> Self {
        Self {
            id: user.id,
            username: user.username,
            full_name: user.full_name,
            avatar_url: user.avatar_url,
            created_at: user.created_at,
        }
    }
}

/// User session model
#[derive(Debug, Clone, Serialize, Deserialize, FromRow, ToSchema)]
pub struct UserSession {
    pub id: Uuid,
    pub user_id: Uuid,
    pub session_token: String,
    pub expires_at: DateTime<Utc>,
    pub ip_address: Option<std::net::IpAddr>,
    pub user_agent: Option<String>,
    pub created_at: DateTime<Utc>,
}

/// Create session request
#[derive(Debug, Clone, Deserialize)]
#[allow(dead_code)]
pub struct CreateSessionRequest {
    pub user_id: Uuid,
    pub ip_address: Option<std::net::IpAddr>,
    pub user_agent: Option<String>,
    pub expires_in_hours: Option<i64>,
} 