// import all project images so they can be reused for the new project list
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

// Intro blurb shown on the landing page hero
export const HERO_CONTENT = `Hi! I'm Manideep Nagendla — an AI/ML Engineer with over 6 years of experience designing, building, and deploying production‑grade machine learning, deep learning, and Generative AI solutions across healthcare, banking, financial services, and enterprise analytics.`;

// Description used in the About section
export const ABOUT_TEXT = `AI/ML Engineer with 6+ years of experience designing, building, and deploying production‑grade machine learning, deep learning, and Generative AI solutions across healthcare, banking, financial services, and enterprise analytics environments. Skilled in feature engineering, model optimization, statistical modelling, and ML experimentation with hands‑on expertise in transformers, LLM fine‑tuning, retrieval‑augmented generation, and privacy‑preserving AI.`;

// Professional experience entries for the timeline
export const EXPERIENCES = [
  {
    year: "Jun 2024 – Present",
    role: "AI/ML Engineer",
    company: "Mayo Clinic",
    description: `Engineered clinical ML models and GenAI assistants to improve risk prediction and reduce manual chart review; built scalable pipelines and privacy‑preserving solutions.`,
    technologies: ["Python", "XGBoost", "Transformers", "Spark", "GCP"],
  },
  {
    year: "Jan 2023 – May 2024",
    role: "Data Scientist",
    company: "State Street Corporation",
    description: `Developed financial risk scoring and anomaly detection models, built ETL pipelines ingesting 50M+ records, and automated dashboards for liquidity and P&L trends.`,
    technologies: ["Python", "scikit-learn", "XGBoost", "SQL", "Spark", "AWS/Azure"],
  },
  {
    year: "Jun 2022 – Dec 2022",
    role: "Jr. Data Scientist",
    company: "AHRC",
    description: `Built classification and forecasting models, engineered 40+ features, and designed ETL pipelines and dashboards to support healthcare analytics use cases.`,
    technologies: ["Python", "scikit-learn", "SQL", "Tableau", "AWS/Azure"],
  },
  {
    year: "Jan 2020 – May 2022",
    role: "Data Analyst",
    company: "Atos Syntel Pvt Ltd",
    description: `Executed data cleaning, transformation, and validation, maintained ETL pipelines, built interactive dashboards, and automated reports for enterprise analytics initiatives.`,
    technologies: ["Python", "SQL", "Pandas", "Tableau", "Power BI", "Git"],
  },
];

// Highlighted projects derived from the resume
export const PROJECTS = [
  {
    title: "Clinical Risk Prediction Models",
    image: project1,
    description:
      "Machine learning models using XGBoost, Random Forest and Logistic Regression to predict patient risk scores for readmission, sepsis and chronic disease progression, improving early‑risk identification accuracy by 22%.",
    technologies: ["Python", "XGBoost", "Random Forest", "Logistic Regression", "GCP"],
  },
  {
    title: "GenAI Triage Assistant (RAG)",
    image: project2,
    description:
      "Fine‑tuned LLMs (Llama‑2, BioClinicalBERT) and built RAG‑based triage assistants to summarize physician notes, extract ICD‑10 codes, and enable clinicians to retrieve relevant patient history 60–70% faster.",
    technologies: ["Llama‑2", "BioClinicalBERT", "RAG", "LangChain", "LLMs"],
  },
  {
    title: "Financial Risk Scoring System",
    image: project3,
    description:
      "Developed ML models and anomaly detection algorithms to classify high‑risk transactions, built ETL pipelines ingesting 50M+ monthly records, and automated reporting dashboards for liquidity and P&L trends.",
    technologies: ["Python", "XGBoost", "Isolation Forest", "Spark", "AWS"],
  },
  {
    title: "Healthcare Analytics Pipeline",
    image: project4,
    description:
      "Designed and optimized ETL pipelines integrating EHR and clinical datasets, engineered 40+ features, performed EDA, and created dashboards to visualize risk scores and operational KPIs.",
    technologies: ["Python", "SQL", "ETL", "Tableau", "Power BI"],
  },
  {
    title: "Data Quality & Monitoring Platform",
    image: project5,
    description:
      "Automated data quality validation, drift detection, and model performance tracking using MLflow, Power BI, and Streamlit, improving dataset reliability by 30% across clinical ML workflows.",
    technologies: ["MLflow", "Power BI", "Streamlit", "Data Validation"],
  },
];

// Contact details used in the footer
export const CONTACT = {
  address: "Massachusetts, USA",
  phoneNo: "+1 (774) 300 9506",
  email: "maninagendla09@gmail.com",
};
