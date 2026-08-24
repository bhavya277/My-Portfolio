import { SkillItem, AreaExploring, LearningMilestone } from '../types';

export const skillsData: SkillItem[] = [
  // Languages & Core Programming
  {
    name: 'TypeScript',
    category: 'Languages',
    level: 'core',
    proofOfWorkProjectIds: ['krishi-bazar', 'globetrotter', 'hrms-th', 'assetflow'],
    topics: ['Interfaces & Type Guards', 'Generics', 'Full-Stack Integration', 'Strict Type Checking'],
  },
  {
    name: 'Python',
    category: 'Languages',
    level: 'core',
    proofOfWorkProjectIds: ['finops', 'assetflow', 'secure-vote'],
    topics: ['Data Analysis (Pandas/NumPy)', 'Machine Learning', 'FastAPI & Flask APIs', 'Automation Scripting'],
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Languages',
    level: 'core',
    proofOfWorkProjectIds: ['particle-tracking', 'expense-manager', 'globetrotter'],
    topics: ['Async/Await & Promises', 'DOM Manipulation', 'Event Loop', 'WebGL/Three.js APIs'],
  },
  {
    name: 'SQL',
    category: 'Databases & Tools',
    level: 'core',
    proofOfWorkProjectIds: ['globetrotter', 'expense-manager', 'assetflow'],
    topics: ['Relational Schema Design', 'Complex Joins', 'Aggregations', 'Indexes & Integrity'],
  },
  {
    name: 'Solidity',
    category: 'Systems & Security',
    level: 'working-with',
    proofOfWorkProjectIds: ['secure-vote'],
    topics: ['Smart Contracts', 'EVM Execution', 'OpenZeppelin Standards', 'Hardhat Testing'],
  },
  {
    name: 'PHP',
    category: 'Languages',
    level: 'working-with',
    proofOfWorkProjectIds: ['expense-manager'],
    topics: ['Server-Side Scripting', 'Session Management', 'PDO Prepared Statements', 'CRUD Logic'],
  },

  // Frontend & UI Engineering
  {
    name: 'React',
    category: 'Web & Backend',
    level: 'core',
    proofOfWorkProjectIds: ['krishi-bazar', 'globetrotter', 'hrms-th', 'finops', 'assetflow'],
    topics: ['Hooks & State Management', 'Component Architecture', 'Client-Side Routing', 'Performance Optimization'],
  },
  {
    name: 'Tailwind CSS',
    category: 'Web & Backend',
    level: 'core',
    proofOfWorkProjectIds: ['krishi-bazar', 'globetrotter', 'hrms-th', 'assetflow'],
    topics: ['Responsive Layouts', 'Custom Design Tokens', 'Utility Patterns', 'Dark Mode Styling'],
  },
  {
    name: 'Three.js & WebGL',
    category: 'AI & Machine Learning',
    level: 'working-with',
    proofOfWorkProjectIds: ['particle-tracking'],
    topics: ['3D Scene & Camera Setup', 'Particle Buffer Geometries', 'Real-Time Morphing', 'Frame Render Loops'],
  },
  {
    name: 'Chart.js & Recharts',
    category: 'Web & Backend',
    level: 'working-with',
    proofOfWorkProjectIds: ['krishi-bazar', 'hrms-th', 'expense-manager'],
    topics: ['Financial Telemetry Charts', 'Time-Series Visualizations', 'Dynamic Data Binding'],
  },

  // Backend, Databases & APIs
  {
    name: 'Node.js & Express',
    category: 'Web & Backend',
    level: 'core',
    proofOfWorkProjectIds: ['krishi-bazar', 'globetrotter', 'hrms-th'],
    topics: ['RESTful API Architecture', 'JWT Authentication', 'Middleware Pipelines', 'CORS & Security'],
  },
  {
    name: 'FastAPI & Flask',
    category: 'Web & Backend',
    level: 'core',
    proofOfWorkProjectIds: ['finops', 'assetflow', 'secure-vote'],
    topics: ['Async Endpoints', 'Pydantic Validation', 'API Routing', 'ML Model Serving'],
  },
  {
    name: 'Prisma ORM & PostgreSQL / SQLite',
    category: 'Databases & Tools',
    level: 'core',
    proofOfWorkProjectIds: ['globetrotter', 'assetflow'],
    topics: ['Schema Migrations', 'Relational Constraints', 'Type-Safe Queries', 'Connection Management'],
  },
  {
    name: 'MongoDB / Mongoose',
    category: 'Databases & Tools',
    level: 'working-with',
    proofOfWorkProjectIds: ['hrms-th'],
    topics: ['Document Modeling', 'Mongoose Schemas', 'CRUD Operations', 'Indexing'],
  },
  {
    name: 'MySQL',
    category: 'Databases & Tools',
    level: 'working-with',
    proofOfWorkProjectIds: ['expense-manager'],
    topics: ['Normalized Tables', 'Prepared Statements', 'Database Administration'],
  },

  // Data Science, ML & Tools
  {
    name: 'Pandas & NumPy',
    category: 'AI & Machine Learning',
    level: 'core',
    proofOfWorkProjectIds: ['finops'],
    topics: ['Data Wrangling', 'Tabular Transformations', 'Statistical Aggregation', 'Imputation'],
  },
  {
    name: 'Scikit-learn & Prophet',
    category: 'AI & Machine Learning',
    level: 'working-with',
    proofOfWorkProjectIds: ['finops'],
    topics: ['Anomaly Detection (Isolation Forest)', 'Time-Series Forecasting', 'Model Evaluation'],
  },
  {
    name: 'Git & GitHub',
    category: 'Databases & Tools',
    level: 'core',
    proofOfWorkProjectIds: ['krishi-bazar', 'globetrotter', 'finops', 'secure-vote'],
    topics: ['Version Control', 'Branch Workflows', 'Commit Discipline', 'Open-Source Maintenance'],
  },
  {
    name: 'MediaPipe (Computer Vision)',
    category: 'AI & Machine Learning',
    level: 'working-with',
    proofOfWorkProjectIds: ['particle-tracking'],
    topics: ['Hand Landmark Tracking', 'Real-Time Video Inference', 'Gesture Recognition'],
  },
  {
    name: 'IBM watsonx.ai & Granite LLM',
    category: 'AI & Machine Learning',
    level: 'working-with',
    proofOfWorkProjectIds: ['krishi-bazar'],
    topics: ['LLM Agent Integration', 'Structured Prompt Orchestration', 'Market Advisory'],
  },
  {
    name: 'Docker Basics',
    category: 'Databases & Tools',
    level: 'exploring',
    proofOfWorkProjectIds: ['expense-manager'],
    topics: ['Containerization Basics', 'Dockerfile Configuration'],
  },
];

