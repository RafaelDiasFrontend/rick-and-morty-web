import client from "@/lib/apolloClient";
import { GET_ALL } from "./getAllQuery";

export async function fetchAll() {
  try {
    const { data } = await client.query({
      query: GET_ALL,
    });
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}
