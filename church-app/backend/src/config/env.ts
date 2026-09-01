import dotenv from "dotenv";

dotenv.config();

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined) {
    // eslint-disable-next-line no-console
    console.warn(`[env] Missing environment variable: ${name}`);
    return "";
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  clientOrigin: process.env.CLIENT_ORIGIN ?? "http://localhost:5173",
  mpesa: {
    env: (process.env.MPESA_ENV ?? "sandbox") as "sandbox" | "production",
    consumerKey: required("MPESA_CONSUMER_KEY"),
    consumerSecret: required("MPESA_CONSUMER_SECRET"),
    shortcode: required("MPESA_SHORTCODE", "174379"),
    passkey: required("MPESA_PASSKEY"),
    callbackUrl: required("MPESA_CALLBACK_URL"),
  },
};

export const MPESA_BASE_URL =
  env.mpesa.env === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";
