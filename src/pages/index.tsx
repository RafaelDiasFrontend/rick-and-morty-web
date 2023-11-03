import Layout from "@/components/global/Layout";
import CharactersList from "@/components/homepage/CharactersList";
import EpisodesList from "@/components/homepage/EpisodesList";
import FilterCharacter from "@/components/homepage/FilterCharacters";
import Hero from "@/components/homepage/Hero";
import LocationsList from "@/components/homepage/LocationsList";
import { fetchAll } from "@/lib/services/getAllService";
import CharacterType from "@/lib/types/CharacterType";
import EpisodeType from "@/lib/types/EpisodeType";
import LocationType from "@/lib/types/LocationType";
import { Box } from "@mui/material";

interface HomePageProps {
  data: {
    characters: {
      results: CharacterType[];
    };
    episodes: {
      results: EpisodeType[];
    };
    locations: {
      results: LocationType[];
    };
  };
}

export default function ApolloClient({ data }: HomePageProps) {
  const charactersSlice = data.characters.results.slice(0, -8);
  const episodesSlice = data.episodes.results.slice(0, -16);
  const locationsSlice = data.locations.results.slice(0, -14);
  return (
    <Layout>
      <Hero />
      <CharactersList characters={charactersSlice} />
      <EpisodesList episodes={episodesSlice} />
      <LocationsList locations={locationsSlice} />
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
