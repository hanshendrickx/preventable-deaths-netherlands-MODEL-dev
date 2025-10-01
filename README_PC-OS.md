# Cross-Platform Development Setup (Windows PC & macOS)

## Prerequisites

### Both Platforms
- **VSCode**: Download from [code.visualstudio.com](https://code.visualstudio.com/)
- **Git**: [git-scm.com](https://git-scm.com/)

### Windows PC
- **Python**: Install from Microsoft Store or [python.org](https://python.org) (3.8-3.13)
- **Node.js**: Download LTS from [nodejs.org](https://nodejs.org)
- **Terminal**: Use PowerShell or Windows Terminal

### macOS
- **Python**: Use system Python or install via Homebrew: `brew install python`
- **Node.js**: Install via Homebrew: `brew install node` or download from [nodejs.org](https://nodejs.org)
- **Terminal**: Use built-in Terminal or iTerm2

## VSCode Extensions (Install These)

\`\`\`bash
# Essential extensions
code --install-extension ms-python.python
code --install-extension ms-python.black-formatter
code --install-extension charliermarsh.ruff
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ms-vscode.vscode-typescript-next
\`\`\`

## Quick Setup

### 1. Clone & Open Project
\`\`\`bash
git clone https://github.com/hanshendrickx/preventable-deaths-in-the-netherlands.git
cd preventable-deaths-in-the-netherlands
code .
\`\`\`

### 2. Python Environment (Both Platforms)
\`\`\`bash
# Install uv (modern Python package manager)
# Windows PowerShell:
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"

# macOS Terminal:
curl -LsSf https://astral.sh/uv/install.sh | sh

# Create virtual environment and install dependencies
uv venv
uv pip install pandas numpy matplotlib seaborn scikit-learn scipy pytest black ruff
\`\`\`

### 3. JavaScript Environment (Both Platforms)
\`\`\`bash
npm install
\`\`\`

## Development Workflow

### Python Analysis
\`\`\`bash
# Format code
uv run black scripts/
uv run ruff check scripts/ --fix

# Run analysis
uv run python scripts/data_analysis.py

# Run tests (if added)
uv run pytest
\`\`\`

### Web Application
\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build
\`\`\`

## VSCode Settings (Add to .vscode/settings.json)

\`\`\`json
{
  "python.defaultInterpreterPath": "./.venv/bin/python",
  "python.formatting.provider": "black",
  "python.linting.ruffEnabled": true,
  "python.linting.enabled": true,
  "[python]": {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.organizeImports": true
    }
  },
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true
  }
}
\`\`\`

## Platform-Specific Notes

### Windows
- Use PowerShell (not Command Prompt)
- Python virtual environment activation: `.venv\Scripts\activate`
- File paths use backslashes in terminal

### macOS
- Python virtual environment activation: `source .venv/bin/activate`
- May need to install Xcode Command Line Tools: `xcode-select --install`
- File paths use forward slashes

## Quick Commands (Use Makefile)

\`\`\`bash
# Format all code
make format

# Run linting
make lint

# Run Python analysis
make run-analysis

# Start web app
make dev

# Run all checks
make check
\`\`\`

## Troubleshooting

**Python not found**: Ensure Python is in PATH, restart terminal
**uv not found**: Restart terminal after installation
**npm errors**: Delete `node_modules/` and run `npm install` again
**VSCode extensions not working**: Reload window (Ctrl+Shift+P → "Reload Window")

---

**Ready to code!** Open VSCode, install extensions, run setup commands, and start developing your preventable deaths analysis project.
