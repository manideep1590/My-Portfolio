import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/Hero.jpg"; // FIXED PATH

const container = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay } },
});

// List of roles rotated in the typewriter effect
const ROLES = [
  "AI/ML Engineer",
  "Generative AI Specialist",
  "Data Scientist",
  "MLOps Engineer",
];

function useTypewriter(words, typeSpeed = 250, deleteSpeed = 100, holdMs = 2500) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = words[index];
    const speed = del ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, sub.length + 1);
        setSub(next);
        if (next === full) {
          setTimeout(() => setDel(true), holdMs);
        }
      } else {
        const next = full.slice(0, sub.length - 1);
        setSub(next);
        if (next.length === 0) {
          setDel(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [sub, del, index, words, typeSpeed, deleteSpeed, holdMs]);

  return sub;
}

const Hero = () => {
  const typed = useTypewriter(ROLES, 55, 35, 800);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap items-center">
        
        {/* LEFT SIDE — TEXT */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start">
            
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-[44px] md:text-[64px] font-extralight leading-tight"
            >
              Manideep
              <br />
              Nagendla
            </motion.h1>

            {/* Typewriter Role */}
            <motion.h2
              variants={container(0.15)}
              initial="hidden"
              animate="visible"
              className="mt-4 text-3xl font-semibold"
            >
              <span className="bg-gradient-to-r from-pink-300 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                {typed}
              </span>
              <span className="ml-1 inline-block h-8 w-1 animate-pulse bg-violet-400 align-middle" />
            </motion.h2>

            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-neutral-300 leading-relaxed"
            >
              I design, build and deploy production-grade machine learning, deep learning and
              Generative AI solutions across healthcare, banking and enterprise analytics. My
              expertise spans feature engineering, model optimisation, LLM fine-tuning,
              retrieval-augmented generation and scalable MLOps.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex gap-4 text-sm"
            >
              <a href="mailto:maninagendla09@gmail.com" className="rounded-xl border px-4 py-2">
                Email
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="rounded-xl border px-4 py-2">
                LinkedIn
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="rounded-xl border px-4 py-2">
                GitHub
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2">
          <motion.img
            className="h-72 w-72 rounded-2xl object-cover shadow-xl"
            src={profilePic}
            alt="Mani profile"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
