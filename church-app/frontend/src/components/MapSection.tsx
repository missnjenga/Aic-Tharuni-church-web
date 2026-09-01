export default function MapSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <p className="eyebrow">Find us</p>
      <h2 className="font-display text-3xl font-semibold text-navy mt-1">Location & Directions</h2>
      <p className="mt-3 text-sm text-charcoal/70 max-w-2xl">
        Replace the embed below with your real Google Maps location once the
        address is confirmed.
      </p>

      <div className="mt-6 rounded-2xl overflow-hidden border border-navy/10">
        {/*
          Placeholder for a Google Maps embed. Replace the src below with a
          real "Embed a map" iframe URL from Google Maps for the church address:
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%" height="360" style={{ border: 0 }}
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        */}
        <div
          role="img"
          aria-label="Map placeholder — church location"
          className="w-full h-[320px] flex items-center justify-center bg-navy/[0.06] text-navy/60 text-sm"
        >
          Map embed placeholder — church address
        </div>
      </div>
    </section>
  );
}
