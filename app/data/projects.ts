export type Project = {
  title: string;
  category: string;
  organization: string;
  description: string;
  highlights: string[];
  tags: string[];
  mediaIcon?: string;
  mediaImage?: { src: string; alt: string };
  codeUrl?: string;
  presentationUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Interactive Economic Insights Dashboard",
    category: "Data Visualization & Analytics",
    organization: "RMIT",
    description:
      "Delivered a Shiny-based analytics experience that turns raw economic data into navigable, stakeholder-friendly insights.",
    highlights: [
      "Built an interactive dashboard analyzing global economic trends with drill-down regional and sector exploration",
      "Designed clear, accessible visualizations for non-technical stakeholders",
      "Structured and transformed raw datasets for efficient, user-driven reporting and analysis",
      "Designed geospatial maps and time-series visualizations with drill-down country profiles",
      "Cleaned, standardized, and merged multi-source datasets to ensure consistent indicators",
    ],
    tags: ["R", "Shiny", "ggplot2", "dplyr"],
    mediaIcon: "mdi-chart-line",
    codeUrl: "https://github.com/mayankkantharia/Interactive-Economic-Insights-Dashboard",
    presentationUrl: "https://s4083242.shinyapps.io/Assignment-3/",
  },
  {
    title: "Cloud-Based Music Subscription Web Application",
    category: "Cloud Engineering",
    organization: "RMIT",
    description:
      "Deployed a full-stack music subscription platform on AWS, combining compute, storage, serverless APIs, and NoSQL data design.",
    highlights: [
      "Deployed an EC2 Ubuntu server with Apache2 and public DNS access",
      "Designed DynamoDB schemas for login, music, and subscription data",
      "Built backend logic for registration, subscription management, and music queries",
      "Integrated API Gateway and Lambda for REST-based workflows",
      "Automated artist image retrieval and secure storage in S3",
    ],
    tags: ["AWS EC2", "S3", "DynamoDB", "API Gateway", "Lambda", "Ubuntu", "Apache2"],
    mediaIcon: "mdi-cloud-outline",
  },
  {
    title: "Russia-Ukraine War: Social Media & Network Analysis",
    category: "NLP & Network Analytics",
    organization: "RMIT",
    description:
      "Analyzed cross-platform discourse on Reddit and YouTube using NLP, topic modeling, and network science to study narrative spread.",
    highlights: [
      "Collected and preprocessed 90,000+ Reddit and YouTube comments",
      "Built an NLP pipeline with VADER sentiment analysis and LDA topic modeling",
      "Detected platform-level divergence (YouTube Q=0.895, 600 communities vs Reddit Q=0.571, 237 communities)",
      "Modeled information diffusion with the Independent Cascade algorithm",
      "Identified centralized YouTube hubs amplifying leader-focused narratives",
    ],
    tags: ["Python", "PRAW", "YouTube API", "VADER", "LDA", "NetworkX", "Louvain"],
    mediaImage: { src: "/RussiaUkraineWar.jpg", alt: "Network graph visual for Russia-Ukraine information flows" },
    codeUrl: "https://github.com/mayankkantharia/Social-Media-A2",
    presentationUrl:
      "https://www.canva.com/design/DAGpRvWhgBA/LBbA9ui11CiYOPCiHlc6uA/view?utm_content=DAGpRvWhgBA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1d638ba156",
  },
  {
    title: "NLP Clothing Review Classification & Web Application",
    category: "NLP + Applied ML",
    organization: "RMIT",
    description:
      "Built and deployed NLP classification pipelines and a Flask web app for real-time review-based recommendations.",
    highlights: [
      "Engineered five feature representations (BoW, TF-IDF, embeddings, title-only, combined)",
      "Title+Review features achieved 88.97% mean accuracy across 5-fold CV",
      "Benchmarked Logistic Regression, FastText, and deep learning models",
      "Combined features outperformed single-input baselines by up to 2.3%",
      "Deployed the best model in a Flask app with prediction, search, and review submission",
    ],
    tags: ["TensorFlow", "FastText", "TF-IDF", "Logistic Regression", "Flask", "Python"],
    mediaIcon: "mdi-text-box-search-outline",
    codeUrl: "https://github.com/mayankkantharia/NLP-Clothing-Review-Classification",
    presentationUrl: "https://drive.google.com/file/d/1QWUPwDeab19cmGltI_YqWvUXHHhiTEey/view?usp=sharing"
  },
  {
    title: "Few-Shot Hyperspectral Image Classification",
    category: "Deep Learning Research",
    organization: "IIT Bombay (Final Year Project)",
    description:
      "Advanced few-shot hyperspectral image classification using attention and temperature scaling to improve generalization.",
    highlights: [
      "Beat published benchmarks with 99.55% overall accuracy vs 98.16% baseline",
      "Validated attention as the key driver via ablation studies",
      "Temperature scaling alone underperformed the baseline at 97.21%",
      "Performed spectral-spatial preprocessing and feature extraction",
      "Evaluated across multiple HSI benchmarks for generalization",
    ],
    tags: ["PyTorch", "TensorFlow", "Few-Shot Learning", "Attention", "HSI", "Deep Learning"],
    mediaIcon: "mdi-brain",
    codeUrl: "https://github.com/mayankkantharia/HSI-Few-Shot-Prototypical-Network",
    presentationUrl:
      "https://www.canva.com/design/DAFKl8v9FWY/QWfiTHsmM5fivNiZ58Stzg/view?utm_content=DAFKl8v9FWY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9048a6012d",
  },
  {
    title: "Telco Customer Churn Prediction Analysis",
    category: "ML + Business Analytics",
    organization: "Personal Project",
    description:
      "Built an end-to-end churn prediction pipeline on IBM Telco data with modeling insights tied to retention actions.",
    highlights: [
      "Built an end-to-end churn pipeline on IBM Telco data (7,043 rows, 21 features) to surface key churn drivers",
      "Handled class imbalance with stratified sampling (5,000 records) and stratified CV",
      "Set up preprocessing with scaling, one-hot encoding, and ANOVA F-test feature selection",
      "Reached 0.836 ROC-AUC with Logistic Regression across five ML models and one deep learning model",
      "Produced a reproducible analysis with separate EDA and modeling notebooks plus model comparison tables",
    ],
    tags: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "TensorFlow",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    mediaIcon: "mdi-chart-areaspline",
  },
];
