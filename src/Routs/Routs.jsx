import {
  createBrowserRouter,
} from "react-router-dom";
import Roots from "../Roots/Roots";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Home from "../Pages/HomePage/Home/Home";
import HomeRouts from "../Roots/HomeRouts";
import Login from "../Pages/Login/Login";



const router = createBrowserRouter([
  {
    path: "/dashbord",
    element: <Roots></Roots>,
    children: [
      {
        path: '/dashbord',
        element: <Dashbord></Dashbord>
      }
    ]
  },
  {
    path: '/',
    element: <HomeRouts></HomeRouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }

]);

export default router