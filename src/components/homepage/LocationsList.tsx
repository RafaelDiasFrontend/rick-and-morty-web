import themeValue from '@/lib/hooks'
import LocationType from '@/lib/types/LocationType'
import { GridViewOutlined } from '@mui/icons-material'
import CategoryIcon from '@mui/icons-material/Category'
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material'
import Image from 'next/image'
interface LocationsListProps {
  locations?: LocationType[]
}

export default function LocationsList({ locations }: LocationsListProps) {
  const theme = useTheme()

  return (
    <Container>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={3}
        px={'20px'}
        marginTop={'40px'}
      >
        <Box alignItems='center' display={'flex'} gap={2}>
          <Typography color='text.primary' variant='h5' fontWeight={'bold'}>
            Localizações
          </Typography>
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
        </Box>
        <Grid container spacing={2} marginTop={4}>
          {locations?.map((location, index) => (
            <Grid key={index} item xs={6} md={3} lg={2}>
              <Box
                borderRadius='10px'
                p={2}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                textAlign={'center'}
                bgcolor={themeValue('#F9F9F9', '#313234')}
                height={'10rem'}
                position={'relative'}
              >
                <Image
                  style={{
                    position: 'absolute',
                    top: -25,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'invert(100%)'
                        : 'invert(0%)',
                  }}
                  height={50}
                  width={50}
                  src='/homeimages/iconPlanet.png'
                  alt='iconPlanet'
                />
                <Typography variant='subtitle2' color='text.primary'>
                  {location.type}
                </Typography>
                <Typography
                  lineHeight={1.2}
                  variant='subtitle1'
                  color='primary.main'
                  mb={2}
                >
                  {location.name}
                </Typography>
                <Button
                  sx={{
                    borderRadius: '10px',
                    color: 'white',
                  }}
                  variant='contained'
                  size='small'
                >
                  Saiba mais
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