export const areasExploring: AreaExploring[] = [
  {
    title: 'Data Science & Applied Analytics',
    description: 'Working with tabular datasets, time-series forecasting, statistical profiling, and anomaly detection algorithms.',
    status: 'Active Learning & Building',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Prophet'],
  },
  {
    title: 'Full-Stack Software Engineering',
    description: 'Engineering scalable web platforms with type-safe APIs, relational databases, and clean frontend architectures.',
    status: 'Core Competency',
    technologies: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'Intelligent Systems & AI Integration',
    description: 'Connecting generative AI endpoints, enterprise LLMs (IBM watsonx.ai), and agentic workflows to real-world domain tools.',
    status: 'Applied in Projects',
    technologies: ['IBM watsonx.ai', 'Granite LLM', 'REST APIs', 'FastAPI'],
  },
  {
    title: 'Security & Web3 Systems',
    description: 'Exploring smart contract development on Ethereum, cryptographic hashing, and identity verification pipelines.',
    status: 'Exploratory Projects',
    technologies: ['Solidity', 'Hardhat', 'AES-256', 'EasyOCR', 'Ethers.js'],
  },
];

export const learningJourney: LearningMilestone[] = [
  {
    year: '2024',
    title: 'Core Foundations & Web Engineering',
    description: 'Mastered programming fundamentals, relational database design with SQL, and modern JavaScript/PHP web architectures.',
    skills: ['JavaScript', 'PHP', 'MySQL', 'Git & GitHub', 'Web Development'],
  },
  {
    year: '2025',
    title: 'Full-Stack TypeScript & Data Analysis',
    description: 'Built enterprise web platforms, explored Python data science pipelines, time-series forecasting, and smart contract development.',
    skills: ['TypeScript', 'React', 'Node.js', 'Python', 'FastAPI', 'Solidity', 'Pandas'],
  },
  {
    year: '2026',
    title: 'Applied AI & Advanced Engineering',
    description: 'Developing AI-integrated market solutions, agentic workflows with IBM watsonx.ai, and preparing for professional engineering opportunities.',
    skills: ['IBM watsonx.ai', 'Granite LLM', 'Prisma ORM', 'Machine Learning', 'System Design'],
  },
  {
    year: 'Next',
    title: 'Industry Internships & High-Scale Systems',
    description: 'Targeting software engineering and data science internship opportunities to build robust, high-impact production systems.',
    skills: ['Production Systems', 'Distributed Data', 'MLOps', 'Cloud Infrastructure'],
  },
];
