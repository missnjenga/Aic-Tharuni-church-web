import { FormEvent, useState } from "react";
import { api } from "../lib/api";

const givingCategories = ["Tithe", "Offering", "Building Fund", "Missions"];
const quickAmounts = [100, 500, 1000, 2000];

type Status = "idle" | "submitting" | "prompted" | "error";

export default function MpesaForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [category, setCategory] = useState(givingCategories[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!amount || amount <= 0) {
      setStatus("error");
      setMessage("Enter an amount greater than 0.");
      return;
    }

    setStatus("submitting");
    setMessage(null);

    try {
      const result = await api.giveViaMpesa({
        phoneNumber,
        amount: Number(amount),
        accountReference: category,
        description: `${category} giving`,
      });
      setStatus("prompted");
      setMessage(result.message ?? "Check your phone to complete the M-Pesa payment.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-navy/10 p-6 sm:p-8 shadow-sm">
      <div>
        <label className="text-sm font-medium text-navy" htmlFor="category">
          Give towards
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-navy/20 px-3 py-2.5 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
        >
          {givingCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-navy" htmlFor="amount">
          Amount (KES)
        </label>
        <input
          id="amount"
          type="number"
          min={1}
          inputMode="numeric"
          placeholder="e.g. 500"
          value={amount}
          onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
          className="mt-1.5 w-full rounded-lg border border-navy/20 px-3 py-2.5 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
          required
        />
        <div className="mt-2 flex flex-wrap gap-2">
          {quickAmounts.map((a) => (
            <button
              type="button"
              key={a}
              onClick={() => setAmount(a)}
              className="text-xs px-3 py-1.5 rounded-full border border-navy/20 text-navy hover:border-gold hover:text-gold-dark transition-colors"
            >
              KES {a.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-medium text-navy" htmlFor="phone">
          M-Pesa phone number
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="07XX XXX XXX"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-navy/20 px-3 py-2.5 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-gold text-navy-dark font-semibold text-sm py-3 hover:bg-gold-light transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending prompt…" : "Send M-Pesa prompt"}
      </button>

      {message && (
        <p
          className={`mt-4 text-sm ${status === "error" ? "text-red-600" : "text-sage-light"}`}
          role="status"
        >
          {message}
        </p>
      )}

      <p className="mt-4 text-xs text-charcoal/50">
        You'll receive an STK push prompt on your phone — enter your M-Pesa PIN
        to complete the transaction. No card or account details are stored.
      </p>
    </form>
  );
}
