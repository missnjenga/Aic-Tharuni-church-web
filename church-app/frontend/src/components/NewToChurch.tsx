const steps = [
  {
    title: "Come as you are",
    text: "No dress code, no expectations — just come as you are and let us do the welcoming.",
  },
  {
    title: "Find parking & a seat",
    text: "Our welcome team will be at the entrance to help you find parking and a seat.",
  },
  {
    title: "Kids are welcome",
    text: "Church school runs alongside the main service for children of all ages.",
  },
  {
    title: "Stay for tea",
    text: "Stick around after the service for tea and to meet the community.",
  },
];

export default function NewToChurch() {
  return (
    <section id="new-to-church" className="bg-navy text-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <p className="eyebrow text-gold-light">First time?</p>
        <h2 className="font-display text-3xl font-semibold mt-1">New to Church</h2>
        <p className="mt-3 text-cream/80 max-w-2xl text-sm sm:text-base">
          Here's what to expect when you visit us for the first time.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="border border-cream/15 rounded-xl p-5">
              <p className="font-display text-lg">{s.title}</p>
              <p className="mt-1 text-sm text-cream/75">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
