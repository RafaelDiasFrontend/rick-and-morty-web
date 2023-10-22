import { Key, useState } from "react";
import Character from "@/lib/types/CharacterType";
import { fetchCharacters } from "@/lib/services/characters/characterQueryService";

export default function ApolloClient({ data }: any) {
  const { characters } = data;
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
  const data = await fetchCharacters(1); // Set the page as needed

  return {
    props: {
      data,
    },
  };
}
