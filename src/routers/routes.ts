import { Router } from "express";
import { sessionRouter } from "./sessionRouter.js";
import { recommendedRouter } from "./recommendedRouter.js";
import { moviesRouter } from "./moviesRouter.js";

export const routes = Router();

routes.use(sessionRouter);
routes.use(recommendedRouter);
routes.use(moviesRouter);
