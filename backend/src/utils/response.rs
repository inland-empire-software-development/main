use serde::{Deserialize, Serialize};
use utoipa::ToSchema;
use validator::ValidationErrors;

/// Standard API response wrapper
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ApiResponse<T> {
    pub success: bool,
    pub data: Option<T>,
    pub message: Option<String>,
    pub timestamp: String,
}

impl<T> ApiResponse<T> {
    /// Create a success response with data
    pub fn success(data: T) -> Self {
        Self {
            success: true,
            data: Some(data),
            message: None,
            timestamp: chrono::Utc::now().to_rfc3339(),
        }
    }

    /// Create a success response with data and message
    #[allow(dead_code)]
    pub fn success_with_message(data: T, message: impl Into<String>) -> Self {
        Self {
            success: true,
            data: Some(data),
            message: Some(message.into()),
            timestamp: chrono::Utc::now().to_rfc3339(),
        }
    }
}

/// Standard error response
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ErrorResponse {
    pub success: bool,
    pub error: ErrorDetails,
    pub timestamp: String,
}

/// Error details
#[derive(Debug, Serialize, Deserialize, ToSchema)]
pub struct ErrorDetails {
    pub code: String,
    pub message: String,
    pub details: Option<serde_json::Value>,
}

impl ErrorResponse {
    /// Create a new error response
    pub fn new(code: impl Into<String>, message: impl Into<String>) -> Self {
        Self {
            success: false,
            error: ErrorDetails {
                code: code.into(),
                message: message.into(),
                details: None,
            },
            timestamp: chrono::Utc::now().to_rfc3339(),
        }
    }

    /// Create an error response with details
    pub fn with_details(
        code: impl Into<String>,
        message: impl Into<String>,
        details: serde_json::Value,
    ) -> Self {
        Self {
            success: false,
            error: ErrorDetails {
                code: code.into(),
                message: message.into(),
                details: Some(details),
            },
            timestamp: chrono::Utc::now().to_rfc3339(),
        }
    }

    /// Create a validation error response
    pub fn validation_error(errors: ValidationErrors) -> Self {
        let details = serde_json::to_value(&errors).unwrap_or_default();
        Self::with_details(
            "VALIDATION_ERROR",
            "Input validation failed",
            details,
        )
    }

    /// Create an internal server error response
    pub fn internal_error() -> Self {
        Self::new("internal_error", "An internal server error occurred")
    }

    #[allow(dead_code)]
    pub fn not_found(resource: impl Into<String>) -> Self {
        Self::new(
            "not_found", 
            format!("{} not found", resource.into())
        )
    }

    #[allow(dead_code)]
    pub fn unauthorized() -> Self {
        Self::new("unauthorized", "Authentication required")
    }

    #[allow(dead_code)]
    pub fn forbidden() -> Self {
        Self::new("forbidden", "Access denied")
    }

    #[allow(dead_code)]
    pub fn bad_request(message: impl Into<String>) -> Self {
        Self::new("bad_request", message)
    }

    #[allow(dead_code)]
    pub fn conflict(message: impl Into<String>) -> Self {
        Self::new("conflict", message)
    }
}

#[allow(dead_code)]
pub type EmptyResponse = ApiResponse<()>;

#[allow(dead_code)]
impl EmptyResponse {
    /// Create an empty success response
    #[allow(dead_code)]
    pub fn ok() -> Self {
        ApiResponse::success(())
    }

    #[allow(dead_code)]
    pub fn ok_with_message(message: impl Into<String>) -> Self {
        ApiResponse::success_with_message((), message)
    }
} 