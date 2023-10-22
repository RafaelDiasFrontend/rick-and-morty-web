import client from "@/lib/apolloClient";
import { GET_CHARACTERS, GET_CHARACTER_BY_ID } from "./characterQueries";

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

export async function fetchCharacterById(id: string) {
  try {
    const { data } = await client.query({
      query: GET_CHARACTER_BY_ID,
      variables: { id },
    });
    return data.character; // Assuming your character data is nested under 'character' in the response
  } catch (error) {
    console.error("Error fetching character by ID:", error);
    throw error;
  }
}
