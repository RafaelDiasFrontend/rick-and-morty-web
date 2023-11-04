import Layout from '@/components/global/Layout'
import EpisodesList from '@/components/homepage/EpisodesList'
import {
  fetchEpisodeById,
  fetchEpisodes,
} from '@/lib/services/episodes/episodesServices'
import EpisodeType from '@/lib/types/EpisodeType'

import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { GetServerSideProps } from 'next'
import Image from 'next/image'

const EpisodeDetail = ({
  episode: epData,
  episodes,
}: {
  episode: EpisodeType
  episodes: EpisodeType[]
}) => {
  const { name, air_date, episode: ep, characters } = epData
  const isMobile = useMediaQuery('(max-width:600px)')
  const theme = useTheme()
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
              fontSize={['40px', '72px']}
              marginBottom={'8px'}
            >
              <OndemandVideoIcon sx={{ fontSize: '100%' }} />
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
                  src='/svgs/calendar.svg'
                  alt='ricky and morty'
                  style={{ marginRight: '4px' }}
                  width={isMobile ? 16 : 32}
                  height={isMobile ? 16 : 32}
                />
                {air_date}
                <Image
                  src='/svgs/queu.svg'
                  alt='ricky and morty'
                  style={{ margin: '0 8px 0 24px' }}
                  width={isMobile ? 16 : 32}
                  height={isMobile ? 16 : 32}
                />
                {ep}
              </Typography>
            </Box>

            <Typography
              fontSize={['0.85rem', '1.5rem']}
              display={'flex'}
              alignItems={'center'}
              gap={'8px'}
            >
              <Image
                src='/svgs/charactersSmile.svg'
                alt='icone-de-personagens'
                width={isMobile ? 16 : 32}
                height={isMobile ? 16 : 32}
              />
              <b style={{ color: theme.palette.primary.main }}>
                {characters?.length}
              </b>{' '}
              Personagens participaram deste episódio
            </Typography>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box
          display={'flex'}
          gap={'16px'}
          margin={['50px 0 10px', '70px 0 10px']}
        >
          <Box fontSize={['30px', '48px']}>
            <OndemandVideoIcon sx={{ fontSize: '100%' }} />
          </Box>

          <Typography
            fontSize={['1rem', '1.5rem']}
            fontWeight={'bold'}
            lineHeight={'normal'}
          >
            Mais <br />
            Episodios
          </Typography>
        </Box>
        <EpisodesList episodes={episodes} showTitle={false} />
      </Container>
    </Layout>
  )
}

interface EpisodeDetailProps {
  episode: EpisodeType[]
}

export const getServerSideProps: GetServerSideProps<
  EpisodeDetailProps
> = async ({ params }) => {
  const { id } = params as { id: string }

  try {
    if (!id) {
      throw new Error('ID is missing.')
    }
    const episode = await fetchEpisodeById(id)
    const data = await fetchEpisodes(1)
    const episodes: EpisodeType[] = data.episodes.results
    return {
      props: { episode: episode, episodes: episodes },
    }
  } catch (error) {
    console.error('Error fetching episode data:', error)
    return {
      notFound: true,
    }
  }
}

export default EpisodeDetail
