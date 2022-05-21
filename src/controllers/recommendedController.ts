import { Request, Response } from "express";
import * as recommendedService from "../services/recommendedService.js";

export async function getRecommendedMovies(req: Request, res: Response) {
  const { page } = req.params;
  const { genre, watch_provider } = req.query;
  const genreId: string | null =
    genre === "undefined" ? null : (genre as string);
  const watchProviderId =
    watch_provider === "undefined" ? null : (watch_provider as string);
  try {
    const { data } =
      await recommendedService.getRecommendationsFilteredByProviders(
        JSON.parse(req.cookies.providers),
        page,
        genreId && genreId,
        watchProviderId && watchProviderId
      );
    res.send(data).status(200);
  } catch (error) {
    console.log(error);
  }
}
