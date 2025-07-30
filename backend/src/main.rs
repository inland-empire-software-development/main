use axum::{
    response::Json,
    routing::{get, post},
    Router,
};
use serde_json::{json, Value};
use std::{net::SocketAddr, sync::Arc};
use tower::ServiceBuilder;
use tower_http::{
    cors::{Any, CorsLayer},
    trace::TraceLayer,
    compression::CompressionLayer,
};
use tracing::{info, Level};
use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;
use axum::http::{HeaderName, Method};

mod config;
mod handlers;
mod models;
mod services;
mod utils;

use config::AppConfig;
use handlers::{auth, health, users};
use services::{database::DatabaseService, supabase::SupabaseService};

/// Application state shared across handlers
#[derive(Clone)]
pub struct AppState {
    pub db: DatabaseService,
    pub supabase: SupabaseService,
    pub config: Arc<AppConfig>,
}

/// Main API documentation
#[derive(OpenApi)]
#[openapi(
    paths(
        health::health_check,
        auth::register,
        auth::login,
        auth::logout,
        auth::refresh_token,
        users::get_profile,
        users::update_profile,
    ),
    components(
        schemas(
            models::user::User,
            models::user::UserProfile,
            models::auth::LoginRequest,
            models::auth::RegisterRequest,
            models::auth::AuthResponse,
            utils::response::ErrorResponse,
        )
    ),
    tags(
        (name = "health", description = "Health check endpoints"),
        (name = "auth", description = "Authentication endpoints"),
        (name = "users", description = "User management endpoints"),
    ),
    info(
        title = "SolidJS Rust Backend API",
        version = "0.1.0",
        description = "A high-performance Rust backend API for SolidJS frontend with Supabase integration",
        contact(
            name = "API Support",
            email = "support@example.com"
        ),
        license(
            name = "MIT",
            url = "https://opensource.org/licenses/MIT"
        )
    ),
    servers(
        (url = "http://localhost:3000", description = "Local development server"),
        (url = "https://api.yourdomain.com", description = "Production server")
    )
)]
struct ApiDoc;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Load environment variables
    dotenv::dotenv().ok();

    // Initialize tracing
    tracing_subscriber::fmt()
        .with_target(false)
        .with_max_level(Level::DEBUG)
        .init();

    info!("Starting SolidJS Rust Backend API...");

    // Load configuration
    let config = Arc::new(AppConfig::from_env()?);
    info!("Configuration loaded successfully");

    // Initialize database service
    let db = DatabaseService::new(&config.database_url).await?;
    info!("Database connection established");

    // Initialize Supabase service
    let supabase = SupabaseService::new(
        &config.supabase_url,
        &config.supabase_service_role_key,
    )?;
    info!("Supabase service initialized");

    // Create application state
    let state = AppState {
        db,
        supabase,
        config: config.clone(),
    };

    // Configure CORS
    let cors = CorsLayer::new()
        .allow_origin("http://localhost:8080".parse::<axum::http::HeaderValue>().unwrap())
        .allow_methods([
            Method::GET,
            Method::POST, 
            Method::PUT,
            Method::DELETE,
            Method::OPTIONS,
        ])
        .allow_headers([
            HeaderName::from_static("content-type"),
            HeaderName::from_static("authorization"),
            HeaderName::from_static("accept"),
            HeaderName::from_static("origin"),
            HeaderName::from_static("user-agent"),
            HeaderName::from_static("x-requested-with"),
        ])
        .allow_credentials(true);

    // Build the application router
    let app = Router::new()
        // Health check endpoint
        .route("/health", get(health::health_check))
        .route("/", get(root_handler))
        
        // API v1 routes
        .nest("/api/v1", api_v1_routes())
        
        // Swagger UI
        .merge(SwaggerUi::new("/swagger-ui").url("/api-docs/openapi.json", ApiDoc::openapi()))
        
        // Add middleware
        .layer(
            ServiceBuilder::new()
                .layer(TraceLayer::new_for_http())
                .layer(CompressionLayer::new())
                .layer(cors)
        )
        .with_state(state);

    // Start server
    let addr = SocketAddr::from(([0, 0, 0, 0], config.port));
    info!("Server starting on {}", addr);
    
    let listener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app).await?;

    Ok(())
}

/// API v1 routes
fn api_v1_routes() -> Router<AppState> {
    Router::new()
        // Authentication routes
        .nest("/auth", auth_routes())
        // User routes
        .nest("/users", user_routes())
}

/// Authentication routes
fn auth_routes() -> Router<AppState> {
    Router::new()
        .route("/register", post(auth::register))
        .route("/login", post(auth::login))
        .route("/logout", post(auth::logout))
        .route("/refresh", post(auth::refresh_token))
        .route("/me", get(auth::get_current_user))
}

/// User routes
fn user_routes() -> Router<AppState> {
    Router::new()
        .route("/profile", get(users::get_profile))
        .route("/profile", post(users::update_profile))
        .route("/:id", get(users::get_user))
}

/// Root handler
async fn root_handler() -> Json<Value> {
    Json(json!({
        "name": "SolidJS Rust Backend API",
        "version": "0.1.0",
        "status": "running",
        "documentation": "/swagger-ui",
        "health": "/health"
    }))
} 