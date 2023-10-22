import React from "react";
import Character from "@/lib/types/CharacterType";

function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <div>
      {characters.map((character: Character) => (
        <h1 key={character.id}>{character.name}</h1>
      ))}
    </div>
  );
}

export default CharacterList;
