
import { useContext, useEffect, useState } from "react"
import AxiousPublic from "../../Hooks/Axious"
import { AuthContext } from "../../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import { FaAward, FaCircleNotch, FaMedal, FaPen, FaPoll, FaRegFileAlt, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
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

    useEffect(() => {
        Axios(`https://task-management-server-pi-six.vercel.app/countPending/${user?.email}`)
            .then(res => {
                setPending(res.data.result)
            })
    }, [user?.email])

    useEffect(() => {
        Axios(`https://task-management-server-pi-six.vercel.app/countComplate/${user?.email}`)
            .then(res => {
                setComplate(res.data.result)
            })
    }, [user?.email])

    useEffect(() => {
        Axios(`https://task-management-server-pi-six.vercel.app/countPrograse/${user?.email}`)
            .then(res => {
                setprograse(res.data.result)
            })
    }, [user?.email])

    const { data: users } = useQuery({
        queryKey: 'users',
        queryFn: async () => {
            const res = await Axios('/all-user')
            return res.data
        }
    })

    console.log(users)





    return (
        <div>
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
            <hr />
            <div className="p-2 mt-6">
                <h4 className="text-2xl font-semibold uppercase">Recently Register User</h4>
                <div className="overflow-x-auto mt-4">
                    <table className="table border-2">
                        {/* head */}
                        <thead className="border-2 text-center">
                            <tr>
                                <th className="border-2">#</th>
                                <th className="border-2">Profile</th>
                                <th className="border-2">Name</th>
                                <th className="border-2">Passion</th>
                                <th className="border-2">Email</th>
                            </tr>
                        </thead>
                        <tbody className="border-2">
                            {/* row 1 */}
                            {
                                users?.map((userr, index) => <tr key={userr._id}>
                                    <th className="border-2">{index + 1}</th>
                                    <td className="border-2">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={userr.profilePic} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-2">{userr.name}</td>
                                    <td className="border-2">{userr.profession}</td>
                                    <th className="border-2">{userr.email}</th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <div className="mt-6 p4">
                <h4 className="text-2xl font-semibold">Recently Added Task</h4>
                <div className="overflow-x-auto mt-2">
                    <table className="table border-2">
                        {/* head */}
                        <thead className="border-2">
                            <tr className="text-center">
                                <th>
                                    #
                                </th>
                                <th className="border-2">Title</th>
                                <th className="border-2">Description</th>
                                <th className="border-2">Deadline</th>
                                <th className="border-2">Priority</th>
                                <th className="border-2">Status</th>
                                <th className="border-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                tasks?.map((task, index) => <tr key={task?._id}>
                                    <th className="border-2">
                                        <p>{index + 1}</p>
                                    </th>
                                    <td className="border-2">{task?.title}</td>
                                    <td className="border-2">{task?.description}</td>
                                    <td className="border-2">{task?.deadline}</td>
                                    <td className="border-2">{task?.priority}</td>
                                    <td className="border-2">
                                        {task?.status === 'Pending' && <div className="badge badge-info gap-2 text-white">
                                            Pending
                                        </div>}
                                        {task?.status === 'Complate' && <div className="badge badge-success gap-2 text-white">
                                            Complated
                                        </div>}
                                        {task?.status === 'Progress' && <div className="badge badge-warning gap-2 text-white">
                                            In-Progress
                                        </div>}
                                    </td>
                                    <th className="border-2 flex items-center gap-4">
                                    <span className="bg-green-500 p-2 text-white rounded hover:cursor-pointer"><Link to={`/dashbord/update-task/${task?._id}`}><FaPen></FaPen></Link></span>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashbord