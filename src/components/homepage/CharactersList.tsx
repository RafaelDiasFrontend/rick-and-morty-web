import CharacterType from '@/lib/types/CharacterType'
import { GridViewOutlined } from '@mui/icons-material'
import { Box, Button, Grid, Skeleton, Typography } from '@mui/material'
import LinkTo from '../global/LinkTo'
import CharactersCard from './CharactersCard'
interface CharactersListProps {
  characters: CharacterType[]
  showTitle?: Boolean
}

export default function CharactersList({
  characters,
  showTitle = true,
}: CharactersListProps) {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={5}>
      {showTitle && (
        <Box alignItems='center' display={'flex'} flexWrap={'wrap'} gap={2}>
          <Typography color='text.primary' variant='h5' fontWeight={'bold'}>
            Personagens
          </Typography>
          <LinkTo href='/characters'>
            <Button
              startIcon={<GridViewOutlined />}
              sx={{
                borderRadius: '150px',
                color: 'white',
                textTransform: 'initial',
              }}
              variant='contained'
            >
              Ver todos
            </Button>
          </LinkTo>
        </Box>
      )}

      <Grid container spacing={2}>
        {characters.map((character, index) => (
          <Grid
            key={index}
            item
            xs={6}
            sm={3}
            md={3}
            lg={2}
            columns={5}
            m={'auto'}
          >
            {character ? (
              <CharactersCard character={character} key={index} />
            ) : (
              <Skeleton variant='rectangular' width={'200px'} />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
