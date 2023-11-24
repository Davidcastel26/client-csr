import { Container, Heading } from "../ui"

export const ListingHead = ({
    title,
    id,
    img,
    imageSrc,
    roomNumber,
    details,
}) => {

  return (
      <>
        <Heading 
          title={title} 
          subtitle={`Listing number L${roomNumber}`}
        />
        <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
          <img 
            src={img} 
            alt={title} 
            fill
            className="object-cover w-full"
          />
          <div className="absolute top-5 right-5">
            {/* <HeartButton /> */}like?
          </div>
        </div>
    </>
  )
}
