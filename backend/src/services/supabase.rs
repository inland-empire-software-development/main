use anyhow::Result;
use reqwest::Client;
use serde::{Deserialize, Serialize};
use serde_json::json;
use uuid::Uuid;

use crate::models::auth::TokenClaims;

/// Supabase service for authentication and real-time features
#[derive(Clone)]
pub struct SupabaseService {
    client: Client,
    base_url: String,
    service_role_key: String,
}

/// Supabase user response
#[derive(Debug, Serialize, Deserialize)]
pub struct SupabaseUser {
    pub id: Uuid,
    pub email: String,
    pub email_confirmed_at: Option<String>,
    pub phone: Option<String>,
    pub created_at: String,
    pub updated_at: String,
    pub user_metadata: serde_json::Value,
    pub app_metadata: serde_json::Value,
}

/// Supabase authentication response
#[derive(Debug, Serialize, Deserialize)]
pub struct SupabaseAuthResponse {
    pub user: SupabaseUser,
    pub session: Option<SupabaseSession>,
}

/// Supabase session
#[derive(Debug, Serialize, Deserialize)]
pub struct SupabaseSession {
    pub access_token: String,
    pub refresh_token: String,
    pub expires_in: i64,
    pub expires_at: i64,
    pub token_type: String,
}

/// Supabase sign up request
#[derive(Debug, Serialize)]
pub struct SupabaseSignUpRequest {
    pub email: String,
    pub password: String,
    pub data: Option<serde_json::Value>,
}

/// Supabase sign in request
#[derive(Debug, Serialize)]
pub struct SupabaseSignInRequest {
    pub email: String,
    pub password: String,
}

/// Supabase token refresh request
#[derive(Debug, Serialize)]
pub struct SupabaseRefreshTokenRequest {
    pub refresh_token: String,
}

/// Supabase password reset request
#[derive(Debug, Serialize)]
pub struct SupabasePasswordResetRequest {
    pub email: String,
}

impl SupabaseService {
    /// Create a new Supabase service
    pub fn new(base_url: &str, service_role_key: &str) -> Result<Self> {
        let client = Client::new();
        
        Ok(Self {
            client,
            base_url: base_url.to_string(),
            service_role_key: service_role_key.to_string(),
        })
    }

    /// Sign up a new user with Supabase
    pub async fn sign_up(
        &self,
        email: &str,
        password: &str,
        metadata: Option<serde_json::Value>,
    ) -> Result<SupabaseAuthResponse> {
        let request = SupabaseSignUpRequest {
            email: email.to_string(),
            password: password.to_string(),
            data: metadata,
        };

        let response = self
            .client
            .post(&format!("{}/auth/v1/signup", self.base_url))
            .header("apikey", &self.service_role_key)
            .header("Authorization", format!("Bearer {}", self.service_role_key))
            .header("Content-Type", "application/json")
            .json(&request)
            .send()
            .await?;

        if response.status().is_success() {
            let auth_response: SupabaseAuthResponse = response.json().await?;
            Ok(auth_response)
        } else {
            let error_text = response.text().await?;
            Err(anyhow::anyhow!("Supabase sign up failed: {}", error_text))
        }
    }

    /// Sign in a user with Supabase
    pub async fn sign_in(&self, email: &str, password: &str) -> Result<SupabaseAuthResponse> {
        let request = SupabaseSignInRequest {
            email: email.to_string(),
            password: password.to_string(),
        };

        let response = self
            .client
            .post(&format!("{}/auth/v1/token?grant_type=password", self.base_url))
            .header("apikey", &self.service_role_key)
            .header("Authorization", format!("Bearer {}", self.service_role_key))
            .header("Content-Type", "application/json")
            .json(&request)
            .send()
            .await?;

        if response.status().is_success() {
            let auth_response: SupabaseAuthResponse = response.json().await?;
            Ok(auth_response)
        } else {
            let error_text = response.text().await?;
            if error_text.contains("Invalid login credentials") {
                Err(anyhow::anyhow!("Invalid credentials"))
            } else {
                Err(anyhow::anyhow!("Supabase sign in failed: {}", error_text))
            }
        }
    }

    /// Refresh token with Supabase
    pub async fn refresh_token(&self, refresh_token: &str) -> Result<SupabaseAuthResponse> {
        let request = SupabaseRefreshTokenRequest {
            refresh_token: refresh_token.to_string(),
        };

        let response = self
            .client
            .post(&format!("{}/auth/v1/token?grant_type=refresh_token", self.base_url))
            .header("apikey", &self.service_role_key)
            .header("Authorization", format!("Bearer {}", self.service_role_key))
            .header("Content-Type", "application/json")
            .json(&request)
            .send()
            .await?;

        if response.status().is_success() {
            let auth_response: SupabaseAuthResponse = response.json().await?;
            Ok(auth_response)
        } else {
            let error_text = response.text().await?;
            Err(anyhow::anyhow!("Token refresh failed: {}", error_text))
        }
    }

