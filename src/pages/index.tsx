import { gql } from "@apollo/client";
import { Button } from "@material-tailwind/react";
import { Key, useState } from "react";
import client from "../lib/apolloClient"; // Replace with the actual path to your Apollo Client configuration
import Character from "@/lib/types/CharacterType";

const GET_CHARACTERS = gql`
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
      }
    }
  }
`;

export default function ApolloClient({ data }: any) {
  const [email, setEmail] = useState("");
  const { characters } = data;
  console.log(characters);
  return (
    <div className="">
      <div>
        {characters.results.map((character: Character, index: Key) => (
          <h1 key={index}>{character.name}</h1>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data using the Apollo Client configured in your separate module
  const { data } = await client.query({
    query: GET_CHARACTERS,
    variables: { page: 1 }, // Set your variables here
  });

  return {
    props: {
      data,
    },
  };
}