import { gql } from '@apollo/client'

export const GET_EPISODES = gql`
  query Episodes($page: Int, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      results {
        id
        name
      }
    }
  }
`

export const GET_EPISODE_BY_ID = gql`
  query GetEpisodeById($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
      }
    }
  }
`