    /// Get user by access token
    pub async fn get_user(&self, access_token: &str) -> Result<SupabaseUser> {
        let response = self
            .client
            .get(&format!("{}/auth/v1/user", self.base_url))
            .header("apikey", &self.service_role_key)
            .header("Authorization", format!("Bearer {}", access_token))
            .send()
            .await?;

        if response.status().is_success() {
            let user: SupabaseUser = response.json().await?;
            Ok(user)
        } else {
            let error_text = response.text().await?;
            Err(anyhow::anyhow!("Get user failed: {}", error_text))
        }
    }

    /// Sign out user
    pub async fn sign_out(&self, access_token: &str) -> Result<()> {
        let response = self
            .client
            .post(&format!("{}/auth/v1/logout", self.base_url))
            .header("apikey", &self.service_role_key)
            .header("Authorization", format!("Bearer {}", access_token))
            .send()
            .await?;

        if response.status().is_success() {
            Ok(())
        } else {
            let error_text = response.text().await?;
            Err(anyhow::anyhow!("Sign out failed: {}", error_text))
        }
    }

    /// Send password reset email
    pub async fn send_password_reset_email(&self, email: &str) -> Result<()> {
        let request = SupabasePasswordResetRequest {
            email: email.to_string(),
        };

        let response = self
            .client
            .post(&format!("{}/auth/v1/recover", self.base_url))
            .header("apikey", &self.service_role_key)
            .header("Authorization", format!("Bearer {}", self.service_role_key))
            .header("Content-Type", "application/json")
            .json(&request)
            .send()
            .await?;

        if response.status().is_success() {
            Ok(())
        } else {
            let error_text = response.text().await?;
            Err(anyhow::anyhow!("Password reset failed: {}", error_text))
        }
    }

    /// Update user metadata
    pub async fn update_user_metadata(
        &self,
        access_token: &str,
        metadata: serde_json::Value,
    ) -> Result<SupabaseUser> {
        let request = json!({
            "data": metadata
        });

        let response = self
            .client
            .put(&format!("{}/auth/v1/user", self.base_url))
            .header("apikey", &self.service_role_key)
            .header("Authorization", format!("Bearer {}", access_token))
            .header("Content-Type", "application/json")
            .json(&request)
            .send()
            .await?;

        if response.status().is_success() {
            let user: SupabaseUser = response.json().await?;
            Ok(user)
        } else {
            let error_text = response.text().await?;
            Err(anyhow::anyhow!("Update user metadata failed: {}", error_text))
        }
    }

    /// Verify JWT token
    pub async fn verify_token(&self, token: &str) -> Result<TokenClaims> {
        // This is a simplified version. In production, you'd want to verify
        // the JWT signature using Supabase's public key
        use jsonwebtoken::{decode, DecodingKey, Validation, Algorithm};
        
        // For now, we'll use a simple validation
        // In production, fetch the public key from Supabase
        let mut validation = Validation::new(Algorithm::HS256);
        validation.validate_exp = true;
        
        // This is a placeholder - you should use Supabase's actual public key
        let decoding_key = DecodingKey::from_secret(self.service_role_key.as_ref());
        
        match decode::<TokenClaims>(token, &decoding_key, &validation) {
            Ok(token_data) => Ok(token_data.claims),
            Err(_) => Err(anyhow::anyhow!("Invalid token")),
        }
    }

    /// Check if user exists by email
    pub async fn user_exists(&self, email: &str) -> Result<bool> {
        // Query Supabase to check if user exists
        // This would typically use the Supabase Admin API
        let response = self
            .client
            .get(&format!("{}/auth/v1/admin/users", self.base_url))
            .header("apikey", &self.service_role_key)
            .header("Authorization", format!("Bearer {}", self.service_role_key))
            .query(&[("email", email)])
            .send()
            .await?;

        if response.status().is_success() {
            let users: serde_json::Value = response.json().await?;
            Ok(users.get("users").and_then(|u| u.as_array()).map_or(false, |arr| !arr.is_empty()))
        } else {
            Ok(false)
        }
    }

    /// Delete user
    pub async fn delete_user(&self, user_id: Uuid) -> Result<()> {
        let response = self
            .client
            .delete(&format!("{}/auth/v1/admin/users/{}", self.base_url, user_id))
            .header("apikey", &self.service_role_key)
            .header("Authorization", format!("Bearer {}", self.service_role_key))
            .send()
            .await?;

        if response.status().is_success() {
            Ok(())
        } else {
            let error_text = response.text().await?;
            Err(anyhow::anyhow!("Delete user failed: {}", error_text))
        }
    }
} 