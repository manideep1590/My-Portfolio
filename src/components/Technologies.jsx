import { motion } from "framer-motion";

// Define the technology stack categories and items based on the resume
const TOOLKIT = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", color: "bg-blue-600 text-white" },
      { name: "SQL", color: "bg-sky-600 text-white" },
      { name: "T‑SQL", color: "bg-sky-700 text-white" },
      { name: "R", color: "bg-indigo-500 text-white" },
      { name: "Java (basic)", color: "bg-blue-700 text-white" },
      { name: "Scala", color: "bg-purple-600 text-white" },
      { name: "PySpark", color: "bg-orange-500 text-white" },
      { name: "Bash/Shell", color: "bg-green-600 text-white" },
    ],
  },
  {
    title: "ML & AI",
    items: [
      { name: "Scikit‑learn", color: "bg-orange-400 text-white" },
      { name: "XGBoost", color: "bg-blue-400 text-white" },
      { name: "LightGBM", color: "bg-green-500 text-white" },
      { name: "Random Forest", color: "bg-green-600 text-white" },
      { name: "Logistic Regression", color: "bg-purple-500 text-white" },
      { name: "TensorFlow", color: "bg-orange-500 text-white" },
      { name: "PyTorch", color: "bg-red-500 text-white" },
      { name: "SHAP", color: "bg-pink-500 text-white" },
      { name: "LIME", color: "bg-yellow-500 text-black" },
      { name: "MLflow", color: "bg-indigo-700 text-white" },
    ],
  },
  {
    title: "GenAI & NLP",
    items: [
      { name: "LLM Fine‑tuning", color: "bg-purple-700 text-white" },
      { name: "RAG", color: "bg-gray-600 text-white" },
      { name: "LangChain", color: "bg-emerald-600 text-white" },
      { name: "LlamaIndex", color: "bg-blue-500 text-white" },
      { name: "Hugging Face", color: "bg-yellow-400 text-black" },
      { name: "BioClinicalBERT", color: "bg-pink-600 text-white" },
      { name: "GPT Models", color: "bg-orange-600 text-white" },
      { name: "Prompt Engineering", color: "bg-gray-500 text-white" },
      { name: "NER", color: "bg-teal-500 text-white" },
    ],
  },
  {
    title: "Cloud Platforms",
    items: [
      { name: "AWS", color: "bg-stone-900 text-yellow-400" },
      { name: "Azure", color: "bg-blue-700 text-white" },
      { name: "GCP", color: "bg-blue-600 text-white" },
      { name: "BigQuery", color: "bg-indigo-500 text-white" },
      { name: "Redshift", color: "bg-purple-500 text-white" },
      { name: "Synapse", color: "bg-blue-500 text-white" },
    ],
  },
  {
    title: "Big Data & Distributed",
    items: [
      { name: "Apache Spark", color: "bg-orange-600 text-white" },
      { name: "Hadoop", color: "bg-yellow-600 text-black" },
      { name: "Hive", color: "bg-yellow-500 text-black" },
      { name: "Kafka", color: "bg-red-600 text-white" },
      { name: "HDFS", color: "bg-gray-700 text-white" },
      { name: "Airflow", color: "bg-blue-500 text-white" },
      { name: "Databricks", color: "bg-red-500 text-white" },
    ],
  },
  {
    title: "Visualization & Reporting",
    items: [
      { name: "Power BI", color: "bg-yellow-500 text-black" },
      { name: "Tableau", color: "bg-blue-500 text-white" },
      { name: "Looker", color: "bg-blue-600 text-white" },
      { name: "Qlik", color: "bg-green-500 text-white" },
      { name: "Streamlit", color: "bg-red-500 text-white" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", color: "bg-blue-700 text-white" },
      { name: "MySQL", color: "bg-blue-500 text-white" },
      { name: "Oracle", color: "bg-red-600 text-white" },
      { name: "SQL Server", color: "bg-red-500 text-white" },
      { name: "Cassandra", color: "bg-purple-600 text-white" },
      { name: "HBase", color: "bg-green-600 text-white" },
      { name: "Cosmos DB", color: "bg-blue-800 text-white" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", color: "bg-blue-500 text-white" },
      { name: "Git", color: "bg-red-500 text-white" },
      { name: "Jupyter Notebook", color: "bg-orange-400 text-white" },
      { name: "VS Code", color: "bg-blue-600 text-white" },
      { name: "Jira", color: "bg-blue-500 text-white" },
      { name: "Slack", color: "bg-purple-500 text-white" },
      { name: "GitHub", color: "bg-gray-800 text-white" },
    ],
  },
];

const titleVar = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const groupVar = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const chipVar = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};

const Technologies = () => {
  return (
    <div className="space-y-2">
      {TOOLKIT.map((cat) => (
        <motion.div
          key={cat.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={groupVar}
          className="rounded-lg border border-neutral-800 p-3"
        >
          <h3 className="mb-1 text-sm font-semibold">{cat.title}</h3>
          <motion.div variants={groupVar} className="flex flex-wrap gap-1.5">
            {cat.items.map((it) => (
              <motion.span
                key={it.name}
                variants={chipVar}
                className={`px-2.5 py-0.5 text-xs font-medium rounded ${it.color}`}
              >
                {it.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Technologies;
