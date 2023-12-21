import { Outlet } from "react-router-dom"
import NavBar from "../Pages/HomePage/NavBar/NavBar"

const HomeRouts = () =>{
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}

export default HomeRouts