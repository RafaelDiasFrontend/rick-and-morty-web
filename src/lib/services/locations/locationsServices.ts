import client from "@/lib/apolloClient";
import { GET_LOCATIONS, GET_LOCATION_BY_ID } from "./locationsQueries";

export async function fetchLocations(page: number) {
  try {
    const { data } = await client.query({
      query: GET_LOCATIONS,
      variables: { page },
    });
    return data;
  } catch (error) {
    console.error("Error fetching Locations:", error);
    throw error;
  }
}

export async function fetchLocationById(id: string) {
  try {
    const { data } = await client.query({
      query: GET_LOCATION_BY_ID,
      variables: { id },
    });
    return data.location;
  } catch (error) {
    console.error("Error fetching Location by ID:", error);
    throw error;
  }
}
