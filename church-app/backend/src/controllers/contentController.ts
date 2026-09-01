import { Request, Response } from "express";
import { galleryPhotos } from "../data/gallery";
import { orderOfService, weeklyFellowships, leadership, aboutContent } from "../data/content";
import { GalleryCategory } from "../types";

const validCategories: GalleryCategory[] = [
  "general",
  "leaders",
  "women",
  "men",
  "youth",
  "church-school",
];

export function getGallery(req: Request, res: Response) {
  const { category } = req.query;

  if (category && typeof category === "string") {
    if (!validCategories.includes(category as GalleryCategory)) {
      return res.status(400).json({ message: `Unknown category: ${category}` });
    }
    return res.json(galleryPhotos.filter((p) => p.category === category));
  }

  return res.json(galleryPhotos);
}

export function getOrderOfService(_req: Request, res: Response) {
  return res.json(orderOfService);
}

export function getWeeklyFellowships(_req: Request, res: Response) {
  return res.json(weeklyFellowships);
}

export function getLeadership(_req: Request, res: Response) {
  return res.json(leadership);
}

export function getAbout(_req: Request, res: Response) {
  return res.json(aboutContent);
}
