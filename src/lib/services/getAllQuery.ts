import { gql } from "@apollo/client";

export const GET_ALL = gql`
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
      }
    }
    locations(page: $page, filter: { name: $name }) {
      results {
        id
        name
      }
    }
    episodes(page: $page, filter: { name: $name }) {
      results {
        id
        name
      }
    }
  }
`;
