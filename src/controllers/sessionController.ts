import { Request, Response } from "express";
import * as sessionService from "../services/sessionService.js";

export async function getAllProviders(req: Request, res: Response) {
  try {
    const providers = await sessionService.getProviders();
    res.send(providers.data.results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function getAllGenres(req: Request, res: Response) {
  try {
    const genres = await sessionService.getGenres();
    res.send(genres.data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export async function postPersonalProviders(req: Request, res: Response) {
  try {
    res
      .cookie("providers", JSON.stringify(req.body.join("|")), {
        expires: new Date(Math.pow(2, 31) * 1000),
      })
      .sendStatus(201);
  } catch (error) {
    console.log(error);
  }
}
