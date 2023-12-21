import { FaBinoculars, FaBookReader, FaBorderStyle, FaChalkboardTeacher, FaClipboardCheck, FaClipboardList, FaSignOutAlt, FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom"


const SideBar = () =>{
    return (
        <div className="w-2/12 px-2 pt-24 bg-base-100 shadow-xl pb-12">
            <h4 className="text-xl text-gray-700 font-semibold uppercase pb-2"><Link className="flex items-center gap-2" to='/dashbord'><FaBorderStyle className="text-2xl text-green-500"></FaBorderStyle> Dashbord</Link></h4>
            <hr className="py-2" />
            <ul className="pl-3">
                <li className="text-lg mb-4"><Link className="flex items-center gap-2" to='add-task'><FaBinoculars></FaBinoculars> Add Task</Link></li>
                <li className="text-lg flex items-center gap-2 mb-4"><FaBookReader></FaBookReader>View Task</li>
                <li className="text-lg flex items-center gap-2 mb-4"><FaClipboardList></FaClipboardList>All Task</li>
                <li className="text-lg flex items-center gap-2 mb-4"><FaChalkboardTeacher></FaChalkboardTeacher>Pending Task</li>
                <li className="text-lg flex items-center gap-2 mb-4"><FaClipboardCheck></FaClipboardCheck>Complate Task</li>
                <li className="text-lg flex items-center gap-2 mb-4"><FaUserAlt></FaUserAlt>Profile</li>
                <li className="text-lg flex items-center gap-2 mb-4"><FaSignOutAlt></FaSignOutAlt>Logout</li>
                
            </ul>
        </div>
    )
}

export default SideBar