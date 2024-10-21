import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import pravinJaldePhoto from '../../assets/pravinJaldePhoto.jpeg'
import NavbarMenu from './NavbarMenu';
import Searchbar from '../SearchbarComponent/Searchbar';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchQuery, setSearchQuery] = useState('')
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleSearchQuery = () => {

  }

  return (
    <Box
      sx={{
        p: 0.5,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#624E88"
      }}
    >
      <Typography
        sx={{
          fontSize: '25px',
          paddingLeft: 2,
          fontWeight: 700,
          color: 'whitesmoke'
        }}
      >
        Notes
      </Typography>
      <Box>
        <Searchbar handleSearch={handleSearchQuery} onChange={(e) => {
          setSearchQuery(e.target.value)
        }} onClearSearch={() => setSearchQuery('')} value={searchQuery} />
      </Box>
      <Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          backgroundColor: '#8967B3',
          padding: 2,
          marginRight: 1,
          cursor: 'pointer'
        }}
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}

          onClick={(event) => {
            setAnchorEl(event.currentTarget)
          }}
        >
          <Typography sx={{
            color: "wheat"
          }}>
            Shivraj Jalde
          </Typography>
          <img src={pravinJaldePhoto} height={35} width={35} style={{ borderRadius: '50%' }} />
        </Box>
        <NavbarMenu anchorEl={anchorEl} handleClose={handleClose} open={open} />
      </Box>
    </Box>
  )
}

export default Navbar