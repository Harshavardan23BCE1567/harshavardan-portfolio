import { Project, Experience, Skill, Metric } from "@/app/types";

export const personalInfo = {
  name: "Harshavardan N",
  title: "AI/ML Engineer",
  tagline: "Building intelligent systems at the intersection of research and engineering.",
  subTagline: "Published patent in neuroinformatics. 10+ end-to-end projects spanning federated learning, edge AI, and serverless cloud.",
  email: "harshavardan.n2023@vitstudent.ac.in",
  phone: "+91 80727 01565",
  location: "Chennai, India",
  linkedin: "https://linkedin.com/in/harshavardan-n-429a0b28b",
  github: "https://github.com/harshavardan23bce1567",
  portfolio: "https://harshavardan23bce1567.github.io/harshavardan-portfolio/",
};

export const metrics: Metric[] = [
  { label: "Published Patent", value: "1" },
  { label: "End-to-End Projects", value: "10", suffix: "+" },
  { label: "True Positive Rate", value: "95.1", suffix: "%" },
  { label: "Domains", value: "5" },
  { label: "Certifications", value: "3" },
  { label: "Research Labs", value: "2" },
];

export const certifications = [
  { name: "Oracle AI Foundation Associate", date: "May 2026", issuer: "Oracle" },
  { name: "Oracle Gen AI Professional", date: "May 2026", issuer: "Oracle" },
  { name: "AWS Cloud Practitioner", date: "In Progress", issuer: "AWS" },
];

