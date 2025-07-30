# SolidJS + Rust Full-Stack Application

A modern, fast web application built with SolidJS frontend and Rust backend, designed for scalability and developer experience. **Currently working and ready for development!** 🎉

## 🚀 Technology Stack

### Frontend
- **SolidJS** - Chosen over React/Next.js for superior performance with fine-grained reactivity and smaller bundle sizes
- **UIKit** - Lightweight, modular CSS framework for rapid UI development
- **SCSS** - CSS preprocessor for better styling organization and maintainability
- **Vite** - Fast build tool with hot module replacement
- **Supabase JS** - Client library for authentication and real-time features

### Backend
- **Rust** - Memory-safe, fast systems language ideal for high-performance APIs
- **Axum** - Modern, ergonomic web framework built on top of Tokio
- **SQLx** - Async SQL toolkit with compile-time checked queries
- **Utoipa** - Auto-generating OpenAPI documentation from Rust code
- **Supabase** - PostgreSQL database with built-in auth, real-time, and storage

### DevOps & Development
- **Docker** - Containerization for consistent development and deployment
- **Docker Compose** - Multi-container development environment
- **Cargo** - Rust package manager and build system
- **ESLint + Prettier** - Code formatting and linting for frontend
- **Clippy** - Rust linter for catching common mistakes
- **Vitest** - Fast unit testing framework for SolidJS

## 📁 Project Structure

```
├── frontend/              # SolidJS application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # SolidJS contexts (Auth, Supabase)
│   │   └── styles/        # SCSS stylesheets
│   ├── public/            # Static assets
│   ├── vite.config.ts     # Vite configuration
│   └── package.json       # Node dependencies
│
├── backend/               # Rust API server
│   ├── src/
│   │   ├── handlers/      # Route handlers
│   │   ├── models/        # Data models
│   │   ├── services/      # Business logic (Database, Supabase)
│   │   └── utils/         # Utility functions
│   ├── migrations/        # Database migrations
│   ├── Cargo.toml         # Rust dependencies
│   └── Dockerfile         # Backend container
│
├── docker/                # Docker configurations
│   ├── docker-compose.dev.yml
│   ├── docker-compose.staging.yml
│   ├── docker-compose.prod.yml
│   └── init.sql           # Database initialization
│
├── .env.example           # Environment template
├── .env                   # Environment variables (auto-created)
└── Makefile              # Development automation
```

## 🏃‍♂️ Quick Start

