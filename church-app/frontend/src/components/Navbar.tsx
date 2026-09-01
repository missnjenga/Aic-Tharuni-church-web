import { useState } from "react";
import { NavLink } from "react-router-dom";
import ImagePlaceholder from "./ImagePlaceholder";

const links = [
  { to: "/", label: "Home" },
  { to: "/give", label: "Give" },
  { to: "/gallery", label: "Gallery" },
  { to: "/who-we-are", label: "Who We Are" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-navy/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Logo + church name stacked, per brief */}
          <NavLink to="/" className="flex flex-col items-center gap-1 shrink-0" onClick={() => setOpen(false)}>
            <ImagePlaceholder
              label="Church logo"
              aspect="square"
              className="w-12 h-12 rounded-full"
            />
            <span className="font-display text-sm sm:text-base font-semibold text-navy leading-none">
              Grace Fellowship Church
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-body text-sm font-medium tracking-wide transition-colors ${
                    isActive ? "text-gold-dark" : "text-navy hover:text-gold-dark"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden text-navy"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-body text-sm font-medium py-1 ${
                    isActive ? "text-gold-dark" : "text-navy"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
