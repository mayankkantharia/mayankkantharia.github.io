export const project_summaries = {
  economic_dashboard: {
    title: "Interactive Economic Insights Dashboard",
    about:
      "An R Shiny analytics dashboard that turns global economic data into interactive, stakeholder-friendly insights.",
    problem:
      "Raw multi-source indicators were hard to compare across regions and sectors without a clean, navigable view.",
    contribution: [
      "Built drill-down views for regional and sector exploration",
      "Designed clear geospatial and time-series visualizations",
      "Cleaned, standardized, and merged multi-source datasets",
      "Structured data for fast, user-driven reporting",
    ],
    tech: "R • Shiny • ggplot2 • dplyr",
  },
  cloud_music_app: {
    title: "Cloud-Based Music Subscription Web Application",
    about:
      "A full-stack AWS app for music subscriptions covering compute, storage, serverless APIs, and NoSQL data design.",
    problem:
      "Needed a scalable cloud backend to handle registration, subscriptions, and media assets through REST APIs.",
    contribution: [
      "Deployed an EC2 Ubuntu server with Apache2 and public DNS",
      "Designed DynamoDB schemas for login, music, and subscription data",
      "Built backend flows for registration, subscription updates, and music queries",
      "Integrated API Gateway and Lambda for REST operations",
      "Automated artist image storage and retrieval via S3",
    ],
    tech: "AWS EC2 • S3 • DynamoDB • API Gateway • Lambda • Ubuntu • Apache2",
  },
  ru_ukraine_network: {
    title: "Russia-Ukraine War: Social Media & Network Analysis",
    about:
      "Cross-platform analysis of Reddit and YouTube narratives using NLP, topic modeling, and network science.",
    problem:
      "Required a scalable pipeline to compare discourse patterns and information diffusion across platforms.",
    contribution: [
      "Collected and preprocessed 90,000+ comments from Reddit and YouTube",
      "Built an NLP pipeline with VADER sentiment and LDA topic modeling",
      "Constructed interaction networks and ran Louvain community detection",
      "Modeled diffusion with the Independent Cascade algorithm",
      "Found divergence in community structure and narrative amplification",
    ],
    tech: "Python • PRAW • YouTube API • VADER • LDA • NetworkX • Louvain",
  },
  nlp_clothing: {
    title: "NLP Clothing Review Classification & Web Application",
    about:
      "End-to-end text classification with a Flask app for real-time review-based recommendations.",
    problem:
      "Needed a reliable classifier and a simple web experience for live predictions and search.",
    contribution: [
      "Engineered BoW, TF-IDF, and embedding feature sets, plus title-only and combined variants",
      "Benchmarked Logistic Regression, FastText, and deep learning models",
      "Delivered best accuracy with Title+Review features (88.97% mean CV)",
      "Deployed the model into a Flask app with prediction, search, and review submission",
    ],
    tech: "TensorFlow • FastText • TF-IDF • Logistic Regression • Flask • Python",
  },
  few_shot_hsi: {
    title: "Few-Shot Hyperspectral Image Classification",
    about:
      "Few-shot deep learning research for hyperspectral image classification using attention and temperature scaling.",
    problem:
      "Improve generalization on high-dimensional HSI data with limited labeled samples.",
    contribution: [
      "Integrated attention and temperature scaling to surpass published benchmarks",
      "Validated attention as the key driver through ablation studies",
      "Performed spectral-spatial preprocessing and feature extraction",
      "Evaluated across multiple HSI benchmarks for generalization",
    ],
    tech: "PyTorch • TensorFlow • Few-Shot Learning • Attention • HSI • Deep Learning",
  },
  telco_churn: {
    title: "Telco Customer Churn Prediction Analysis",
    about:
      "An end-to-end churn prediction study on IBM Telco data with robust evaluation and model comparison.",
    problem:
      "Needed a reliable pipeline to handle class imbalance and compare models fairly.",
    contribution: [
      "Cleaned data and surfaced churn drivers across 7,043 records and 21 features",
      "Handled class imbalance with stratified sampling and stratified cross-validation",
      "Built preprocessing with scaling, one-hot encoding, and ANOVA F-test selection",
      "Trained five ML models and one deep learning model; best ROC-AUC 0.836",
      "Delivered separate EDA and modeling notebooks with comparison tables",
    ],
    tech: "Python • pandas • NumPy • scikit-learn • TensorFlow • Matplotlib • Seaborn • Jupyter",
  },
};
