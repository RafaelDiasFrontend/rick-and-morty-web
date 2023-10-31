import CharactersCard from '@/components/homepage/CharactersCard'
import CharactersList from '@/components/homepage/CharactersList'
import FilterCharacter from '@/components/homepage/FilterCharacters'
import Layout from '@/components/global/Layout'
import Hero from '@/components/homepage/Hero'
import { fetchAll } from '@/lib/services/getAllService'
import CharacterType from '@/lib/types/CharacterType'
import { Box, Container, Typography, useTheme } from '@mui/material'
import EpisodesList from '@/components/homepage/EpisodesList'
import EpisodeType from '@/lib/types/EpisodeType'
import LocationType from '@/lib/types/LocationType'
import LocationsList from '@/components/homepage/LocationsList'

interface HomePageProps {
  data: {
    characters: {
      results: CharacterType[]
    }
    episodes: {
      results: EpisodeType[]
    }
    locations: {
      results: LocationType[]
    }
  }
}

export default function ApolloClient({ data }: HomePageProps) {
  const charactersSlice = data.characters.results.slice(0, -8)
  const episodesSlice = data.episodes.results.slice(0, -16)
  const locationsSlice = data.locations.results.slice(0, -14)
  return (
    <Layout>
      <Hero />
      {/*<FilterCharacter />*/}
      <CharactersList characters={charactersSlice} />
      <EpisodesList episodes={episodesSlice} />
      <LocationsList locations={locationsSlice} />
      {/*<List characters={data.characters.results} linkPrefix="/characters" />
      <List characters={data.episodes.results} linkPrefix="/episodes" />
      <List characters={data.locations.results} linkPrefix="/locations" />*/}
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const data = await fetchAll()
    return {
      props: {
        data,
      },
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        data: {
          characters: { results: [] },
          episodes: { results: [] },
          locations: { results: [] },
        },
      },
    }
  }
}
