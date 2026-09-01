import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import community from "../assets/community.jpg";


const slides = [community];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      {/* Hero image slider */}
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`AIC Tharuni Hephzibah Church ${index + 1}`}
            className={`absolute inset-0 h-full min-h-[520px] w-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay for readability — neutral black instead of navy/blue */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.6), rgba(0,0,0,0.35))",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative max-w-4xl mx-auto px-6 py-28 sm:py-36 text-center">
        <p className="eyebrow" style={{ color: "#f5deb3" }}>
          You are welcome here
        </p>

        <h1
          className="mt-4 font-display text-4xl sm:text-6xl font-semibold leading-tight"
          style={{ color: "#ffffff" }}
        >
          AIC Tharuni Hephzibah Church
        </h1>

        <p
          className="mt-5 text-base sm:text-lg max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          A community gathered around worship, the Word, and one another.
          Join us this Sunday, wherever you are on your journey.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/who-we-are#new-to-church"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-colors"
            style={{ backgroundColor: "#d4af37", color: "#1a1a1a" }}
          >
            New here? Start here
          </Link>

          <Link
            to="/give"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-colors"
            style={{
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#ffffff",
            }}
          >
            Give online
          </Link>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="h-2 rounded-full transition-all"
            style={{
              width: index === currentSlide ? "2rem" : "0.5rem",
              backgroundColor:
                index === currentSlide ? "#d4af37" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>
    </section>
  );
}