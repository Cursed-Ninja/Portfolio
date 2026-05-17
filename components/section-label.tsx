interface SectionLabelProps {
  children: React.ReactNode;
  id?: string;
}

export function SectionLabel({ children, id }: SectionLabelProps) {
  return (
    <h2
      id={id}
      className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle"
    >
      {children}
    </h2>
  );
}
