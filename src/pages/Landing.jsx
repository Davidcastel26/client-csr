import { FeaturedProducts } from '../components';
import { Hero } from '../components/Hero';
import { customFetch } from '../utils'

// we need to set a query /products?featured=true 
const url = '/products'

export const loader = async() => {
  const response = await customFetch(url)
  // console.log(response.data);
  const products = response.data;
  return {products};
}

export const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
