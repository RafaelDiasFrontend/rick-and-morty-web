import React from 'react'
import CharacterType from '@/lib/types/CharacterType'
import LocationType from '@/lib/types/LocationType'
import EpisodeType from '@/lib/types/EpisodeType'
import Link from 'next/link'
import LinkTo from '../global/LinkTo'
import { Box } from '@mui/material'

interface ListProps {
  characters: (CharacterType | LocationType | EpisodeType)[]
  linkPrefix: string
}

function List({ characters, linkPrefix }: ListProps) {
  return (
    <div>
      {characters.map(
        (character: CharacterType | LocationType | EpisodeType) => (
          <Box sx={{ display: 'flex', m: 1 }}>
            <LinkTo key={character.id} href={`${linkPrefix}/${character.id}`}>
              <div>{character.name}</div>
            </LinkTo>
          </Box>
        ),
      )}
    </div>
  )
}

export default List
