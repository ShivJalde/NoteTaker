import React from 'react'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ value, onChange, handleSearch, onClearSearch }) => {
    return (
        <Box >
            <TextField sx={{
                backgroundColor: "lightgrey"
                ,
                width: {
                    xs: '300px',
                    sm: '350px',
                    md: '500px',
                    lg: '600px',
                },
            }} value={value} onChange={onChange} placeholder='Search Note' InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                        >
                            <SearchIcon sx={{fontSize:29}} />
                        </IconButton>
                    </InputAdornment>
                )
            }} />
        </Box >)
}

export default Searchbar