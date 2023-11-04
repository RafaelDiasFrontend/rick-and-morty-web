import themeValue, { truncateName } from '@/lib/hooks'
import EpisodeType from '@/lib/types/EpisodeType'
import { GridViewOutlined } from '@mui/icons-material'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import LinkTo from '../global/LinkTo'
interface EpisodesListProps {
  episodes?: EpisodeType[]
  showTitle?: Boolean
}

export default function EpisodesList({
  episodes,
  showTitle = true,
}: EpisodesListProps) {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={5}>
      {showTitle && (
        <Box alignItems='center' display={'flex'} gap={2}>
          <Typography color='text.primary' variant='h5' fontWeight={'bold'}>
            Episódios
          </Typography>
          <LinkTo href='/episodes'>
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
        {episodes?.map((episode, index) => (
          <Grid key={index} item xs={6} sm={3} md={3}>
            <EpisodesCard episodeData={episode} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
function EpisodesCard({ episodeData }: { episodeData: EpisodeType }) {
  const isMobile = useMediaQuery('(max-width:600px)')
  const { id, name, episode } = episodeData
  return (
    <LinkTo href={`/episodes/${id}`}>
      <Box
        p={2}
        height={'86px'}
        borderRadius={'10px'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        minHeight={'5rem'}
        gap={1}
        color='text.primary'
        sx={{
          borderRadius: '16px',
          border: `1px solid ${themeValue('#11111117', '#fafafa25')}`,
          transition: 'box-shadow 0.2s ease, transform 0.2s ease', // Add transform to the transition
          '&:hover': {
            border: '1px solid #11b0c885',
            transform: 'translateY(-5px)', // Move the element 5 pixels up on hover
          },
        }}
      >
        <Box display={'flex'} gap={1}>
          <OndemandVideoIcon />
          <Typography variant='body1'>{episode}</Typography>
        </Box>
        <Box display={'flex'} gap={1}>
          <Typography variant='body2'>
            {truncateName({
              name: String(name),
              maxLength: isMobile ? 7 : 16,
            })}
          </Typography>
        </Box>
      </Box>
    </LinkTo>
  )
}
