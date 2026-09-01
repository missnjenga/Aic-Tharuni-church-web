import MpesaForm from "../components/MpesaForm";

export default function Give() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
      <div>
        <p className="eyebrow">Give</p>
        <h1 className="font-display text-4xl font-semibold text-navy mt-1">
          Give via M-Pesa
        </h1>
        <p className="mt-4 text-sm sm:text-base text-charcoal/80 leading-relaxed">
          Your giving supports the ministry, outreach and day-to-day life of
          this church. Fill in the form and you'll receive an M-Pesa prompt on
          your phone to complete the payment securely.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-charcoal/70">
          <li>1. Choose what you're giving towards.</li>
          <li>2. Enter the amount and your M-Pesa number.</li>
          <li>3. Approve the prompt on your phone with your M-Pesa PIN.</li>
        </ul>
      </div>

      <MpesaForm />
    </section>
  );
}
