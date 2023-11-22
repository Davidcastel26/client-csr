import { Link, useLoaderData } from 'react-router-dom';

export const ProductsGrid = () => {

    const { products } = useLoaderData()
    // console.log(products)

  return (
    <div
        className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'
    >
        {products.map( (product) => {
            const {nameProduct, numProduct, imgMainProduct, desc} = product;
            return <Link
                 key={product.idProduct} 
                 to={`/products/${product.idProduct}`}
                 className='card w-full shadow-xl hover:shadow-2xl transition duration-300'
                 >
                <figure className='px-4 pt-4'>
                    <img src={imgMainProduct} 
                        alt={nameProduct} 
                        className='rounded-xl h-64 md:h-48 w-full object-cover' 
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title capitalize tracking-wider">
                        {nameProduct}
                    </h2>
                    <div className="flex flex-row justify-between">
                        <p className=''> Numero de bus  : </p> {" "}
                        <span className="text-secondary"> {numProduct} </span>
                    </div>
                   
                    <p>{ desc }</p>
                </div>
                
            </Link>
        })}

    </div>
  )
}
