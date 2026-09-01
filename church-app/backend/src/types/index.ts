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
  eventDate: string; // ISO date
  caption: string;
  imagePlaceholder: string; // path/key for the placeholder image
}

export interface ServiceItem {
  id: string;
  title: string;
  time: string; // e.g. "9:00 AM – 11:00 AM"
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

export interface StkPushRequestBody {
  phoneNumber: string; // format 2547XXXXXXXX
  amount: number;
  accountReference?: string; // e.g. "Tithe", "Offering", "Building Fund"
  description?: string;
}
