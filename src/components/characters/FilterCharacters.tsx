import CharacterType from '@/lib/types/CharacterType'
import { Search } from '@mui/icons-material'
import {
  Box,
  Button,
  Container,
  FormControl,
  OutlinedInput,
  Typography,
  useTheme,
} from '@mui/material'

import MonitorPlayIcon from '@mui/icons-material/Monitor'
import SmileIcon from '@mui/icons-material/Mood'
import PlanetIcon from '@mui/icons-material/Public'
import React from 'react'

export default function FilterCharacter(): CharacterType {
  const theme = useTheme()
  const [activeFilter, setActiveFilter] = React.useState('Personagens')

  const filterCharacterItems = [
    {
      text: 'Personagens',
      srcIcon: <SmileIcon />,
    },
    {
      text: 'Localizaçãoes',
      srcIcon: <PlanetIcon />,
    },
    {
      text: 'Episódio',
      srcIcon: <MonitorPlayIcon />,
    },
  ]

  return (
    <>
      <Container>
        <Box
          display={'flex'}
          width={'100%'}
          justifyContent={'space-between'}
          gap={15}
        >
          <FormControl sx={{ m: 1, width: '300px' }} variant='outlined'>
            <OutlinedInput
              sx={{
                borderRadius: 10,
                width: '25rem',
                height: '48px',
                borderColor: theme.palette.background.default,
              }}
              placeholder='Personagem, episódio, localização...'
              id='outlined-adornment-weight'
              endAdornment={<Search />}
              aria-describedby='outlined-weight-helper-text'
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </FormControl>

          <Box display={'flex'} alignItems={'center'} gap={2}>
            <Typography
              key='index'
              variant='body1'
              color={theme.palette.text.primary}
            >
              Filtrar por:
            </Typography>
            {filterCharacterItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  borderRadius: 5,
                  color:
                    activeFilter === item.text
                      ? 'white'
                      : theme.palette.text.primary,
                  backgroundColor:
                    activeFilter === item.text
                      ? theme.palette.primary.main
                      : 'transparent',
                  textTransform: 'initial',
                }}
                variant={activeFilter === item.text ? 'contained' : 'text'}
                startIcon={item.srcIcon}
                onClick={() => setActiveFilter(item.text)}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  )
}
