import { Router } from "express";
import { createStkPush, mpesaCallback } from "../controllers/mpesaController";

const router = Router();

router.post("/stkpush", createStkPush);
router.post("/callback", mpesaCallback);

export default router;
