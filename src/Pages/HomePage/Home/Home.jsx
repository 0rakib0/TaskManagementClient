import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () =>{
    return (
        <div className="md:flex justify-center items-center p-4 md:p-0 h-screen bg-gradient-to-r from-[#344e7d] via-[#53718b] to-[#41649f]">
            
            <div className="md:flex justify-center items-center 11/12">
                <div className="md:w-4/12 md:ml-12">
                    <h1 className="md:text-4xl text-white font-bold mb-2">Save Your Time!</h1>
                    <p className="text-white">Time is very importent in our life. So maintain your time and get success early </p>
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