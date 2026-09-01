import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { AboutContent, LeaderProfile } from "../types";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ArchDivider from "../components/ArchDivider";

export default function WhoWeAre() {
  const [about, setAbout] = useState<AboutContent | null>(null);
  const [leaders, setLeaders] = useState<LeaderProfile[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([api.getAbout(), api.getLeadership()])
      .then(([aboutRes, leadersRes]) => {
        setAbout(aboutRes);
        setLeaders(leadersRes);
      })
      .catch(() => setError("This page is temporarily unavailable."));
  }, []);

  return (
    <>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="eyebrow">Who we are</p>
        <h1 className="font-display text-4xl font-semibold text-navy mt-1">
          Our Mission & Story
        </h1>
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl text-navy">Our Mission</h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal/80 leading-relaxed">
            {about?.mission ?? "Loading…"}
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-navy">Our Story</h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal/80 leading-relaxed">
            {about?.story ?? "Loading…"}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ArchDivider className="text-navy my-14" />
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="eyebrow">Leadership</p>
        <h2 className="font-display text-3xl font-semibold text-navy mt-1">Our Leadership</h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader) => (
            <div key={leader.id}>
              <ImagePlaceholder label={`${leader.role} photo`} aspect="portrait" className="rounded-xl" />
              <p className="font-display text-lg text-navy mt-3">{leader.name}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                {leader.role}
              </p>
              <p className="text-sm text-charcoal/70 mt-1">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="new-to-church" className="bg-navy text-cream mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="eyebrow text-gold-light">Take us with you</p>
          <h2 className="font-display text-3xl font-semibold mt-1">Download the App</h2>
          <p className="mt-3 text-sm sm:text-base text-cream/80 max-w-xl mx-auto">
            Get sermons, giving, and church updates on the go.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-gold text-navy-dark font-semibold text-sm hover:bg-gold-light transition-colors"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-cream/40 text-cream font-semibold text-sm hover:bg-cream/10 transition-colors"
            >
              Download for Android
            </a>
          </div>
          <p className="mt-3 text-xs text-cream/50">
            Replace these links with the real App Store / Play Store URLs once published.
          </p>
        </div>
      </section>
    </>
  );
}
