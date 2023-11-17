
export const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold traking-widest">
              Casa Sobre Ruedas
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
      En nuestro hotel, cada habitación es una renovada y confortable sección de autobús, diseñada para proporcionar una experiencia de hospedaje única. Nuestros autobuses se encuentran a solo 100 metros de la orilla del mar garantiza a nuestros huéspedes la proximidad a la play
      </p>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
      Además de ofrecer comodidades excepcionales, estamos inmersos en un sector que no solo sirve como lugar de residencia, sino también como un animado centro turístico. Perfecto para aquellos que buscan disfrutar de la playa y explorar las maravillas del lugar.
      </p>
    </>
  )
}
