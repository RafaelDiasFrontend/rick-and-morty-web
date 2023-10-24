import { Box } from '@mui/material'
// import RickyAndMortySvg from '../../../../public/rickyAndMortySvg.svg'
import React from 'react'

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
        <div>{/* <RickyAndMortySvg /> */}</div>
        <div>Voltar ao topo</div>
      </Box>
    </>
  )
}
