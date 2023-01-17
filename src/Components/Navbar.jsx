import { AppBar, Box, Toolbar, Button,Typography, styled } from "@mui/material"
import { NavLink } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ThemeContext } from "@emotion/react";
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Search = styled("div")(({ them
}) => ({backgroundColor:"white",
padding:"0 10px",
width:"40%"
}));


const Navbar = () => {
  return (
    <div>
        <Box sx={{flexGrow:1}}>
          <AppBar position="static" color="secondary">
          <Toolbar>
          <Typography  variant="h4" component="div" sx={{
            flexGrow:1
          }}><AutoStoriesIcon/>&nbsp;
            Book-Store
            </Typography>
            <Search>
            <SearchIcon/>
            <InputBase placeholder="Search..."/>
            </Search>
          <Button component={NavLink} to='/' style={({ isActive}
            )=> {return { backgroundColor: isActive ? '#6d1b7b': ''}}} sx={{ color:'white', textTransform:'none'}}>Home</Button>
            <Button component={NavLink} to='/login' style={({ isActive}
                )=> {return { backgroundColor: isActive ? '#6d1b7b': ''}}} sx={{color: 'white', textTransform:'none'}}>Login/Registration</Button>
                <Button component={NavLink} to='/logout' style={({ isActive}
                  )=> {return { backgroundColor: isActive ? '#6d1b7b': ''}}} sx={{color: 'white', textTransform:'none'}}>Logout</Button>
                  <Button component={NavLink} to='/cart' style={({ isActive}
                    )=> {return { backgroundColor: isActive ? '#6d1b7b': ''}}} sx={{color: 'white', textTransform:'none'}}><ShoppingCartIcon/></Button>  
                </Toolbar>
                </AppBar>
        </Box>
    </div>
  )
}

export default Navbar