import { useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { Container, ListingCard } from "../components"

const url = '/products'

export const loader = async () => {
  const response = await customFetch(url)
  const products = response.data;
  return { products }
}

// const listingID = async(id) => {
//   const response = await customFetch(`/products/${data.idProduct}`);
//   return { pid : response.data}
//  }

//  console.log(listingID);

export const Products = () => {

  const { products } = useLoaderData()
  // console.log(products)
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {
          products.map((listings) => {
            return (
              <ListingCard 
                key={listings.idProduct}
                data={listings}
              />
            )
          })
        }
      </div>
    </Container>
  )
}
