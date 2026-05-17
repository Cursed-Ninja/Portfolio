"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";
import { achievements } from "@/lib/achievements";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-label"
      className="border-t border-border"
    >
      <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel id="achievements-label">Achievements</SectionLabel>
        </motion.div>

        <div className="mt-12 space-y-14">
          {achievements.map((group) => (
            <div key={group.label}>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-xl italic text-fg sm:text-2xl"
              >
                {group.label}
              </motion.h3>

              <ul className="mt-6 space-y-3">
                {group.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={fadeUp}
                    className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="text-sm text-fg sm:text-base">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-fg-subtle sm:text-right">
                      {item.detail}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
