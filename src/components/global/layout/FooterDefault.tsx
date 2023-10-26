import { Box, Typography } from '@mui/material'
import React from 'react'
import LinkTo from '../LinkTo'

export default function FooterDefault() {
  return (
    <>
      <Box sx={{ m: 3 }}>
        <Box
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
          display='flex'
        >
          <div>
            <img src='/svgs/ricky.svg' alt='ricky and morty' />
          </div>
          <LinkTo href='#hero-img'>
            <div>Voltar ao topo</div>
          </LinkTo>
        </Box>
        <Box
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          display='flex'
        >
          <Typography component='h4' variant='body1' color='textPrimary'>
            ©2023
          </Typography>
          <Typography component='h4' variant='body1' color='textPrimary'>
            Todos os direitos reservados
          </Typography>
        </Box>
      </Box>
    </>
  )
}
