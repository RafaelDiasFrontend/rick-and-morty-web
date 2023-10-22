import React from "react";
import CharacterType from "@/lib/types/CharacterType";
import LocationType from "@/lib/types/LocationType";
import EpisodeType from "@/lib/types/EpisodeType";
import Link from "next/link";

interface ListProps {
  characters: (CharacterType | LocationType | EpisodeType)[];
  linkPrefix: string;
}

function List({ characters, linkPrefix }: ListProps) {
  return (
    <div>
      {characters.map(
        (character: CharacterType | LocationType | EpisodeType) => (
          <Link key={character.id} href={`${linkPrefix}/${character.id}`}>
            <h1>{character.name}</h1>
          </Link>
        )
      )}
    </div>
  );
}

export default List;
