export type GalleryCategory =
  | "general"
  | "leaders"
  | "women"
  | "men"
  | "youth"
  | "church-school";

export interface GalleryPhoto {
  id: string;
  category: GalleryCategory;
  eventName: string;
  eventDate: string;
  caption: string;
  imagePlaceholder: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  time: string;
  description: string;
}

export interface WeeklyFellowship {
  id: string;
  name: string;
  day: string;
  time: string;
  location: string;
  description: string;
}

export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  imagePlaceholder: string;
}

export interface AboutContent {
  mission: string;
  story: string;
}

export interface StkPushResponse {
  message: string;
  checkoutRequestId: string;
  merchantRequestId: string;
}
