import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import { routes } from "./routers/routes.js";
import { handleError } from "./middlewares/handdleError.js";
import cookieParser from "cookie-parser";

export const server = express();
server.use(cookieParser());
server.use(
  cors({
    credentials: true,
    origin: ["https://tprtd.vercel.app"],
  })
);
server.use(json());
server.use(routes);
server.use(handleError);
