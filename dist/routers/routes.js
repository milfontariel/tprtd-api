import { Router } from "express";
import { sessionRouter } from "./sessionRouter.js";
import { recommendedRouter } from "./recommendedRouter.js";
import { moviesRouter } from "./moviesRouter.js";
export var routes = Router();
routes.use(sessionRouter);
routes.use(recommendedRouter);
routes.use(moviesRouter);
