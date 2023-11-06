import { Favorite } from '@mui/icons-material'
import NorthIcon from '@mui/icons-material/North'
import { Box, Container, Divider, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LinkTo from '../LinkTo'
import themeValue from '@/lib/hooks'
import Image from 'next/image'
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
      <Box
        mt={5}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          justifyItems: 'center',
        }}
        display='flex'
        whiteSpace={'nowrap'}
      >
        <LinkTo href='/'>
          <Image
            src='/svgs/ricky.svg'
            alt='ricky and morty'
            width={148}
            height={43}
          />
        </LinkTo>

        <Box
          display={isVisible ? 'flex' : 'hidden'}
          gap={1}
          alignItems={'center'}
          justifyContent={'center'}
          onClick={scrollToTop}
        >
          <Typography variant='subtitle2'>Voltar ao topo</Typography>
          <IconButton
            color='default'
            sx={{ border: `2px solid ${themeValue('#111111', '#fafafa')}` }}
          >
            <NorthIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider
        sx={{
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
          color='#11B0C8'
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          fontSize={'12px'}
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
    </>
  )
}
