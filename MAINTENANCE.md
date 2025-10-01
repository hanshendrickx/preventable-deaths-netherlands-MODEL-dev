# Maintenance Guide
## Preventable Deaths in the Netherlands Analysis

*Building on Dr. Hans Hendrickx's pioneering 1981 research in hospital risk management*

## Development Tools Setup

### Python Development (uv + black + ruff)

**Initial Setup:**
\`\`\`bash
# Install uv (modern Python package manager)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install all dependencies
make install-dev
\`\`\`

**Daily Development:**
\`\`\`bash
# Format code
make format

# Lint code
make lint

# Run analysis
make run-analysis

# Run tests
make test
\`\`\`

### JavaScript/TypeScript Development

**Node.js Version Management:**
- **Minimum**: Node.js 18.17.0, npm 9.0.0
- **Recommended**: Node.js 20+ LTS
- Use `.nvmrc` file for version consistency

**Daily Development:**
\`\`\`bash
# Install dependencies
npm install

# Development server
npm run dev

# Lint and format
npm run lint
npm run format
\`\`\`

## Code Quality Standards

### Python Standards
- **Formatter**: Black (88 character line length)
- **Linter**: Ruff (fast Python linter)
- **Testing**: pytest with coverage
- **Python Versions**: 3.8+ (including 3.13)

### JavaScript/TypeScript Standards
- **Framework**: Next.js 14+ with App Router
- **TypeScript**: Strict mode enabled
- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier

## Version Management Strategy

### Python Dependencies
\`\`\`bash
# Update dependencies
uv lock --upgrade

# Add new dependency
uv add package-name

# Add dev dependency
uv add --dev package-name
\`\`\`

### Node.js Dependencies
\`\`\`bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Update major versions carefully
npm install package@latest
\`\`\`

## Future Maintenance Priorities

### 1. Data Updates (Quarterly)
- Update CBS mortality statistics
- Refresh international comparisons
- Validate preventability classifications

### 2. Code Maintenance (Monthly)
- Update dependencies
- Run security audits
- Performance optimization

### 3. Research Integration (Ongoing)
- Incorporate new WHO/OECD guidelines
- Add emerging preventable death categories
- Expand international comparisons

### 4. Technical Debt (As Needed)
- Migrate to newer Next.js versions
- Update Python analysis algorithms
- Optimize visualization performance

## Deployment Strategy

### Development
\`\`\`bash
# Local development
make dev
\`\`\`

### Production
\`\`\`bash
# Build and deploy
npm run build
vercel deploy
\`\`\`

### Python Analysis Updates
\`\`\`bash
# Update analysis and regenerate data
make run-analysis
git add scripts/
git commit -m "Update mortality analysis data"
\`\`\`

## Monitoring & Alerts

### Key Metrics to Monitor
- Application performance (Core Web Vitals)
- Data freshness (last analysis run)
- Dependency vulnerabilities
- User engagement with analysis sections

### Automated Checks
- GitHub Actions for CI/CD
- Dependabot for security updates
- Lighthouse CI for performance
- pytest for data validation

## Historical Context Preservation

This project builds upon Dr. Hans Hendrickx's groundbreaking 1981 work "Ongevallen in Ziekenhuizen" published in Medisch Contact. The maintenance strategy ensures:

1. **Academic Integrity**: All analysis methods reference original 1981 methodology
2. **Data Provenance**: Clear attribution to historical risk management principles
3. **Ethical Framework**: Maintains focus on "Passende Zorg" philosophy
4. **Research Continuity**: Bridges 1981 hospital safety research with modern mortality analysis

## Support & Documentation

- **Technical Issues**: GitHub Issues
- **Research Questions**: Reference Figshare repository
- **Historical Context**: 1981 Medisch Contact publication
- **Modern Framework**: WHO/OECD preventable mortality guidelines

*"From hospital accidents in 1981 to preventable deaths in 2024 - continuing the mission of evidence-based healthcare improvement."*
