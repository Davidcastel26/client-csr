import { Hero } from '../components/Hero';
import { customFetch } from '../utils'

const url = '/products'

export const loader = async() => {
  const response = await customFetch(url)
  console.log(response.data);
  const products = response.data;
  return {products};
}

export const Landing = () => {
  return (
    <>
      <Hero />
    </>
  )
}
