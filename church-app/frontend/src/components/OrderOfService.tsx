import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { ServiceItem } from "../types";
import heroImage from "../assets/heroImage.jpg";

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
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left column: Order of Service */}
        <div>
          <p className="eyebrow">Sunday</p>
          <h2 className="font-display text-3xl font-semibold text-navy mt-1">
            Order of Service
          </h2>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <ol className="mt-8 divide-y divide-navy/10 border-t border-b border-navy/10">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4"
              >
                <span className="text-sm font-medium text-gold-dark shrink-0 w-40">
                  {item.time}
                </span>
                <div>
                  <p className="font-display text-lg text-navy">{item.title}</p>
                  <p className="text-sm text-charcoal/70">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right column: Theme image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="AIC Tharuni Hephzibah Church 2026 Theme"
            className="w-full max-w-md rounded-lg shadow-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}