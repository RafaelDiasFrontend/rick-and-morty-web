import CharacterType from '@/lib/types/CharacterType'
import { Box, useTheme } from '@mui/material'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import LinkTo from '../global/LinkTo'

export default function CharactersCard(): CharacterType {
  const theme = useTheme()
  const cardContentItems = [
    {
      text: 'Vivo',
      srcIcon: '/svgs/pulse.svg',
    },
    {
      text: 'Humano',
      srcIcon:
        theme.palette.mode === 'dark'
          ? '/svgs/alien.svg'
          : '/svgs/alienLight.svg',
    },
    {
      text: 'Earth (C-137)',
      srcIcon:
        theme.palette.mode === 'dark'
          ? '/svgs/planet.svg'
          : '/svgs/planetLight.svg',
    },
  ]
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          padding: 2,
          borderRadius: '30px',
          my: 8,
        }}
        elevation={4}
        color='default'
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
            <LinkTo href='/id-do-character'>
              <Typography
                variant='body1'
                color='text.primary'
                fontWeight={'bold'}
              >
                Rick Sanchez
              </Typography>
            </LinkTo>
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
                <Typography variant='body1' color='text.primary'>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box display='flex' justifyContent={'flex-end'} marginBottom={'4px'}>
            <LinkTo href='/id-do-character'>
              <Typography
                variant='body2'
                color='text.primary'
                marginTop={'30px'}
                marginRight={'4px'}
              >
                Saiba Mais
              </Typography>
            </LinkTo>
          </Box>
        </Box>
      </Card>
    </>
  )
}
