import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { validateEmail, validatePassword } from '../../utils/helper.mjs';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const [isError, setIsError] = useState(false);

  const checkValidation = () => {
    if (registerData.name === '' || registerData.email === '' || registerData.password === '' || registerData.confirmPassword === '') {
      setIsError(true)
      setEmailError(true)
      setPasswordError(true)
      return false
    }

    if (registerData.email === '' || !validateEmail(registerData.email)) {
      setEmailError(true)
      return false
    }
    if (registerData.password === '' || !validatePassword(registerData.password)) {
      setPasswordError(true)
      return false
    }

    if (registerData.password === '' || registerData.password !== registerData.confirmPassword) {
      setIsError(true);
      return false
    }

    return true
  }

  const handleRegister = (e) => {
    e.preventDefault();
    let validateRegisterFormData = checkValidation()

    if (validateRegisterFormData) {
      //Register api call
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
        mt: 5,
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
            Register
          </Typography>
          <TextField label='Fullname *'
            onChange={(e) => {
              let inputValue = e.target.value;

              setRegisterData({
                ...registerData,
                name: inputValue
              })

              if (inputValue === '') {
                setIsError(false)
              }
            }}
            type='text'
            className='input-box'
            sx={{
              width: '100%',
              background: 'transparant',
              mb: 2
            }}
            error={isError && registerData?.name === ''}
            helperText={isError && registerData?.name === '' ? 'Fullname is required' : ''
            }
          />

          <TextField label='Email *'
            onChange={(e) => {
              let inputValue = e.target.value;
              if (!validateEmail(inputValue)) {
                setEmailError(true)
              }
              setRegisterData({
                ...registerData,
                email: inputValue
              })

              if (inputValue === '') {
                setEmailError(false)
              }
            }}
            type='text'
            className='input-box'
            sx={{
              width: '100%',
              background: 'transparant',
              mb: 2
            }}
            error={emailError && registerData?.email === '' || emailError && !validateEmail(registerData?.email)}
            helperText={emailError &&
              registerData?.email === '' ? 'Email is required' : emailError && !validateEmail(registerData.email) ? 'Email is invalid' : ''
            }
          />

          <TextField
            label='Password *'
            sx={{
              width: "100%",
              mb: 2

            }}
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => {
              const inputValue = e.target.value
              if (!validatePassword(inputValue)) {
                setPasswordError(true)
              }
              setRegisterData({
                ...registerData,
                password: inputValue
              })
            }}
            value={registerData.password}
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
            error={passwordError && registerData.password === '' || passwordError && !validatePassword(registerData.password)}
            helperText={
              passwordError && registerData.password === '' ? 'Password is Required' : passwordError && !validatePassword(registerData.password) ? 'Invalid password: Must include at least 8 char, an 1 num, an 1 uppercase letter, an 1 special char' : ''
            }
          />

          <TextField
            label='Confirm Password *'
            sx={{
              width: "100%",
              mb: 2
            }}
            type={'password'}
            onChange={(e) => {
              const inputValue = e.target.value
              if (registerData.password !== inputValue) {
                setPasswordError(true)
              }
              setRegisterData({
                ...registerData,
                confirmPassword: inputValue
              })

              if (inputValue === '') {
                setPasswordError(false)
              }
            }}
            value={registerData.confirmPassword}
            error={passwordError && registerData.confirmPassword === '' || registerData.password !== registerData.confirmPassword}
            helperText={
              passwordError && registerData.confirmPassword === '' ? 'Confirm password is Required' : registerData.password !== registerData.confirmPassword ? 'Password not matching' : ''
            }
          />
          <Button onClick={(e) => handleRegister(e)} sx={{
            background: 'lightblue',
            width: '100%',
            py: 1,
            mb: 2
          }}>
            Register
          </Button>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5
          }}>
            <Typography>
              {`Already have an account?`}
            </Typography>
            <Typography sx={{
              cursor: 'pointer',
              textDecoration: 'underline',
              color: 'blue'
            }} onClick={() => {
              navigate('/login')
            }}>Login</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Register