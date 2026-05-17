"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { experience } from "@/lib/experience";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-label"
      className="border-t border-border"
    >
      <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel id="experience-label">Experience</SectionLabel>
        </motion.div>

        <ol className="mt-12 space-y-14">
          {experience.map((role, i) => (
            <motion.li
              key={`${role.company}-${role.title}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-base text-fg sm:text-lg">
                  <span className="font-medium">{role.title}</span>
                  <span className="text-fg-subtle"> — </span>
                  <span>{role.company}</span>
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-fg-subtle shrink-0">
                  {role.dateRange}
                </p>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted sm:text-base">
                {role.description}
              </p>

              <ul
                aria-label={`${role.company} tech stack`}
                className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-fg-subtle"
              >
                {role.stack.map((tech, idx) => (
                  <li key={tech} className="flex items-center gap-3">
                    {idx > 0 && (
                      <span className="text-border-strong" aria-hidden="true">
                        ·
                      </span>
                    )}
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
