import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () =>{
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#344e7d] via-[#53718b] to-[#41649f]">
            
            <div className="flex justify-center items-center 11/12">
                <div className="w-4/12 ml-12">
                    <h1 className="text-4xl text-white font-bold mb-2">Hello Please Compalte task</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto fugiat ipsam sit a voluptate pariatur, quo quae dolorem recusandae?</p>
                    <button className="mt-4 bg-4 bg-white py-3 px-4 duration-100 rounded hover:text-lg"><Link className="flex items-center gap-2" to='/login'>Let’s Explore <FaArrowRight></FaArrowRight> </Link></button>
                </div>
                <div className="">
                    <img src="https://raw.githubusercontent.com/0rakib0/TaskManagementClient/main/src/assets/banner-img.png" className="w-full" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home