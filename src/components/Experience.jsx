// src/components/Experience.jsx
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "AI/ML Engineer",
    company: "Mayo Clinic",
    dates: "Jun 2024 – Present",
    bullets: [
      "Developed clinical ML models (XGBoost, Random Forest, Logistic Regression) predicting risk scores for readmission, sepsis and chronic disease progression; improved early‑risk identification by 22%.",
      "Fine‑tuned large language models (Llama‑2, GPT variants, BioClinicalBERT) to summarise physician notes, extract ICD‑10 codes and identify symptom patterns; reduced manual chart review by 35%.",
      "Built GenAI‑powered triage assistants using retrieval‑augmented generation (RAG) enabling clinicians to retrieve patient history 60–70% faster.",
      "Engineered scalable ML pipelines with Python, Spark, SQL and GCP BigQuery; applied NER and topic modelling to millions of clinical notes and implemented model monitoring dashboards in Power BI/Streamlit.",
    ],
  },
  {
    role: "Data Scientist",
    company: "State Street Corporation",
    dates: "Jan 2023 – May 2024",
    bullets: [
      "Developed ML models for financial risk scoring using Python and XGBoost to classify high‑risk transactions; improved detection accuracy by 27%.",
      "Designed anomaly detection algorithms (Isolation Forest, Autoencoders) and built ETL pipelines ingesting 50M+ monthly trade records using SQL, Python and cloud storage; reduced data latency by 40%.",
      "Automated financial reports and dashboards with Tableau/Power BI to track liquidity, cash flows, exposure metrics and P&L trends; optimised pipeline runtime from 3 hours to 55 minutes.",
      "Migrated analytics workflows to AWS/Azure, collaborated with quants and risk analysts to refine model requirements, and ensured compliance with SOX, Basel and KYC/AML standards.",
    ],
  },
  {
    role: "Jr. Data Scientist",
    company: "AHRC",
    dates: "Jun 2022 – Dec 2022",
    bullets: [
      "Developed classification and forecasting models using scikit‑learn and XGBoost, improving prediction accuracy by 18–25%.",
      "Engineered 40+ features from demographic, clinical and service‑usage data and optimised ETL pipelines with Python and SQL for healthcare analytics.",
      "Deployed workflows on AWS/Azure (Lambda, S3, SQL Managed Instances), conducted extensive EDA on datasets >2M rows and evaluated models using ROC‑AUC and SHAP explainability.",
      "Built interactive dashboards in Tableau/Power BI, automated weekly reporting and maintained production support for SSIS, SQL Server and Snowflake.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Atos Syntel Pvt Ltd",
    dates: "Jan 2020 – May 2022",
    bullets: [
      "Executed end‑to‑end data cleaning, transformation and validation using Python (pandas, NumPy) and advanced SQL to support enterprise reporting.",
      "Developed and maintained ETL pipelines integrating data from multiple sources; improved data availability and reliability by 40%.",
      "Built interactive dashboards with Tableau/Power BI, performed EDA to identify trends and optimised recurring reports using Python scripts and scheduled SQL jobs.",
      "Collaborated with cross‑functional teams to gather requirements, supported ML POC models with feature preparation and implemented data quality checks.",
    ],
  },
];

// animation presets
const sectionTitle = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.08 * i },
  }),
};

const bullet = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const Experience = () => (
  <section id="experience" className="pb-16">
    <motion.h2
      variants={sectionTitle}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="my-12 text-center text-3xl font-bold"
    >
      Experience
    </motion.h2>

    <div className="space-y-8">
      {EXPERIENCES.map((e, idx) => (
        <motion.div
          key={e.company + idx}
          variants={card}
          custom={idx + 1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border border-neutral-800 p-6"
        >
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold">
              {e.role} · <span className="font-normal">{e.company}</span>
            </h3>
            <span className="whitespace-nowrap text-sm text-neutral-400">
              {e.dates}
            </span>
          </div>

          <ul className="list-disc space-y-2 pl-6 text-neutral-300">
            {e.bullets.map((b, i) => (
              <motion.li
                key={i}
                variants={bullet}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
