use anyhow::Result;
use sqlx::{PgPool, Row};
use uuid::Uuid;
use chrono::{DateTime, Utc};

use crate::models::{
    user::{User, UserProfile, CreateUserRequest, UpdateUserRequest, UpdateProfileRequest, UserWithProfile},
};

/// Database service for handling PostgreSQL operations
#[derive(Clone)]
pub struct DatabaseService {
    pool: PgPool,
}

impl DatabaseService {
    /// Create a new database service
    pub async fn new(database_url: &str) -> Result<Self> {
        let pool = PgPool::connect(database_url).await?;
        
        // Run migrations if needed
        sqlx::migrate!("./migrations").run(&pool).await?;
        
        Ok(Self { pool })
    }

    /// Get database pool reference
    pub fn pool(&self) -> &PgPool {
        &self.pool
    }

    /// Health check for database connection
    pub async fn health_check(&self) -> Result<bool> {
        let row = sqlx::query("SELECT 1 as health")
            .fetch_one(&self.pool)
            .await?;
        
        Ok(row.get::<i32, _>("health") == 1)
    }

    /// Create a new user
    pub async fn create_user(&self, request: CreateUserRequest) -> Result<User> {
        let user = sqlx::query_as::<_, User>(
            r#"
            INSERT INTO users (supabase_user_id, email, username, full_name, avatar_url)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
            "#,
        )
        .bind(request.supabase_user_id)
        .bind(&request.email)
        .bind(&request.username)
        .bind(&request.full_name)
        .bind(&request.avatar_url)
        .fetch_one(&self.pool)
        .await?;

        Ok(user)
    }

    /// Get user by ID
    pub async fn get_user_by_id(&self, user_id: Uuid) -> Result<Option<User>> {
        let user = sqlx::query_as::<_, User>(
            "SELECT * FROM users WHERE id = $1 AND is_active = true"
        )
        .bind(user_id)
        .fetch_optional(&self.pool)
        .await?;

        Ok(user)
    }

    /// Get user by email
    pub async fn get_user_by_email(&self, email: &str) -> Result<Option<User>> {
        let user = sqlx::query_as::<_, User>(
            "SELECT * FROM users WHERE email = $1 AND is_active = true"
        )
        .bind(email)
        .fetch_optional(&self.pool)
        .await?;

        Ok(user)
    }

    /// Get user by username
    pub async fn get_user_by_username(&self, username: &str) -> Result<Option<User>> {
        let user = sqlx::query_as::<_, User>(
            "SELECT * FROM users WHERE username = $1 AND is_active = true"
        )
        .bind(username)
        .fetch_optional(&self.pool)
        .await?;

        Ok(user)
    }

    /// Get user by Supabase user ID
    pub async fn get_user_by_supabase_id(&self, supabase_user_id: Uuid) -> Result<Option<User>> {
        let user = sqlx::query_as::<_, User>(
            "SELECT * FROM users WHERE supabase_user_id = $1 AND is_active = true"
        )
        .bind(supabase_user_id)
        .fetch_optional(&self.pool)
        .await?;

        Ok(user)
    }

    /// Update user information
    pub async fn update_user(&self, user_id: Uuid, request: UpdateUserRequest) -> Result<User> {
        let user = sqlx::query_as::<_, User>(
            r#"
            UPDATE users 
            SET username = COALESCE($2, username),
                full_name = COALESCE($3, full_name),
                avatar_url = COALESCE($4, avatar_url),
                metadata = COALESCE($5, metadata),
                updated_at = NOW()
            WHERE id = $1 AND is_active = true
            RETURNING *
            "#,
        )
        .bind(user_id)
        .bind(&request.username)
        .bind(&request.full_name)
        .bind(&request.avatar_url)
        .bind(&request.metadata)
        .fetch_one(&self.pool)
        .await?;

        Ok(user)
    }

    /// Deactivate user (soft delete)
    pub async fn deactivate_user(&self, user_id: Uuid) -> Result<()> {
        sqlx::query("UPDATE users SET is_active = false, updated_at = NOW() WHERE id = $1")
            .bind(user_id)
            .execute(&self.pool)
            .await?;

        Ok(())
    }

    /// Get user profile
    pub async fn get_user_profile(&self, user_id: Uuid) -> Result<Option<UserProfile>> {
        let profile = sqlx::query_as::<_, UserProfile>(
            "SELECT * FROM user_profiles WHERE user_id = $1"
        )
        .bind(user_id)
        .fetch_optional(&self.pool)
        .await?;

        Ok(profile)
    }

