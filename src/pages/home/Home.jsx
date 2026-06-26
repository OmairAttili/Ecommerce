import { Typography } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';
import Categories from '../../categories/Categories';
import { Box} from '@mui/material'

export default function Home() {
  const [value, setValue] = React.useState(2);
  return (
    <>
    <Typography component="h2" variant="h2">Home</Typography>
    <Box component="section">
      <Categories/>
    </Box>
    </>
  )
}