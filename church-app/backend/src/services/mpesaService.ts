import axios from "axios";
import { env, MPESA_BASE_URL } from "../config/env";

interface DarajaTokenResponse {
  access_token: string;
  expires_in: string;
}

interface StkPushResponse {
  MerchantRequestID: string;
  CheckoutRequestID: string;
  ResponseCode: string;
  ResponseDescription: string;
  CustomerMessage: string;
}

let cachedToken: { value: string; expiresAt: number } | null = null;

/**
 * Fetches (and caches) an OAuth access token from Safaricom Daraja.
 * Requires MPESA_CONSUMER_KEY / MPESA_CONSUMER_SECRET to be set.
 */
async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.value;
  }

  const credentials = Buffer.from(
    `${env.mpesa.consumerKey}:${env.mpesa.consumerSecret}`
  ).toString("base64");

  const { data } = await axios.get<DarajaTokenResponse>(
    `${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
    { headers: { Authorization: `Basic ${credentials}` } }
  );

  cachedToken = {
    value: data.access_token,
    // refresh a minute before actual expiry
    expiresAt: Date.now() + (Number(data.expires_in) - 60) * 1000,
  };

  return cachedToken.value;
}

function timestampNow(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    d.getFullYear().toString() +
    pad(d.getMonth() + 1) +
    pad(d.getDate()) +
    pad(d.getHours()) +
    pad(d.getMinutes()) +
    pad(d.getSeconds())
  );
}

function buildPassword(timestamp: string): string {
  const raw = `${env.mpesa.shortcode}${env.mpesa.passkey}${timestamp}`;
  return Buffer.from(raw).toString("base64");
}

/** Normalizes a Kenyan phone number to the 2547XXXXXXXX / 2541XXXXXXXX format Daraja expects. */
export function normalizePhoneNumber(input: string): string {
  const digits = input.replace(/\D/g, "");
  if (digits.startsWith("254")) return digits;
  if (digits.startsWith("0")) return `254${digits.slice(1)}`;
  if (digits.startsWith("7") || digits.startsWith("1")) return `254${digits}`;
  return digits;
}

export async function initiateStkPush(params: {
  phoneNumber: string;
  amount: number;
  accountReference: string;
  transactionDesc: string;
}): Promise<StkPushResponse> {
  const token = await getAccessToken();
  const timestamp = timestampNow();
  const password = buildPassword(timestamp);
  const phone = normalizePhoneNumber(params.phoneNumber);

  const payload = {
    BusinessShortCode: env.mpesa.shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: Math.round(params.amount),
    PartyA: phone,
    PartyB: env.mpesa.shortcode,
    PhoneNumber: phone,
    CallBackURL: env.mpesa.callbackUrl,
    AccountReference: params.accountReference.slice(0, 12) || "Giving",
    TransactionDesc: params.transactionDesc.slice(0, 13) || "Giving",
  };

  const { data } = await axios.post<StkPushResponse>(
    `${MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest`,
    payload,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return data;
}
