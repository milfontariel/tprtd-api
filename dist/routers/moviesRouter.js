import { Router } from "express";
import * as moviesController from "../controllers/moviesController.js";
export var moviesRouter = Router();
moviesRouter.get("/movie/:id", moviesController.getDetais);