export const projects: Project[] = [
  {
    id: "neuro-edge-federated",
    title: "Adaptive Neuro Edge Federated Framework",
    subtitle: "Privacy-preserving federated learning for intelligent edge devices",
    description: "A privacy-preserving federated learning framework designed for intelligent edge devices, enabling decentralized AI model training while minimizing centralized data dependency for healthcare-inspired use cases.",
    problem: "Centralized AI training requires raw data collection, creating privacy risks in healthcare and sensitive domains. Edge devices need intelligence without exposing data.",
    architecture: [
      "Distributed federated learning architecture with Python-based clients",
      "Secure aggregation protocol minimizing centralized data dependency",
      "Edge-optimized model compression for ESP32-class devices",
      "Differential privacy guarantees for healthcare-inspired use cases",
    ],
    impact: [
      "Enabled decentralized model training across edge devices",
      "Reduced data transmission by ~80% vs. centralized training",
      "Maintained model accuracy within 3% of centralized baseline",
      "Privacy-preserving by design — no raw data leaves the device",
    ],
    technologies: ["Python", "Federated Learning", "Edge AI", "Distributed Systems", "Privacy-Preserving AI"],
    metrics: [
      { label: "Data Reduction", value: "~80%" },
      { label: "Accuracy Retention", value: "97%" },
      { label: "Privacy Guarantee", value: "100%" },
    ],
    category: "AI/ML",
    featured: true,
  },
  {
    id: "cybersecurity-threat-detection",
    title: "Indian Cybersecurity Threat Detection",
    subtitle: "AI-powered edge security with real-time threat detection",
    description: "An AI-powered cybersecurity monitoring platform using ESP32 edge devices, machine learning, NLP, and real-time analytics for intelligent threat detection.",
    problem: "Distributed IoT networks lack intelligent threat detection at the edge, leaving devices vulnerable to attacks and anomalies.",
    architecture: [
      "ESP32-based distributed telemetry collection",
      "ML anomaly detection with adaptive model updates",
      "NLP log analysis for threat classification",
      "Streamlit dashboard for real-time monitoring",
      "MongoDB storage for persistent threat records",
    ],
    impact: [
      "Achieved 95.1% True Positive Rate on threat detection",
      "Significantly reduced false positives through adaptive thresholds",
      "Real-time detection with sub-second latency",
      "Scalable to 100+ edge devices",
    ],
    technologies: ["Python", "ESP32", "Machine Learning", "NLP", "Streamlit", "MongoDB", "Edge Computing"],
    metrics: [
      { label: "True Positive Rate", value: "95.1%" },
      { label: "False Positive Reduction", value: "Significant" },
      { label: "Detection Latency", value: "<1s" },
    ],
    category: "Cybersecurity",
  },
  {
    id: "insurance-fraud-prediction",
    title: "Insurance Fraud Propensity Prediction",
    subtitle: "Cost-sensitive XGBoost model for financial fraud detection",
    description: "A cost-sensitive machine learning model using XGBoost to identify fraudulent insurance claims through advanced feature engineering and predictive analytics.",
    problem: "Insurance fraud costs billions annually. Traditional rules miss sophisticated schemes, and standard ML models don't account for the asymmetric cost of false negatives.",
    architecture: [
      "Advanced feature engineering pipeline with domain-specific transforms",
      "Cost-sensitive XGBoost with custom loss function",
      "Threshold optimization for business-impact scoring",
      "Interpretable model decisions with SHAP values",
    ],
    impact: [
      "Achieved 67.3% recall on fraud detection",
      "Cost-sensitive optimization reduced financial losses",
      "Interpretable decisions for compliance teams",
      "Identified high-risk claims before payout",
    ],
    technologies: ["Python", "XGBoost", "Scikit-learn", "Feature Engineering", "Predictive Analytics", "SHAP"],
    metrics: [
      { label: "Recall", value: "67.3%" },
      { label: "Cost Sensitivity", value: "Optimized" },
      { label: "Interpretability", value: "High" },
    ],
    category: "Finance",
  },
  {
    id: "serverless-geospatial",
    title: "Serverless Geospatial Analysis",
    subtitle: "Scalable AWS serverless architecture for automated geospatial processing",
    description: "A scalable AWS serverless architecture for automated geospatial data processing using event-driven cloud services and Infrastructure as Code.",
    problem: "Geospatial data processing is compute-heavy and traditionally batch-oriented. Organizations need real-time, scalable solutions without server management overhead.",
    architecture: [
      "S3 trigger-based Lambda processing pipelines",
      "Automated raster data ingestion and transformation",
      "AWS Step Functions for complex orchestration",
      "SNS notifications for processing completion",
      "AWS CDK for Infrastructure as Code deployment",
    ],
    impact: [
      "Fully automated pipeline with zero server management",
      "Auto-scaling based on data volume",
      "Event-driven architecture for real-time processing",
      "Reproducible infrastructure via CDK",
    ],
    technologies: ["AWS Lambda", "AWS CDK", "Amazon S3", "AWS Step Functions", "Amazon SNS", "Python", "Serverless"],
    metrics: [
      { label: "Server Management", value: "Zero" },
      { label: "Scaling", value: "Auto" },
      { label: "Infrastructure", value: "IaC" },
    ],
    category: "Cloud",
  },
  {
    id: "puf-iot-monitoring",
    title: "PUF IoT Monitoring System",
    subtitle: "Hardware-anchored security for IoT with full-stack dashboard",
    description: "A secure IoT monitoring platform using ESP32-based Physically Unclonable Functions (PUFs) with a full-stack dashboard for real-time hardware authentication.",
    problem: "IoT devices are vulnerable to cloning and spoofing. Software-based authentication can be bypassed. Need hardware-anchored identity.",
    architecture: [
      "Custom three-stage Ring Oscillator for PUF generation",
      "Hardware-specific cryptographic key generation",
      "ESP32 firmware with secure boot",
      "React.js dashboard for real-time monitoring",
      "Node.js/Express API with SQLite persistence",
    ],
    impact: [
      "Each device has unclonable cryptographic identity",
      "Real-time hardware authentication via dashboard",
      "Resistant to physical cloning attacks",
      "Full-stack visibility into device security status",
    ],
    technologies: ["ESP32", "React.js", "Node.js", "Express.js", "SQLite", "PUF", "IoT Security"],
    metrics: [
      { label: "Cloning Resistance", value: "100%" },
      { label: "Authentication", value: "Real-time" },
      { label: "Stack Coverage", value: "Full" },
    ],
    category: "IoT",
  },
];

