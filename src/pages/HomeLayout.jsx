import { Outlet } from "react-router-dom" 

export const HomeLayout = () => {
  return (<>
    <nav>
      <span className="text-4xl text-primary">
        Casas Sobre Ruedas
      </span>
    </nav>
    <section className="align-element py-20">
      <Outlet />
    </section>
  </>)
}
