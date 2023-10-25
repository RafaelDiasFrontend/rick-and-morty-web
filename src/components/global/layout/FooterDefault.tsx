import { Box } from '@mui/material'
import React from 'react'
import LinkTo from '../LinkTo'

export default function FooterDefault() {
  return (
    <>
      <Box
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          m: 3,
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
    </>
  )
}
