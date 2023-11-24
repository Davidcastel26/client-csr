import { Link } from "react-router-dom"
import { customFetch, formatPrice } from "../../utils"

export const ListingCard = ({data}) => {
//    console.log(data)

  return (
    <Link
        key={data.idProduct} 
        to={`/products/${data.idProduct}`}
        className='col-span-1 cursor-pointer group'
    >
      <div className="fex felx-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
            <img 
                src={data.imgMainProduct} 
                alt={data.nameProduct + 'listing'} 
                className="object-cover h-full w-full group-hover:scale-110 transition"
            />
        </div>
        <div className="flex flex-row">
            <div className="font-semibold text-lg mr-2">
                Camper
            </div>
            <div className="font-semibold text-lg">
            L{data.numProduct}
            </div>
        </div>
        <div className="font-light text-neutral-500">
            Beach
        </div>
        <div className="flex flex-row items-center gap-1">
            {
                data.productDetail.map((detail) => {
                    const quetzalPrice = formatPrice(detail.price)
                    return (
                    <div key={detail.idProductDetail} className="font-semibold">
                        {quetzalPrice}
                    </div>)
                })
            }
            <div className="font-light">night</div>
        </div>
      </div>
    </Link>
  )
}
