import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { Box, Button, TextField, Typography } from '@mui/material'

const Login = () => {
  return (
    <>
      <Navbar />
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        mt: 23,
      }}>
        <Box sx={{
          width: '30%',
          background: 'white',
          px: 4,
          py: 7,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        }}>
          <form>
            <Typography sx={{ fontSize: '35px', mb: 2 }}>
              Login
            </Typography>


            <TextField type='text' placeholder='Email' className='input-box' />
            <Button onClick={() => { }}>
              Login
            </Button>

            <Typography>Not registered yet?{" "}
              <Link to='/signup' className='' style={{
              }}>Create an Account</Link>
            </Typography>
          </form>

        </Box>
      </Box>
    </>
  )
}

export default Login