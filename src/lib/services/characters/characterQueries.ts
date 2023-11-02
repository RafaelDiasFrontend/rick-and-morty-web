import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      gender
      episode {
        name
      }
      location {
        name
      }
    }
  }
`;
