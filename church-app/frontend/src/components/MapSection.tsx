export default function MapSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/AIC+Tharuni+Church/@-1.1501767,36.5969247,17z/data=!3m1!4b1!4m6!3m5!1s0x182f277f1c2f0d5b:0x956f7775c316df7f!8m2!3d-1.1501821!4d36.5994996!16s%2Fg%2F11gf0b74qv?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <p className="eyebrow">Find us</p>

      <h2 className="font-display text-3xl font-semibold text-navy mt-1">
        Location & Directions
      </h2>

      <p className="mt-3 text-sm text-charcoal/70 max-w-2xl">
        We welcome you to join us for worship, fellowship and spiritual
        growth at AIC Tharuni Hephzibah Church.
      </p>

      {/* Google Maps */}
      <div className="mt-6 rounded-2xl overflow-hidden border border-navy/10 shadow-md">
        <iframe
          src="https://www.google.com/maps?q=-1.1501821,36.5994996&z=17&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="AIC Tharuni Church location"
          className="w-full"
        />
      </div>

      {/* Directions */}
      <div className="mt-6 flex justify-center">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full bg-gold text-navy-dark font-semibold text-sm hover:bg-gold-light transition-colors"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
