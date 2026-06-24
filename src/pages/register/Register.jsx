import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {

  const {register,handleSubmit}=useForm();
  const regForm = async(data)=>{
    try{
      const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`, data);
      console.log(response);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <Box component='section'>
    <Typography component="h2" variant='h2' sx={{fontWeight:500, textAlign:'center', marginTop:3}}>Register</Typography>
    <Box component="form" sx={{display:'flex', flexDirection:'column', marginY:5, gap:3}} onSubmit={handleSubmit(regForm)}>
      <TextField label="UserName" fullWidth variant='outlined'{...register("userName")}></TextField>
      <TextField label="fullName" fullWidth variant='outlined'{...register("fullName")}></TextField>
      <TextField label="email" fullWidth variant='outlined'{...register("email")}></TextField>
      <TextField label="phoneNumber" fullWidth variant='outlined'{...register("phoneNumber")}></TextField>
      <TextField label="password" fullWidth variant='outlined'{...register("password")}></TextField>
      <Button variant="contained" type='submit'>REGISTER</Button>
    </Box>
    </Box>
  )
}
