import { Link, NavLink, useLocation } from "react-router-dom"
import './NavBar.css'
import { FaArrowRight } from "react-icons/fa"
import { useContext } from "react"
import { AuthContext } from "../../../Provider/AuthProvider"

const NavBar = () => {

    const {user} = useContext(AuthContext)

    const NavLinks = <>
        <li className="md:text-white text-xl bg-transparent hover:bg-gray-700 rounded mr-2"><NavLink to='/'>Home</NavLink></li>
        <li className="text-white text-xl bg-transparent hover:bg-gray-700 rounded mr-2"><NavLink to='/about-us'>ABOUT US</NavLink></li>
        {user&&<li className="md:text-white text-black text-xl bg-transparent hover:bg-gray-700 rounded mr-2"><NavLink to='/dashbord'>DASHBORD</NavLink></li>}
        <li className="md:text-white text-black text-xl bg-transparent hover:bg-gray-700 rounded mr-2"><NavLink to='/contact'>CONTACT</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 bg-gradient-to-r from-[#344e7d] via-[#53718b] to-[#41649f] mx-auto top-0 right-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       { NavLinks }
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-4xl text-white custom design">TaskNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn"><Link className="flex items-center gap-2" to='/login'>Let’s Explore <FaArrowRight></FaArrowRight> </Link></a>
            </div>
        </div>
    )
}


export default NavBar