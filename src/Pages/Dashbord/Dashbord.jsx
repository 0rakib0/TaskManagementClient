
import { useContext } from "react"
import AxiousPublic from "../../Hooks/Axious"
import { AuthContext } from "../../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
const Dashbord = () => {

    const Axios = AxiousPublic()
    const { user } = useContext(AuthContext)


    const { data: tasks, refetch, isSuccess } = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async () => {
            const res = await Axios(`/tasks/${user?.email}`)
            return res.data
        }
    })

    const { data: Pendingtasks} = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async () => {
            const res = await Axios(`/rending-task/${user?.email}`)
            return res.data
        }
    })


    return (
        <div className="p-4 grid md:grid-cols-4 gap-4">
            <div className="bg-green-400 text-white text-center py-4 rounded-lg">
                <p className="text-2xl font-bold">Total Task</p>
                <p>{tasks?.length}</p>
            </div>
            <div className="bg-green-400 text-white text-center py-4 rounded-lg">
                <p className="text-2xl font-bold">Pending Task</p>
                <p>{Pendingtasks?.length}</p>
            </div>
            <div className="bg-green-400 text-white text-center py-4 rounded-lg">
                <p className="text-2xl font-bold">In-Progrese Task</p>
                <p>{tasks.length}</p>
            </div>
            <div className="bg-green-400 text-white text-center py-4 rounded-lg">
                <p className="text-2xl font-bold">Complate Task</p>
                <p>{tasks.length}</p>
            </div>
        </div>
    )
}

export default Dashbord