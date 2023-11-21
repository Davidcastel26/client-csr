import { Hero } from '../components/Hero';
import { customFetch } from '../utils'

const url = '/products'

export const loader = async() => {
  const response = await customFetch(url)
  console.log(response);
  return response;
}

export const Landing = () => {
  return (
    <>
      <Hero />
    </>
  )
}
