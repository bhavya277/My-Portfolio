# 📘 Portfolio Customization & File Directory Guide

This guide explains **which file controls which part of your website**, making it easy to update your bio, projects, skills, coursework, achievements, or resume without needing to rewrite UI components.

---

## ⚡ Quick Summary: Where Do I Change My Info?

| What do you want to change? | File to edit |
| :--- | :--- |
| **Your Name, Bio, Tagline, Email, Social Links, Target Roles** | [`src/data/profile.ts`](file:///src/data/profile.ts) |
| **"Currently" Status (Building, Learning, Exploring, Looking For)** | [`src/data/profile.ts`](file:///src/data/profile.ts) |
| **Projects & Case Studies (Krishi Bazaar, GlobeTrotter, FinOps, SecureVote, HRMS, AssetFlow, etc.)** | [`src/data/projects.ts`](file:///src/data/projects.ts) |
| **Technical Skills (Core, Working With, Exploring + Proof of Work)** | [`src/data/skills.ts`](file:///src/data/skills.ts) |
| **Achievements, Hackathon Results & Competition Rankings** | [`src/data/achievements.ts`](file:///src/data/achievements.ts) |
| **Certifications, Coursework Credentials & Verification Links** | [`src/data/certifications.ts`](file:///src/data/certifications.ts) |
| **Degree, University, CGPA, and Coursework Subjects** | [`src/data/education.ts`](file:///src/data/education.ts) |
| **Resume PDF File (for 1-click downloads)** | Put `resume.pdf` into [`public/resume.pdf`](file:///public/resume.pdf) |

---

## 📂 Detailed File-by-File Breakdown

### 1. `src/data/profile.ts`
Controls your global persona and recruiter snapshot:
- `name`: Your full name (*Bhavya Modi*).
- `title`: Professional subtitle (*B.Tech IT Student*).
- `subtitle`: Focus domains (*Data Science & Analytics • Software Engineering • AI/ML*).
- `bioHeadline`: The exact positioning statement displayed in the Hero.
- `shortBio`: Extended summary for About page, Resume, and Recruiter Modal.
- `location`: Your location (*Gujarat, India*).
- `email`: Your contact email (`modibhavya128@gmail.com`).
- `socials`: Links for `github` (`https://github.com/bhavya277`), `linkedin` (`https://www.linkedin.com/in/bhavya-modi-9a9b28312`), and `email`.
- `currently`: The 4 cards on the homepage (*building*, *learning*, *exploring*, *lookingFor*).
- `recruiterSnapshot`: The 30-second summary shown in the **Recruiter View** modal (*target roles*, *top projects*, *core skills*, *graduation year*).

---

### 2. `src/data/projects.ts`
Controls all projects shown on the **Homepage**, **Projects Page**, and **Case Study Pages** (`/projects/:id`):
Every project maps directly to your real GitHub repositories:
1. `krishi-bazar`: Krishi Bazaar (IBM Hackathon / watsonx.ai Granite LLM)
2. `globetrotter`: GlobeTrotter (Full-stack travel platform with Prisma SQLite/Postgres)
3. `finops`: FinOps Dashboard (Prophet forecasting & Isolation Forest anomaly detection)
4. `secure-vote`: SecureVote (Solidity smart contracts, EasyOCR, AES-256)
5. `hrms-th`: HRMS TH (Human Resource Management System with jsPDF, deployed on Vercel)
6. `assetflow`: AssetFlow (Enterprise asset management with FastAPI & React 19)
7. `particle-tracking`: Particle Gesture Control (Three.js & MediaPipe in-browser CV, deployed on Vercel)
8. `expense-manager`: Expense Manager (PHP/MySQL financial tracker with Chart.js)

---

### 3. `src/data/skills.ts`
Controls the **Skills Matrix Page** and Homepage sections:
- Derived directly from technologies used in your actual codebases.
- Categorized into 3 tiers: `core`, `working-with`, and `exploring`.
- Direct Proof of Work mapping linking skills to repositories.

---

### 4. `src/data/achievements.ts`
Controls the **Achievements Page** (`/achievements`):
- Features your hackathons and competition selections (IIT Madras Finalist, IIT Kanpur Offline, IIT BHU Offline, Nexothon Finalist, Karnataka Police Datathon, CVM Hackathon, etc.).

---

### 5. `src/data/certifications.ts`
Controls the **Certifications Page** (`/certifications`):
- Placeholders for your verifiable credentials.

---

### 6. `src/data/education.ts`
Controls the **Education Page** (`/education`):
- B.Tech Information Technology curriculum, coursework, and focus areas.

---

## 🚀 Commands

```bash
# Start local live server
npm run dev

# Verify build and type checks
npm run build

# Preview production build locally
npm run preview
```
