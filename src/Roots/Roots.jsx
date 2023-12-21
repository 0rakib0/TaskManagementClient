import { Outlet } from "react-router-dom"
import SideBar from "../SharePages/Sidebar/Sidebar"
import NavBar from "../SharePages/NavBar/NavBar"


const Roots = () => {
    return (
        <div>
            <NavBar></NavBar>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </div>
    )
}
export default Roots