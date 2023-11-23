import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link} from 'react-router-dom';
import { formatPrice, customFetch} from '../utils'
import { ListingHead } from '../components';

export const loader = async ({params}) => {
  const response = await customFetch(`/products/${params.id}`)
  return {product: response.data};
}

export const SingleProduct = () => {

  const { product } = useLoaderData();
  const {nameProduct, numProduct, imgs, productDetail, imgMainProduct, desc, idProduct} = product;
  console.log(product)

  return (
    <div className='max-w-screen-lg mx-auto'>
      <div className="flex flex-col gap-6">
        <ListingHead 
          title={nameProduct}
          imageSrc={imgs}
          roomNumber={numProduct}
          details={productDetail}
          id={ idProduct }
        />
      </div>
    </div>
  )
}
