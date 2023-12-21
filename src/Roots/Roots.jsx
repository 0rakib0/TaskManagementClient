import { Outlet } from "react-router-dom"
import SideBar from "../SharePages/Sidebar/Sidebar"
import NavBar from "../SharePages/NavBar/NavBar"


const Roots = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex">
                <SideBar></SideBar>
                <div className="mt-20 w-10/12 p-6 bg-base-200"><Outlet></Outlet></div>
            </div>
        </div>
    )
}
export default Roots