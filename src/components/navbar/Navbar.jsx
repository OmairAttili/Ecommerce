import React from 'react'
import { Link } from 'react-router-dom'
import { Box} from '@mui/material'

export default function Navbar() {
  return (
    <>
    <Box component="section" sx={{display:'flex',justifyContent:'center', alignItems:'center', gap:10,fontSize:20, bgcolor:'wheat', py:2}}>
        <Link to="/">Home</Link>
        <Link to="products">Product</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart</Link>
    </Box>
    </>
  )
}