    /// Create or update user profile
    pub async fn upsert_user_profile(
        &self,
        user_id: Uuid,
        request: UpdateProfileRequest,
    ) -> Result<UserProfile> {
        let profile = sqlx::query_as::<_, UserProfile>(
            r#"
            INSERT INTO user_profiles (user_id, bio, website_url, location, birth_date, preferences)
            VALUES ($1, $2, $3, $4, $5, $6)
            ON CONFLICT (user_id) 
            DO UPDATE SET
                bio = COALESCE($2, user_profiles.bio),
                website_url = COALESCE($3, user_profiles.website_url),
                location = COALESCE($4, user_profiles.location),
                birth_date = COALESCE($5, user_profiles.birth_date),
                preferences = COALESCE($6, user_profiles.preferences),
                updated_at = NOW()
            RETURNING *
            "#,
        )
        .bind(user_id)
        .bind(&request.bio)
        .bind(&request.website_url)
        .bind(&request.location)
        .bind(&request.birth_date)
        .bind(&request.preferences)
        .fetch_one(&self.pool)
        .await?;

        Ok(profile)
    }

    /// Get user with profile
    pub async fn get_user_with_profile(&self, user_id: Uuid) -> Result<Option<UserWithProfile>> {
        let user = self.get_user_by_id(user_id).await?;
        
        if let Some(user) = user {
            let profile = self.get_user_profile(user_id).await?;
            Ok(Some(UserWithProfile { user, profile }))
        } else {
            Ok(None)
        }
    }

    /// Check if email exists
    pub async fn email_exists(&self, email: &str) -> Result<bool> {
        let count = sqlx::query_scalar::<_, i64>(
            "SELECT COUNT(*) FROM users WHERE email = $1"
        )
        .bind(email)
        .fetch_one(&self.pool)
        .await?;

        Ok(count > 0)
    }

    /// Check if username exists
    pub async fn username_exists(&self, username: &str) -> Result<bool> {
        let count = sqlx::query_scalar::<_, i64>(
            "SELECT COUNT(*) FROM users WHERE username = $1"
        )
        .bind(username)
        .fetch_one(&self.pool)
        .await?;

        Ok(count > 0)
    }

    /// Create user session
    pub async fn create_session(
        &self,
        user_id: Uuid,
        session_token: &str,
        expires_at: DateTime<Utc>,
        ip_address: Option<std::net::IpAddr>,
        user_agent: Option<&str>,
    ) -> Result<()> {
        let ip_str = ip_address.map(|ip| ip.to_string());
        
        sqlx::query(
            r#"
            INSERT INTO user_sessions (user_id, session_token, expires_at, ip_address, user_agent)
            VALUES ($1, $2, $3, $4::inet, $5)
            "#,
        )
        .bind(user_id)
        .bind(session_token)
        .bind(expires_at)
        .bind(ip_str)
        .bind(user_agent)
        .execute(&self.pool)
        .await?;

        Ok(())
    }

    /// Validate session token
    pub async fn validate_session(&self, session_token: &str) -> Result<Option<User>> {
        let user = sqlx::query_as::<_, User>(
            r#"
            SELECT u.* FROM users u
            INNER JOIN user_sessions s ON u.id = s.user_id
            WHERE s.session_token = $1 
                AND s.expires_at > NOW()
                AND u.is_active = true
            "#,
        )
        .bind(session_token)
        .fetch_optional(&self.pool)
        .await?;

        Ok(user)
    }

    /// Delete session
    pub async fn delete_session(&self, session_token: &str) -> Result<()> {
        sqlx::query("DELETE FROM user_sessions WHERE session_token = $1")
            .bind(session_token)
            .execute(&self.pool)
            .await?;

        Ok(())
    }

    /// Delete all user sessions
    pub async fn delete_all_user_sessions(&self, user_id: Uuid) -> Result<()> {
        sqlx::query("DELETE FROM user_sessions WHERE user_id = $1")
            .bind(user_id)
            .execute(&self.pool)
            .await?;

        Ok(())
    }

    /// Clean expired sessions
    pub async fn clean_expired_sessions(&self) -> Result<u64> {
        let result = sqlx::query("DELETE FROM user_sessions WHERE expires_at < NOW()")
            .execute(&self.pool)
            .await?;

        Ok(result.rows_affected())
    }

    /// Log audit event
    pub async fn log_audit_event(
        &self,
        user_id: Option<Uuid>,
        action: &str,
        resource_type: Option<&str>,
        resource_id: Option<Uuid>,
        old_values: Option<serde_json::Value>,
        new_values: Option<serde_json::Value>,
        ip_address: Option<std::net::IpAddr>,
        user_agent: Option<&str>,
    ) -> Result<()> {
        let ip_str = ip_address.map(|ip| ip.to_string());
        
        sqlx::query(
            r#"
            INSERT INTO audit_logs 
            (user_id, action, resource_type, resource_id, old_values, new_values, ip_address, user_agent)
            VALUES ($1, $2, $3, $4, $5, $6, $7::inet, $8)
            "#,
        )
        .bind(user_id)
        .bind(action)
        .bind(resource_type)
        .bind(resource_id)
        .bind(old_values)
        .bind(new_values)
        .bind(ip_str)
        .bind(user_agent)
        .execute(&self.pool)
        .await?;

        Ok(())
    }
} 