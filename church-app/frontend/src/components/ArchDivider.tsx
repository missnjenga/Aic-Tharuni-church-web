interface ArchDividerProps {
  className?: string;
  flip?: boolean;
}

/**
 * A row of rounded arches, echoing a church window/arcade — the page's
 * signature motif used to separate major sections instead of a plain rule.
 */
export default function ArchDivider({ className = "", flip = false }: ArchDividerProps) {
  return (
    <svg
      viewBox="0 0 240 24"
      preserveAspectRatio="none"
      className={`arch-divider ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <path
          key={i}
          d={`M${i * 20} 24 V12 A10 10 0 0 1 ${i * 20 + 20} 12 V24 Z`}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
