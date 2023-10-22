import client from "@/lib/apolloClient";
import { GET_CHARACTERS } from "./characterQuery";

export async function fetchCharacters(page: number) {
  try {
    const { data } = await client.query({
      query: GET_CHARACTERS,
      variables: { page },
    });
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}
