import CharactersCard from '@/components/characters/CharactersCard'
import FilterCharacter from '@/components/characters/FilterCharacters'
import Layout from '@/components/global/Layout'
import Hero from '@/components/homepage/Hero'
import { fetchAll } from '@/lib/services/getAllService'
import CharacterType from '@/lib/types/CharacterType'
import { Box, Container, useTheme } from '@mui/material'

interface HomePageProps {
  data: {
    characters: {
      results: CharacterType[]
    }
    episodes: {
      results: CharacterType[]
    }
    locations: {
      results: CharacterType[]
    }
  }
}

export default function ApolloClient({ data }: HomePageProps) {
  const theme = useTheme()
  return (
    <Layout>
      <Hero />
      <Box
        sx={{
          width: '100%',
          padding: '64px',
          backgroundColor: theme.palette.mode === 'dark' ? '#1E1E20;' : '#fff',
        }}
      >
        <FilterCharacter />
        <Container sx={{ display: 'flex', marginTop: 4 }}>
          <CharactersCard />
        </Container>
      </Box>

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
