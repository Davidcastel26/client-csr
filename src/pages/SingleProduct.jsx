import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link} from 'react-router-dom';
import { formatPrice, customFetch} from '../utils'

export const loader = async ({params}) => {
  const response = await customFetch(`/products/${params.id}`)
  return {product: response.data};
}

export const SingleProduct = () => {

  const { product } = useLoaderData();
  console.log(product)

  return (
    <h1 className='text-4xl'>SingleProduct</h1>
  )
}
