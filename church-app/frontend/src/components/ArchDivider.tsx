interface ArchDividerProps {
  className?: string;
  flip?: boolean;
}

export default function ArchDivider({
  className = "",
  flip = false,
}: ArchDividerProps) {
  return (
    <div
      className={`section-divider ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <span className="divider-main" />
      <span className="divider-accent" />
    </div>
  );
}