import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import axiosInstance from '../api/AxiosInstance';

export default function GetCategories() {
  
const getCategories = async()=>{
        const response = await axiosInstance.get(`/Categories`);
        return response.data;
    }

    const query = useQuery({
        queryKey:['Categorie'],
        queryFn:getCategories,
        staleTime:60*1000*5
    })
    return query;
}
