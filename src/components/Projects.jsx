import { motion } from "framer-motion";

// 👉 ADD YOUR IMAGE FILES IN src/assets/projects AND RENAME THEM TO MATCH BELOW
import proj1 from "../assets/projects/health-readmission.jpg";
import proj2 from "../assets/projects/fraud-ml.jpg";
import proj3 from "../assets/projects/recommendation-system.jpg";
import proj4 from "../assets/projects/churn-xgboost.jpg";
import proj5 from "../assets/projects/rag-bot.jpg";
import proj6 from "../assets/projects/demand-forecast.jpg";

const projects = [
  {
    title: "Hospital Readmission Risk Prediction (ML & Python)",
    description:
      "Developed a high-accuracy readmission risk model using Python, Scikit-Learn, and XGBoost. Engineered clinical features, balanced datasets, and delivered Power BI dashboards enabling physicians to reduce readmission rates by 15%.",
    img: proj1,
  },
  {
    title: "Fraud Detection & AML Pipeline (Machine Learning)",
    description:
      "Built a real-time AML anomaly detection engine using Python, Spark, and Isolation Forest. Designed ETL pipelines, automated alerts, reduced manual investigation workload by 40%, and improved false-positive detection accuracy.",
    img: proj2,
  },
  {
    title: "E-commerce Product Recommendation Engine",
    description:
      "Implemented both collaborative filtering and neural recommendation models using TensorFlow. Increased user conversion rate by 17% and built dashboards in Power BI for marketing analytics.",
    img: proj3,
  },
  {
    title: "Customer Churn Prediction (XGBoost + Power BI)",
    description:
      "Built a churn classification model using XGBoost with advanced feature engineering, SHAP-based explainability, segmentation analysis, and automated monthly dashboards for business stakeholders.",
    img: proj4,
  },
  {
    title: "RAG-based LLM Chatbot for Enterprise Knowledge Search",
    description:
      "Implemented a Retrieval-Augmented Generation (RAG) system using LangChain, OpenAI embeddings, and FAISS. Enabled employees to query internal documents using natural language with secure API access.",
    img: proj5,
  },
  {
    title: "Time-Series Demand Forecasting (LSTM / Prophet)",
    description:
      "Developed a forecasting solution using LSTM neural networks and Facebook Prophet to predict inventory needs. Reduced stockout events by 23% and optimized supply chain decision-making.",
    img: proj6,
  },
];

const container = (delay = 0) => ({
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay } },
});

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-20 text-center text-4xl font-semibold">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={container(index * 0.2)}
            initial="hidden"
            animate="visible"
            className="rounded-xl border border-neutral-700 p-4 shadow-lg hover:shadow-purple-500/20 transition"
          >
            <img
              src={project.img}
              alt={project.title}
              className="mb-4 h-56 w-full rounded-lg object-cover"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-neutral-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
