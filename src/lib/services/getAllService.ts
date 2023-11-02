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

interface fetchAllFilterProps {
  name?: string;
}

export async function fetchAllFilter({ name }: fetchAllFilterProps) {
  try {
    const { data } = await client.query({
      query: GET_ALL,
      variables: { name: name },
    });
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}
