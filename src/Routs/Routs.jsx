import {
  createBrowserRouter,
} from "react-router-dom";
import Roots from "../Roots/Roots";
import Dashbord from "../Pages/Dashbord/Dashbord";
import Home from "../Pages/HomePage/Home/Home";
import HomeRouts from "../Roots/HomeRouts";
import Login from "../Pages/Login/Login";
import AddTask from "../Pages/AddTask/AddTask";
import TaskList from "../Pages/TaskList/TaskList";
import Pending from "../Pages/Pending/Pending";
import Complate from "../Pages/Complate/Complate";
import Prograce from "../Pages/Prograce/Prograce";
import Register from "../Pages/Register/Register";
import PrivetRout from "./PrivetRout";



const router = createBrowserRouter([
  {
    path: "/dashbord",
    element: <Roots></Roots>,
    children: [
      {
        path: '/dashbord',
        element: <Dashbord></Dashbord>
      },
      {
        path:'add-task',
        element: <AddTask></AddTask>
      },
      {
        path:'task-list',
        element: <PrivetRout><TaskList></TaskList></PrivetRout>
      },
      {
        path:'pending-task',
        element: <PrivetRout><Pending></Pending></PrivetRout>
      },
      {
        path:'complate-task',
        element: <PrivetRout><Complate></Complate></PrivetRout>
      },
      {
        path:'prograce-task',
        element: <PrivetRout><Prograce></Prograce></PrivetRout>
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
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  }

]);

export default router