import Layout from '@/components/global/Layout'
import {
  fetchLocationById,
  fetchLocations,
} from '@/lib/services/locations/locationsServices'
import LocationType from '@/lib/types/LocationType'
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { GetServerSideProps } from 'next'

import LocationsList from '@/components/homepage/LocationsList'
import { RocketRounded } from '@mui/icons-material'
import Image from 'next/image'

const LocationDetail = ({
  location,
  locations,
}: {
  location: LocationType
  locations: LocationType[]
}) => {
  const theme = useTheme()
  const { name, type, dimension, residents } = location

  const isMobile = useMediaQuery('(max-width:600px)')
  console.log('locations', locations)
  return (
    <Layout>
      <Container>
        <Box display={['flex-col', 'flex']} marginTop={'40px'} gap={'64px'}>
          <Box
            display={'flex-col'}
            width={['auto', '35rem']}
            marginTop={['20px', '0']}
          >
            <Box
              display={'flex'}
              marginBottom={'8px'}
              fontSize={['40px', '72px']}
            >
              <RocketRounded fontSize='inherit' />
            </Box>

            <Typography
              fontWeight={'bold'}
              fontSize={['1.5rem', '3rem']}
              marginBottom={'24px'}
            >
              {name}
            </Typography>
            <Box
              display={'flex'}
              alignItems={'center'}
              columnGap={'8px'}
              fontSize={'32px'}
              marginBottom={['20px', '72px']}
            >
              <Typography
                fontSize={['0.85rem', '1.5rem']}
                display={'flex'}
                flexWrap={'wrap'}
                alignItems={'center'}
              >
                <Image
                  src='/svgs/planetLight.svg'
                  alt='ricky and morty'
                  width={isMobile ? 16 : 32}
                  height={isMobile ? 16 : 32}
                  style={{ marginRight: '4px' }}
                />
                {type}
                <Image
                  src='/svgs/planetLight.svg'
                  alt='ricky and morty'
                  width={isMobile ? 16 : 32}
                  height={isMobile ? 16 : 32}
                  style={{ margin: '0 8px 0 24px' }}
                />
                {dimension}
              </Typography>
            </Box>

            <Typography
              fontSize={['0.85rem', '1.5rem']}
              display={'flex'}
              alignItems={'center'}
              gap={'8px'}
            >
              <Image
                src='/svgs/alienLight.svg'
                alt='icone-de-personagens'
                width={isMobile ? 16 : 32}
                height={isMobile ? 16 : 32}
              />
              <b style={{ color: theme.palette.primary.main }}>
                {residents?.length}
              </b>{' '}
              Personagens habitam aqui
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box
          display={'flex'}
          gap={'16px'}
          margin={['50px 0  40px', '70px 0 40px']}
        >
          <Box fontSize={['30px', '48px']}>
            <RocketRounded fontSize='inherit' />
          </Box>

          <Typography
            fontSize={['1rem', '1.5rem']}
            fontWeight={'bold'}
            lineHeight={'normal'}
          >
            Mais <br />
            Localizaçoes
          </Typography>
        </Box>
        <LocationsList locations={locations} showTitle={false} />
      </Container>
    </Layout>
  )
}

interface LocationDetailProps {
  location: LocationType[]
}

export const getServerSideProps: GetServerSideProps<
  LocationDetailProps
> = async ({ params }) => {
  const { id } = params as { id: string }

  try {
    if (!id) {
      throw new Error('ID is missing.')
    }
    const location = await fetchLocationById(id)
    const data = await fetchLocations(1)
    const locations: LocationType[] = data.locations.results
    return {
      props: { location, locations },
    }
  } catch (error) {
    console.error('Error fetching location data:', error)
    return {
      notFound: true,
    }
  }
}

export default LocationDetail
