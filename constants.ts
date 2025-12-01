
import { Project, Comment, Achievement } from './types';

// Replace this URL with your local file path (e.g., "./resume.pdf") or a hosted URL.
// We use a W3C dummy PDF here because it allows cross-origin embedding (CORS).
export const RESUME_URL = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

// Placeholder video for the Video Resume feature
export const VIDEO_RESUME_URL = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4";

export const PORTFOLIO_OWNER = {
  name: "Soubhagya Ranjan Pradhan",
  subscribers: "1.2M",
  avatar: "./profile.png",
  bio: "Senior Data Scientist specializing in NLP and Generative AI. Ex-Google, Ex-Netflix. Building the future of AI interfaces.",
  socials: {
    linkedin: "https://www.linkedin.com/in/prsoubhagya/",
    github: "https://github.com/PRSOUBHAGYA",
    instagram: "https://www.instagram.com/soubhagyazone/?next=%2F",
    facebook: "https://www.facebook.com/pradhan.soubhagyaranjan",
    email: "mailto:prsoubhagyaranjan1997@gmail.com"
  }
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    title: "Received Star of the Month",
    date: "May 2025"
  },
  {
    id: "a2",
    title: "Winner: Global AI Hackathon",
    date: "April 2025"
  },
  {
    id: "a3",
    title: "Published Research Paper in NeurIPS",
    date: "January 2025"
  },
  {
    id: "a4",
    title: "Certified Google Cloud Professional Data Engineer",
    date: "December 2024"
  },
  {
    id: "a5",
    title: "Best Tech Speaker Award",
    date: "October 2024"
  }
];

