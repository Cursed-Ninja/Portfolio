import { site } from "@/lib/site";

const links = [
  { label: "GitHub", href: site.links.github, external: true },
  { label: "LinkedIn", href: site.links.linkedin, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-10 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono">
          © {year} &nbsp; {site.name}
        </p>

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {links.map(({ label, href, external }, i) => (
            <li key={label} className="flex items-center gap-4">
              {i > 0 && (
                <span className="text-border-strong" aria-hidden="true">
                  ·
                </span>
              )}
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline focus-visible:text-accent focus-visible:underline focus-visible:outline-none"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
