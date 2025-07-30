use axum::{extract::State, response::Json};
use serde_json::{json, Value};

use crate::AppState;

/// Health check endpoint
pub async fn health_check(State(state): State<AppState>) -> Json<Value> {
    // Check database connection
    let db_healthy = state.db.health_check().await.unwrap_or(false);
    
    let status = if db_healthy { "healthy" } else { "unhealthy" };
    let response = json!({
        "status": status,
        "timestamp": chrono::Utc::now().to_rfc3339(),
        "version": "0.1.0",
        "services": {
            "database": if db_healthy { "healthy" } else { "unhealthy" },
            "supabase": "healthy", // We could add actual Supabase health check here
        }
    });

    Json(response)
} 