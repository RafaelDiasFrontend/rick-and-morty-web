import React from 'react'
import { Key } from 'react'
import CharacterType from '@/lib/types/CharacterType'
import Layout from '@/components/global/Layout'
import { fetchAll } from '@/lib/services/getAllService'
import List from '@/components/homepage/List'
import Hero from '@/components/homepage/Hero'
import CharactersCard from '@/components/characters/CharactersCard'
import { Container } from '@mui/material'

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
  return (
    <Layout>
      <Hero />
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <CharactersCard />
      </Container>

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
