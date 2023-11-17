import { NavLink } from "react-router-dom"
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBed } from "react-icons/fa6";
// import { BiSolidBed } from "react-icons/bi";
// import { MdLocalHotel } from "react-icons/md";
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLinks } from "./NavLinks";
import { useState } from "react";

export const Navbar = () => {

    const [theme, setTheme] = useState( false );

    const handleTheme = () => {
        setTheme(!theme)
    } 

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
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-80">
                    <NavLinks />
                </ul>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">
                <NavLinks />
            </ul>
        </div>
        <div className="navbar-end">
            {/* THEME SETUP  */}
            <label className="swap swap-rotate">
                <input type="checkbox" className="theme-controller" onChange={handleTheme}/>
                {/* SUN ICON */}
                <BsSunFill className="swap-on h-4 w-4"/>
                {/* MOON ICON  */}
                <BsMoonFill className="swap-off h-4 w-4"/>
            </label>
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
