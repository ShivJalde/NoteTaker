import { Box, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarMenu = ({ anchorEl, handleClose, open, sx }) => {
    const navigate = useNavigate()
    return (
        <Box width={'100%'}>

            <Menu
                // id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    p: 0, m: 0
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',

                }}

            >
                <MenuItem sx={{
                    width: "175px"
                }} onClick={() => {
                    navigate('/login')
                }}>Logout</MenuItem>
            </Menu>
        </Box>
    )
}

export default NavbarMenu