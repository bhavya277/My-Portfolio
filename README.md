<div align="center">

# Bhavya Modi — Portfolio

<p align="center">
  <strong>Production-grade, evidence-driven personal portfolio website engineered with modern web technologies.</strong>
</p>

<p align="center">
  <a href="https://github.com/bhavya277/My-Portfolio/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License: MIT" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
</p>

<p align="center">
  <a href="https://github.com/bhavya277"><strong>GitHub Profile</strong></a> &bull;
  <a href="https://www.linkedin.com/in/bhavya-modi-9a9b28312"><strong>LinkedIn</strong></a> &bull;
  <a href="mailto:modibhavya128@gmail.com"><strong>Email Contact</strong></a>
</p>

</div>

---

## 📌 Executive Summary

This repository contains the source code for the personal portfolio of **Bhavya Modi**, a B.Tech Information Technology student specializing in **Data Science & Analytics, Full-Stack Software Engineering, and AI/ML**.

Designed with a **recruiter-first, evidence-driven philosophy**, the site prioritizes clean typography, architectural depth, and verified proof-of-work over decorative distractions.

---

## ✨ Key Architectural Highlights

- **⚡ Recruiter-First UX (10–15s Rule)**: Above-the-fold identity with immediate positioning, target specialization, verified flagship project highlights, and a condensed **30-Second Recruiter View Modal**.
- **🔍 Proof-of-Work Engine**: Direct mappings connecting technical skills to concrete GitHub repositories (`Skill → Real Project → Source Code`).
- **📐 10-Part In-Depth Case Studies**: Structured architectural teardowns for flagship projects detailing Problem Statement, Justification, Solution, System Architecture Diagrams, Explicit Personal Contribution, Technical Challenges, Engineering Decisions, and Learnings.
- **🎯 3-Tier Skills Taxonomy**: Categorized into `Core Competencies`, `Working With`, and `Currently Exploring`.
- **⌨️ Spotlight Command Palette (`Cmd + K` / `Ctrl + K`)**: Keyboard-driven navigation across all pages, projects, and external links.
- **📄 Print-Optimized Web Resume**: Formatted with clean `@media print` stylesheets for instant 1-click PDF resume downloads.
- **🗂️ Zero-Code Content Layer**: All portfolio content (projects, skills, education, achievements, bio) is decoupled into typed data files in `src/data/`.

---

## 🚀 Verified Project Showcase

| Project | Domain | Architecture & Technologies | Links |
| :--- | :--- | :--- | :--- |
| **🌾 Krishi Bazaar** | AI / Market Intelligence | React, TypeScript, Express.js, IBM watsonx.ai, IBM Granite LLM, Recharts | [GitHub Repository](https://github.com/bhavya277/Krishi-Bazar) |
| **✈️ GlobeTrotter** | Full-Stack Web | React 18, TypeScript, Express, Prisma ORM, SQLite/PostgreSQL, Tailwind CSS | [GitHub Repository](https://github.com/bhavya277/GlobeTrotter) |
| **📈 FinOps Dashboard** | Data Science & Forecasting | Python, Flask, Pandas, NumPy, Facebook Prophet, Isolation Forest, React 19 | [GitHub Repository](https://github.com/bhavya277/FinOps) |
| **🛡️ SecureVote** | Blockchain & Security | Solidity, Hardhat, Ethereum, FastAPI, EasyOCR, PyCryptodome (AES-256), React | [GitHub Repository](https://github.com/bhavya277/blockchain-based-Voting-System) |
| **👥 HRMS TH** | Full-Stack Web | React, TypeScript, Radix UI, Node.js, Express, MongoDB, jsPDF | [Live Demo](https://hrmsth.vercel.app) &bull; [GitHub](https://github.com/bhavya277/HRMS_TH) |
| **📦 AssetFlow** | Enterprise Systems | React 19, TypeScript, FastAPI (Python), SQLite/PostgreSQL, JWT RBAC | [GitHub Repository](https://github.com/bhavya277/AssetFlow) |
| **✨ Particle Gesture Control** | Computer Vision | JavaScript, Three.js, MediaPipe Hands API, WebGL | [Live Demo](https://particle-tracking.vercel.app) &bull; [GitHub](https://github.com/bhavya277/Particle-tracking) |
| **💰 Expense Manager** | Web Development | PHP 7.4+, MySQL, Apache, Docker, JavaScript, Bootstrap, Chart.js | [Live Demo](https://expensemanager27.great-site.net/) &bull; [GitHub](https://github.com/bhavya277/Expense-Manager) |

---

## 🛠️ Technology Stack

```
Languages:            TypeScript, Python, JavaScript (ES6+), SQL, Solidity, PHP
Frontend:             React 18, Vite, Tailwind CSS, Radix UI, Lucide Icons, Recharts
Backend & APIs:       Node.js, Express.js, FastAPI, Flask, REST APIs, JWT Auth
Data Science & AI:    Pandas, NumPy, Scikit-learn, Facebook Prophet, IBM watsonx.ai
Databases & Tools:    PostgreSQL, SQLite, MongoDB, MySQL, Prisma ORM, Git & GitHub, Hardhat, Docker
```

---

## 📁 Repository Directory Structure

```
├── public/                 # Static assets, favicon, robots.txt, sitemap
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, CommandPalette, RecruiterViewModal
│   │   ├── sections/       # Hero, EngineeringSnapshot, SelectedWork, ProofOfWork
│   │   └── ui/             # Reusable UI primitives (Button, Card, Badge, Modal)
│   ├── data/               # Single source of truth for all content & portfolio info
│   │   ├── profile.ts      # Bio, contact, social links, recruiter snapshot
│   │   ├── projects.ts     # 10-part project case studies & repository metadata
│   │   ├── skills.ts       # 3-tier skills taxonomy & Proof of Work mappings
│   │   ├── achievements.ts # Competitions, hackathons, and academic milestones
│   │   ├── certifications.ts# Professional licenses and credentials
│   │   └── education.ts    # University curriculum, degree, and coursework
│   ├── pages/              # Page views (Home, About, Skills, Projects, Detail, Resume, Contact)
│   ├── types/              # Strict TypeScript interface definitions
│   ├── App.tsx             # Route configuration & app entry point
│   ├── main.tsx            # React root mount
│   └── index.css           # Global dark theme tokens, typography & print rules
├── PORTFOLIO_GUIDE.md      # Detailed file-by-file customization guide
└── package.json            # Scripts & project dependencies
```

---

## ⚡ Quick Start & Local Development

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/bhavya277/My-Portfolio.git

# Navigate into the project directory
cd My-Portfolio

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot module reloading.

### 4. Build for Production
```bash
npm run build
```
Compiles TypeScript and outputs an optimized production bundle into the `dist/` folder.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Fork or push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import `My-Portfolio`.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build` | Output Directory: `dist`.
6. Click **"Deploy"**.

---

## 📘 Updating Your Content

To customize your information, simply edit the corresponding file in `src/data/`. Consult the complete **[PORTFOLIO_GUIDE.md](PORTFOLIO_GUIDE.md)** for a full field-by-field reference.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built and designed with ❤️ by <strong>Bhavya Modi</strong></sub>
</div>
