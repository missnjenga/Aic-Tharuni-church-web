interface ImagePlaceholderProps {
  /** Path/key where the real image will eventually live, e.g. /images/hero.jpg */
  src?: string;
  label: string;
  className?: string;
  aspect?: "square" | "video" | "portrait" | "wide";
}

const aspectClasses: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

/**
 * Renders a labeled placeholder box wherever a real photo will eventually go.
 * Swap this out for a plain <img src={src} /> once real assets are supplied,
 * or wire `src` up to the CMS/upload path directly.
 */
export default function ImagePlaceholder({
  src,
  label,
  className = "",
  aspect = "square",
}: ImagePlaceholderProps) {
  if (src) {
    // Real image path provided — render it, but keep a graceful fallback.
    return (
      <img
        src={src}
        alt={label}
        className={`${aspectClasses[aspect]} w-full object-cover ${className}`}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`${aspectClasses[aspect]} w-full flex items-center justify-center bg-navy-light/10 border border-dashed border-navy/30 text-navy/60 text-xs uppercase tracking-wide text-center p-4 ${className}`}
    >
      {label}
    </div>
  );
}
