# Preventable Deaths in the Netherlands

**A comprehensive data science review of preventable mortality in the Netherlands, examining individual versus state responsibility in healthcare ethics**

## Overview

This project provides a systematic analysis of preventable deaths in the Netherlands, distinguishing between individual responsibility (lifestyle choices) and state responsibility (healthcare system failures, infrastructure, policy decisions). The analysis particularly focuses on the ethical implications of "Passende Zorg" (Appropriate Care) policies and their impact on preventable mortality.

## Key Findings

- **Total Preventable Deaths**: 8,134 annually in the Netherlands
- **Individual Responsibility**: 4,820 deaths (59.3%) - primarily lifestyle-related
- **State Responsibility**: 3,314 deaths (40.7%) - including 1,000 from healthcare rationing
- **Passende Zorg Impact**: An estimated 1,000 additional preventable deaths from ER delays and diagnostic rationing

## Features

### 1. Comprehensive Definitions & Ontology
- WHO/OECD-based definitions of preventable vs treatable mortality
- Systematic classification framework for different types of preventable deaths
- Clear distinction between individual choices and state obligations

### 2. Statistical Analysis
- Age and gender-stratified mortality data
- Domain comparison across 6 major categories
- Prevention potential calculations with confidence intervals
- Interactive data visualizations

### 3. Ethical Framework Analysis
- Individual vs State responsibility categorization
- Legal framework analysis (EVRM, Oviedo Convention)
- Historical parallel to 1941-1942 physician resistance against German DAK
- Moral implications of healthcare rationing policies

### 4. Data Science Tools
- Interactive dashboard with multiple visualization types
- Downloadable CSV datasets for further analysis
- Python scripts for statistical analysis
- Correlation and regression modeling

## Technology Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Charts**: Recharts for data visualization
- **Data Analysis**: Python with pandas, numpy, matplotlib
- **Deployment**: Vercel-ready configuration

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/hanshendrickx/preventable-deaths-in-the-netherlands.git
cd preventable-deaths-in-the-netherlands
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Running Data Analysis Scripts

Execute the Python analysis script:
\`\`\`bash
python scripts/data_analysis.py
\`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main application page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── definitions-section.tsx
│   ├── ontology-section.tsx
│   ├── statistics-section.tsx
│   ├── circular-domains-analysis.tsx
│   ├── individual-vs-state-analysis.tsx
│   ├── data-analysis-section.tsx
│   ├── review-section.tsx
│   └── campaign-section.tsx
├── scripts/               # Data analysis scripts
│   └── data_analysis.py   # Python statistical analysis
└── README.md             # This file
\`\`\`

## Data Sources

- **RIVM** (National Institute for Public Health and the Environment)
- **CBS** (Statistics Netherlands)
- **OECD Health Statistics**
- **WHO Global Health Observatory**
- **European Centre for Disease Prevention and Control**

## Key Insights

### Domain Analysis
1. **Lifestyle Factors** (Alcohol + Smoking): 4,820 deaths - highest absolute impact
2. **Traffic Accidents**: 684 deaths - highest preventability rate (95%)
3. **Healthcare System**: 850 + 1,000 (Passende Zorg) deaths - state responsibility
4. **Environmental**: 400 deaths - regulatory responsibility
5. **Infectious Diseases**: 380 deaths - public health system responsibility

### Ethical Implications
- **State-Induced Mortality**: "Passende Zorg" principle of "must be payable" creates deliberate healthcare rationing
- **Legal Violations**: Potential violations of EVRM Article 2 (Right to Life) and Oviedo Convention Article 3
- **Medical Ethics**: Conflict between state cost-containment and physician duty to "first, do no harm"
- **Historical Parallel**: Similar to 1941-1942 physician resistance against state interference in medical practice

## Historical Context

This analysis builds upon the pioneering work in hospital risk management published in **Medisch Contact, October 23, 1981**: "Ongevallen in Ziekenhuizen" (Hospital Accidents), which established the foundation for systematic analysis of preventable deaths in Dutch healthcare settings.

## Research Applications

This dataset and analysis framework can be used for:
- Healthcare policy research
- Medical ethics studies
- Public health intervention planning
- Comparative international mortality studies
- Healthcare economics research
- Legal analysis of state healthcare obligations

## Contributing

Researchers are encouraged to use this data and methodology for further analysis. Please cite this work and contribute improvements via pull requests.

## License

MIT License

Copyright (c) 2025 Dr. Hans Hendrickx (MD PhD) & v0 by Vercel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Citation

If you use this work in your research, please cite:

\`\`\`
Hendrickx, H. & v0 by Vercel (2025). Preventable Deaths in the Netherlands: 
Individual vs State Responsibility in Healthcare Ethics. 
Available at: https://github.com/hanshendrickx/preventable-deaths-in-the-netherlands
\`\`\`

## References

- Hendrickx, H. (1981). "Ongevallen in Ziekenhuizen." *Medisch Contact*, October 23, 1981.
- Hendrickx, H. Figshare Repository: [hanshendrickx](https://figshare.com/authors/hanshendrickx)
- WHO Global Health Observatory. Avoidable Mortality Statistics.
- OECD Health Statistics 2024.
- RIVM. Preventable Mortality in the Netherlands 2023.

## Contact

For questions about this research or collaboration opportunities, please refer to the Figshare repository or contact through academic channels.

---

*This project represents a data-driven approach to understanding the moral and legal obligations of states in preventing avoidable deaths, with particular focus on the ethical implications of healthcare rationing policies in the Netherlands.*
