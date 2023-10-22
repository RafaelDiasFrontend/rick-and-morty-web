import React from "react";
import CharacterType from "@/lib/types/CharacterType";

function CharacterList({ characters }: { characters: CharacterType[] }) {
  return (
    <div>
      {characters.map((character: CharacterType) => (
        <h1 key={character.id}>{character.name}</h1>
      ))}
    </div>
  );
}

export default CharacterList;
