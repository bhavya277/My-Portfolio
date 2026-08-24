# 📘 Portfolio Customization & File Directory Guide

This guide explains **which file controls which part of your website**, making it easy to update your bio, projects, skills, coursework, achievements, or resume without needing to rewrite UI components.

---

## ⚡ Quick Summary: Where Do I Change My Info?

| What do you want to change? | File to edit |
| :--- | :--- |
| **Your Name, Bio, Tagline, Email, Social Links, Target Roles** | [`src/data/profile.ts`](file:///src/data/profile.ts) |
| **"Currently" Status (Building, Learning, Exploring, Looking For)** | [`src/data/profile.ts`](file:///src/data/profile.ts) |
| **Projects & Case Studies (GlobeTrotter, AI/ML, NLP, Security)** | [`src/data/projects.ts`](file:///src/data/projects.ts) |
| **Technical Skills (Core, Working With, Exploring + Proof of Work)** | [`src/data/skills.ts`](file:///src/data/skills.ts) |
| **Work Experience, Clubs, and Capstone Leadership Timeline** | [`src/data/experience.ts`](file:///src/data/experience.ts) |
| **Hackathon Showcases (Problem, Solution, Role, Outcome)** | [`src/data/hackathons.ts`](file:///src/data/hackathons.ts) |
| **Achievements, Awards & Competition Rankings** | [`src/data/achievements.ts`](file:///src/data/achievements.ts) |
| **Certifications, Coursework Credentials & Verification Links** | [`src/data/certifications.ts`](file:///src/data/certifications.ts) |
| **Degree, University, CGPA, and Coursework Subjects** | [`src/data/education.ts`](file:///src/data/education.ts) |
| **Resume PDF File (for 1-click downloads)** | Put `resume.pdf` into [`public/resume.pdf`](file:///public/resume.pdf) |

---

## 📂 Detailed File-by-File Breakdown

### 1. `src/data/profile.ts`
Controls your global persona and recruiter snapshot:
- `name`: Your full name (*Bhavya Modi*).
- `title`: Professional subtitle (*B.Tech IT Student*).
- `subtitle`: Focus domains (*AI/ML • Data Science • Software Engineering*).
- `bioHeadline`: The 1–2 sentence positioning statement displayed in the Hero.
- `shortBio`: Extended summary for About page, Resume, and Recruiter Modal.
- `location`: Your location / country.
- `email`: Your contact email.
- `socials`: Links for `github`, `linkedin`, and `email`.
- `currently`: The 4 cards on the homepage (*building*, *learning*, *exploring*, *lookingFor*).
- `recruiterSnapshot`: The 30-second summary shown in the **Recruiter View** modal (*target roles*, *top projects*, *core skills*, *graduation year*).

---

### 2. `src/data/projects.ts`
Controls all projects shown on the **Homepage**, **Projects Page**, and **Case Study Pages** (`/projects/:id`):
Each project contains:
- `id`: Unique URL slug (e.g. `'globetrotter'`).
- `title`: Full title of the project.
- `tagline`: One-line impact summary.
- `category`: Category badge (`'ALL'`, `'AI/ML'`, `'NLP'`, `'WEB'`, `'DATA SCIENCE'`, `'CYBERSECURITY'`).
- `featured`: Set to `true` to highlight with an accent badge.
- `role`: Your title on the project (e.g. *Lead Full-Stack & AI Systems Developer*).
- `githubUrl`: Link to GitHub repository.
- `liveUrl`: Link to live website / deployment.
- `tags`: Array of technical tags (e.g. `['React', 'TypeScript', 'Node.js', 'PostgreSQL']`).
- **10-Part Case Study Content**:
  - `problem`: What real-world problem was being solved.
  - `why`: Why this problem is worth solving.
  - `solution`: What you built.
  - `architecture`: Components, technologies, and data flow.
  - `myContribution`: **Explicit bullet points of what YOU individually built**.
  - `technicalChallenges`: Difficult obstacles and how you resolved them.
  - `engineeringDecisions`: Why you picked certain databases or frameworks over alternatives.
  - `results`: Metrics and benchmarks achieved.
  - `learnings`: Engineering takeaways.

---

### 3. `src/data/skills.ts`
Controls the **Skills Matrix Page** and Homepage sections:
- `skillsData`: List of skills categorized into 3 data-driven levels:
  - `level: 'core'` (Daily high proficiency: Python, SQL, DSA, Git, Web).
  - `level: 'working-with'` (Applied in projects: ML, NLP, Deep Learning, GenAI, APIs).
  - `level: 'exploring'` (Active learning: Cybersecurity, MLOps, Cloud).
  - `proofOfWorkProjectIds`: Links this skill directly to project case studies in `projects.ts`.
  - `topics`: Specific sub-concepts revealed when clicking the skill.
- `areasExploring`: The 4 coherent narrative cards on the homepage (*Intelligent Systems*, *Data & Analytics*, *Software Engineering*, *Cybersecurity*).
- `learningJourney`: The milestone roadmap on the homepage (*2024* → *2025* → *2026* → *Next*).

---

### 4. `src/data/experience.ts`
Controls the **Experience Page** (`/experience`):
- `organization`: Company, club, or department name.
- `role`: Your role / position.
- `period`: Duration (e.g. `2024 – Present`).
- `type`: Category badge (*Internship*, *Technical Club*, *Team Project*, *Leadership*, *Open Source*).
- `responsibilities`: Bullet points of deliverables and contributions.
- `technologies`: Badges for tech used.

---

### 5. `src/data/hackathons.ts`
Controls the **Hackathons Page** (`/hackathons`):
- `name`: Hackathon event title.
- `organizer`: University or organization hosting the hackathon.
- `projectName`: Prototype name.
- `problemStatement`: Problem tackled.
- `solution`: Solution built in the sprint.
- `myRole`: Your specific role on the team.
- `outcome`: Ranking or award (e.g. *Finalist / Top 5 Team*).
- `repoUrl`: GitHub repository link.
- `learnings`: Key technical takeaways from the sprint.

---

### 6. `src/data/achievements.ts`
Controls the **Achievements Page** (`/achievements`):
- `title`: Name of achievement.
- `issuer`: Organization issuing the recognition.
- `date`: Year or date range.
- `category`: Category badge (*Hackathons*, *Competitions*, *Academic*, *Milestones*).
- `description`: Authentic explanation of the milestone.

---

### 7. `src/data/certifications.ts`
Controls the **Certifications Page** (`/certifications`):
- `title`: Certification or course title.
- `issuer`: Platform / institute (e.g. *DeepLearning.AI*, *Coursera*, *Cisco*).
- `issueDate`: Date earned.
- `credentialId`: Your certificate ID (or placeholder `[VERIFIABLE CREDENTIAL ID]`).
- `verificationUrl`: Link to verify certificate.
- `skills`: Badges of topics covered.

---

### 8. `src/data/education.ts`
Controls the **Education Page** (`/education`):
- `degree`: Degree name (e.g. *Bachelor of Technology (B.Tech)*).
- `field`: Major (*Information Technology*).
- `institution`: College or university name.
- `period`: Years attended (e.g. *2023 – 2027*).
- `grade`: CGPA or percentage (e.g. `[ADD CGPA / PERCENTAGE]`).
- `coursework`: List of subjects (DSA, DBMS, OS, Networks, AI/ML, etc.).
- `focusAreas`: Key specialization domains.

---

### 9. `src/data/lab.ts`
Controls the **Interactive AI Lab Page** (`/lab`):
- `title`: Sandbox tool title.
- `category`: Field (*NLP / Tokenizer*, *Neural Nets*, *Cybersecurity*).
- `status`: `'live'` or `'coming-soon'`.
- `description`: Tool description.
- `technicalConcept`: Mathematical / algorithmic concept being demonstrated.

---

## 🎨 UI & Layout Files (Only edit if changing structure/design)

- [`src/components/layout/Navbar.tsx`](file:///src/components/layout/Navbar.tsx): Top navigation bar with "More ▾" dropdown, Resume button, Recruiter View button, and Command Palette icon.
- [`src/components/layout/Footer.tsx`](file:///src/components/layout/Footer.tsx): Bottom footer with quick links and copyright.
- [`src/components/layout/RecruiterViewModal.tsx`](file:///src/components/layout/RecruiterViewModal.tsx): The 30-second executive summary modal.
- [`src/components/layout/CommandPalette.tsx`](file:///src/components/layout/CommandPalette.tsx): Spotlight search triggered by `Cmd + K` or `Ctrl + K`.
- [`src/App.tsx`](file:///src/App.tsx): Main router connecting all page routes.
- [`src/index.css`](file:///src/index.css): Global dark technical styling, scrollbars, and print layout.

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
