import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="products">Product</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart</Link>
    </>
  )
}
