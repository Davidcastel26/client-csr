import { Outlet } from "react-router-dom" 

export const HomeLayout = () => {
  return (<>
    <nav>
      <span className="text-4xl text-primary">
        Casas Sobre Ruedas
      </span>
      <Outlet />
    </nav>
  </>)
}
