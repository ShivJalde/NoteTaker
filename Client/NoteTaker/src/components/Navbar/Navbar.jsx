import React from 'react'
import { Box, TextField, Typography } from '@mui/material'

const Navbar = () => {

  return (
    <Box
      sx={{
        py: 3,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Typography
        sx={{
          fontSize:'25px',
          paddingLeft: 2,
          fontWeight: 700,
        }}
      >
        Notes
      </Typography>
    </Box>
  )
}

export default Navbar