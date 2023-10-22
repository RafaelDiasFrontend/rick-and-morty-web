import client from "@/lib/apolloClient";
import { GET_EPISODES, GET_EPISODE_BY_ID } from "./episodesQueries";

export async function fetchEpisodes(page: number) {
  try {
    const { data } = await client.query({
      query: GET_EPISODES,
      variables: { page },
    });
    return data;
  } catch (error) {
    console.error("Error fetching episodes:", error);
    throw error;
  }
}

export async function fetchEpisodeById(id: string) {
  try {
    const { data } = await client.query({
      query: GET_EPISODE_BY_ID,
      variables: { id },
    });
    return data.episode;
  } catch (error) {
    console.error("Error fetching episode by ID:", error);
    throw error;
  }
}
