import CharacterType from '@/lib/types/CharacterType'
import { Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import LinkTo from '../global/LinkTo'

const cardContentItems = [
  {
    text: 'Vivo',
    srcIcon: '/svgs/pulse.svg',
  },
  {
    text: 'Humano',
    srcIcon: '/svgs/alien.svg',
  },
  {
    text: 'Earth (C-137)',
    srcIcon: '/svgs/planet.svg',
  },
]

export default function CharactersCard(): CharacterType {
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          padding: 2,
          borderRadius: '30px',
          my: 8,
        }}
        elevation={12}
      >
        <CardMedia
          component='img'
          height='194'
          image='/imgs/ricky.jpg'
          alt='Paella dish'
          sx={{ backgroundColor: 'transparent', borderRadius: '20px' }}
        />
        <Box>
          <Box my={'16px'}>
            <Typography variant='body1' color='white' fontWeight={'bold'}>
              Rick Sanchez
            </Typography>
          </Box>
          <Box display='flex-col' gap={'8px'}>
            {cardContentItems.map((item, index) => (
              <Box key={index} display='flex' alignItems={'center'} gap={'4px'}>
                <Image
                  width={16}
                  height={16}
                  src={item.srcIcon}
                  alt={'pulse'}
                />
                <Typography variant='body1' color='white'>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <LinkTo href='/id-do-character'>
            <Typography variant='body2' color='white' marginTop={'30px'}>
              Saiba Mais
            </Typography>
          </LinkTo>
        </Box>
      </Card>
    </>
  )
}
