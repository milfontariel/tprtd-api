import { Router } from "express";
import * as sessionController from "../controllers/sessionController.js";
export var sessionRouter = Router();
sessionRouter.get("/providers", sessionController.getAllProviders);
sessionRouter.post("/providers", sessionController.postPersonalProviders);
sessionRouter.get("/genres", sessionController.getAllGenres);
