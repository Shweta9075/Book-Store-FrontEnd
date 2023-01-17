import React from 'react'
import { TextField, Button, Box, FormControlLabel} from '@mui/material'
import { NavLink } from 'react-router-dom'
import { CheckBox } from '@mui/icons-material'

const UserRegistration = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
    <h1>
    <Box component='registraation-form' noValidate sx={{mt:1}} id='registraation-form' onSubmit={handleSubmit}>
    <TextField margin="normal" required fullWidth id="username" name="username"
    label='User Name' />
    <TextField margin="normal" required fullWidth id="email" name="email"
    label='Email Address' />
    <TextField margin="normal" required fullWidth id="password" name="password"
    label='Password' type='password' />
    <TextField margin="normal" required fullWidth id="password-confirmation" name="password-confirmation"
    label='Confirm Password' type='password' />
    <Box textAlign='center'>
        <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Sign up</Button>
    </Box>
    </Box>
    </h1>
    </div>
  )
}

export default UserRegistration