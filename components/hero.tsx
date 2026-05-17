"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const links = [
  {
    label: "GitHub",
    href: site.links.github,
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[88vh] items-center"
    >
      <div className="mx-auto w-full max-w-3xl px-6 py-24 sm:px-8 md:py-32">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle"
        >
          {site.name}
        </motion.p>

        <motion.h1
          id="hero-heading"
          custom={0.08}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 font-serif text-[clamp(2.5rem,7vw,5.25rem)] leading-[1.04] tracking-[-0.02em] text-fg"
        >
          Backend &amp; GenAI engineer building systems that{" "}
          <span className="italic text-fg-muted">scale.</span>
        </motion.h1>

        <motion.p
          custom={0.18}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg"
        >
          Currently SDE2 at Coinbase. Building LLM platforms, AI agents, and
          backend systems at scale.
        </motion.p>

        <motion.ul
          custom={0.28}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12 flex flex-wrap gap-x-6 gap-y-3"
        >
          {links.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-2 text-sm text-fg-muted transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-none"
              >
                <Icon className="h-4 w-4" aria-hidden="true" strokeWidth={1.6} />
                <span>{label}</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 -translate-x-0.5 translate-y-0 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                  strokeWidth={1.6}
                />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
