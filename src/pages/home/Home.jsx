import { Typography } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';

export default function Home() {
  const [value, setValue] = React.useState(2);
  return (
    <>
    <Typography component="h2" variant="h2">Home</Typography>
    </>
  )
}
