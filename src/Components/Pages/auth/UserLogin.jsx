import { TextField, Button, Box, Alert } from "@mui/material";
import { NavLink } from "react-router-dom";


const UserLogin = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
    <Box component='form' noValidate sx={{mt:1}} id='loginform' onSubmit={handleSubmit}>
        <TextField margin="normal" required fullWidth id="email" name="email"
        label='Email Address' />
        <TextField margin="normal" required fullWidth id="password" name="password"
        label='Password' type='password' />
        <Box textAlign='center'>
            <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Login</Button>
        </Box>
        <NavLink to='/'>Forgot Password ?</NavLink>
        </Box>
    </div>
  )
}

export default UserLogin