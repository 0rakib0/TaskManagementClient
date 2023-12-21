import { NavLink, useLocation } from "react-router-dom"

const NavBar = () => {

    const location = useLocation()
    const isHome = location.pathname === '/'
    console.log(isHome)

    return (
        <div className="navbar bg-base-100 absolute bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                </div>
                <a className="btn btn-ghost font-bold text-4xl text-gray-700 custom design">LOGO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            </div>
            <div className="navbar-end md:pr-8">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NavBar