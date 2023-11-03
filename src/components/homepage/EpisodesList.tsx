import themeValue, { truncateName } from '@/lib/hooks'
import EpisodeType from '@/lib/types/EpisodeType'
import { GridViewOutlined } from '@mui/icons-material'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import { Box, Button, Grid, Typography } from '@mui/material'
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
  const { id, name, episode } = episodeData
  return (
    <LinkTo href={`/episodes/${id}`}>
      <Box
        p={2}
        borderRadius={'10px'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        minHeight={'5rem'}
        bgcolor={themeValue('#F9F9F9', '#313234')}
        gap={1}
        color='text.primary'
        sx={{
          transition: 'ease-in 0.05s',

          '&:hover': {
            boxShadow: '0 0 4px #11b0c885',
          },
        }}
      >
        <Box display={'flex'} gap={1}>
          <OndemandVideoIcon />
          <Typography variant='body1'>{episode}</Typography>
        </Box>
        <Box display={'flex'} gap={1}>
          <Typography variant='body2'>
            {truncateName({ name: String(name) })}
          </Typography>
        </Box>
      </Box>
    </LinkTo>
  )
}
