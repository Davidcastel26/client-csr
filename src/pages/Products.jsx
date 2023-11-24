import { useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { Container, FeaturedProducts, OnProduction } from "../components"

const url = '/products'

export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data;
  return { products }
}

export const Products = () => {
  const { products } = useLoaderData()
  console.log(products)

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        <div>

        </div>
      </div>
    </Container>
  )
}
