<div align="center">

# Bhavya Modi — Portfolio

**A modern, recruiter-focused personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.**

<p>
  <a href="https://github.com/bhavya277"><strong>GitHub</strong></a>
  &nbsp;•&nbsp;
  <a href="https://www.linkedin.com/in/bhavya-modi-9a9b28312"><strong>LinkedIn</strong></a>
  &nbsp;•&nbsp;
  <a href="mailto:modibhavya128@gmail.com"><strong>Email</strong></a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

</div>

---

## Overview

This repository contains the source code for **Bhavya Modi's personal portfolio website**.

The portfolio is designed to present technical work, skills, projects, certifications, achievements, education, and professional information in a clean, evidence-oriented format.

The website focuses on:

- **Real projects and proof of work**
- **Detailed project case studies**
- **Technical skills connected to projects**
- **Recruiter-friendly information architecture**
- **Real certificates and credentials**
- **Responsive, accessible presentation**
- **Fast client-side navigation**

---

## Highlights

### 🎯 Recruiter-focused experience

The homepage is structured to communicate who I am, what I build, my technical focus, and where to find my strongest work quickly.

### 🧩 Proof of Work

Skills can be connected to real projects, allowing visitors to move from:

**Skill → Project → Technical Details → Repository**

### 📚 Learning Journey

A visual progression through:

**Foundations → Building → Intelligence → Exploring → Next**

The journey is intended to communicate technical growth and current direction rather than simply listing technologies.

### 💻 Project Case Studies

Projects include structured technical information such as:

- Problem
- Motivation
- Solution
- Architecture
- Features
- Personal contribution
- Technical challenges
- Engineering decisions
- Results/outcomes
- Learnings
- GitHub / live demo links

### 🏆 Certifications & Achievements

The portfolio includes real certificates, skill badges, course completions, hackathon/competition credentials, and other verified achievements where applicable.

### ⌨️ Command Palette

A keyboard-accessible command palette provides quick navigation across the portfolio.

Use:

- `Ctrl + K` on Windows/Linux
- `Cmd + K` on macOS
- `Esc` to close

### 📄 Resume

The portfolio includes a dedicated resume page and a direct download for the public resume PDF.

---

## Projects

The portfolio currently showcases these real projects:

| Project | Focus |
|---|---|
| **Krishi Bazaar** | AI-powered agricultural market linkage and market intelligence |
| **GlobeTrotter** | Full-stack travel planning and itinerary management |
| **FinOps Dashboard** | Financial analytics, forecasting, and anomaly detection |
| **SecureVote** | Secure voting system using blockchain/security technologies |
| **HRMS TH** | Human Resource Management System |
| **AssetFlow** | Enterprise asset management platform |
| **Particle Gesture Control** | Browser-based gesture-controlled particle visualization |
| **Expense Manager** | Personal financial tracking and visualization |

Project details are maintained in `src/data/projects.ts`.

---

## Technology Stack

### Frontend

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React

### Data Visualization

- Recharts
- Chart.js (where used by portfolio/project content)

### Portfolio Architecture

- Component-based React architecture
- Typed TypeScript data models
- Centralized portfolio data
- Client-side routing
- Responsive layouts
- Reusable UI components
- Context-based application state

> The technologies listed above describe this portfolio codebase and its presentation layer. Individual project technologies are documented separately in the project data/case studies.

---

## Project Structure

```text
My-Portfolio/
├── public/
│   ├── certificates/       # Real certificate and badge assets
│   ├── resume.pdf          # Public resume PDF
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, Command Palette, Recruiter View
│   │   ├── sections/       # Homepage sections
│   │   └── ui/             # Reusable UI components
│   │
│   ├── context/            # Application/theme context
│   ├── data/               # Portfolio content / single source of truth
│   ├── hooks/              # Reusable React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Route-level pages
│   ├── types/              # TypeScript interfaces/types
│   ├── App.tsx             # Application routing
│   ├── main.tsx            # React entry point
│   └── index.css           # Global styles
│
├── .env.example
├── .gitignore
├── PORTFOLIO_GUIDE.md
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Content Architecture

Portfolio information is separated from UI components so that content can be maintained without rewriting page components.

| Information | Source |
|---|---|
| Profile, bio, contact, social links | `src/data/profile.ts` |
| Projects & case studies | `src/data/projects.ts` |
| Skills & proof-of-work mappings | `src/data/skills.ts` |
| Achievements | `src/data/achievements.ts` |
| Certifications | `src/data/certifications.ts` |
| Education | `src/data/education.ts` |
| Learning journey | `src/data/learningJourney.ts` |
| Resume PDF | `public/resume.pdf` |


---

## Routes

The current application routes are:

```text
/
├── /about
├── /skills
├── /projects
│   └── /projects/:id
├── /achievements
├── /certifications
├── /education
├── /resume
├── /contact
└── /*                  # 404 page
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### 1. Clone

```bash
git clone https://github.com/bhavya277/My-Portfolio.git
cd My-Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

### 4. Build for production

```bash
npm run build
```

This runs TypeScript compilation followed by the Vite production build.

### 5. Preview the production build

```bash
npm run preview
```

---

## Environment Variables

The repository includes:

```text
.env.example
```

If an environment variable is required by a specific integration, create a local `.env` file based on the example.

**Never commit secrets, API keys, or private credentials.**

---

## Deployment

This is a Vite + React application and can be deployed to common static hosting platforms.

### Vercel

Recommended configuration:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

Typical deployment flow:

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Use the Vite framework preset.
4. Set the build command to `npm run build`.
5. Deploy.

For any SPA host, make sure unknown routes are rewritten to `index.html` so React Router can handle client-side routes.

---

## Updating the Portfolio

Most content changes should be made in `src/data/`.

### Add or edit a project

Edit:

```text
src/data/projects.ts
```

### Update skills

Edit:

```text
src/data/skills.ts
```

### Update profile/contact information

Edit:

```text
src/data/profile.ts
```

### Add certificates

Place the real assets under:

```text
public/certificates/
```

and update:

```text
src/data/certifications.ts
```

### Update resume

Replace:

```text
public/resume.pdf
```

with the new final PDF while keeping the same filename.

---

## Quality & Engineering Principles

This portfolio follows a few principles:

### Authenticity over exaggeration

Projects, skills, certificates, and achievements should represent real work.

### Evidence over claims

Where possible, technical skills are connected to actual project work.

### Reusable components

Repeated UI patterns are implemented as reusable React components.

### Centralized content

Personal and portfolio data is kept outside page components where practical.

### Responsive by default

The interface is designed for desktop, tablet, and mobile screens.

### Accessibility matters

Interactive elements, dialogs, navigation, and images should remain keyboard- and screen-reader-friendly.

### Performance matters

Images and dynamic content should be loaded efficiently without unnecessary client-side work.

---

## Useful Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Author

### Bhavya Modi

**B.Tech Information Technology Student**  
Focus: **Data Science & Analytics • Software Engineering • AI/ML**

- GitHub: https://github.com/bhavya277
- LinkedIn: https://www.linkedin.com/in/bhavya-modi-9a9b28312
- Email: modibhavya128@gmail.com

---

## License

This project is licensed under the **MIT License**.

See the repository's `LICENSE` file for details.

---

<div align="center">

**Built and maintained by Bhavya Modi.**

</div>
