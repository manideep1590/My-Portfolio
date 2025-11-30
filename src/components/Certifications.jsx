import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// import logos
import awsLogo from "../assets/certs/aws.svg";
import gcpLogo from "../assets/certs/gcp.svg";
import oracleLogo from "../assets/certs/oracle.svg";
import ibmLogo from "../assets/certs/ibm.svg";
import hrLogo from "../assets/certs/hackerrank.svg";

const CERTS = [
  {
    title: "Microsoft Certified: Azure Data Engineer Associate (DP‑203)",
    issuer: "Microsoft",
    date: "2024",
    url: "#",
    logo: null,
  },
  {
    title: "Microsoft Certified: Azure AI Engineer Associate (AI‑102)",
    issuer: "Microsoft",
    date: "2024",
    url: "#",
    logo: null,
  },
];

const titleVar = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, delay: 0.06 * i },
  }),
};

export default function Certifications() {
  return (
    <section id="certifications" className="pb-12">
      <motion.h2
        variants={titleVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="my-8 text-center text-2xl font-semibold"
      >
        🎓 Certifications
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CERTS.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            variants={cardVar}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="group rounded-xl border border-neutral-800/80 bg-neutral-900/30 p-4 no-underline transition-colors hover:border-violet-500/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            aria-label={`Open credential: ${c.title}`}
          >
            <div className="flex items-center justify-between">
              {/* Logo + Title */}
              <div className="flex items-center gap-3 min-w-0">
                {c.logo && (
                  <img
                    src={c.logo}
                    alt={`${c.issuer} logo`}
                    className="h-6 w-6 shrink-0 rounded-sm"
                  />
                )}
                <div className="min-w-0">
                  <h3 className="truncate text-[15px] font-semibold tracking-tight group-hover:text-violet-300">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400">{c.issuer}</p>
                </div>
              </div>

              {/* Date + external link */}
              <div className="flex shrink-0 items-center gap-2">
                {c.date ? (
                  <span className="rounded-md bg-neutral-800 px-2 py-[3px] text-[11px] text-neutral-300">
                    {c.date}
                  </span>
                ) : null}
                <ExternalLink className="h-4 w-4 text-neutral-500 group-hover:text-violet-400" />
              </div>
            </div>

            <p className="mt-2 text-xs text-neutral-500">Click to view credential</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
