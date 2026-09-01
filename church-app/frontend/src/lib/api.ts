import {
  AboutContent,
  GalleryCategory,
  GalleryPhoto,
  LeaderProfile,
  ServiceItem,
  StkPushResponse,
  WeeklyFellowship,
} from "../types";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "/api";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message ?? `Request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
}

export const api = {
  getGallery: (category?: GalleryCategory) =>
    request<GalleryPhoto[]>(category ? `/gallery?category=${category}` : "/gallery"),
  getOrderOfService: () => request<ServiceItem[]>("/order-of-service"),
  getWeeklyFellowships: () => request<WeeklyFellowship[]>("/weekly-fellowships"),
  getLeadership: () => request<LeaderProfile[]>("/leadership"),
  getAbout: () => request<AboutContent>("/about"),
  giveViaMpesa: (payload: {
    phoneNumber: string;
    amount: number;
    accountReference?: string;
    description?: string;
  }) =>
    request<StkPushResponse>("/mpesa/stkpush", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
