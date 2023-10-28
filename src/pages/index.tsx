import CharactersCard from "@/components/characters/CharactersCard";
import CharactersList from "@/components/characters/CharactersList";
import FilterCharacter from "@/components/characters/FilterCharacters";
import Layout from "@/components/global/Layout";
import Hero from "@/components/homepage/Hero";
import { fetchAll } from "@/lib/services/getAllService";
import CharacterType from "@/lib/types/CharacterType";
import { Box, Container, Typography, useTheme } from "@mui/material";

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
      <Hero />
      {/*<FilterCharacter />*/}
      <CharactersList characters={data.characters.results} />

      {/*<List characters={data.characters.results} linkPrefix="/characters" />
      <List characters={data.episodes.results} linkPrefix="/episodes" />
      <List characters={data.locations.results} linkPrefix="/locations" />*/}
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
