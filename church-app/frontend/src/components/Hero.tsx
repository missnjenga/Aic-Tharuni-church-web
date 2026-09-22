import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import community from "../assets/community.jpg";

const slides = [community];

// TODO: Replace with your channel's numeric ID.
// Find it: YouTube Studio → Settings → Channel → Basic info → "Channel ID"
const CHANNEL_ID = "UC87M_QrAQ0CaW985GuX0pBQ";
const CHANNEL_HANDLE = "@AICTharuniHephzibah";
const CHANNEL_URL = `https://www.youtube.com/channel/UC87M_QrAQ0CaW985GuX0pBQ${CHANNEL_HANDLE}`;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [showLiveModal, setShowLiveModal] = useState<boolean>(false);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    if (!showLiveModal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowLiveModal(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showLiveModal]);

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

          <button
            onClick={() => setShowLiveModal(true)}
            className="px-6 py-3 rounded-full font-semibold text-sm transition-colors flex items-center gap-2"
            style={{ backgroundColor: "#B5533C", color: "#ffffff" }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#ffffff" }}
            />
            Watch Live
          </button>
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

      {/* Live Sermon Popup Modal */}
      {showLiveModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          onClick={() => setShowLiveModal(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl"
            style={{ backgroundColor: "#1a1a1a" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-4">
              <h3 className="font-display text-lg font-semibold text-white">
                Live Sermon
              </h3>
              <button
                onClick={() => setShowLiveModal(false)}
                aria-label="Close live sermon"
                className="text-white/70 hover:text-white text-2xl leading-none transition-colors"
              >
                &times;
              </button>
            </div>

            {/* Video embed */}
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}`}
                title="AIC Tharuni Hephzibah Church - Live Sermon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Footer link */}
            <div className="px-5 py-4 flex justify-center">
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
                style={{ color: "#f5deb3" }}
              >
                Watch on YouTube instead →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}