import { ThemeBtn } from '@/pages/_app'
import { DarkMode } from '@mui/icons-material'
import { Box, Button, Container, Typography, useTheme } from '@mui/material'

export default function Hero() {
  const theme = useTheme()

  return (
    <Box bgcolor='background.default'>
      <Container sx={{ height: '580px' }}>
        <Box
          display={['flex']}
          flexDirection={['column', 'column', 'row']}
          px={'24px'}
          pt={8}
          pb={[0, 0, 1, 2]}
          height='100%'
        >
          <Box
            display={'flex'}
            flexDirection={['column', 'column']}
            width={['100%', '100%', '50%', '40%']}
            justifyContent={'center'}
          >
            <Typography
              marginTop={'34px'}
              color='text.primary'
              fontSize={['2.4rem', '40px', '48px']}
              fontWeight={'bold'}
              variant='h1'
              maxWidth={'21rem'}
              marginBottom={'24px'}
            >
              Saiba tudo em um só
              <span style={{ color: '#11B0C8' }}> lugar.</span>
            </Typography>

            <Typography
              color='text.primary'
              fontSize={['0.85rem', '1rem']}
              maxWidth={['17rem', '33rem']}
              lineHeight={1.4}
              fontWeight={'regular'}
              variant='h1'
              marginBottom={'54px'}
            >
              Personagens, localizações, episódios e muito mais.
            </Typography>

            <ThemeBtn />
          </Box>

          <Box
            sx={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundImage: `url(${
                theme.palette.mode === 'dark'
                  ? '/homeimages/heroImage.png'
                  : '/homeimages/herolightimage.png'
              })`,
            }}
            height='436px'
            ml='auto'
            width={['100%', '100%', '50%', '50%']}
          ></Box>
        </Box>
      </Container>
    </Box>
  )
}