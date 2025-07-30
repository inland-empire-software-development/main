use anyhow::Result;
use serde::Deserialize;
use std::env;

/// Application configuration loaded from environment variables
#[derive(Debug, Clone, Deserialize)]
pub struct AppConfig {
    /// Database connection URL
    pub database_url: String,
    
    /// Supabase project URL
    pub supabase_url: String,
    
    /// Supabase service role key
    pub supabase_service_role_key: String,
    
    /// JWT secret for token signing
    pub jwt_secret: String,
    
    /// Server port
    pub port: u16,
    
    /// CORS allowed origins
    pub cors_origins: String,
    
    /// Redis URL for caching
    pub redis_url: Option<String>,
    
    /// Environment (development, staging, production)
    pub environment: String,
    
    /// Log level
    pub log_level: String,
}

impl AppConfig {
    /// Load configuration from environment variables
    pub fn from_env() -> Result<Self> {
        Ok(Self {
            database_url: env::var("DATABASE_URL")
                .map_err(|_| anyhow::anyhow!("DATABASE_URL must be set"))?,
            
            supabase_url: env::var("SUPABASE_URL")
                .map_err(|_| anyhow::anyhow!("SUPABASE_URL must be set"))?,
            
            supabase_service_role_key: env::var("SUPABASE_SERVICE_ROLE_KEY")
                .map_err(|_| anyhow::anyhow!("SUPABASE_SERVICE_ROLE_KEY must be set"))?,
            
            jwt_secret: env::var("JWT_SECRET")
                .map_err(|_| anyhow::anyhow!("JWT_SECRET must be set"))?,
            
            port: env::var("PORT")
                .unwrap_or_else(|_| "3000".to_string())
                .parse()
                .map_err(|_| anyhow::anyhow!("PORT must be a valid number"))?,
            
            cors_origins: env::var("CORS_ORIGINS")
                .unwrap_or_else(|_| "http://localhost:8080".to_string()),
            
            redis_url: env::var("REDIS_URL").ok(),
            
            environment: env::var("RUST_ENV")
                .unwrap_or_else(|_| "development".to_string()),
            
            log_level: env::var("RUST_LOG")
                .unwrap_or_else(|_| "info".to_string()),
        })
    }
    
    /// Check if running in development mode
    pub fn is_development(&self) -> bool {
        self.environment == "development"
    }
    
    /// Check if running in production mode
    pub fn is_production(&self) -> bool {
        self.environment == "production"
    }
    
    /// Get Redis URL or return default localhost URL
    pub fn redis_url(&self) -> &str {
        self.redis_url
            .as_ref()
            .map(|s| s.as_str())
            .unwrap_or("redis://localhost:6379")
    }
} 