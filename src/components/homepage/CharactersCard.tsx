import themeValue, { truncateName } from '@/lib/hooks'
import CharacterType from '@/lib/types/CharacterType'
import { Box, useTheme } from '@mui/material'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import LinkTo from '../global/LinkTo'

interface CharactersCardProps {
  character: CharacterType
}

export default function CharactersCard({ character }: CharactersCardProps) {
  const { id, name, image, status, species } = character
  const theme = useTheme()
  const cardContentItems = [
    {
      text: status,
      srcIcon: '/svgs/pulse.svg',
    },
    {
      text: species,
      srcIcon: '/svgs/alienLight.svg',
    },
    {
      text: 'Earth (C-137)',
      srcIcon: '/svgs/planetLight.svg',
    },
  ]

  return (
    <>
      <LinkTo href={`/characters/${id}`}>
        <Card
          sx={{
            maxWidth: '200px',
            borderRadius: '16px',

            transition: 'ease-in-out 0.2s',
            backgroundColor: themeValue('#F9F9F9', '#313234'),

            '&:hover': {
              boxShadow: '0 0 8px #11b0c856',
            },
          }}
          elevation={0}
        >
          <CardMedia
            component='img'
            height='150'
            width={'100%'}
            image={image ? image : '/imgs/ricky.jpg'}
            alt='Paella dish'
            sx={{ backgroundColor: 'transparent' }}
          />
          <Box sx={{ padding: '12px', marginBottom: '4px' }}>
            <Box>
              <Typography
                variant='body2'
                color='text.primary'
                fontWeight={'bold'}
                sx={{ marginBottom: '4px' }}
              >
                {truncateName(String(name))}
              </Typography>
            </Box>
            <Box display='flex-col' gap={'12px'}>
              {cardContentItems.map((item, index) => (
                <Box
                  key={index}
                  display='flex'
                  alignItems={'center'}
                  gap={'4px'}
                >
                  <Image
                    width={16}
                    height={16}
                    src={item.srcIcon}
                    alt={'pulse'}
                    style={{
                      filter: themeValue('invert(0%)', 'invert(100%)'),
                    }}
                  />
                  <Typography variant='body2' color='text.primary'>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Card>
      </LinkTo>
    </>
  )
}
