import { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // CORE SKILLS
  {
    name: 'Python',
    category: 'Languages',
    level: 'core',
    proofOfWorkProjectIds: ['globetrotter', 'nlp-sentiment-analyzer', 'secure-threat-detector'],
    topics: ['OOP', 'NumPy', 'Pandas', 'Asynchronous programming', 'Scripting', 'API integrations'],
  },
  {
    name: 'SQL & Database Systems',
    category: 'Databases & Tools',
    level: 'core',
    proofOfWorkProjectIds: ['globetrotter'],
    topics: ['PostgreSQL', 'Relational schema design', 'Query optimization', 'Indexing', 'Transactions'],
  },
  {
    name: 'Data Structures & Algorithms',
    category: 'Languages',
    level: 'core',
    proofOfWorkProjectIds: ['globetrotter', 'nlp-sentiment-analyzer'],
    topics: ['Arrays & HashMaps', 'Trees & Graphs', 'Dynamic Programming', 'Complexity analysis (O(N))'],
  },
  {
    name: 'Git & GitHub',
    category: 'Databases & Tools',
    level: 'core',
    proofOfWorkProjectIds: ['globetrotter', 'nlp-sentiment-analyzer', 'secure-threat-detector'],
    topics: ['Branching workflows', 'Pull Requests', 'Merge conflict resolution', 'CI/CD actions'],
  },
  {
    name: 'Web Engineering (React / TypeScript)',
    category: 'Web & Backend',
    level: 'core',
    proofOfWorkProjectIds: ['globetrotter'],
    topics: ['React 18/19', 'TypeScript', 'State management', 'REST APIs', 'Responsive Tailwind CSS'],
  },
  {
    name: 'C / C++',
    category: 'Languages',
    level: 'core',
    topics: ['Memory management', 'Pointers', 'STL containers', 'Algorithmic problem solving'],
  },

  // WORKING WITH
  {
    name: 'Machine Learning',
    category: 'AI & Machine Learning',
    level: 'working-with',
    proofOfWorkProjectIds: ['nlp-sentiment-analyzer', 'data-insight-dashboard'],
    topics: ['Supervised & Unsupervised learning', 'Scikit-learn', 'Cross-validation', 'Hyperparameter tuning', 'Feature engineering'],
  },
  {
    name: 'Natural Language Processing (NLP)',
    category: 'AI & Machine Learning',
    level: 'working-with',
    proofOfWorkProjectIds: ['nlp-sentiment-analyzer'],
    topics: ['Text preprocessing', 'Tokenization', 'TF-IDF & Embeddings', 'Sentiment classification', 'Transformer pipelines'],
  },
  {
    name: 'Deep Learning',
    category: 'AI & Machine Learning',
    level: 'working-with',
    proofOfWorkProjectIds: ['nlp-sentiment-analyzer', 'vision-classifier'],
    topics: ['Neural network architectures', 'PyTorch / TensorFlow basics', 'Activation functions', 'Loss optimization', 'Backpropagation'],
  },
  {
    name: 'Generative AI & LLM Systems',
    category: 'AI & Machine Learning',
    level: 'working-with',
    proofOfWorkProjectIds: ['globetrotter'],
    topics: ['Prompt engineering', 'RAG principles', 'Hugging Face models', 'OpenAI / Claude API integration', 'Context window management'],
  },
  {
    name: 'Data Science & Analysis',
    category: 'AI & Machine Learning',
    level: 'working-with',
    proofOfWorkProjectIds: ['data-insight-dashboard'],
    topics: ['Exploratory Data Analysis (EDA)', 'Statistical hypothesis testing', 'Pandas & Seaborn', 'Data cleaning pipelines'],
  },
  {
    name: 'Node.js & Backend APIs',
    category: 'Web & Backend',
    level: 'working-with',
    proofOfWorkProjectIds: ['globetrotter'],
    topics: ['Express.js', 'RESTful architecture', 'JWT authentication', 'Middleware pipelines', 'Error handling'],
  },

  // EXPLORING
  {
    name: 'Cybersecurity Fundamentals',
    category: 'Systems & Security',
    level: 'exploring',
    proofOfWorkProjectIds: ['secure-threat-detector'],
    topics: ['OWASP Top 10', 'Network packet analysis', 'Vulnerability scanning', 'Secure coding practices', 'Authentication security'],
  },
  {
    name: 'MLOps & Model Deployment',
    category: 'Databases & Tools',
    level: 'exploring',
    topics: ['Model serialization (ONNX / Pickle)', 'Docker containerization', 'FastAPI microservices', 'Inference monitoring'],
  },
  {
    name: 'Cloud Infrastructure & Linux',
    category: 'Databases & Tools',
    level: 'exploring',
    topics: ['Linux shell scripting', 'AWS/Vercel deployments', 'Environment configuration', 'Process management'],
  },
];

export const skillCategories = [
  'Languages',
  'AI & Machine Learning',
  'Web & Backend',
  'Databases & Tools',
  'Systems & Security',
] as const;

export const areasExploring = [
  {
    title: 'Intelligent Systems',
    description: 'Developing end-to-end Machine Learning, Deep Learning, NLP, and Generative AI pipelines that transform raw data into actionable inference.',
    technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Transformers', 'LLMs'],
    icon: 'Brain',
  },
  {
    title: 'Data & Analytics',
    description: 'Extracting empirical signal from noise through structured exploratory data analysis, statistical modeling, and data pipelines.',
    technologies: ['Data Science', 'Pandas', 'NumPy', 'EDA', 'Statistical Modeling'],
    icon: 'Database',
  },
  {
    title: 'Software Engineering',
    description: 'Architecting scalable, maintainable web applications and RESTful APIs with clean modular separation and strong typing.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs'],
    icon: 'Code',
  },
  {
    title: 'Cybersecurity',
    description: 'Investigating web security vulnerabilities, network threat detection, and implementing defense-in-depth principles in software.',
    technologies: ['OWASP', 'Vulnerability Assessment', 'Threat Modeling', 'Network Security'],
    icon: 'Shield',
  },
];

export const learningJourney = [
  {
    year: '2024',
    title: 'Programming Foundations & Web Engineering',
    description: 'Mastered core algorithmic problem solving in C/C++ and Python. Built fundamental full-stack web applications and relational database schemas.',
    milestones: ['Data Structures in C++', 'Full-stack JavaScript & SQL', 'Object-Oriented Design'],
  },
  {
    year: '2025',
    title: 'Data Science & Machine Learning Core',
    description: 'Transitioned into empirical computing. Developed supervised and unsupervised ML models, performed in-depth exploratory data analysis, and competed in hackathons.',
    milestones: ['Scikit-learn & Statistical Modeling', 'Pandas & Feature Engineering', 'Hackathon Building'],
  },
  {
    year: '2026',
    title: 'NLP, Deep Learning & Generative AI Systems',
    description: 'Deepened specialization in text processing, transformer models, and AI-assisted full-stack architectures like GlobeTrotter.',
    milestones: ['Transformer Pipelines & Embeddings', 'Full-stack AI Integrations', 'Pre-final Year Capstones'],
  },
  {
    year: 'Next',
    title: 'Production MLOps & Scalable AI Infrastructure',
    description: 'Targeting production deployment, inference optimization, distributed training workflows, and high-impact industry engineering roles.',
    milestones: ['Model Serving & MLOps', 'System Architecture', 'Industry Internships'],
  },
];
