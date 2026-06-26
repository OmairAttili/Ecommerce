import React from 'react'
import { Box, CircularProgress, Typography} from '@mui/material'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';
import GetCategories from '../hook/GetCategories'

export default function Categories() {
    const {data,isLoading,isError,error}= GetCategories();
    if(isError){
        return <Typography component='p' sx={{fontSize:20, textAlign:'center', color:'red', marginTop:3}}>Error to get data</Typography>;
    }
    if(isLoading){
        return <CircularProgress size={100} sx={{color:'black', marginY:3}}/>;
    }

  return (
    <Box component='section'>
       {data.response.data.map((c)=>
       <Box component='div' key={c.id}>
           <Typography component='h2' variant='h4'>{c.name}</Typography>
       </Box>
    )}
    </Box>
  )
}