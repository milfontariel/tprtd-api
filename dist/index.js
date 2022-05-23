import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import { routes } from "./routers/routes.js";
import { handleError } from "./middlewares/handdleError.js";
import cookieParser from "cookie-parser";
export var server = express();
server.use(cookieParser());
server.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"]
}));
server.use(json());
server.use(routes);
server.use(handleError);
