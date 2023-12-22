import { useContext } from "react"
import { FaBinoculars, FaBookReader, FaBorderStyle, FaChalkboardTeacher, FaClipboardCheck, FaClipboardList, FaSignOutAlt, FaUserAlt, FaWindowRestore } from "react-icons/fa"
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
            <h4 className="text-xl text-gray-700 font-semibold uppercase pb-2"><Link className="flex items-center gap-2" to='/dashbord'><FaBorderStyle className="text-2xl text-green-500"></FaBorderStyle> Dashbord</Link></h4>
            <hr className="py-2" />
            <ul className="pl-3">
                <li className="text-lg mb-4"><Link className="flex items-center gap-2" to='add-task'><FaBinoculars></FaBinoculars> Add Task</Link></li>

                <li className="text-lg mb-4"><Link className="flex items-center gap-2" to='task-list'><FaClipboardList></FaClipboardList> All Task</Link></li>

                <li className="text-lg mb-4"><Link className="flex items-center gap-2" to='pending-task'><FaChalkboardTeacher></FaChalkboardTeacher> Pending Task</Link></li>

                <li className="text-lg mb-4"><Link className="flex items-center gap-2" to='prograce-task'><FaWindowRestore></FaWindowRestore>In-Prograss</Link></li>

                <li className="text-lg mb-4"><Link className="flex items-center gap-2" to='complate-task'><FaClipboardCheck></FaClipboardCheck>Complate Task</Link></li>
                

                
                <li className="text-lg flex items-center gap-2 mb-4"><FaUserAlt></FaUserAlt>Profile</li>

                <li className="text-lg flex items-center gap-2 mb-4" onClick={handleLout}><FaSignOutAlt></FaSignOutAlt>Logout</li>
                
            </ul>
        </div>
    )
}

export default SideBar