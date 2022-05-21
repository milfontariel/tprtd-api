import { Router } from "express";
import * as recommendedController from "../controllers/recommendedController.js";

export const recommendedRouter = Router();

recommendedRouter.get(
  "/recommended/:page",
  recommendedController.getRecommendedMovies
);
