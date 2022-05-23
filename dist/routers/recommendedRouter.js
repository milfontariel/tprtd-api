import { Router } from "express";
import * as recommendedController from "../controllers/recommendedController.js";
export var recommendedRouter = Router();
recommendedRouter.get("/recommended/:page", recommendedController.getRecommendedMovies);
