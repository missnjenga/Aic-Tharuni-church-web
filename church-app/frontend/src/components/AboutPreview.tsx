import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "./ImagePlaceholder";
import { api } from "../lib/api";
import { AboutContent } from "../types";

export default function AboutPreview() {
  const [about, setAbout] = useState<AboutContent | null>(null);

  useEffect(() => {
    api.getAbout().then(setAbout).catch(() => setAbout(null));
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <ImagePlaceholder label="Congregation photo" aspect="portrait" className="rounded-2xl" />
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
