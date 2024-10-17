import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)


  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
      <Navbar />
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        mt: 10,
      }}>
        <Box sx={{
          width: {
            xs: '70%',
            sm: '60%',
            md: '50%',
            lg: '40%',
            xl: '25%'
          },
          background: 'white',
          px: 4,
          py: 7,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        }}>
          <form>
            <Typography sx={{ fontSize: '35px', mb: 2 }}>
              Login
            </Typography>


            <TextField label='Email *' type='text' className='input-box' sx={{
              width: '100%',
              background: 'transparant',

              mb: 2
            }} />

            <TextField
              label='Password *'
              sx={{
                width: "100%",
                // mb: 2
              }}
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => {
                setLoginData(e.target.value)
              }}
              value={loginData.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Typography sx={{
              textAlign: 'end'
              , mb: 3
            }}>
              <Button
                disableRipple
                sx={{
                  textTransform: "capitalize",
                  background: 'transparant',
                  '&:hover': {
                    backgroundColor: 'transparent',  // Add hover styles here
                  }
                }}>Forgot Password</Button>
            </Typography>
            <Button onClick={() => { }} sx={{
              background: 'lightblue',
              width: '100%',
              py: 1,
              mb: 2
            }}>
              Login
            </Button>

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}>
              <Typography>
                {`Don't have an account ?`}
              </Typography>
              {/* <Link to='/signup' className='' style={{
              }}>Register here</Link> */}
              <Typography sx={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: 'blue'
              }} onClick={() => {
                navigate('/signup')
              }}>Register Here</Typography>
            </Box>
          </form>

        </Box>
      </Box>
    </>
  )
}

export default Login