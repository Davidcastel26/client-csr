import { Container, Heading } from "../ui"

export const ListingHead = ({
    title,
    imageSrc,
    roomNumber,
    details,
    id
}) => {

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-6">
        <Heading 
          title={title} 
          subtitle={`Listing number L${roomNumber}`}
         />
      </div>
    </div>
    </Container>
  )
}
