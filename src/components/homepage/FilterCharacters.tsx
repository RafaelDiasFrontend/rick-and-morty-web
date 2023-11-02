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
import React, { useEffect, useState } from 'react'
import { fetchAll, fetchAllFilter } from '@/lib/services/getAllService'
import LinkTo from '../global/LinkTo'
import themeValue from '@/lib/hooks'

export default function FilterCharacter() {
  const theme = useTheme()
  const [activeFilter, setActiveFilter] = React.useState('Personagens')
  const [activeFilterSlug, setActiveFilterSlug] = React.useState('characters')
  const [name, setName] = useState('')
  const [data, setData] = useState([])

  const filterCharacterItems = [
    {
      text: 'Personagens',
      slug: 'characters',
      srcIcon: <SmileIcon />,
    },
    {
      text: 'Localizações',
      slug: 'locations',
      srcIcon: <PlanetIcon />,
    },
    {
      text: 'Episódios',
      slug: 'episodes',
      srcIcon: <MonitorPlayIcon />,
    },
  ]

  async function fetchAndSetData() {
    if (name === '') {
      // Limpa os dados se estiver vazio
      setData([])
    } else {
      try {
        const filterData = await fetchAllFilter({ name: name })
        switch (activeFilter) {
          case 'Personagens':
            setData(filterData.characters.results)
            break
          case 'Localizações':
            setData(filterData.locations.results)
            break
          case 'Episódios':
            setData(filterData.episodes.results)
            break
        }
      } catch (error) {
        console.error('Error puxando os dados:', error)
      }
    }
  }

  useEffect(() => {
    fetchAndSetData()
  }, [name, activeFilter])

  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"space-between"}
        columnGap={15}
        gap={2}
        flexWrap={"wrap"}
        mb={8}
      >
        <FormControl
          sx={{ width: "300px", position: "relative" }}
          variant="outlined"
        >
          <OutlinedInput
            onChange={(e) => setName(e.target.value)}
            sx={{
              borderRadius: 10,
              width: "25rem",
              height: "48px",
              borderColor: theme.palette.background.default,
            }}
            placeholder={`Pesquisar por ${activeFilter}`}
            id="outlined-adornment-weight"
            endAdornment={<Search />}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          {data.length > 1 && (
            <Box
              zIndex={999}
              position={"absolute"}
              top={50}
              bgcolor={themeValue("#fafafa", "#111111")}
              borderRadius={"16px"}
              p={2}
              width={"400px"}
              border="2px solid #11111148"
            >
              {data
                ? data.map((data: any, index) => (
                    <LinkTo
                      key={index}
                      href={`/${activeFilterSlug}/${data.id}`}
                    >
                      <Typography color="primary" variant="h6" key={index}>
                        {data.name}
                      </Typography>
                    </LinkTo>
                  ))
                : "Nada encontrado"}
            </Box>
          )}
        </FormControl>

        <Box
          display={'flex'}
          width={'100%'}
          justifyContent={'space-between'}
          columnGap={15}
          gap={2}
          flexWrap={'wrap'}
          mb={8}
          px='18px'
        >
          <FormControl
            sx={{ width: '405px', position: 'relative' }}
            variant='outlined'

          >
            Filtrar por:
          </Typography>
          {filterCharacterItems.map((item, index) => (
            <Button
              key={index}
              sx={{
                borderRadius: 10,
                width: '100%',
                height: '48px',
                borderColor: theme.palette.background.default,
              }}
              placeholder={`Pesquisar por ${activeFilter}`}
              id='outlined-adornment-weight'
              endAdornment={<Search />}
              aria-describedby='outlined-weight-helper-text'
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            {data.length > 1 && (
              <Box
                zIndex={999}
                position={'absolute'}
                top={50}
                bgcolor={themeValue('#fafafa', '#111111')}
                borderRadius={'16px'}
                p={2}
                width={'400px'}
                border='2px solid #11111148'
              >
                {data
                  ? data.map((data: any, index) => (
                      <LinkTo
                        key={index}
                        href={`/${activeFilterSlug}/${data.id}`}
                      >
                        <Typography color='primary' variant='h6' key={index}>
                          {data.name}
                        </Typography>
                      </LinkTo>
                    ))
                  : 'Nada encontrado'}
              </Box>
            )}
          </FormControl>

          <Box
            flexWrap={'wrap'}
            display={'flex'}
            alignItems={'center'}
            gap={2}
            marginTop={['15px', '15px', '0']}
          >
            <Typography
              key='index'
              variant='body1'
              color={theme.palette.text.primary}
              whiteSpace={'nowrap'}
              display={['none', 'none', 'none', 'block']}
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
                onClick={() => {
                  setActiveFilter(item.text)
                  setActiveFilterSlug(item.slug)
                  setData([])
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

        </Box>
      </Box>
    </>
  )
}
