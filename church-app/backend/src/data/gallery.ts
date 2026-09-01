import { GalleryPhoto } from "../types";

/**
 * Placeholder gallery data. Replace `imagePlaceholder` values with real
 * uploaded image URLs (e.g. from cloud storage) once available, and add
 * further entries per event as photos come in.
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "gen-001",
    category: "general",
    eventName: "Sunday Main Service",
    eventDate: "2026-08-16",
    caption: "Congregation gathered for worship",
    imagePlaceholder: "/placeholders/gallery/general-1.jpg",
  },
  {
    id: "gen-002",
    category: "general",
    eventName: "Annual Church Retreat",
    eventDate: "2026-07-04",
    caption: "Members at the annual retreat",
    imagePlaceholder: "/placeholders/gallery/general-2.jpg",
  },
  {
    id: "lead-001",
    category: "leaders",
    eventName: "Leadership Commissioning",
    eventDate: "2026-01-18",
    caption: "Church leadership team commissioning service",
    imagePlaceholder: "/placeholders/gallery/leaders-1.jpg",
  },
  {
    id: "women-001",
    category: "women",
    eventName: "Women's Fellowship Conference",
    eventDate: "2026-05-10",
    caption: "Women's ministry annual conference",
    imagePlaceholder: "/placeholders/gallery/women-1.jpg",
  },
  {
    id: "men-001",
    category: "men",
    eventName: "Men's Breakfast Fellowship",
    eventDate: "2026-06-06",
    caption: "Men's ministry breakfast meeting",
    imagePlaceholder: "/placeholders/gallery/men-1.jpg",
  },
  {
    id: "youth-001",
    category: "youth",
    eventName: "Youth Camp",
    eventDate: "2026-04-12",
    caption: "Annual youth camp outdoor activities",
    imagePlaceholder: "/placeholders/gallery/youth-1.jpg",
  },
  {
    id: "youth-002",
    category: "youth",
    eventName: "Youth Sunday",
    eventDate: "2026-08-02",
    caption: "Youth-led Sunday service",
    imagePlaceholder: "/placeholders/gallery/youth-2.jpg",
  },
  {
    id: "school-001",
    category: "church-school",
    eventName: "Church School Graduation",
    eventDate: "2026-11-29",
    caption: "Church school end-of-year graduation",
    imagePlaceholder: "/placeholders/gallery/church-school-1.jpg",
  },
];
