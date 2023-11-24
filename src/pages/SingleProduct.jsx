import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link} from 'react-router-dom';
import { formatPrice, customFetch} from '../utils'

import { Container, 
        ListingHead, 
        ListingInfo } from '../components';

export const loader = async ({params}) => {
  const response = await customFetch(`/products/${params.id}`)
  return {product: response.data};
}

export const SingleProduct = () => {

  const { product } = useLoaderData();
  const {nameProduct, numProduct, imgs, productDetail, imgMainProduct, desc, idProduct} = product;
  console.log(productDetail)

  return (
    <Container>
    <div className='max-w-screen-lg mx-auto'>
      <div className="flex flex-col gap-6">
        <ListingHead 
          title={nameProduct}
          imageSrc={imgs}
          img={imgMainProduct}
          roomNumber={numProduct}
          details={productDetail}
          id={ idProduct }
        />
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
          { productDetail.map((lastInfo)=> {
              
              const { bath, beds, rooms, createdAt, fullDesc, isActive, price, idProductDetail, numGuest} = lastInfo;

              return (
              <ListingInfo
                key={lastInfo.idProductDetail}
                bath={bath}
                beds={beds} 
                rooms={rooms} 
                createdAt={createdAt} 
                fullDesc={fullDesc} 
                isActive={isActive} 
                price={price} 
                idProductDetail={idProductDetail} 
                numGuest={numGuest}
              />)
            })
          }
        </div>
      </div>
    </div>
    </Container>
  )
}
