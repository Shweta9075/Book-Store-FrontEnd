import React, { useState } from 'react'
import Navbar from '../../Navbar'
import { Grid, Card, Typography, Tabs, Tab, Box } from '@mui/material'
import pic1 from '../../../Assets/pic1.png'
import { display } from '@mui/system'
import UserLogin from './UserLogin'
import UserRegistration from './UserRegistration'


const TabPanel = (props) => {
  const {children, value, index} = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}

const Login = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div>
      <Navbar/>
    <Grid container sx={{height: '90vh'}}>
      <Grid item lg={7} sm={5} sx={{
        backgroundImage:`url(${pic1})`, backgroundRepeat:'no-repeat',
         backgroundSize:'cover', backgroundPosition:'center',
         display: { xs:'none', sm:'block'}
      }}>
      </Grid>
      <Grid item lg={5} sm={7} xs={12}>
        <Card sx={{ width: '100%', height:'100%'}}>
          <Box>
            <Box sx={{borderBottom:1, borderColor:'divider'}}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary'
              onChange={handleChange}>
                <Tab label='Login' sx={{textTransform:'none', fontWidth:'bold'}}></Tab>
                <Tab label='Registration' sx={{textTransform:'none', fontWidth:'bold'}}></Tab>
              </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <UserRegistration/>
              </TabPanel>
          </Box>
        </Card>
      </Grid>
    </Grid>
    </div>
  )
}

export default Login