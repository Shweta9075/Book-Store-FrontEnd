import { CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const LayOut = () => {
  return (
    <div>
    <CssBaseline/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default LayOut