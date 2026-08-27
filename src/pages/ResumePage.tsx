import React from 'react';
import { Button } from '../components/ui/Button';
import { Printer, Download, Github, Linkedin } from 'lucide-react';

export const ResumePage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-border-dark print:hidden">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary-400">
            // CURRICULUM VITAE
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Resume & Technical Profile
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            icon={<Printer className="w-4 h-4" />}
            onClick={handlePrint}
          >
            Print / Save PDF
          </Button>
          <a href="/resume.pdf" download="Bhavya-Modi-Resume.pdf">
            <Button
              size="sm"
              variant="primary"
              icon={<Download className="w-4 h-4" />}
            >
              Download Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Printable / Structured Resume Container */}
      <div className="mt-8 p-6 sm:p-10 rounded-2xl bg-background-card border border-border-dark shadow-2xl text-slate-200 print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
        
        {/* Resume Header */}
        <div className="border-b border-border-dark pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight print:text-black">
              BHAVYA MODI
            </h2>
            <p className="text-sm font-mono text-primary-400 font-bold uppercase tracking-wider mt-1 print:text-blue-700">
              IT STUDENT
            </p>
            <p className="text-xs text-slate-400 mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2 font-mono print:text-slate-600">
              <span>Gujarat, India</span>
              <span>&bull;</span>
              <a href="mailto:modibhavya128@gmail.com" className="hover:text-primary-300 transition-colors">
                modibhavya128@gmail.com
              </a>
              <span>&bull;</span>
              <a href="https://bhavyamodi27.vercel.app" target="_blank" rel="noreferrer" className="hover:text-primary-300 transition-colors">
                bhavyamodi27.vercel.app
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-3 text-xs font-mono print:text-slate-700">
            <a
              href="https://github.com/bhavya277"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bhavya-modi-9a9b28312"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="py-5 border-b border-border-dark">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 mb-2 print:text-blue-800">
            SUMMARY
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed print:text-slate-800">
            I am a third-year IT undergraduate with a strong interest in Python programming and Data Science & Analytics, focused on building a solid foundation in problem-solving and data-driven insights. Actively engaged in coding challenges and technical events to enhance analytical thinking and practical skills, with a passion for continuous learning and applying knowledge to real-world, data-driven solutions. Committed to growing as a tech professional through hands-on projects and collaborative learning.
          </p>
        </div>

        {/* EDUCATION */}
        <div className="py-5 border-b border-border-dark space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            EDUCATION
          </h3>
          
          <div className="space-y-1 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <strong className="text-white text-sm print:text-black font-semibold">
                Bachelor of Technology in Information Technology
              </strong>
              <span className="text-slate-400 font-mono text-right shrink-0 print:text-slate-600">
                Aug 2024 - Exp. May 2028
              </span>
            </div>
            <div className="text-slate-300 print:text-slate-700 font-mono">
              Birla Vishvakarma Mahavidyalaya
            </div>
            <ul className="list-disc list-inside text-slate-400 print:text-slate-600 pl-1">
              <li>Honours in Data Science and Analytics</li>
            </ul>
          </div>

          <div className="space-y-1 text-xs pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <strong className="text-white text-sm print:text-black font-semibold">
                Higher Secondary Schooling
              </strong>
              <span className="text-slate-400 font-mono text-right shrink-0 print:text-slate-600">
                May 2022 - March 2024
              </span>
            </div>
            <div className="text-slate-300 print:text-slate-700 font-mono">
              New leap International junior science college
            </div>
          </div>
        </div>

        {/* TECHNICAL SKILLS / LANGUAGES */}
        <div className="py-5 border-b border-border-dark space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            TECHNICAL SKILLS / LANGUAGES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="space-y-1">
              <span className="font-semibold text-white print:text-black">Programming:</span>
              <p className="text-slate-300 font-mono print:text-slate-700">Python, C++, C, PHP</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-white print:text-black">Web & Databases:</span>
              <p className="text-slate-300 font-mono print:text-slate-700">HTML, CSS, JavaScript, MySQL</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-white print:text-black">Data & Analytics:</span>
              <p className="text-slate-300 font-mono print:text-slate-700">Pandas, Numpy, Data visualization</p>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="py-5 border-b border-border-dark space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            PROJECTS
          </h3>

          {/* Saarthi AI */}
          <div className="space-y-1.5 text-xs">
            <strong className="text-white text-sm print:text-black">Saarthi AI</strong>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1 print:text-slate-700">
              <li>Designed and developed Saarthi AI to deliver smart, data-driven automation solutions for real-time insights.</li>
              <li>Enhanced system performance by optimizing AI models and streamlining workflows for faster and more accurate results.</li>
              <li>Integrated continuous monitoring and improvement mechanisms to ensure reliability, scalability, and long-term efficiency.</li>
            </ul>
          </div>

          {/* Human Resource Management System */}
          <div className="space-y-1.5 text-xs pt-2">
            <strong className="text-white text-sm print:text-black">Human Resource Management System</strong>
            <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1 print:text-slate-700">
              <li>Developed a Human Resource Management System to streamline employee data management, attendance tracking, and payroll processes.</li>
              <li>Automated recruitment and performance evaluation workflows to improve efficiency and reduce administrative workload.</li>
              <li>Integrated secure data handling and reporting features to enhance decision-making and organizational transparency.</li>
            </ul>
          </div>
        </div>

        {/* CO-CURRICULAR ACTIVITIES */}
        <div className="py-5 border-b border-border-dark space-y-2.5">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            CO-CURRICULAR ACTIVITIES
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 pl-1 print:text-slate-700">
            <li>Actively participated in <strong>AWS Community Day 2026</strong>, gaining hands-on exposure to cloud technologies and networking with industry professionals.</li>
            <li>Selected among <strong>8000+ participants</strong> for <strong>Convolve 4.0 Hackathon</strong> organized by IIT Madras, competing in a national-level innovation challenge.</li>
            <li>Selected for <strong>Policy Hackathon</strong> organized by IIT Kanpur, collaborating in a team to develop problem-solving solutions under competitive constraints.</li>
            <li>Completed 4-week <strong>Machine Learning Workshop</strong> organized by ML Club, BVM.</li>
          </ul>
        </div>

        {/* EXTRA-CURRICULAR ACTIVITIES */}
        <div className="py-5 border-b border-border-dark space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            EXTRA-CURRICULAR ACTIVITIES
          </h3>
          <ul className="list-disc list-inside text-xs text-slate-300 pl-1 print:text-slate-700">
            <li>Actively contributed in <strong>NSS</strong> as a volunteer.</li>
          </ul>
        </div>

        {/* ADDITIONAL INFORMATION */}
        <div className="py-5 border-b border-border-dark space-y-2.5 text-xs">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            ADDITIONAL INFORMATION
          </h3>
          <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1 print:text-slate-700">
            <li><strong>Languages:</strong> English, Hindi, Gujarati</li>
            <li>
              <strong>Certifications:</strong>
              <ul className="list-circle list-inside pl-5 space-y-0.5 mt-0.5">
                <li>TCS iON Career Edge - Young Professional</li>
                <li>Python(basics) By HackerRank</li>
              </ul>
            </li>
            <li>
              <strong>Awards/Activities:</strong> Genesis 2024 Departmental Winner and secured 3rd Rank in the Data Science Quiz Competition.
            </li>
          </ul>
        </div>

        {/* REFERENCES */}
        <div className="py-5 border-b border-border-dark space-y-2.5 text-xs">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            REFERENCES
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-transparent print:border-none print:p-0">
              <strong className="text-white text-sm print:text-black font-semibold">Prof. Sherin M. Jijo</strong>
              <p className="text-slate-400 text-xs font-mono print:text-slate-700">Assistant Professor, BVM</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-transparent print:border-none print:p-0">
              <strong className="text-white text-sm print:text-black font-semibold">Suhani Modi</strong>
              <p className="text-slate-400 text-xs font-mono print:text-slate-700">Application Developer, ODOO</p>
            </div>
          </div>
        </div>

        {/* DECLARATION */}
        <div className="pt-5 text-xs text-slate-400 print:text-slate-600 space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary-400 print:text-blue-800">
            DECLARATION
          </h3>
          <p className="italic">
            I hereby confirm that the above information is accurate and authentic to the best of my knowledge.
          </p>
          <div className="pt-2">
            <strong className="text-white print:text-black font-semibold block text-sm">Bhavya Modi</strong>
          </div>
        </div>

      </div>
    </div>
  );
};
