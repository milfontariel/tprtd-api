import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const { BASE_URL, API_KEY } = process.env;

export async function getProviders() {
  return await axios.get(`${BASE_URL}watch/providers/movie`, {
    params: {
      api_key: API_KEY,
      language: "pt-BR",
      watch_region: "BR",
    },
  });
}

export async function getGenres() {
  return await axios.get(`${BASE_URL}genre/movie/list`, {
    params: {
      api_key: API_KEY,
      language: "pt-BR",
    },
  });
}
