import { Link } from 'react-router-dom'

import hero1 from '../../public/landingIMGS/outside.jpeg';
import hero3 from '../../public/landingIMGS/comedor.jpeg';
import hero2 from '../../public/landingIMGS/cocina.jpeg';
import hero4 from '../../public/landingIMGS/pasillo.jpeg';

const carouselImages = [ hero1, hero2, hero3, hero4 ];

export const Hero = () => {
  return (
    <div
      className='grid lg:grid-cols-2 gap-24 items-center'
    >
      <div> 
        <h1 
          className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'
        >
          Estamos creando una experiencia de hospedaje única
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
        Nuestros autobuses se encuentran a solo 100 metros de la orilla del mar!!
        </p>
        <div className="mt-10">
          <Link to='/products' className='btn btn-primary'>
            Nuestros Campers
          </Link>
        </div>
      </div>
      <div 
        className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box"
      > 
        {
          carouselImages.map( (img, index) => {
            return (
              <div className="carousel-item" key={img}>
                <img src={img} className='rounded-box h-full w-80 object-cover' alt='index'/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
