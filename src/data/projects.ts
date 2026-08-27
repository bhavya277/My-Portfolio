import { ProjectCaseStudy } from '../types';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'krishi-bazar',
    title: 'Krishi Bazaar — AI-Powered Agricultural Market Linkage Platform',
    tagline: 'Market intelligence platform providing real-time mandi prices, commodity price forecasting with IBM Granite LLM, and buyer-farmer direct linkage.',
    category: 'AI/ML',
    featured: true,
    role: 'Full-Stack & AI Integration Developer',
    duration: 'Hackathon Project (IBM Hackathon)',
    teamSize: 'Team Project',
    githubUrl: 'https://github.com/bhavya277/Krishi-Bazar',
    tags: ['TypeScript', 'React', 'Vite', 'Express.js', 'IBM watsonx.ai', 'IBM Granite LLM', 'Tailwind CSS', 'Recharts'],

    problem: 'Farmers frequently face price volatility and information asymmetry, losing income to intermediaries due to a lack of real-time APMC mandi price intelligence and predictive market trends.',
    why: 'Direct market linkages combined with LLM-assisted forecasting empower agricultural producers to make data-backed harvest storage and sales timing decisions.',
    solution: 'Built Krishi Bazaar: a web platform that delivers real-time mandi prices across Gujarat districts, forecasts price trends using IBM Granite LLM on watsonx.ai, matches farmers with verified buyers, and provides AI crop quality grading advisory.',

    architecture: {
      summary: 'Decoupled architecture featuring a React/Vite dashboard client communicating with an Express.js API backend that interfaces with IBM watsonx.ai Granite LLM services and MCP servers.',
      components: [
        {
          name: 'Frontend Web Dashboard',
          description: 'Interactive single-page application rendering real-time price tables, commodity trend charts, buyer listings, and storage advisory calculators.',
          tech: 'React, TypeScript, Vite, Tailwind CSS, Recharts',
        },
        {
          name: 'Express Backend Service',
          description: 'REST API orchestrating commodity market requests, farmer-buyer match algorithms, and AI agent routes connecting to IBM watsonx.ai.',
          tech: 'Node.js, Express.js, TypeScript',
        },
        {
          name: 'AI Agent & LLM Layer',
          description: 'Integration layer invoking IBM Granite LLM on watsonx.ai to generate contextual commodity market analysis and price forecasting.',
          tech: 'IBM watsonx.ai, IBM Granite LLM, MCP Server',
        },
      ],
      dataFlow: [
        '1. User selects agricultural commodity (Cotton, Groundnut) and district.',
        '2. Client queries backend API for current APMC mandi market records.',
        '3. Backend calls IBM watsonx.ai Granite LLM with historical price context to produce forecast estimates.',
        '4. Results are visualized on client dashboard with buyer matching recommendations.',
      ],
    },

    myContribution: [
      'Configured and structured the full-stack repository architecture (frontend, backend, and MCP server).',
      'Developed interactive UI dashboard views for mandi price exploration and commodity trend visualization.',
      'Integrated backend API routes to communicate with IBM watsonx.ai endpoints.',
      'Implemented data processing pipelines for market price aggregation and forecasting displays.',
    ],

    technicalChallenges: [
      {
        challenge: 'Structuring LLM prompt outputs for consistent JSON visualization across market forecasting dashboards.',
        resolution: 'Standardized response schemas with defensive parsing fallbacks in the Express service layer.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Utilized IBM watsonx.ai and IBM Granite LLM.',
        rationale: 'Aligned with IBM Hackathon Challenge 13 requirements for enterprise-grade generative AI in economic development.',
      },
    ],

    results: [
      'Delivered functional prototype supporting real-time price lookups, AI forecast summaries, and buyer discovery.',
    ],

    learnings: [
      'Gained practical experience interfacing with IBM Cloud watsonx.ai SDKs.',
      'Learned how to design agentic AI workflows tailored for agricultural data.',
    ],
  },
  {
    id: 'globetrotter',
    title: 'GlobeTrotter — Full-Stack Travel Planning & Itinerary Platform',
    tagline: 'Full-stack multi-city travel management platform featuring drag-and-drop daily schedules, real-time budget telemetry, and secure itinerary sharing.',
    category: 'WEB',
    featured: true,
    role: 'Full-Stack Developer',
    duration: '2 Months',
    teamSize: 'Individual Project',
    githubUrl: 'https://github.com/bhavya277/GlobeTrotter',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'SQLite', 'Tailwind CSS', 'JWT'],

    problem: 'Travelers struggle with scattered notes, unorganized bookings, and opaque budget tracking when planning multi-destination itineraries across different cities.',
    why: 'A centralized workspace with drag-and-drop scheduling, real-time expense calculations, and granular data ownership makes trip planning structured and collaborative.',
    solution: 'Engineered GlobeTrotter: a full-stack web application supporting multi-destination trip building, HTML5 drag-and-drop schedule organization, expense management, secure password reset, and public sharing.',

    architecture: {
      summary: 'Client-server architecture featuring a TypeScript React frontend, an Express REST API backend with Prisma ORM data modeling, and robust JWT session security.',
      components: [
        {
          name: 'React Client Application',
          description: 'Modular UI with desktop and mobile navigation, interactive route visualizations, itinerary timeline editors, and modal budget managers.',
          tech: 'React, TypeScript, Vite, Tailwind CSS, Lucide Icons',
        },
        {
          name: 'Express Backend API',
          description: 'RESTful API managing authentication, trip CRUD, stop ordering, expense logging, and single-use password reset tokens.',
          tech: 'Node.js, Express.js, TypeScript, Bcrypt, JWT',
        },
        {
          name: 'Database Layer',
          description: 'Relational data model with foreign-key relationships for Users, Trips, Stops, Activities, and Expenses.',
          tech: 'Prisma ORM, SQLite / PostgreSQL',
        },
      ],
      dataFlow: [
        '1. User logs in securely with Bcrypt password verification and receives JWT token.',
        '2. Authenticated user creates or updates multi-city trips with ordered destination stops.',
        '3. Frontend sends updates to Express API; Prisma persists changes with relational integrity.',
        '4. Dashboard updates live telemetry counters for budget spent and upcoming destinations.',
      ],
    },

    myContribution: [
      'Designed and implemented complete database schema using Prisma ORM with strict relational constraints.',
      'Implemented JWT authentication with Bcrypt hashing and single-use SHA-256 password reset tokens.',
      'Built drag-and-drop activity reordering logic and real-time expense telemetry calculation on frontend.',
      'Implemented server-side IDOR ownership checks to ensure users only access their own trip data.',
    ],

    technicalChallenges: [
      {
        challenge: 'Maintaining activity ordering across multi-day stops when users rearrange items via drag-and-drop.',
        resolution: 'Designed sequential index ordering stored in the database and updated in batch transactions via Prisma.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Used Prisma ORM with TypeScript for type-safe database queries.',
        rationale: 'Eliminated runtime query errors and provided auto-generated TypeScript models matching database schemas.',
      },
    ],

    results: [
      'Fully implemented multi-destination trip creation, activity scheduling, and budget tracking.',
      'Results: Not specified (User metrics not collected)',
    ],

    learnings: [
      'Mastered relational schema modeling for complex nested data (Users → Trips → Stops → Activities).',
      'Understood secure token lifecycle management and IDOR vulnerability mitigation.',
    ],
  },
  {
    id: 'finops',
    title: 'FinOps Dashboard — Cloud Cost Analysis & Anomaly Detection',
    tagline: 'Financial operations analytics platform utilizing machine learning anomaly detection (Isolation Forest) and time-series forecasting (Prophet) for cloud cost optimization.',
    category: 'DATA SCIENCE',
    featured: true,
    role: 'Data Science & Backend Developer',
    duration: '2 Months',
    teamSize: 'Individual Project',
    githubUrl: 'https://github.com/bhavya277/FinOps',
    tags: ['Python', 'Flask', 'Pandas', 'NumPy', 'Scikit-learn', 'Prophet', 'React 19', 'Bootstrap'],

    problem: 'Unmonitored cloud infrastructure spending often results in budget overruns, undetected billing anomalies, and unoptimized resource allocations across cloud regions.',
    why: 'Combining automated exploratory data analysis with machine learning anomaly detection enables engineering teams to proactively detect expenditure spikes before invoices arrive.',
    solution: 'Developed the FinOps Dashboard: a full-stack platform that ingests cloud billing logs, conducts automated EDA, forecasts future spend with Prophet, and detects abnormal spikes with Isolation Forest.',

    architecture: {
      summary: 'Python Flask analytics backend running data pipelines and ML models, serving structured metric endpoints to a React 19 single-page dashboard.',
      components: [
        {
          name: 'Data Processing & EDA Module',
          description: 'Ingests CSV/JSON billing records, handles missing data imputation, and generates statistical spending distributions.',
          tech: 'Pandas, NumPy, Matplotlib, Seaborn',
        },
        {
          name: 'Machine Learning Pipeline',
          description: 'Executes Isolation Forest anomaly detection for abnormal consumption patterns and Prophet time-series models for budget forecasting.',
          tech: 'Scikit-learn, Prophet',
        },
        {
          name: 'Frontend Visualization Interface',
          description: 'React dashboard rendering cost breakdown charts, forecasted expenditure graphs, and anomaly alert cards.',
          tech: 'React 19, Vite, Bootstrap, Axios',
        },
      ],
      dataFlow: [
        '1. Raw cloud billing and usage data ingested through preprocessing pipeline.',
        '2. Pandas calculates regional cost aggregates, instance utilization, and service breakdowns.',
        '3. Isolation Forest flags anomalous data points exceeding expected variance thresholds.',
        '4. Prophet model generates future expenditure trajectory with confidence intervals.',
        '5. Flask API serves computed insights to React frontend for interactive inspection.',
      ],
    },

    myContribution: [
      'Developed data ingestion, cleaning, and preprocessing scripts in Python using Pandas.',
      'Implemented anomaly detection pipeline utilizing Scikit-learn Isolation Forest.',
      'Configured time-series forecasting model using Facebook Prophet for cloud expenditure prediction.',
      'Constructed Flask API server and connected it to React dashboard interface.',
    ],

    technicalChallenges: [
      {
        challenge: 'Handling non-stationary billing data with irregular seasonal trends and usage spikes.',
        resolution: 'Preprocessed time-series data with logarithmic transformations and configured changepoint detection in Prophet.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Selected Isolation Forest over standard statistical z-score thresholding.',
        rationale: 'Isolation Forest effectively isolates multi-dimensional anomalies (combining CPU, memory, and cost) without assuming normal distributions.',
      },
    ],

    results: [
      'Automated detection of simulated cost spikes and generation of projected 30-day budget curves.',
      'Results: Not specified (Production benchmarks not collected)',
    ],

    learnings: [
      'Practical implementation of unsupervised anomaly detection on tabular infrastructure metrics.',
      'End-to-end integration of Python machine learning backends with modern React frontend clients.',
    ],
  },
  {
    id: 'secure-vote',
    title: 'SecureVote — Decentralized Biometric Voting System',
    tagline: 'Decentralized voting ecosystem combining Ethereum smart contracts for trustless auditability, OCR identity validation, and AES-256 encryption.',
    category: 'CYBERSECURITY',
    featured: true,
    role: 'Blockchain & Security Developer',
    duration: '1 Month',
    teamSize: 'Individual Project',
    githubUrl: 'https://github.com/bhavya277/blockchain-based-Voting-System',
    tags: ['Solidity', 'Hardhat', 'Ethereum', 'Ethers.js', 'FastAPI', 'Python', 'EasyOCR', 'PyCryptodome', 'React'],

    problem: 'Conventional electronic voting systems lack public auditability, while many decentralized blockchain voting systems require complex crypto wallet setups that exclude non-technical voters.',
    why: 'Combining zero-gas blockchain recording with automated OCR identity verification enables secure, transparent elections without exposing voter privacy.',
    solution: 'Constructed SecureVote: a hybrid decentralized voting platform with Ethereum smart contracts, EasyOCR identification verification, and AES-256 encrypted voter metadata storage.',

    architecture: {
      summary: 'Hybrid Web3 architecture pairing an Ethereum smart contract ledger (Hardhat/Solidity) with a Python FastAPI backend for identity verification and cryptography.',
      components: [
        {
          name: 'Smart Contract Layer',
          description: 'Solidity contracts deployed on EVM handling candidate registration, anonymous ballot casting, and immutable vote counting.',
          tech: 'Solidity, Hardhat, OpenZeppelin, Ethers.js',
        },
        {
          name: 'Identity & Cryptography Backend',
          description: 'FastAPI service processing identity document OCR extraction and AES-256 encryption for PII protection.',
          tech: 'FastAPI, Python, EasyOCR, PyCryptodome',
        },
        {
          name: 'Voter Interface',
          description: 'Responsive React frontend guiding voters through verification, ballot selection, and receipt generation.',
          tech: 'React, Vite, Tailwind CSS, Lucide Icons',
        },
      ],
      dataFlow: [
        '1. Voter submits identity credentials for verification.',
        '2. FastAPI backend processes document via EasyOCR and validates eligibility.',
        '3. Voter casts ballot; transaction is signed and recorded onto the Ethereum smart contract.',
        '4. Vote count is immutably tallied on-chain with zero voter-ballot traceability.',
      ],
    },

    myContribution: [
      'Authored and tested Solidity smart contracts for ballot management and tallying using Hardhat.',
      'Developed FastAPI backend endpoints for OCR identity parsing and AES-256 data encryption.',
      'Integrated Ethers.js contract interactions with React voter dashboard.',
    ],

    technicalChallenges: [
      {
        challenge: 'Ensuring on-chain vote privacy while preventing duplicate voting from the same identity.',
        resolution: 'Generated one-way cryptographic voter hashes verified prior to contract execution.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Used OpenZeppelin contract libraries.',
        rationale: 'Guaranteed industry-standard smart contract security patterns against reentrancy and integer overflows.',
      },
    ],

    results: [
      'Successfully deployed and tested smart contracts in local Hardhat EVM environment.',
      'Results: Not specified',
    ],

    learnings: [
      'Deepened knowledge of EVM execution model, gas optimization, and smart contract security.',
      'Learned integration patterns bridging classical Python backend APIs with Web3 contract calls.',
    ],
  },
  {
    id: 'hrms-th',
    title: 'HRMS TH — Enterprise Human Resource Management System',
    tagline: 'Full-stack human resource management platform streamlining employee records, attendance tracking, leave approval workflows, and automated payroll slip generation.',
    category: 'WEB',
    featured: false,
    role: 'Full-Stack Developer',
    duration: '2 Months',
    teamSize: 'Individual Project',
    githubUrl: 'https://github.com/bhavya277/HRMS_TH',
    liveUrl: 'https://hrmsth.vercel.app',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Node.js', 'Express', 'MongoDB', 'JWT', 'jsPDF'],

    problem: 'Small and medium organizations struggle with manual attendance logging, informal leave approvals, and time-consuming payroll report generation.',
    why: 'A unified role-based system simplifies HR administrative overhead and provides transparent records for employees and management.',
    solution: 'Built HRMS TH: a production-deployed web application featuring role-based dashboards (Admin, HR, Employee), real-time attendance marking, leave workflows, and dynamic PDF salary slips.',

    architecture: {
      summary: 'Full-stack web application with a TypeScript React frontend deployed on Vercel and an Express/MongoDB backend service.',
      components: [
        {
          name: 'React Frontend Client',
          description: 'Feature-rich UI with role-based routing, interactive attendance calendars, leave forms, and chart dashboards.',
          tech: 'React 18, TypeScript, Tailwind CSS, Radix UI, Recharts, jsPDF',
        },
        {
          name: 'Backend API Service',
          description: 'Express.js application providing REST endpoints for user authentication, employee records, attendance, and leave management.',
          tech: 'Node.js, Express.js, JWT, Bcrypt',
        },
        {
          name: 'Database',
          description: 'Document database storing employee profiles, attendance logs, leave balances, and department structures.',
          tech: 'MongoDB, Mongoose ODM',
        },
      ],
      dataFlow: [
        '1. User authenticates via JWT login and dashboard renders role-specific views.',
        '2. Employees mark daily attendance and submit leave requests.',
        '3. HR/Admin reviews leave applications through interactive approval queues.',
        '4. Payroll module calculates compensation and generates downloadable PDF pay slips via jsPDF.',
      ],
    },

    myContribution: [
      'Developed the React frontend with Radix UI components and Tailwind styling.',
      'Implemented role-based authentication and protected routes for Admin and Employee tiers.',
      'Built automated client-side salary slip PDF generator using jsPDF.',
      'Deployed frontend application to Vercel.',
    ],

    technicalChallenges: [
      {
        challenge: 'Dynamic PDF salary slip generation across varying screen resolutions and printer formats.',
        resolution: 'Configured structured tabular layout rendering using jsPDF-autotable plugin.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Used Radix UI primitives with Tailwind CSS.',
        rationale: 'Provided accessible, unstyled UI primitives that allowed fast custom design development.',
      },
    ],

    results: [
      'Deployed live on Vercel with responsive mobile and desktop support.',
      'Results: Not specified (Live demo verified)',
    ],

    learnings: [
      'Learned role-based access control (RBAC) architecture on both client and server layers.',
      'Gained experience in client-side programmatic PDF document generation.',
    ],
  },
  {
    id: 'assetflow',
    title: 'AssetFlow — Enterprise Asset Lifecycle Management',
    tagline: 'Enterprise asset management platform to track, allocate, maintain, audit, and report on organizational physical and digital assets from procurement to retirement.',
    category: 'WEB',
    featured: false,
    role: 'Full-Stack Developer',
    duration: '1 Month',
    teamSize: 'Individual Project',
    githubUrl: 'https://github.com/bhavya277/AssetFlow',
    tags: ['React 19', 'TypeScript', 'FastAPI', 'Python', 'SQLite', 'PostgreSQL', 'JWT', 'Tailwind CSS'],

    problem: 'Organizations lose track of hardware assets, software licenses, and maintenance schedules when relying on static spreadsheets.',
    why: 'Centralized asset management ensures audit compliance, optimizes hardware utilization, and reduces unexpected equipment downtime.',
    solution: 'Engineered AssetFlow: an enterprise web platform enabling asset tracking, department allocation, scheduled maintenance logging, and audit history reporting.',

    architecture: {
      summary: 'Decoupled architecture featuring a React 19 / TypeScript single-page application and a high-performance Python FastAPI backend.',
      components: [
        {
          name: 'React Frontend',
          description: 'Dashboard providing asset inventory tables, status filters, maintenance calendars, and allocation forms.',
          tech: 'React 19, TypeScript, Vite, Tailwind CSS',
        },
        {
          name: 'FastAPI Backend',
          description: 'Async Python REST API handling asset CRUD operations, status state machines, and JWT authorization.',
          tech: 'FastAPI, Python 3, Pydantic, SQLAlchemy',
        },
        {
          name: 'Database',
          description: 'Relational data store tracking assets, categories, audit logs, and maintenance records.',
          tech: 'SQLite / PostgreSQL',
        },
      ],
      dataFlow: [
        '1. Administrator logs into AssetFlow with role-based JWT credentials.',
        '2. Asset inventory queries filtered by category, condition, or custodian.',
        '3. Maintenance tasks logged and linked to asset lifecycle history.',
        '4. Audit trails generated for compliance and status verification.',
      ],
    },

    myContribution: [
      'Built full-stack application structure using React 19 and FastAPI.',
      'Implemented Pydantic schema validation models for asset registration and audit events.',
      'Developed responsive UI views for asset allocation and status tracking.',
    ],

    technicalChallenges: [
      {
        challenge: 'Structuring flexible asset metadata attributes for diverse equipment types.',
        resolution: 'Designed relational category-to-asset schemas with optional specification fields.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Used FastAPI instead of Flask.',
        rationale: 'Benefited from native async support, automatic OpenAPI documentation, and strict Pydantic type validation.',
      },
    ],

    results: [
      'Completed functional asset lifecycle tracking application.',
      'Results: Not specified',
    ],

    learnings: [
      'Building type-safe Python backends with FastAPI and Pydantic.',
      'Working with React 19 features and modern build tooling.',
    ],
  },
  {
    id: 'particle-tracking',
    title: 'Particle Gesture Control — 3D Computer Vision Particle System',
    tagline: 'Interactive 3D particle simulation manipulated in real-time through hand gesture tracking using MediaPipe and Three.js in the browser.',
    category: 'AI/ML',
    featured: false,
    role: 'Frontend & Computer Vision Developer',
    duration: '2 Weeks',
    teamSize: 'Individual Project',
    githubUrl: 'https://github.com/bhavya277/Particle-tracking',
    liveUrl: 'https://particle-tracking.vercel.app',
    tags: ['JavaScript', 'HTML5', 'Three.js', 'MediaPipe Hands', 'Computer Vision', 'WebGL'],

    problem: 'Traditional human-computer interfaces are limited to physical touch and mouse inputs, lacking intuitive touchless spatial interaction.',
    why: 'In-browser computer vision enables accessible, zero-hardware touchless gesture manipulation for interactive graphics and spatial computing.',
    solution: 'Built Particle Gesture Control: an interactive web application that tracks hand landmarks via webcam using MediaPipe and morphs 3D particle shapes (spheres, cubes, Saturn rings, supernova) in real time using Three.js.',

    architecture: {
      summary: 'Client-side computer vision and WebGL rendering pipeline operating entirely in the browser without server dependencies.',
      components: [
        {
          name: 'Computer Vision Tracking',
          description: 'Processes real-time webcam video stream to identify 21 3D hand landmarks and classify gestures (Open hand, Fist, OK sign, Heart, Clap).',
          tech: 'MediaPipe Hands API, HTML5 Video',
        },
        {
          name: '3D Graphics & Physics Engine',
          description: 'Calculates particle velocity, spring forces, and shape morphing vertices rendered at 60 FPS.',
          tech: 'Three.js, WebGL',
        },
      ],
      dataFlow: [
        '1. Webcam video frames ingested by MediaPipe Hands model.',
        '2. Landmark coordinate array extracted and classified into gesture states.',
        '3. Target 3D coordinates calculated for particle mesh based on active gesture.',
        '4. Three.js animates particles to new positions using spring physics interpolation.',
      ],
    },

    myContribution: [
      'Implemented real-time MediaPipe hand landmark detection and gesture classification logic.',
      'Created 3D particle formations and mathematical morphing algorithms in Three.js.',
      'Designed responsive HUD overlay showing gesture recognition status and camera feedback.',
      'Deployed live application to Vercel.',
    ],

    technicalChallenges: [
      {
        challenge: 'Maintaining smooth 60 FPS rendering while running computer vision landmark inference on CPU.',
        resolution: 'Optimized particle buffer geometries and throttled landmark processing to minimize frame drops.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Built purely client-side with MediaPipe and Three.js.',
        rationale: 'Eliminated backend latency and server compute costs, allowing immediate zero-install user interaction.',
      },
    ],

    results: [
      'Live deployed application achieving real-time hand gesture tracking and 3D particle morphing.',
      'Results: Not specified (Live demo verified)',
    ],

    learnings: [
      'Gained practical experience with WebGL shaders, particle buffers, and 3D math in Three.js.',
      'Understood computer vision landmark processing pipelines in JavaScript.',
    ],
  },
  {
    id: 'expense-manager',
    title: 'Expense Manager — Personal Finance Web Application',
    tagline: 'Personal finance and budgeting web application featuring transaction management, category analytics, monthly spending trends, and MySQL persistence.',
    category: 'WEB',
    featured: false,
    role: 'Web Developer',
    duration: '1 Month',
    teamSize: 'Individual Project',
    githubUrl: 'https://github.com/bhavya277/Expense-Manager',
    liveUrl: 'https://expensemanager27.great-site.net/',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Chart.js', 'Apache', 'Docker'],

    problem: 'Tracking personal income and expenses manually often leads to disorganized financial records and lack of monthly spending visibility.',
    why: 'A simple, responsive web application provides clear financial summaries and categorical spending breakdowns.',
    solution: 'Constructed Expense Manager: a PHP/MySQL application with user authentication, CRUD transaction management, monthly financial reports, and Chart.js visualizations.',

    architecture: {
      summary: 'Classic LAMP-stack web application featuring PHP server-rendered pages, MySQL relational database, and Chart.js client visualizations.',
      components: [
        {
          name: 'PHP Application Backend',
          description: 'Handles session management, password hashing, transaction CRUD, and database operations.',
          tech: 'PHP 7.4+, Apache',
        },
        {
          name: 'MySQL Database',
          description: 'Stores user credentials, transaction amounts, categories, and timestamps with indexed relationships.',
          tech: 'MySQL 5.7+',
        },
        {
          name: 'Frontend UI & Analytics',
          description: 'Responsive interface styled with Bootstrap and powered by Chart.js for financial trend charts.',
          tech: 'HTML5, CSS3, JavaScript, Bootstrap, Chart.js',
        },
      ],
      dataFlow: [
        '1. User registers/logs in with password verification and session initialization.',
        '2. User logs income and expense transactions with category assignments.',
        '3. PHP queries MySQL database to compute monthly aggregates and totals.',
        '4. Dashboard renders summary cards and dynamic category breakdown charts.',
      ],
    },

    myContribution: [
      'Designed MySQL database schema for users, transactions, and categories.',
      'Implemented secure PHP authentication with session management and password hashing.',
      'Built interactive analytics dashboard using Chart.js.',
      'Configured Dockerfile and deployment for web hosting.',
    ],

    technicalChallenges: [
      {
        challenge: 'Preventing SQL injection vulnerabilities across transaction filter and search queries.',
        resolution: 'Utilized parameterized prepared statements (PDO/MySQLi) across all database interactions.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Used native PHP with MySQL without heavy frameworks.',
        rationale: 'Reinforced core web development principles, session security, and raw SQL optimization.',
      },
    ],

    results: [
      'Successfully deployed live on web hosting platform.',
      'Results: Not specified (Live demo verified)',
    ],

    learnings: [
      'Solidified understanding of relational database operations (CRUD), session security, and SQL injection prevention.',
      'Practiced integrating client-side chart libraries with server-rendered backend data.',
    ],
  },
];
