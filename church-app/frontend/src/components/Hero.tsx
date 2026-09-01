import { Link } from "react-router-dom";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-cream">
      {/* Pictorial background placeholder — replace with a real photo of the
          congregation/sanctuary. Kept absolutely positioned behind the text. */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="Hero background photo (congregation / sanctuary)"
          aspect="wide"
          className="h-full min-h-[520px] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 py-28 sm:py-36 text-center">
        <p className="eyebrow text-gold-light">You are welcome here</p>
        <h1 className="mt-4 font-display text-4xl sm:text-6xl font-semibold leading-tight">
          Grace Fellowship Church
        </h1>
        <p className="mt-5 text-base sm:text-lg text-cream/85 max-w-2xl mx-auto">
          A community gathered around worship, the Word, and one another. Join us
          this Sunday, wherever you are on your journey.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/who-we-are#new-to-church"
            className="px-6 py-3 rounded-full bg-gold text-navy-dark font-semibold text-sm hover:bg-gold-light transition-colors"
          >
            New here? Start here
          </Link>
          <Link
            to="/give"
            className="px-6 py-3 rounded-full border border-cream/40 text-cream font-semibold text-sm hover:bg-cream/10 transition-colors"
          >
            Give online
          </Link>
        </div>
      </div>
    </section>
  );
}
