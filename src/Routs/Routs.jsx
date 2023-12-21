import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Home from "../Pages/HomePage/Home/Home";

  

  const router = createBrowserRouter([
    {
      path: "/dashbord",
      element: <Roots></Roots>,
      children: [
        {
          path:'/dashbord',
          element: <Dashbord></Dashbord>
        }
      ]
    },
    {
      path:'/',
      element: <Home></Home>
    }
  ]);

  export default router