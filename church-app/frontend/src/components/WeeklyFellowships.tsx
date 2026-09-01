import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { WeeklyFellowship } from "../types";

export default function WeeklyFellowships() {
  const [items, setItems] = useState<WeeklyFellowship[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getWeeklyFellowships()
      .then(setItems)
      .catch(() => setError("This week's fellowships are temporarily unavailable."));
  }, []);

  return (
    <section className="bg-navy/[0.04]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <p className="eyebrow">During the week</p>
        <h2 className="font-display text-3xl font-semibold text-navy mt-1">Fellowships</h2>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((f) => (
            <div key={f.id} className="bg-cream rounded-xl border border-navy/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                {f.day} · {f.time}
              </p>
              <p className="font-display text-lg text-navy mt-1">{f.name}</p>
              <p className="text-sm text-charcoal/70 mt-1">{f.description}</p>
              <p className="text-xs text-charcoal/50 mt-3">{f.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
