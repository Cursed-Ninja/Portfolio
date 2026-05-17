"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-label"
      className="border-t border-border"
    >
      <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-8 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionLabel id="about-label">About</SectionLabel>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-fg-muted sm:text-lg">
            <p>
              I&apos;m a backend and GenAI engineer at Coinbase, where I&apos;ve
              spent the last two years building the company&apos;s LLM
              infrastructure — multi-cloud platforms, RAG pipelines, AI agents,
              and internal tooling used daily by thousands of employees.
            </p>

            <p>
              I care about systems that hold up in production: real scale, real
              reliability, real impact. Equally comfortable going deep on
              distributed systems as I am wiring together agents and knowledge
              bases.
            </p>

            <p>
              Outside of work, I have a competitive programming background —
              CodeForces Expert, LeetCode Guardian, ICPC regionalist. That
              problem-solving foundation shapes how I approach engineering
              today.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
