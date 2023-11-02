import { Favorite } from '@mui/icons-material'
import NorthIcon from '@mui/icons-material/North'
import { Box, Container, Divider, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LinkTo from '../LinkTo'
export default function FooterDefault() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Container sx={{ bgcolor: 'background.default' }}>
        <Box
          mt={5}
          px={'20px'}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            justifyItems: 'center',
          }}
          display='flex'
        >
          <LinkTo href='/'>
            <img src='/svgs/ricky.svg' alt='ricky and morty' />
          </LinkTo>

          <Box
            display={isVisible ? 'flex' : 'hidden'}
            gap={1}
            alignItems={'center'}
            justifyContent={'center'}
            onClick={scrollToTop}
          >
            <Typography variant='subtitle2'>Voltar ao topo</Typography>
            <IconButton color='default' sx={{ border: '2px solid black' }}>
              <NorthIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider
          sx={{
            mt: [3, 3, 5, 10],
            mb: [2, 3, 4, 5],
            backgroundColor: 'primary.main',
          }}
        />

        <Box
          display={['block', 'block', 'flex']}
          textAlign={['center', 'center', 'start']}
          justifyContent={'space-between'}
          px={'20px'}
          whiteSpace={'nowrap'}
        >
          <Typography variant='subtitle1' fontWeight={'bold'}>
            &copy;{new Date().getFullYear()}
          </Typography>
          <Typography
            fontSize={'12px'}
            color='#11B0C8'
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            Desenvolvido com{' '}
            <Favorite sx={{ margin: '0 3px' }} fontSize='small' /> por{' '}
            <Link
              style={{
                margin: '0 3px',
                textDecoration: 'none',
                color: '#11B0C8',
                fontSize: '12px',
                fontWeight: 'bold',
              }}
              href='https://github.com/EdgarSantiago'
            >
              Edgar Santiago
            </Link>
            e
            <Link
              style={{
                margin: '0 3px',
                textDecoration: 'none',
                color: '#11B0C8',
                fontSize: '12px',
                fontWeight: 'bold',
              }}
              href='https://github.com/RafaelDiasFrontend'
            >
              Rafael Dias
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  )
}
