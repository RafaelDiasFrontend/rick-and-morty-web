import { gql } from "@apollo/client";

export const GET_ALL = gql`
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
        image
        status
        species
      }
    }
    locations(page: $page, filter: { name: $name }) {
      results {
        id
        name
        type
      }
    }
    episodes(page: $page, filter: { name: $name }) {
      results {
        id
        name
        episode
      }
    }
  }
`;
