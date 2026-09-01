import { Link } from "react-router-dom";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "X (Twitter)", href: "https://x.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">Aic Tharuni Church</p>
          <p className="mt-2 text-sm text-cream/70">
            A place to belong, believe, and become. Join us this week.
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold-light">Connect</p>
          <ul className="mt-3 space-y-2">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-cream/80 hover:text-gold-light transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold-light">Visiting</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                to="/who-we-are#new-to-church"
                className="text-sm text-cream/80 hover:text-gold-light transition-colors"
              >
                What to expect
              </Link>
            </li>
            <li>
              <Link to="/give" className="text-sm text-cream/80 hover:text-gold-light transition-colors">
                Give online
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Aic Tharuni Church. All rights reserved.
      </div>
    </footer>
  );
}
