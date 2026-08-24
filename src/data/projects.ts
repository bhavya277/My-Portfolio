import { ProjectCaseStudy } from '../types';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'globetrotter',
    title: 'GlobeTrotter — Full-Stack Intelligent Travel Companion',
    tagline: 'End-to-end full-stack travel discovery and AI-assisted itinerary generation platform with interactive maps and dynamic recommendation engines.',
    category: 'WEB',
    featured: true,
    role: 'Lead Full-Stack & AI Systems Developer',
    duration: '2 Months',
    teamSize: 'Individual / Capstone',
    githubUrl: 'https://github.com/modibhavya/globetrotter',
    liveUrl: 'https://globetrotter-demo.vercel.app',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Generative AI', 'Tailwind CSS', 'REST API'],
    
    // 10-Part Case Study
    problem: 'Modern travel planning is fragmented across dozens of disconnected review sites, generic itineraries, and complex booking engines, leading to decision fatigue and impersonal travel suggestions.',
    why: 'Travelers spend an average of 10+ hours researching trips. An intelligent platform that combines real-time geospatial data with personalized AI planning reduces planning time while increasing itinerary quality.',
    solution: 'Engineered GlobeTrotter: a modular web platform where users explore curated destinations, generate custom contextual day-by-day itineraries using structured LLM prompts, and interactively manage trip budgets and bookmarks.',
    
    architecture: {
      summary: 'Three-tier architecture with a decoupled React SPA frontend, RESTful Node/Express API service, and PostgreSQL persistence with an external AI inference gateway.',
      components: [
        {
          name: 'Frontend Client',
          description: 'Responsive React + TypeScript interface utilizing client-side state management, interactive map overlays, and optimistic UI updates.',
          tech: 'React 18, TypeScript, Tailwind CSS',
        },
        {
          name: 'Backend API Service',
          description: 'Express.js application handling authentication, itinerary generation workflows, rate-limiting, and validation schemas.',
          tech: 'Node.js, Express, JWT, Zod',
        },
        {
          name: 'Database & Storage',
          description: 'Normalized relational database storing user profiles, cached destination data, saved trips, and custom user pins.',
          tech: 'PostgreSQL, Prisma ORM',
        },
        {
          name: 'AI Synthesis Engine',
          description: 'Structured prompt orchestration pipeline that parses user constraints (budget, vibe, duration) and streams validated JSON itinerary structures.',
          tech: 'OpenAI API / Claude SDK, Structured JSON schema validation',
        },
      ],
      dataFlow: [
        '1. User submits destination preferences, travel dates, and budget profile.',
        '2. Client validates payload with Zod schema and dispatches authenticated API request.',
        '3. Backend validates session, queries cached destination metadata, and constructs structured LLM prompt.',
        '4. AI engine returns validated structured itinerary JSON.',
        '5. Backend persists trip snapshot in PostgreSQL and returns payload to client.',
        '6. Client renders interactive map markers, daily timeline breakdown, and expense estimates.',
      ],
    },

    myContribution: [
      'Architected the end-to-end database schema (Users, Trips, ItineraryItems, Bookmarks) and set up relational constraints in PostgreSQL.',
      'Developed the custom prompt-engineering pipeline with strict JSON schema validation to eliminate AI hallucinations.',
      'Implemented JWT-based authentication flow with HTTP-only cookies and bcrypt password hashing.',
      'Constructed the responsive React UI with interactive timeline views, modal case study inspectors, and dark mode.',
      'Configured CI/CD pipeline and deployed frontend on Vercel with backend services on Render/Railway.',
    ],

    technicalChallenges: [
      {
        challenge: 'Inconsistent LLM JSON responses causing parsing failures on complex multi-day itineraries.',
        resolution: 'Implemented strict JSON Schema mode and an automated retry-fallback validator with defensive parsing and default placeholder recovery.',
      },
      {
        challenge: 'High latency when querying external geospatial destination APIs alongside AI generation.',
        resolution: 'Introduced an in-memory caching layer for static destination metadata and decoupled the AI generation process with an asynchronous streaming state.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Used PostgreSQL with Prisma ORM instead of MongoDB.',
        rationale: 'Itineraries have strict relational integrity dependencies (Users → Trips → Days → Activities) where foreign keys and cascading deletes prevent orphaned data.',
      },
      {
        decision: 'Built custom REST API with Express rather than serverless functions.',
        rationale: 'Provided lower cold-start latency and simplified connection pooling to the relational database during heavy concurrent generation requests.',
      },
    ],

    results: [
      'Successfully generated and saved over 100+ simulated multi-day travel itineraries with 100% valid schema adherence.',
      'Sub-500ms average response time on cached destination queries.',
      'Lighthouse performance score of 96+ on desktop and mobile.',
    ],

    learnings: [
      'Gained deep experience in prompt engineering for structured production payloads rather than unstructured chat.',
      'Learned the critical importance of DB connection pooling when managing Node.js async requests against relational databases.',
      'Mastered defensive error handling on the frontend when dealing with multi-step asynchronous AI services.',
    ],
  },
  {
    id: 'nlp-sentiment-analyzer',
    title: 'NLP Sentiment & Subjectivity Classification Pipeline',
    tagline: 'End-to-end NLP model comparing classical ML (TF-IDF + Logistic Regression/SVM) vs Transformer fine-tuning for multi-domain sentiment analysis.',
    category: 'NLP',
    featured: true,
    role: 'ML & NLP Engineer',
    duration: '1 Month',
    teamSize: 'Individual',
    githubUrl: 'https://github.com/modibhavya/nlp-sentiment-pipeline',
    liveUrl: 'https://github.com/modibhavya/nlp-sentiment-pipeline',
    tags: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'PyTorch', 'Hugging Face', 'FastAPI'],
    
    problem: 'Standard rule-based sentiment models fail when processing text containing sarcasm, domain slang, or nuanced subjectivity across diverse customer reviews.',
    why: 'Accurate text sentiment extraction enables automated customer feedback triaging and empirical market sentiment tracking.',
    solution: 'Engineered a comparative NLP pipeline that benchmarks classical feature extraction (N-grams + TF-IDF with SVM/Logistic Regression) against a fine-tuned Transformer (DistilBERT) model with an inference API.',
    
    architecture: {
      summary: 'Data preprocessing and tokenization pipeline feeding into dual model evaluation workflows, served via a lightweight FastAPI inference endpoint.',
      components: [
        {
          name: 'Text Preprocessing Engine',
          description: 'Handles tokenization, regex cleaning, lemmatization, stop-word filtering, and emoji mapping.',
          tech: 'NLTK, Spacy, Regex',
        },
        {
          name: 'Baseline ML Model',
          description: 'Vectorized text representation using TF-IDF (1-3 n-grams) trained on Linear SVM with hyperparameter grid search.',
          tech: 'Scikit-learn',
        },
        {
          name: 'Deep Learning Model',
          description: 'Fine-tuned DistilBERT classification head for sequence classification with AdamW optimizer.',
          tech: 'PyTorch, Hugging Face Transformers',
        },
        {
          name: 'Serving Layer',
          description: 'FastAPI microservice returning sentiment polarity (-1.0 to +1.0), confidence probability, and key token attributions.',
          tech: 'FastAPI, Uvicorn, Pydantic',
        },
      ],
      dataFlow: [
        '1. Raw review text sent to FastAPI endpoint.',
        '2. Text is preprocessed and tokenized.',
        '3. Inference executed through the optimized DistilBERT model.',
        '4. Probabilities computed via Softmax and returned with latency metrics.',
      ],
    },

    myContribution: [
      'Implemented data cleaning, tokenization, and vectorization pipelines from scratch in Python.',
      'Trained and benchmarked 4 distinct classifiers (Naïve Bayes, Logistic Regression, Linear SVM, DistilBERT).',
      'Evaluated performance using Precision, Recall, F1-score, and Confusion Matrices.',
      'Developed FastAPI endpoint for real-time inference with Pydantic payload validation.',
    ],

    technicalChallenges: [
      {
        challenge: 'Class imbalance in the dataset with 70% positive and only 10% neutral reviews.',
        resolution: 'Applied stratified sampling, SMOTE oversampling for classical models, and weighted cross-entropy loss for transformer training.',
      },
      {
        challenge: 'Inference latency on DistilBERT was too slow for high-throughput batch evaluation.',
        resolution: 'Exported model weights to ONNX format and utilized dynamic quantization to reduce model footprint by 60% with <1% accuracy loss.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Chose DistilBERT over BERT-base.',
        rationale: 'Retained 97% of BERT accuracy while offering 60% faster inference and a significantly smaller memory profile.',
      },
    ],

    results: [
      'Achieved 91.4% F1-score with fine-tuned DistilBERT vs 84.2% on TF-IDF + Linear SVM baseline.',
      'Quantized inference execution under 35ms per sentence on standard CPU.',
    ],

    learnings: [
      'Understanding the trade-offs between compute latency and marginal accuracy gains in production NLP systems.',
      'Gained deep practical intuition into tokenization nuances (WordPiece vs Byte-Pair Encoding).',
    ],
  },
  {
    id: 'secure-threat-detector',
    title: 'Network Intrusion & Threat Detection System',
    tagline: 'Empirical cybersecurity analysis pipeline applying supervised machine learning to classify anomalous network packet flows and simulated intrusions.',
    category: 'CYBERSECURITY',
    featured: true,
    role: 'Security & ML Developer',
    duration: '1 Month',
    teamSize: 'Academic / Lab Project',
    githubUrl: 'https://github.com/modibhavya/network-threat-detector',
    liveUrl: 'https://github.com/modibhavya/network-threat-detector',
    tags: ['Python', 'Cybersecurity', 'Random Forest', 'Scikit-learn', 'Pandas', 'Network Security'],
    
    problem: 'Traditional signature-based intrusion detection systems (IDS) struggle to detect zero-day anomalies and polymorphic network attacks.',
    why: 'Behavioral machine learning models can identify statistical anomalies in packet headers and connection metadata before signatures exist.',
    solution: 'Built an anomaly classification pipeline trained on the NSL-KDD benchmark dataset, utilizing feature selection and ensemble trees to detect DoS, Probe, and R2L attacks.',
    
    architecture: {
      summary: 'Data preprocessing, correlation matrix feature reduction, Random Forest / XGBoost model training, and a real-time risk scoring CLI analyzer.',
      components: [
        {
          name: 'Feature Engineering Module',
          description: 'Calculates statistical packet distributions, connection duration ratios, and error flags.',
          tech: 'Pandas, NumPy',
        },
        {
          name: 'Classification Engine',
          description: 'Ensemble Random Forest classifier with 100 estimators and automated feature importance ranking.',
          tech: 'Scikit-learn',
        },
        {
          name: 'Threat Scoring CLI',
          description: 'Command-line tool that parses PCAP logs and outputs threat level assessments (Normal, Low, High, Critical).',
          tech: 'Python Argparse, Rich terminal formatting',
        },
      ],
    },

    myContribution: [
      'Conducted exploratory data analysis across 41 network flow attributes.',
      'Identified and eliminated multicollinear features using Pearson correlation thresholding.',
      'Trained Random Forest and Decision Tree models, tuning hyper-parameters via 5-fold cross-validation.',
      'Built a standalone CLI script to ingest network log records and output formatted threat summaries.',
    ],

    technicalChallenges: [
      {
        challenge: 'Extremely skewed categorical features (e.g. protocol_type, flag, service).',
        resolution: 'Applied One-Hot Encoding for low-cardinality flags and Target Encoding for high-cardinality network services.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Selected Random Forest over deep neural networks.',
        rationale: 'Provided clear feature importance interpretability (crucial for security audits) with minimal compute overhead.',
      },
    ],

    results: [
      'Attained 96.8% accuracy on DoS and Probe attack classification on test split.',
      'Identified top 5 critical network flow features indicative of malicious port scanning.',
    ],

    learnings: [
      'Gained hands-on understanding of network protocols (TCP, UDP, ICMP) and security log analysis.',
      'Appreciated the necessity of model interpretability in security-critical software.',
    ],
  },
  {
    id: 'data-insight-dashboard',
    title: 'Statistical Data Analytics & EDA Framework',
    tagline: 'Automated exploratory data analysis platform generating statistical distributions, correlation maps, and predictive feature insights from raw CSV datasets.',
    category: 'DATA SCIENCE',
    featured: false,
    role: 'Data Science Developer',
    duration: '3 Weeks',
    teamSize: 'Individual',
    githubUrl: 'https://github.com/modibhavya/data-insight-framework',
    tags: ['Python', 'Data Science', 'Pandas', 'Seaborn', 'Matplotlib', 'Streamlit'],
    
    problem: 'Manual exploratory data analysis for new tabular datasets is repetitive and often overlooks subtle outliers and correlation anomalies.',
    why: 'Accelerating the initial exploratory phase allows data scientists to prioritize feature engineering and domain problem solving.',
    solution: 'Constructed an automated interactive dashboard that ingests any tabular dataset, runs automated missing-value imputation checks, plots bivariate distributions, and highlights outlier clusters.',
    
    architecture: {
      summary: 'Streamlit interactive UI connected to a vectorized Pandas analytics engine generating dynamic matplotlib visualizations.',
      components: [
        {
          name: 'Ingestion & Validation',
          description: 'Parses uploaded CSV/Excel files and infers column data types.',
          tech: 'Pandas, NumPy',
        },
        {
          name: 'Statistical Analysis Engine',
          description: 'Calculates summary statistics, skewness, kurtosis, and correlation matrices.',
          tech: 'SciPy, Statsmodels',
        },
        {
          name: 'Visualization Interface',
          description: 'Interactive dashboard with customizable filters and automated report export.',
          tech: 'Streamlit, Plotly, Seaborn',
        },
      ],
    },

    myContribution: [
      'Wrote all statistical analysis algorithms and dynamic charting routines.',
      'Designed interactive Streamlit UI with multi-tab data drill-downs.',
      'Implemented automated PDF/HTML summary report export.',
    ],

    technicalChallenges: [
      {
        challenge: 'Rendering large datasets (>500k rows) in-browser caused UI stutter.',
        resolution: 'Added statistical downsampling and progressive rendering for scatter plots without losing distribution fidelity.',
      },
    ],

    engineeringDecisions: [
      {
        decision: 'Used Plotly for interactive zoomable charts alongside Seaborn for static reports.',
        rationale: 'Provided both interactive exploration and export-ready publication graphics.',
      },
    ],

    results: [
      'Reduced initial EDA workflow time from ~4 hours to under 5 minutes for standard tabular datasets.',
    ],

    learnings: [
      'Deepened mastery of Pandas vectorized operations and statistical hypothesis testing.',
    ],
  },
];
