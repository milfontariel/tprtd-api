import axios from "axios";
import dotenv from "dotenv";
import * as moviesRepository from "../repositories/moviesRepository.js";

dotenv.config();
const { BASE_URL, API_KEY } = process.env;

export async function getMovieDetails(id: string) {
  const movieDetails = await axios.get(`${BASE_URL}movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: "pt-BR",
      append_to_response: "images,videos,watch/providers,credits",
      include_image_language: "en,null",
    },
  });
  return movieDetails.data;
}
