import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h2>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img src={aboutImg} alt="About" className="rounded-2xl w-full md:w-4/5 shadow" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-neutral-300 leading-relaxed">
              AI/ML Engineer with over 6 years of experience designing, building and deploying
              production‑grade machine learning, deep learning and Generative AI solutions across
              healthcare, banking, financial services and enterprise analytics environments.
              Skilled in feature engineering, model optimisation, statistical modelling and ML
              experimentation, with hands‑on expertise in transformers, LLM fine‑tuning,
              retrieval‑augmented generation and privacy‑preserving AI.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

