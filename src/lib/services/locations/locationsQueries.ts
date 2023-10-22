import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  query Locations($page: Int, $name: String) {
    locations(page: $page, filter: { name: $name }) {
      results {
        id
        name
      }
    }
  }
`;

export const GET_LOCATION_BY_ID = gql`
  query GetLocationById($id: ID!) {
    location(id: $id) {
      id
      name
    }
  }
`;
