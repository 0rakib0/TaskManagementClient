import { useQuery } from "@tanstack/react-query"
import AxiousPublic from "../../Hooks/Axious"
import Pagetitle from "../../SharePages/pageTitle/Pagetitle"
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
const Pending = () => {

    const Axios = AxiousPublic()

    const [message, setMessage] = useState('')


    const { data: tasks, refetch, isSuccess } = useQuery({
        queryKey: ['task', 'rakib@gmail.com'],
        queryFn: async () => {
            const res = await Axios('/rending-task/rakib@gmail.com')
            return res.data
        }
    })
    // useEffect(() => {
    //     setMessage('')
    //     if (!tasks?.length) {
    //         setMessage("You currently don't have any tasks. Feel free to add new tasks to stay organized!");
    //     }
    // }, [])

    console.log(tasks?.length)


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                Axios.delete(`/task-delete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Something Wrong!",
                            text: "Your file notdeleted.",
                            icon: "error"
                        });
                    })
            }
        });
    }



    return (
        <div>
            <Pagetitle title='Pending Task List' page='Pending task'></Pagetitle>
            <div className="md:mt-8 mt-4">
                <div className="overflow-x-auto">
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
                                        <div className="badge badge-info gap-2 text-white">
                                            Pending
                                        </div>
                                    </td>
                                    <th className="border-2 flex items-center gap-4">
                                        <span className="bg-green-500 p-2 text-white rounded hover:cursor-pointer"><FaPen></FaPen></span>
                                        <span onClick={() => handleDelete(task?._id)} className="bg-red-400 p-2 text-white rounded hover:cursor-pointer"><FaRegTrashAlt></FaRegTrashAlt></span>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <p className="text-center text-xl md:mt-6 mt-4 text-gray-400 uppercase">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Pending