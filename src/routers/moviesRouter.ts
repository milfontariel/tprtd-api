import { Router } from "express";
import * as moviesController from "../controllers/moviesController.js";

export const moviesRouter = Router();

moviesRouter.get("/movie/:id", moviesController.getDetais);
