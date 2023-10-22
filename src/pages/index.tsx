import { Key, useState } from "react";
import Character from "@/lib/types/CharacterType";
import Layout from "@/components/global/Layout";
import { fetchCharacters } from "@/lib/services/characters/characterServices";

export default function ApolloClient({ data }: any) {
  const { characters } = data;
  return (
    <Layout>
      <div>
        {characters.results.map((character: Character, index: Key) => (
          <h1 key={index}>{character.name}</h1>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetchCharacters(1);

  return {
    props: {
      data,
    },
  };
}
