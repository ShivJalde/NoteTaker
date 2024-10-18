import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { validateEmail, validatePassword } from '../../utils/helper.mjs';
import ForgotPasswordDialog from '../../components/ForgotPassword/ForgotPasswordDialog';

const Login = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isForgotPassClick, setIsForgotPassClick] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const checkValidation = () => {
    if (loginData.email === '' || !validateEmail(loginData.email)) {
      setIsEmailError(true)
      if (loginData.password === '') setIsPasswordError(true);
      return false
    }
    if (loginData.password === '' || !validatePassword(loginData.password)) {
      setIsPasswordError(true)
      return false
    }

    return true
  }

  const handleLogin = (e) => {
    e.preventDefault();
    let validateLoginFormData = checkValidation()

    if (validateLoginFormData) {
      //Login api call
    }

  }
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
          <Typography sx={{ fontSize: '35px', mb: 2 }}>
            Login
          </Typography>


          <TextField label='Email *'
            onChange={(e) => {
              let inputValue = e.target.value;
              if (!validateEmail(inputValue)) {
                setIsEmailError(true)
              }
              setLoginData({
                ...loginData,
                email: inputValue
              })

              if (inputValue === '') {
                setIsEmailError(false)
              }
            }}
            type='text'
            className='input-box'
            sx={{
              width: '100%',
              background: 'transparant',
              mb: 2
            }}
            error={isEmailError && loginData?.email === '' || isEmailError && !validateEmail(loginData?.email)}
            helperText={isEmailError &&
              loginData?.email === '' ? 'Email is required' : isEmailError && !validateEmail(loginData.email) ? 'Email is invalid' : ''
            }
          />

          <TextField
            label='Password *'
            sx={{
              width: "100%",
            }}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => {
              const inputValue = e.target.value
              if (!validatePassword(inputValue)) {
                setIsPasswordError(true)
              }
              setLoginData({
                ...loginData,
                password: inputValue
              })
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
            error={isPasswordError && loginData.password === '' || isPasswordError && !validatePassword(loginData.password)}
            helperText={
              isPasswordError && loginData.password === '' ? 'Password is Required' : isPasswordError && !validatePassword(loginData.password) ? 'Invalid password: Must include at least 8 char, an 1 num, an 1 uppercase letter, an 1 special char' : ''
            }
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
              }}
              onClick={() => setIsForgotPassClick(true)}

            >Forgot Password ?</Button>
          </Typography>
          <Button onClick={(e) => handleLogin(e)} sx={{
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

            <Typography sx={{
              cursor: 'pointer',
              textDecoration: 'underline',
              color: 'blue'
            }} onClick={() => {
              navigate('/signup')
            }}>Register Here</Typography>
          </Box>

        </Box>
      </Box>
      <ForgotPasswordDialog close={() => setIsForgotPassClick(false)} open={isForgotPassClick} />
    </>
  )
}

export default Login