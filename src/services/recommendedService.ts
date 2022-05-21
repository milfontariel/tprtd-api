import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const { BASE_URL, API_KEY } = process.env;

export async function getRecommendationsFilteredByProviders(
  providers: string,
  page: string,
  genre?: string | null,
  watch_provider?: string | null
) {
  return await axios.get(`${BASE_URL}discover/movie`, {
    params: {
      api_key: API_KEY,
      page: page,
      language: "pt-BR",
      sort_by: "vote_count.desc",
      "vote_average.gte": 7,
      with_watch_providers: `${
        watch_provider ? `${watch_provider}` : `${providers}`
      }`,
      watch_region: "BR",
      with_watch_monetization_types: "flatrate",
      with_genres: genre,
    },
  });
}
