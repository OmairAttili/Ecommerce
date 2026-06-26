import axios from "axios";

const axiosInstance = axios.create({
    baseURL:`https://${import.meta.env.VITE_BURL}`,
    headers:{
        'Accept-Language':'en'
    }
});

export default axiosInstance;