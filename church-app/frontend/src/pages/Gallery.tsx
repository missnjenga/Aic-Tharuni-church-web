import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { GalleryCategory, GalleryPhoto } from "../types";
import GalleryGrid from "../components/GalleryGrid";

const tabs: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "leaders", label: "Leaders" },
  { id: "women", label: "Women" },
  { id: "men", label: "Men" },
  { id: "youth", label: "Youth" },
  { id: "church-school", label: "Church School" },
];

export default function Gallery() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("all");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getGallery()
      .then(setPhotos)
      .catch(() => setError("Gallery is temporarily unavailable."));
  }, []);

  const visible = active === "all" ? photos : photos.filter((p) => p.category === active);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <p className="eyebrow">Gallery</p>
      <h1 className="font-display text-4xl font-semibold text-navy mt-1">Church Life</h1>
      <p className="mt-3 text-sm sm:text-base text-charcoal/70 max-w-2xl">
        Moments from across the church family — browse by ministry, or view
        everything below.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${
              active === tab.id
                ? "bg-navy text-cream border-navy"
                : "border-navy/20 text-navy hover:border-gold hover:text-gold-dark"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {error && <p className="mt-6 text-sm text-red-600">{error}</p>}

      <div className="mt-10">
        <GalleryGrid photos={visible} />
      </div>
    </section>
  );
}
