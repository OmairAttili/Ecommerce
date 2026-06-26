import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import axiosInstance from '../../api/AxiosInstance';
import { RegSchema } from '../../registerSchema/RegSchema';

export default function Register() {

  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm({
    resolver:yupResolver(RegSchema)
  });

  const [ServerError,setServerError]=useState([]);

  const regForm = async(data)=>{
    try{
      const response = await axiosInstance.post(`/auth/Account/Register`, data);
      console.log(response);
    }catch(err){
      setServerError(err.response.data.errors);
    }
  }

  return (
    <Box component='section'>
    <Typography component="h2" variant='h2' sx={{fontWeight:500, textAlign:'center', marginTop:3}}>Register</Typography>
    {ServerError?.length > 0 ? ServerError.map((error)=>
  <Typography component="p" color='error' sx={{fontWeight:500, fontSize:15}}>{error}</Typography>  
  ):''}
    <Box component="form" sx={{display:'flex', flexDirection:'column', marginY:5, gap:3}} onSubmit={handleSubmit(regForm)}>
      <TextField label="UserName" fullWidth variant='outlined'{...register("userName")}
      error={errors.userName} helperText={errors.userName?.message}></TextField>
      <TextField label="fullName" fullWidth variant='outlined'{...register("fullName")}
      error={errors.fullName} helperText={errors.fullName?.message}></TextField>
      <TextField label="email" fullWidth variant='outlined'{...register("email")}
      error={errors.email} helperText={errors.email?.message}></TextField>
      <TextField label="phoneNumber" fullWidth variant='outlined'{...register("phoneNumber")}
      error={errors.phoneNumber} helperText={errors.phoneNumber?.message}></TextField>
      <TextField label="password" fullWidth variant='outlined'{...register("password")}
      error={errors.password} helperText={errors.password?.message}></TextField>
      <Button variant="contained" type='submit' disabled={isSubmitting} sx={{py:2}}>
        {isSubmitting?<CircularProgress/>:"REGISTER"}</Button>
    </Box>
    </Box>
  )
}