export const additionalProjects = [
  {
    id: "supply-chain-analytics",
    title: "Supply Chain Prescriptive Analytics",
    description: "Predictive and prescriptive analytics for supply chain optimization.",
    technologies: ["Python", "Predictive Analytics", "Optimization"],
  },
  {
    id: "quantum-crop-pathogenesis",
    title: "Quantum-Enhanced Hyperspectral Crop Pathogenesis",
    description: "Quantum computing simulation for hyperspectral crop disease detection.",
    technologies: ["Python", "Quantum Computing", "Hyperspectral Imaging"],
  },
  {
    id: "constraint-solver",
    title: "Constraint-Based Problem Solver",
    description: "General-purpose constraint satisfaction problem solver.",
    technologies: ["Python", "Algorithms", "Optimization"],
  },
  {
    id: "cloudy-url-shortener",
    title: "Cloudy URL Shortener",
    description: "Serverless URL shortening service with analytics.",
    technologies: ["Node.js", "Serverless", "AWS"],
  },
  {
    id: "flix-streaming",
    title: "Flix — Movie Streaming Platform",
    description: "Responsive movie streaming website with recommendation engine.",
    technologies: ["React.js", "Node.js", "MongoDB"],
  },
  {
    id: "emotai-chatbot",
    title: "EmotAI — Mental Health Chatbot",
    description: "NLP-powered mental health support with empathetic response generation.",
    technologies: ["Python", "NLP", "Flask", "React"],
  },
];

export const experiences: Experience[] = [
  {
    id: "neuro-informatics",
    title: "Research Intern",
    organization: "Centre of Neuro Informatics, VITCC",
    location: "Chennai, India",
    date: "May 2025 – Jul 2025",
    description: "Designed a Cortico-Thalamic Phase-Locked tFUS System for stroke rehabilitation. Co-authored a published patent. Performed EEG dataset simulations and complex calculations to validate technical claims.",
    type: "work",
  },
  {
    id: "oracle-ai",
    title: "Oracle AI Foundation Associate",
    organization: "Oracle",
    location: "Online",
    date: "May 2026",
    description: "Foundational certification in artificial intelligence concepts and Oracle AI services.",
    type: "certification",
  },
  {
    id: "oracle-genai",
    title: "Oracle Gen AI Professional",
    organization: "Oracle",
    location: "Online",
    date: "May 2026",
    description: "Professional certification in generative AI technologies and applications.",
    type: "certification",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    organization: "VIT",
    location: "Chennai, India",
    date: "Mar 2026",
    description: "Advanced training in prompt engineering for large language models.",
    type: "course",
  },
  {
    id: "fullstack-bootcamp",
    title: "Full-Stack Web Development Bootcamp",
    organization: "Udemy",
    location: "Online",
    date: "May 2026",
    description: "Comprehensive full-stack development training covering React, Node.js, and modern web technologies.",
    type: "course",
  },
  {
    id: "python-bootcamp",
    title: "Python Pro Bootcamp",
    organization: "Udemy",
    location: "Online",
    date: "May 2026",
    description: "Intensive Python programming bootcamp covering advanced concepts and real-world applications.",
    type: "course",
  },
  {
    id: "aws-practitioner",
    title: "AWS Cloud Practitioner",
    organization: "AWS",
    location: "Online",
    date: "In Progress",
    description: "Cloud practitioner certification covering AWS fundamentals and cloud concepts.",
    type: "certification",
  },
  {
    id: "vit-education",
    title: "B.Tech Computer Science Engineering",
    organization: "Vellore Institute of Technology",
    location: "Chennai, India",
    date: "2023 – 2027 (Expected)",
    description: "Computer Science undergraduate specializing in Artificial Intelligence, Machine Learning, and Data Science.",
    type: "education",
  },
];

