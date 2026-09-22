import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import { AboutContent } from "../types";

// Dynamically import every image in the congregation photos folder.
// Adjust the path to match where you keep them, e.g. "../assets/congregation/*.{jpg,jpeg,png,webp}"
const congregationImages = Object.values(
  import.meta.glob("../assets/congregation/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
) as string[];

function CongregationSlideshow({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (congregationImages.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % congregationImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (congregationImages.length === 0) {
    return (
      <div className={`rounded-2xl bg-navy/5 aspect-[3/4] flex items-center justify-center text-sm text-charcoal/50 ${className}`}>
        No photos found
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden aspect-[3/4] ${className}`}>
      {congregationImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Congregation photo"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {congregationImages.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {congregationImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-4 bg-white" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function AboutPreview() {
  const [about, setAbout] = useState<AboutContent | null>(null);

  useEffect(() => {
    api.getAbout().then(setAbout).catch(() => setAbout(null));
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <CongregationSlideshow className="rounded-2xl" />
      <div>
        <p className="eyebrow">About us</p>
        <h2 className="font-display text-3xl font-semibold text-navy mt-1">Our mission</h2>
        <p className="mt-4 text-sm sm:text-base text-charcoal/80 leading-relaxed">
          {about?.mission ?? "Loading..."}
        </p>
        <Link
          to="/who-we-are"
          className="mt-6 inline-block text-sm font-semibold text-gold-dark hover:text-navy transition-colors"
        >
          Read our full story →
        </Link>
      </div>
    </section>
  );
}