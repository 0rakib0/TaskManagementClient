
import { useContext, useEffect, useState } from "react"
import AxiousPublic from "../../Hooks/Axious"
import { AuthContext } from "../../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import { FaAward, FaCircleNotch, FaMedal, FaPoll, FaRegFileAlt } from "react-icons/fa";
const Dashbord = () => {

    const Axios = AxiousPublic()
    const { user } = useContext(AuthContext)
    const [pending, setPending] = useState(0)
    const [complate, setComplate] = useState(0)
    const [prograse, setprograse] = useState(0)


    const { data: tasks, refetch, isSuccess } = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async () => {
            const res = await Axios(`/tasks/${user?.email}`)
            return res.data
        }
    })

    useEffect(() =>{
        Axios(`http://localhost:5000/countPending/${user?.email}`)
        .then(res =>{
            setPending(res.data.result)
        })
    },[user?.email])

    useEffect(() =>{
        Axios(`http://localhost:5000/countComplate/${user?.email}`)
        .then(res =>{
            setComplate(res.data.result)
        })
    },[user?.email])

    useEffect(() =>{
        Axios(`http://localhost:5000/countPrograse/${user?.email}`)
        .then(res =>{
            setprograse(res.data.result)
        })
    },[user?.email])

    


  

    return (
        <div className="p-4 grid md:grid-cols-4 gap-4">
            <div className="bg-[#ff9636] text-white text-center py-4 rounded-lg">
                <p className="text-2xl font-bold">Total Task</p>
                <p className="flex justify-center items-center mt-2 gap-2 text-4xl"><FaRegFileAlt></FaRegFileAlt> {tasks?.length}</p>
            </div>
            <div className="bg-[#ffcd58] text-white text-center py-4 rounded-lg">
                <p className="text-2xl font-bold">Pending Task</p>
                <p className="flex justify-center items-center mt-2 gap-2 text-4xl"><FaPoll></FaPoll>{pending}</p>
            </div>
            <div className="bg-[#dad870] text-white text-center py-4 rounded-lg">
                <p className="text-2xl font-bold">In-Progrese Task</p>
                <p className="flex justify-center items-center mt-2 gap-2 text-4xl"><FaCircleNotch></FaCircleNotch>{prograse}</p>
            </div>
            <div className="bg-[#ff5c4d] text-white text-center py-4 rounded-lg">
                <p className="text-2xl font-bold">Complate Task</p>
                <p className="flex justify-center items-center mt-2 gap-2 text-4xl"><FaAward></FaAward>{complate}</p>
            </div>
        </div>
    )
}

export default Dashbord