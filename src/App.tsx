import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { CommandPalette } from './components/layout/CommandPalette';
import { RecruiterViewModal } from './components/layout/RecruiterViewModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { HackathonsPage } from './pages/HackathonsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { EducationPage } from './pages/EducationPage';
import { LabPage } from './pages/LabPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterViewOpen, setIsRecruiterViewOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-background-dark text-slate-100 selection:bg-primary-600 selection:text-white">
          <Navbar
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onOpenRecruiterView={() => setIsRecruiterViewOpen(true)}
          />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/hackathons" element={<HackathonsPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/lab" element={<LabPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />

          {/* Global Modals */}
          <CommandPalette
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
            onOpenRecruiterView={() => setIsRecruiterViewOpen(true)}
          />

          <RecruiterViewModal
            isOpen={isRecruiterViewOpen}
            onClose={() => setIsRecruiterViewOpen(false)}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
