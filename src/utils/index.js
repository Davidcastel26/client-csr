import axios from 'axios';


const serverUrl = import.meta.env.VITE_PRODUCTION_URL || 'http://localhost:8042/csr';

export const customFetch = axios.create({
    baseURL: serverUrl,
})

export const formatPrice = ( price ) => {
    const  dollarsAmount = new Intl.NumberFormat('en-US', {
        style:'currency',
        currency:'USD'
    })

    const quetzalesAmount = new Intl.NumberFormat('es-GT', {
        style: 'currency',
        currency: 'GTQ'
    }).format((price/100).toFixed(2));

    return quetzalesAmount;
}

