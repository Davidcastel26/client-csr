import { formatPrice } from "../../utils"
import { LisitngCategorySinglePage } from "./LisitngCategorySinglePage"

export const ListingInfo = ({ 
    bath, 
    beds, 
    rooms, 
    createdAt, 
    fullDesc, 
    isActive, 
    price, 
    numGuest
}) => {
    

  return (
    <div className="col-span-4 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold flex flex-row items-center gap-2">
                <div>Hosted by Gaby</div>
                {/* AVATAR IMG HERE  */}
                <p>🙋🏻‍♀️</p>
            </div>
            <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                <div>{numGuest} gests</div>
                <div>{beds} rooms</div>
                <div>{bath} bathrooms</div>
            </div>
        </div>
        <div className="divider" />
        <LisitngCategorySinglePage />
        <div className="divider" />
        <div className="text-lg font-light text-neutral-500">
            {fullDesc}
        </div>
        <div className="divider" />
        <div className="text-lg font-light text-neutral-500">
            Location it's in the same since its a complex of trucks.
            <button className="text-lg font-semibold" >click to check location</button>
        </div>
    </div>
  )
}
