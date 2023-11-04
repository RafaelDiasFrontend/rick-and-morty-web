import themeValue, { truncateName } from '@/lib/hooks'
import CharacterType from '@/lib/types/CharacterType'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import LinkTo from '../global/LinkTo'

interface CharactersCardProps {
  character: CharacterType
}

export default function CharactersCard({ character }: CharactersCardProps) {
  const { id, name, image, status, species, location } = character
  const theme = useTheme()
  const isMobile = useMediaQuery('(max-width:600px)')
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
      text: truncateName({
        name: String(location?.name),
        maxLength: isMobile ? 6 : 16,
      }),
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
            border: `1px solid ${themeValue('#11111117', '#fafafa25')}`,
            transition: 'box-shadow 0.2s ease, transform 0.2s ease', // Add transform to the transition
            '&:hover': {
              border: '1px solid #11b0c885',
              transform: 'translateY(-5px)', // Move the element 5 pixels up on hover
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
                {truncateName({
                  name: String(name),
                })}
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
