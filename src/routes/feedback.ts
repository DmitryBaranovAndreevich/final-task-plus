import { createFeedbacks, getFeedbacks } from "../controllers/feedback";
import { Router } from "express";

const router = Router();
router.get("/", getFeedbacks);
router.post("/", createFeedbacks);

export default router;
