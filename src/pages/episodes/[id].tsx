import Layout from '@/components/global/Layout'
import { fetchEpisodeById } from '@/lib/services/episodes/episodesServices'
import EpisodeType from '@/lib/types/EpisodeType'
import { Box, Container, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'

const EpisodeDetail = ({ episode }: { episode: EpisodeType }) => {
  return (
    <Layout>
      <Container>
        <Box display={['flex-col', 'flex']} marginTop={'40px'}>
          <Box
            display={'flex-col'}
            width={['auto', '35rem']}
            marginTop={['20px', '0']}
          >
            <OndemandVideoIcon
              sx={{ fontSize: '72px', marginBottom: '12px' }}
            />
            <Typography
              fontWeight={'bold'}
              fontSize={['2rem', '3rem']}
              marginBottom={'24px'}
            >
              M. Night Shaym-Aliens!
            </Typography>
            <Box
              display={'flex'}
              alignItems={'center'}
              columnGap={'8px'}
              fontSize={'32px'}
              marginBottom={'72px'}
            >
              <Typography fontSize={['1rem', '1.5rem']}>
                January 13, 2014 S01E04
              </Typography>
            </Box>

            <Typography fontSize={['1rem', '1.5rem']}>
              15 Personagens participaram deste episódio
            </Typography>
          </Box>
        </Box>
      </Container>
      <p>{episode.name}</p>
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
    return {
      props: { episode },
    }
  } catch (error) {
    console.error('Error fetching episode data:', error)
    return {
      notFound: true,
    }
  }
}

export default EpisodeDetail
