import { useContext } from "react"
import { FaBinoculars, FaBookReader, FaBorderStyle, FaChalkboardTeacher, FaClipboardCheck, FaClipboardList, FaPlusSquare, FaSignOutAlt, FaUserAlt, FaWindowRestore } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"


const SideBar = () =>{
    const {Logout} = useContext(AuthContext)

    const naviget = useNavigate()
    const handleLout = () =>{
        Logout()
        naviget('/')
    }

    return (
        <div className="w-2/12 px-2 pt-24 bg-base-100 shadow-xl pb-12">
            <h4 className="md:text-xl text-gray-700 font-semibold uppercase pb-2"><Link className="flex items-center gap-2" to='/dashbord'><FaBorderStyle className="text-2xl text-green-500"></FaBorderStyle><span className="hidden md:block">Dashbord</span></Link></h4>
            <hr className="py-2" />
            <ul className="pl-3">
                <li className="md:text-lg mb-4"><Link className="md:flex items-center gap-2" to='add-task'><FaPlusSquare></FaPlusSquare> <span className="hidden md:block">Add Task</span></Link></li>

                <li className="md:text-lg mb-4"><Link className="md:flex items-center gap-2" to='task-list'><FaClipboardList></FaClipboardList> <span className="hidden md:block">All Task</span></Link></li>

                <li className="md:text-lg mb-4"><Link className="md:flex items-center gap-2" to='pending-task'><FaChalkboardTeacher></FaChalkboardTeacher> <span className="hidden md:block">Pending Task</span></Link></li>

                <li className="md:text-lg mb-4"><Link className="md:flex items-center gap-2" to='prograce-task'><FaWindowRestore></FaWindowRestore><span className="hidden md:block">In-Prograss</span></Link></li>

                <li className="md:text-lg mb-4"><Link className="md:flex items-center gap-2" to='complate-task'><FaClipboardCheck></FaClipboardCheck><span className="hidden md:block">Complate Task</span></Link></li>

                <li className="md:text-lg mb-4"><Link className="md:flex items-center gap-2" to='profile'><FaUserAlt></FaUserAlt><span className="hidden md:block">Profile</span></Link></li>

                <li className="md:text-lg flex items-center gap-2 mb-4 hover:cursor-pointer" onClick={handleLout}><FaSignOutAlt></FaSignOutAlt><span className="hidden md:block">Logout</span></li>
                
            </ul>
        </div>
    )
}

export default SideBar