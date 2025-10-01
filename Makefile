# Makefile for Preventable Deaths Netherlands Analysis
# Dr. Hans Hendrickx - Building on 1981 hospital risk management research

.PHONY: help install install-dev format lint test clean run-analysis

help:  ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

install:  ## Install Python dependencies with uv
	uv sync

install-dev:  ## Install development dependencies
	uv sync --extra dev

format:  ## Format Python code with black
	uv run black scripts/
	uv run ruff check --fix scripts/

lint:  ## Lint Python code with ruff
	uv run ruff check scripts/
	uv run black --check scripts/

test:  ## Run Python tests
	uv run pytest

clean:  ## Clean up generated files
	rm -rf __pycache__/
	rm -rf .pytest_cache/
	rm -rf htmlcov/
	rm -rf .coverage
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete

run-analysis:  ## Run the main data analysis
	uv run python scripts/data_analysis.py

# Web application commands
web-install:  ## Install Node.js dependencies
	npm install

web-dev:  ## Start development server
	npm run dev

web-build:  ## Build for production
	npm run build

web-lint:  ## Lint TypeScript/JavaScript
	npm run lint

# Combined commands
setup:  ## Full project setup (Python + Node.js)
	make install-dev
	make web-install

dev:  ## Start both Python analysis and web dev server
	make run-analysis &
	make web-dev

all-lint:  ## Lint both Python and JavaScript/TypeScript
	make lint
	make web-lint
