import { ThemeBtn } from '@/pages/_app'
import { Box, Container, Typography, useTheme } from '@mui/material'

export default function Hero() {
  const theme = useTheme()

  return (
    <Box bgcolor='background.default'>
      <Container sx={{ height: '580px' }}>
        <Box
          display={['flex']}
          flexDirection={['column', 'column', 'row']}
          gap={[2, 2, 3, 4]}
          px={'24px'}
          pt={8}
          pb={[0, 0, 1, 2]}
          height='100%'
        >
          <Box
            display={'flex'}
            flexDirection={['column', 'column']}
            justifyContent={'center'}
            gap={[2, 2, 3, 4]}
            width={['100%', '100%', '50%', '40%']}
          >
            <Typography
              color='text.primary'
              fontSize={['30px', '40px', '48px']}
              fontWeight={'bold'}
              variant='h1'
            >
              Saiba tudo em um só lugar.
            </Typography>

            <Typography
              color='text.primary'
              fontSize={['14px', '15px', '16px']}
              fontWeight={'bold'}
              variant='h1'
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
            ml='auto'
            width={['100%', '100%', '50%', '50%']}
            minHeight={'30vh'}
          ></Box>
        </Box>
      </Container>
    </Box>
  )
}
