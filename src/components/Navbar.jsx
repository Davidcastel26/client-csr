import { NavLink } from "react-router-dom"
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBed } from "react-icons/fa6";
// import { BiSolidBed } from "react-icons/bi";
// import { MdLocalHotel } from "react-icons/md";
import { FaBarsStaggered } from 'react-icons/fa6'

export const Navbar = () => {
  return (<nav className="bg-base-200">
    <div className="navbar align-element">
        <div className="navbar-start">
            {/* TITLE */}
            <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center'>
             CSR
            </NavLink> 
            {/* DROPDOWN */}
            <div className="dropdown">
                <label 
                    tabIndex={0}
                    className="btn btn-ghost lg:hidden"
                >
                    <FaBarsStaggered className="h-6 w-6" />
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200">
                    nav links
                </ul>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">
                nav links
            </ul>
        </div>
        <div className="navbar-end">
            {/* THEME SETUP  */}
            {/* RESERVATION LINK  */}
            <NavLink to='/bookings' className='btn btn-ghost btn-circle btn-md ml-4'>
                <div className="indicator">
                {/* <BiSolidBed className="h-6 w-6"/> */}
                <FaBed className="h-6 w-6" />
                {/* <MdLocalHotel className="h-6 w-6" /> */}
                    <span className="badge badge-sm badge-primary indicator-item">
                        1
                    </span>
                    
                </div>
            </NavLink>
        </div>
    </div>
  </nav>)
}
