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
        element: <TaskList></TaskList>
      },
      {
        path:'pending-task',
        element: <Pending></Pending>
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