### Prerequisites
- [Rust](https://rustup.rs/) (latest stable)
- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://docker.com/) & Docker Compose (optional)
- A [Supabase](https://supabase.com/) project

### 🔧 Setup Instructions

1. **Clone and setup environment:**
   ```bash
   git clone <your-repository-url>
   cd <project-name>
   cp env.example .env
   ```

2. **Configure Supabase credentials in `.env`:**
   ```bash
   # Get these from: https://supabase.com/dashboard/projects → Your Project → Settings → API
   SUPABASE_URL=https://your-project-ref.supabase.co
   SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   
   # Get from: Settings → Database → Connection string
   DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.your-project-ref.supabase.co:5432/postgres
   
   # Generate with: openssl rand -hex 32
   JWT_SECRET=your-jwt-secret-here
   ```

3. **Install dependencies:**
   ```bash
   # Frontend dependencies
   cd frontend && npm install && cd ..
   
   # Backend dependencies (will install automatically on first run)
   ```

4. **Start development servers:**
   
   **Option A: Manual start (Recommended for development)**
   ```bash
   # Terminal 1: Start backend
   cd backend && cargo run
   
   # Terminal 2: Start frontend  
   cd frontend && npm run dev
   ```
   
   **Option B: Using Docker**
   ```bash
   docker-compose -f docker/docker-compose.dev.yml up
   ```

5. **Access the application:**
   - **Frontend**: http://localhost:8080
   - **Backend API**: http://localhost:3000
   - **API Documentation**: http://localhost:3000/swagger-ui
   - **Health Check**: http://localhost:3000/health

## 🌐 Current Status

### ✅ What's Working
- **🦀 Rust Backend** - Fully functional with Supabase integration
- **⚛️ SolidJS Frontend** - Development server running with Vite
- **🗄️ Database** - Connected to Supabase PostgreSQL
- **📚 API Documentation** - Auto-generated with Swagger UI
- **🔧 Development Environment** - Hot reload for both services
- **🐳 Docker Setup** - Complete containerization ready

### 🚧 TODO Items
- **Authentication Implementation** - JWT middleware and protected routes
- **Frontend Auth Integration** - Connect SolidJS auth context to backend
- **User Profile Management** - Complete CRUD operations
- **Real-time Features** - Implement Supabase real-time subscriptions
- **Testing** - Add comprehensive test suites
- **CI/CD Pipeline** - GitHub Actions automation

## 🔧 Development Commands

```bash
# Frontend commands
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run tests
npm run lint         # Run ESLint
npm run format       # Format with Prettier

# Backend commands  
cd backend
cargo run            # Start development server
cargo build --release  # Build for production
cargo test           # Run tests
cargo clippy         # Run linter
cargo fmt            # Format code

# Docker commands
docker-compose -f docker/docker-compose.dev.yml up -d     # Start all services
docker-compose -f docker/docker-compose.dev.yml down     # Stop all services
docker-compose -f docker/docker-compose.dev.yml logs -f  # View logs
```

## 📋 API Endpoints

The backend provides a RESTful API with the following endpoints:

- **GET /health** - Health check
- **GET /** - API information
- **GET /swagger-ui** - Interactive API documentation

### Authentication (TODO)
- **POST /api/v1/auth/register** - User registration
- **POST /api/v1/auth/login** - User login
- **POST /api/v1/auth/logout** - User logout
- **POST /api/v1/auth/refresh** - Refresh token
- **GET /api/v1/auth/me** - Get current user

### Users (TODO)
- **GET /api/v1/users/profile** - Get user profile
- **POST /api/v1/users/profile** - Update user profile
- **GET /api/v1/users/{id}** - Get public user info

## 🚀 Deployment

### Development
Already running locally with the setup above.

### Staging
```bash
docker-compose -f docker/docker-compose.staging.yml up -d --build
```

### Production
```bash
docker-compose -f docker/docker-compose.prod.yml up -d --build
```

## 🏗️ Architecture Decisions

### Why SolidJS over React/Next.js?
- **Performance**: Fine-grained reactivity with no virtual DOM overhead
- **Bundle Size**: Significantly smaller production bundles (~6KB vs ~42KB gzipped)
- **Developer Experience**: Similar to React but with better performance characteristics
- **Future-proof**: Modern reactive patterns without legacy baggage

### Why Rust for Backend?
- **Performance**: Memory safety without garbage collection overhead
- **Reliability**: Compile-time guarantees prevent many runtime errors
- **Ecosystem**: Growing ecosystem with excellent async support (Tokio)
- **Self-documenting**: Utoipa generates API docs directly from Rust code

### Why Vite over Webpack?
- **Speed**: Fast builds and hot module replacement
- **Simplicity**: Minimal configuration required
- **SolidJS Integration**: First-class support for SolidJS

### Why UIKit over Tailwind/Bootstrap?
- **Lightweight**: Minimal CSS footprint (~30KB minified)
- **Modular**: Use only what you need
- **SCSS Compatible**: Works well with our SCSS setup
- **Customizable**: Easy to theme and extend

### Why Supabase over Self-hosted PostgreSQL?
- **Simplicity**: Managed database with built-in authentication
- **Features**: Real-time subscriptions, file storage, edge functions
- **Scalability**: Automatic scaling and backups
- **Developer Experience**: Excellent tooling and dashboard

## 🔐 Security Considerations

- **Row Level Security (RLS)** enabled on Supabase tables
- **JWT token validation** on backend routes (TODO)
- **CORS properly configured** for cross-origin requests
- **Environment variables** for sensitive data
- **Docker security** best practices in multi-stage builds

## 📈 Performance Features

- **Code splitting** with dynamic imports
- **Lazy loading** of routes and components
- **Optimized Docker images** with multi-stage builds
- **Rust async runtime** for high concurrency
- **SolidJS fine-grained reactivity** for minimal re-renders
- **Vite's fast HMR** for instant development feedback

## 🧪 Testing

```bash
# Frontend tests
cd frontend && npm test

# Backend tests
cd backend && cargo test

# All tests with Docker
docker-compose -f docker/docker-compose.dev.yml exec frontend npm test
docker-compose -f docker/docker-compose.dev.yml exec backend cargo test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow Rust conventions (`cargo fmt`, `cargo clippy`)
- Use TypeScript for all frontend code
- Write tests for new features
- Update documentation for API changes
- Use conventional commit messages

## 🐛 Known Issues

- **Authentication middleware** not yet implemented
- **Frontend auth context** needs backend integration
- **Some API endpoints** return "not implemented" (TODO items)

## 📄 License

MIT License - see LICENSE file for details

---

## 🎉 Ready for Development!

This project is **fully functional** and ready for feature development. The backend is connected to Supabase, the frontend is running with SolidJS, and all development tools are configured.

**Next steps:**
1. Implement authentication middleware in Rust backend
2. Connect frontend auth context to backend API
3. Build your application features on this solid foundation!

Happy coding! 🚀 