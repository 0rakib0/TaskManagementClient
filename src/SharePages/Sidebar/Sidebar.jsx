import { FaBookMedical, FaBookReader, FaBorderStyle, FaChalkboardTeacher, FaClipboardCheck, FaClipboardList } from "react-icons/fa"


const SideBar = () =>{
    return (
        <div className="w-2/12 px-2 pt-24 bg-base-200 shadow-xl pb-12">
            <h4 className="text-xl text-gray-700 font-semibold uppercase pb-2 flex items-center gap-2"><FaBorderStyle className="text-2xl text-green-500"></FaBorderStyle> Dashbord</h4>
            <hr className="py-2" />
            <ul className="pl-3">
                <li className="text-lg flex items-center gap-2 mb-2"><FaBookMedical></FaBookMedical> Add Task</li>
                <li className="text-lg flex items-center gap-2 mb-2"><FaBookReader></FaBookReader>View Task</li>
                <li className="text-lg flex items-center gap-2 mb-2"><FaClipboardList></FaClipboardList>All Task</li>
                <li className="text-lg flex items-center gap-2 mb-2"><FaChalkboardTeacher></FaChalkboardTeacher>Pending Task</li>
                <li className="text-lg flex items-center gap-2 mb-2"><FaClipboardCheck></FaClipboardCheck>Complate Task</li>
            </ul>
        </div>
    )
}

export default SideBar