// Centralized Video URLs grouped by domain/context
export const VIDEO_URLS = {
  CV: {
    yolo: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    lane: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    xray: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
  GENAI: {
    rag: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    llama: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    sdxl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  VIZ: {
    churn: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    climate: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    spotify: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  NLP: {
    sentiment: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    translator: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    fakeNews: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  },
  DE: {
    airflow: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    kafka: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    snowflake: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  }
};

export const PROJECTS: Project[] = [
  // --- Computer Vision ---
  {
    id: "cv-1",
    title: "Real-time Object Detection with YOLOv8",
    channelName: PORTFOLIO_OWNER.name,
    views: "24K",
    uploadedAt: "2 days ago",
    duration: "12:45",
    thumbnailUrl: "https://picsum.photos/seed/cv1/640/360",
    videoUrl: VIDEO_URLS.CV.yolo,
    description: "In this project, we implement a real-time object detection system using the YOLOv8 model deployed via a Python Flask backend and consumed by a React frontend. We optimize for latency using WebSockets.",
    techStack: ["Python", "YOLOv8", "Flask", "React", "WebSockets"],
    category: "Computer Vision",
    githubUrl: "https://github.com/alexdata/yolo-react"
  },
  {
    id: "cv-2",
    title: "Autonomous Vehicle Lane Detection",
    channelName: PORTFOLIO_OWNER.name,
    views: "15K",
    uploadedAt: "1 week ago",
    duration: "18:20",
    thumbnailUrl: "https://picsum.photos/seed/cv2/640/360",
    videoUrl: VIDEO_URLS.CV.lane,
    description: "Building a lane detection system for self-driving cars using OpenCV and deep learning techniques. Handles curved lanes and varying lighting conditions.",
    techStack: ["OpenCV", "Python", "Deep Learning", "NumPy"],
    category: "Computer Vision",
    githubUrl: "https://github.com/alexdata/lane-detection"
  },
  {
    id: "cv-3",
    title: "Medical X-Ray Pneumonia Classification",
    channelName: PORTFOLIO_OWNER.name,
    views: "32K",
    uploadedAt: "3 weeks ago",
    duration: "14:10",
    thumbnailUrl: "https://picsum.photos/seed/cv3/640/360",
    videoUrl: VIDEO_URLS.CV.xray,
    description: "Using Convolutional Neural Networks (CNNs) to classify chest X-ray images for pneumonia detection with 95% accuracy.",
    techStack: ["TensorFlow", "Keras", "CNN", "Python"],
    category: "Computer Vision",
    githubUrl: "https://github.com/alexdata/xray-classification"
  },

  // --- GenAI & LLMs ---
  {
    id: "gen-1",
    title: "RAG Chatbot for Legal Documents",
    channelName: PORTFOLIO_OWNER.name,
    views: "45K",
    uploadedAt: "4 days ago",
    duration: "22:15",
    thumbnailUrl: "https://picsum.photos/seed/gen1/640/360",
    videoUrl: VIDEO_URLS.GENAI.rag,
    description: "Building a Retrieval-Augmented Generation (RAG) system using LangChain and Gemini to answer questions from PDF legal documents.",
    techStack: ["LangChain", "Gemini API", "Python", "ChromaDB"],
    category: "GenAI & LLMs",
    githubUrl: "https://github.com/alexdata/legal-rag"
  },
  {
    id: "gen-2",
    title: "Fine-tuning LLaMA 2 for Code Generation",
    channelName: PORTFOLIO_OWNER.name,
    views: "120K",
    uploadedAt: "2 weeks ago",
    duration: "35:00",
    thumbnailUrl: "https://picsum.photos/seed/gen2/640/360",
    videoUrl: VIDEO_URLS.GENAI.llama,
    description: "A step-by-step guide to parameter-efficient fine-tuning (PEFT) of LLaMA 2 on a custom dataset of Python algorithms.",
    techStack: ["PyTorch", "HuggingFace", "LLaMA", "LoRA"],
    category: "GenAI & LLMs",
    githubUrl: "https://github.com/alexdata/llama-finetune"
  },
  {
    id: "gen-3",
    title: "AI Art Generator with Stable Diffusion XL",
    channelName: PORTFOLIO_OWNER.name,
    views: "88K",
    uploadedAt: "1 month ago",
    duration: "19:45",
    thumbnailUrl: "https://picsum.photos/seed/gen3/640/360",
    videoUrl: VIDEO_URLS.GENAI.sdxl,
    description: "Creating a web interface for Stable Diffusion XL to generate high-quality artistic images from text prompts.",
    techStack: ["Stable Diffusion", "Diffusers", "Gradio", "Python"],
    category: "GenAI & LLMs",
    githubUrl: "https://github.com/alexdata/sdxl-art"
  },

  // --- Data Visualization ---
  {
    id: "viz-1",
    title: "Interactive Customer Churn Dashboard",
    channelName: PORTFOLIO_OWNER.name,
    views: "8.5K",
    uploadedAt: "2 months ago",
    duration: "15:10",
    thumbnailUrl: "https://picsum.photos/seed/viz1/640/360",
    videoUrl: VIDEO_URLS.VIZ.churn,
    description: "An interactive dashboard built with Streamlit showing customer churn probabilities. The backend runs an XGBoost classifier.",
    techStack: ["Streamlit", "Plotly", "Python", "Pandas"],
    category: "Data Visualization",
    githubUrl: "https://github.com/alexdata/churn-dashboard"
  },
  {
    id: "viz-2",
    title: "Global Climate Change Visualizer",
    channelName: PORTFOLIO_OWNER.name,
    views: "12K",
    uploadedAt: "3 months ago",
    duration: "10:30",
    thumbnailUrl: "https://picsum.photos/seed/viz2/640/360",
    videoUrl: VIDEO_URLS.VIZ.climate,
    description: "Visualizing 50 years of climate data using D3.js and React. Features interactive heatmaps and time-series line charts.",
    techStack: ["D3.js", "React", "JavaScript", "TopoJSON"],
    category: "Data Visualization",
    githubUrl: "https://github.com/alexdata/climate-viz"
  },
  {
    id: "viz-3",
    title: "Spotify Listening History Analysis",
    channelName: PORTFOLIO_OWNER.name,
    views: "55K",
    uploadedAt: "4 months ago",
    duration: "16:00",
    thumbnailUrl: "https://picsum.photos/seed/viz3/640/360",
    videoUrl: VIDEO_URLS.VIZ.spotify,
    description: "Analyzing personal music taste trends over the decade using the Spotify API and Tableau.",
    techStack: ["Tableau", "Spotify API", "Data Analysis"],
    category: "Data Visualization",
    githubUrl: "https://github.com/alexdata/spotify-analysis"
  },

  // --- NLP ---
  {
    id: "nlp-1",
    title: "Sentiment Analysis on Twitter 2024",
    channelName: PORTFOLIO_OWNER.name,
    views: "12K",
    uploadedAt: "1 month ago",
    duration: "08:30",
    thumbnailUrl: "https://picsum.photos/seed/nlp1/640/360",
    videoUrl: VIDEO_URLS.NLP.sentiment,
    description: "Analyzing public sentiment during the 2024 elections using natural language processing techniques and BERT embeddings.",
    techStack: ["BERT", "HuggingFace", "Python", "Pandas"],
    category: "NLP",
    githubUrl: "https://github.com/alexdata/twitter-sentiment"
  },
  {
    id: "nlp-2",
    title: "Building a Multi-Language Translator",
    channelName: PORTFOLIO_OWNER.name,
    views: "21K",
    uploadedAt: "2 months ago",
    duration: "25:10",
    thumbnailUrl: "https://picsum.photos/seed/nlp2/640/360",
    videoUrl: VIDEO_URLS.NLP.translator,
    description: "Training a sequence-to-sequence Transformer model to translate English to French and German.",
    techStack: ["Transformers", "PyTorch", "NLP", "Python"],
    category: "NLP",
    githubUrl: "https://github.com/alexdata/translator"
  },
  {
    id: "nlp-3",
    title: "Fake News Detection System",
    channelName: PORTFOLIO_OWNER.name,
    views: "34K",
    uploadedAt: "3 months ago",
    duration: "14:45",
    thumbnailUrl: "https://picsum.photos/seed/nlp3/640/360",
    videoUrl: VIDEO_URLS.NLP.fakeNews,
    description: "Implementing an LSTM-based deep learning model to classify news articles as real or fake with high precision.",
    techStack: ["LSTM", "TensorFlow", "Scikit-learn", "NLP"],
    category: "NLP",
    githubUrl: "https://github.com/alexdata/fake-news-detector"
  },

  // --- Data Engineering ---
  {
    id: "de-1",
    title: "Scalable ETL Pipeline with Airflow",
    channelName: PORTFOLIO_OWNER.name,
    views: "18K",
    uploadedAt: "2 weeks ago",
    duration: "28:30",
    thumbnailUrl: "https://picsum.photos/seed/de1/640/360",
    videoUrl: VIDEO_URLS.DE.airflow,
    description: "Designing a robust ETL pipeline to process terabytes of data daily using Apache Airflow and AWS S3.",
    techStack: ["Apache Airflow", "AWS", "Python", "SQL"],
    category: "Data Engineering",
    githubUrl: "https://github.com/alexdata/airflow-etl"
  },
  {
    id: "de-2",
    title: "Real-time Stock Data Streaming with Kafka",
    channelName: PORTFOLIO_OWNER.name,
    views: "22K",
    uploadedAt: "1 month ago",
    duration: "31:15",
    thumbnailUrl: "https://picsum.photos/seed/de2/640/360",
    videoUrl: VIDEO_URLS.DE.kafka,
    description: "Setting up a Kafka producer/consumer architecture to stream real-time financial data into a ClickHouse database.",
    techStack: ["Apache Kafka", "Docker", "ClickHouse", "Python"],
    category: "Data Engineering",
    githubUrl: "https://github.com/alexdata/kafka-streaming"
  },
  {
    id: "de-3",
    title: "Data Warehousing with Snowflake & dbt",
    channelName: PORTFOLIO_OWNER.name,
    views: "14K",
    uploadedAt: "2 months ago",
    duration: "24:00",
    thumbnailUrl: "https://picsum.photos/seed/de3/640/360",
    videoUrl: VIDEO_URLS.DE.snowflake,
    description: "Modern data modeling practices using dbt (data build tool) to transform raw data in Snowflake for analytics.",
    techStack: ["Snowflake", "dbt", "SQL", "Data Modeling"],
    category: "Data Engineering",
    githubUrl: "https://github.com/alexdata/snowflake-dbt"
  }
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: "c1",
    author: "Jane Doe",
    text: "Great explanation of the architecture! How did you handle the latency issues?",
    timestamp: "1 day ago",
    likes: 12,
    avatar: "https://picsum.photos/seed/jane/40/40"
  },
  {
    id: "c2",
    author: "Tech Recruiter",
    text: "Impressive portfolio. Are you open to new opportunities?",
    timestamp: "2 hours ago",
    likes: 5,
    avatar: "https://picsum.photos/seed/recruiter/40/40"
  }
];
