import React from "react";
import CharacterType from "@/lib/types/CharacterType";
import Link from "next/link";

function CharacterList({
  characters,
  linkPrefix,
}: {
  characters: CharacterType[];
  linkPrefix: String;
}) {
  return (
    <div>
      {characters.map((character: CharacterType) => (
        <Link href={`${linkPrefix}/${character.id}`}>
          <h1 key={character.id}>{character.name}</h1>
        </Link>
      ))}
    </div>
  );
}

export default CharacterList;
