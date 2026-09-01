import { Router } from "express";
import {
  getGallery,
  getOrderOfService,
  getWeeklyFellowships,
  getLeadership,
  getAbout,
} from "../controllers/contentController";

const router = Router();

router.get("/gallery", getGallery);
router.get("/order-of-service", getOrderOfService);
router.get("/weekly-fellowships", getWeeklyFellowships);
router.get("/leadership", getLeadership);
router.get("/about", getAbout);

export default router;
