import { Request, Response } from "express";
import * as moviesService from "../services/moviesService.js";

export async function getDetais(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await moviesService.getMovieDetails(id);
    res.send(response);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
