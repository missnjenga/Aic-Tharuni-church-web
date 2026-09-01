import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { ServiceItem } from "../types";

export default function OrderOfService() {
  const [items, setItems] = useState<ServiceItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getOrderOfService()
      .then(setItems)
      .catch(() => setError("Order of service is temporarily unavailable."));
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <p className="eyebrow">Sunday</p>
      <h2 className="font-display text-3xl font-semibold text-navy mt-1">Order of Service</h2>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <ol className="mt-8 divide-y divide-navy/10 border-t border-b border-navy/10">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4">
            <span className="text-sm font-medium text-gold-dark shrink-0 w-40">{item.time}</span>
            <div>
              <p className="font-display text-lg text-navy">{item.title}</p>
              <p className="text-sm text-charcoal/70">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
