import React from "react";
import { Key } from "react";
import CharacterType from "@/lib/types/CharacterType";
import Layout from "@/components/global/Layout";
import { fetchAll } from "@/lib/services/getAllService";
import List from "@/components/homepage/List";

interface HomePageProps {
  data: {
    characters: {
      results: CharacterType[];
    };
    episodes: {
      results: CharacterType[];
    };
    locations: {
      results: CharacterType[];
    };
  };
}

export default function ApolloClient({ data }: HomePageProps) {
  return (
    <Layout>
      <div className="flex">
        <List characters={data.characters.results} linkPrefix="/characters" />
        <List characters={data.episodes.results} linkPrefix="/episodes" />
        <List characters={data.locations.results} linkPrefix="/locations" />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const data = await fetchAll();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: {
          characters: { results: [] },
          episodes: { results: [] },
          locations: { results: [] },
        },
      },
    };
  }
}
