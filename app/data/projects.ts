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
    title: "Cloud-Based Music Subscription Web Application",
    category: "Cloud Engineering",
    organization: "RMIT",
    description:
      "Built and deployed an end-to-end cloud application for music subscription workflows on AWS, covering compute, storage, serverless APIs, and database operations.",
    highlights: [
      "Deployed a public cloud app on AWS EC2 (Ubuntu + Apache2)",
      "Designed DynamoDB schemas for login, music, and subscription domains",
      "Implemented backend flows for registration, subscription updates, and music queries",
      "Integrated API Gateway + Lambda for REST-based data operations",
      "Automated artist image handling with S3 upload and retrieval",
    ],
    tags: ["AWS EC2", "S3", "DynamoDB", "API Gateway", "Lambda", "Ubuntu", "Apache2"],
    mediaIcon: "mdi-cloud-outline",
  },
  {
    title: "Russia-Ukraine War: Social Media & Network Analysis",
    category: "NLP & Network Analytics",
    organization: "RMIT",
    description:
      "Analyzed cross-platform discourse using Reddit and YouTube data at scale, combining sentiment, topic modeling, and graph analytics to study narrative spread.",
    highlights: [
      "Collected and processed 90,000+ Reddit and YouTube comments",
      "Built preprocessing and NLP pipelines for sentiment and topic analysis",
      "Applied VADER sentiment analysis and LDA topic modeling",
      "Constructed user-interaction networks and ran Louvain community detection",
      "Simulated information diffusion with the Independent Cascade model",
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
      "Developed end-to-end NLP classification pipelines and integrated the trained model into a Flask web app for real-time recommendation prediction.",
    highlights: [
      "Implemented text preprocessing with tokenization, stopword removal, and filtering",
      "Generated BoW, TF-IDF, and embedding-based vectors",
      "Compared multiple models with 5-fold cross-validation",
      "Built Flask web app with prediction flow, search, and review submission",
      "Connected dynamic user interactions to live ML inference",
    ],
    tags: ["TensorFlow", "FastText", "TF-IDF", "Logistic Regression", "Flask", "Python"],
    mediaIcon: "mdi-text-box-search-outline",
  },
  {
    title: "Few-Shot Hyperspectral Image Classification",
    category: "Deep Learning Research",
    organization: "IIT Bombay (Final Year Project)",
    description:
      "Researched and implemented few-shot deep learning methods for hyperspectral image classification using attention and temperature scaling to improve generalization.",
    highlights: [
      "Implemented few-shot architectures for high-dimensional spectral-spatial data",
      "Applied attention mechanisms and temperature scaling for performance gains",
      "Ran preprocessing and feature extraction across curated HSI datasets",
      "Evaluated results with cross-validation and ablation studies",
      "Benchmarked performance across multiple HSI datasets",
    ],
    tags: ["PyTorch", "TensorFlow", "Few-Shot Learning", "Attention", "HSI", "Deep Learning"],
    mediaIcon: "mdi-brain",
    codeUrl: "https://github.com/mayankkantharia/HSI-Few-Shot-Prototypical-Network",
    presentationUrl:
      "https://www.canva.com/design/DAFKl8v9FWY/QWfiTHsmM5fivNiZ58Stzg/view?utm_content=DAFKl8v9FWY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9048a6012d",
  },
];
