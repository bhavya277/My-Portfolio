# Bhavya Modi — Professional Engineering & AI/ML Portfolio

A production-grade, evidence-driven personal portfolio website engineered for **Bhavya Modi** (pre-final year B.Tech Information Technology student specializing in AI/ML, Data Science, NLP, Deep Learning, Generative AI, and Cybersecurity).

Built with **React, TypeScript, Vite, Tailwind CSS, and Lucide React**.

---

## 📖 Quick Customization Guide

All portfolio content is separated into clean, structured data files in [`src/data/`](file:///src/data/). You don't need to touch UI code to update your info!

👉 **Read the full file-by-file customization guide in [PORTFOLIO_GUIDE.md](file:///PORTFOLIO_GUIDE.md)** for detailed instructions on updating:
- **Profile & Bio**: [`src/data/profile.ts`](file:///src/data/profile.ts)
- **Projects & Case Studies**: [`src/data/projects.ts`](file:///src/data/projects.ts)
- **Skills Matrix & Tiers**: [`src/data/skills.ts`](file:///src/data/skills.ts)
- **Experience Timeline**: [`src/data/experience.ts`](file:///src/data/experience.ts)
- **Hackathons**: [`src/data/hackathons.ts`](file:///src/data/hackathons.ts)
- **Achievements & Awards**: [`src/data/achievements.ts`](file:///src/data/achievements.ts)
- **Certifications**: [`src/data/certifications.ts`](file:///src/data/certifications.ts)
- **Education & Coursework**: [`src/data/education.ts`](file:///src/data/education.ts)
- **AI Lab Sandboxes**: [`src/data/lab.ts`](file:///src/data/lab.ts)

---

## 🌟 Key Architecture & Features

- **Recruiter-First UX (10–15s Rule)**: Above-the-fold clarity with concise positioning, target roles, flagship project teasers, and a dedicated **Recruiter View** modal (`30-second condensed executive summary`).
- **Proof of Work Engine**: Replaces arbitrary percentage bars with direct links: `Skill → Evidence → Project → GitHub/Live Demo`.
- **Deep 10-Part Project Case Studies**: Complete architectural walkthroughs for *GlobeTrotter* and AI/ML pipelines including problem justifications, architecture diagrams, explicit personal contributions, challenges, decisions, and verified results.
- **Data-Driven 3-Tier Skills Taxonomy**: Categorized into **Core**, **Working With**, and **Exploring** in `src/data/skills.ts`.
- **Interactive Technical Lab**: Real-time sandboxes (Subword BPE Tokenizer explorer, Neural Activation Function math visualizer, and HTTP Security Header hardening checklist).
- **Command Palette (`Cmd + K` / `Ctrl + K`)**: Keyboard-driven spotlight search for instant navigation across all pages and projects.
- **Dedicated Resume Experience**: Responsive interactive resume viewer with print-optimized CSS and instant PDF download triggers.
- **GitHub Integration with Fallback**: Live sync with graceful offline fallback when rate-limited.
- **Dark-First Engineering Theme**: Polished Charcoal/Slate palette with electric blue accents.

---

## 🚀 Quick Start & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Validation
```bash
npm run build
```

---

## 🌐 Deployment to Vercel / Netlify

### Deploy on Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Framework Preset: **Vite**.
5. Click **"Deploy"**.

---

## 📄 License
MIT &copy; 2026 Bhavya Modi
