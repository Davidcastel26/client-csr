import axios from 'axios';


const serverUrl = import.meta.env.VITE_PRODUCTION_URL || 'http://localhost:8042/csr';

export const customFetch = axios.create({
    baseURL: serverUrl,
})