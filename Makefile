.PHONY: help setup dev build test lint format clean docker-up docker-down
.DEFAULT_GOAL := help

# Colors for help
RED := \033[31m
GREEN := \033[32m
YELLOW := \033[33m
BLUE := \033[34m
MAGENTA := \033[35m
CYAN := \033[36m
WHITE := \033[37m
RESET := \033[0m

help: ## Show this help message
	@echo "$(CYAN)Available commands:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-20s$(RESET) %s\n", $$1, $$2}'

setup: ## Initial project setup
	@echo "$(YELLOW)Setting up project...$(RESET)"
	@cp env.example .env.local
	@echo "$(GREEN)✓ Environment file created$(RESET)"
	@echo "$(YELLOW)Installing frontend dependencies...$(RESET)"
	@cd frontend && npm install
	@echo "$(GREEN)✓ Frontend dependencies installed$(RESET)"
	@echo "$(YELLOW)Installing Rust dependencies...$(RESET)"
	@cd backend && cargo build
	@echo "$(GREEN)✓ Backend dependencies installed$(RESET)"
	@echo "$(BLUE)Setup complete! Edit .env.local with your Supabase credentials$(RESET)"

dev: ## Start development environment
	@echo "$(YELLOW)Starting development environment...$(RESET)"
	@docker-compose -f docker/docker-compose.dev.yml up -d postgres redis
	@echo "$(GREEN)✓ Database and Redis started$(RESET)"
	@echo "$(YELLOW)Starting backend...$(RESET)"
	@cd backend && cargo run &
	@echo "$(YELLOW)Starting frontend...$(RESET)"
	@cd frontend && npm run dev &
	@echo "$(GREEN)✓ Development servers started$(RESET)"
	@echo "$(BLUE)Frontend: http://localhost:8080$(RESET)"
	@echo "$(BLUE)Backend API: http://localhost:3000$(RESET)"
	@echo "$(BLUE)API Docs: http://localhost:3000/swagger-ui$(RESET)"

build: ## Build for production
	@echo "$(YELLOW)Building for production...$(RESET)"
	@cd frontend && npm run build
	@cd backend && cargo build --release
	@echo "$(GREEN)✓ Production build complete$(RESET)"

test: ## Run all tests
	@echo "$(YELLOW)Running tests...$(RESET)"
	@$(MAKE) test-frontend
	@$(MAKE) test-backend
	@echo "$(GREEN)✓ All tests completed$(RESET)"

test-frontend: ## Run frontend tests
	@echo "$(YELLOW)Running frontend tests...$(RESET)"
	@cd frontend && npm test
	@echo "$(GREEN)✓ Frontend tests completed$(RESET)"

test-backend: ## Run backend tests
	@echo "$(YELLOW)Running backend tests...$(RESET)"
	@cd backend && cargo test
	@echo "$(GREEN)✓ Backend tests completed$(RESET)"

lint: ## Run linters
	@echo "$(YELLOW)Running linters...$(RESET)"
	@cd frontend && npm run lint
	@cd backend && cargo clippy -- -D warnings
	@echo "$(GREEN)✓ Linting completed$(RESET)"

format: ## Format code
	@echo "$(YELLOW)Formatting code...$(RESET)"
	@cd frontend && npm run format
	@cd backend && cargo fmt
	@echo "$(GREEN)✓ Code formatted$(RESET)"

clean: ## Clean build artifacts
	@echo "$(YELLOW)Cleaning build artifacts...$(RESET)"
	@cd frontend && rm -rf dist
	@cd backend && cargo clean
	@echo "$(GREEN)✓ Clean completed$(RESET)"

docker-up: ## Start Docker services
	@echo "$(YELLOW)Starting Docker services...$(RESET)"
	@docker-compose -f docker/docker-compose.dev.yml up -d
	@echo "$(GREEN)✓ Docker services started$(RESET)"

docker-down: ## Stop Docker services
	@echo "$(YELLOW)Stopping Docker services...$(RESET)"
	@docker-compose -f docker/docker-compose.dev.yml down
	@echo "$(GREEN)✓ Docker services stopped$(RESET)"

docker-build: ## Build Docker images
	@echo "$(YELLOW)Building Docker images...$(RESET)"
	@docker-compose -f docker/docker-compose.dev.yml build
	@echo "$(GREEN)✓ Docker images built$(RESET)"

deploy-staging: ## Deploy to staging
	@echo "$(YELLOW)Deploying to staging...$(RESET)"
	@docker-compose -f docker/docker-compose.staging.yml up -d --build
	@echo "$(GREEN)✓ Staging deployment completed$(RESET)"

deploy-prod: ## Deploy to production
	@echo "$(YELLOW)Deploying to production...$(RESET)"
	@docker-compose -f docker/docker-compose.prod.yml up -d --build
	@echo "$(GREEN)✓ Production deployment completed$(RESET)"

logs: ## View application logs
	@docker-compose -f docker/docker-compose.dev.yml logs -f

logs-backend: ## View backend logs
	@docker-compose -f docker/docker-compose.dev.yml logs -f backend

logs-frontend: ## View frontend logs
	@docker-compose -f docker/docker-compose.dev.yml logs -f frontend

db-migrate: ## Run database migrations
	@echo "$(YELLOW)Running database migrations...$(RESET)"
	@cd backend && sqlx migrate run
	@echo "$(GREEN)✓ Database migrations completed$(RESET)"

db-reset: ## Reset database
	@echo "$(YELLOW)Resetting database...$(RESET)"
	@cd backend && sqlx database drop -y && sqlx database create && sqlx migrate run
	@echo "$(GREEN)✓ Database reset completed$(RESET)"

install-deps: ## Install all dependencies
	@echo "$(YELLOW)Installing dependencies...$(RESET)"
	@cd frontend && npm install
	@echo "$(GREEN)✓ Frontend dependencies installed$(RESET)"
	@echo "$(YELLOW)Installing Rust dependencies...$(RESET)"
	@cd backend && cargo build
	@echo "$(GREEN)✓ Backend dependencies installed$(RESET)"

check: ## Check code health
	@echo "$(YELLOW)Checking code health...$(RESET)"
	@$(MAKE) lint
	@$(MAKE) test
	@echo "$(GREEN)✓ Code health check completed$(RESET)" 