export const skills: Skill[] = [
  // AI/ML
  { name: "Python", category: "ai-ml", level: 95 },
  { name: "Machine Learning", category: "ai-ml", level: 90 },
  { name: "Predictive Analytics", category: "ai-ml", level: 88 },
  { name: "NLP", category: "ai-ml", level: 82 },
  { name: "XGBoost", category: "ai-ml", level: 85 },
  { name: "Feature Engineering", category: "ai-ml", level: 87 },
  { name: "Scikit-learn", category: "ai-ml", level: 90 },
  { name: "Pandas", category: "ai-ml", level: 92 },
  { name: "NumPy", category: "ai-ml", level: 90 },
  { name: "Federated Learning", category: "ai-ml", level: 85 },
  { name: "Edge AI", category: "ai-ml", level: 80 },

  // Cloud
  { name: "AWS Lambda", category: "cloud", level: 85 },
  { name: "AWS CDK", category: "cloud", level: 80 },
  { name: "Step Functions", category: "cloud", level: 78 },
  { name: "Amazon SNS", category: "cloud", level: 75 },
  { name: "Amazon S3", category: "cloud", level: 82 },
  { name: "Serverless", category: "cloud", level: 85 },

  // Backend
  { name: "Flask", category: "backend", level: 88 },
  { name: "Node.js", category: "backend", level: 85 },
  { name: "Express.js", category: "backend", level: 85 },
  { name: "REST API", category: "backend", level: 90 },
  { name: "MongoDB", category: "backend", level: 82 },
  { name: "SQLite", category: "backend", level: 88 },
  { name: "SQL", category: "backend", level: 85 },

  // Frontend
  { name: "React.js", category: "frontend", level: 88 },
  { name: "JavaScript", category: "frontend", level: 90 },
  { name: "TypeScript", category: "frontend", level: 82 },
  { name: "Tailwind CSS", category: "frontend", level: 85 },

  // Edge/IoT
  { name: "ESP32", category: "edge-iot", level: 85 },
  { name: "PUF", category: "edge-iot", level: 78 },
  { name: "IoT Security", category: "edge-iot", level: 80 },

  // Languages
  { name: "Java", category: "languages", level: 80 },
  { name: "C++", category: "languages", level: 78 },
  { name: "C", category: "languages", level: 75 },

  // Tools
  { name: "Git", category: "tools", level: 92 },
  { name: "GitHub", category: "tools", level: 90 },
  { name: "Linux", category: "tools", level: 85 },
  { name: "VS Code", category: "tools", level: 95 },
];

export const patent = {
  title: "Cortico-Thalamic Phase-Locked Transcranial Focused Ultrasound (tFUS) System",
  status: "Published",
  date: "May 2026",
  section: "Section 11A",
  role: "Co-author",
  domain: "Neuroinformatics, Medical AI, Stroke Rehabilitation",
  description: "A phase-locked transcranial focused ultrasound system designed to enhance stroke rehabilitation through cortico-thalamic neural modulation.",
};

export const aboutContent = {
  headline: "Systems thinker. Research-backed builder.",
  paragraphs: [
    "I'm an AI/ML Engineer who doesn't just train models — I architect systems that ship. My work spans the full stack: from ESP32 edge devices running federated learning, to AWS serverless pipelines processing geospatial data, to ML models detecting insurance fraud with 67.3% recall.",
    "I spent a summer at the Centre of Neuro Informatics, VIT Chennai, designing a phase-locked transcranial focused ultrasound system for stroke rehabilitation. That work became a published patent — my first contribution to medical AI.",
  ],
  values: [
    {
      title: "Privacy-First AI",
      description: "Federated learning, edge computing, and PUF security ensure data never leaves its source.",
      icon: "Shield",
    },
    {
      title: "Research to Production",
      description: "From EEG simulations to deployed systems — every project bridges the lab and the real world.",
      icon: "Beaker",
    },
    {
      title: "Measurable Impact",
      description: "Every project has a metric. 95.1% TPR. 67.3% recall. 80% data reduction. Not just models — results.",
      icon: "BarChart3",
    },
  ],
};
