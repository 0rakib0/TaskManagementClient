import { useQuery } from "@tanstack/react-query"
import AxiousPublic from "../../Hooks/Axious"
import Pagetitle from "../../SharePages/pageTitle/Pagetitle"

const TaskList = () => {
    const Axios = AxiousPublic()


    const { data: tasks } = useQuery({
        queryKey: ['task', 'rakib@gmail.com'],
        queryFn: async () => {
            const res = await Axios('/tasks/rakib@gmail.com')
            return res.data
        }
    })


    return (
        <div>
            <Pagetitle title='All Task Link' page='All task'></Pagetitle>
            <div>
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
                                       { task?.status === 'Pending' && <div className="badge badge-info gap-2">
                                            Pending
                                        </div>}
                                        {task?.status === 'Complate' && <div className="badge badge-success gap-2">
                                            Complated
                                        </div>}
                                        {task?.status === 'Progress'&& <div className="badge badge-warning gap-2">
                                           In-Progress
                                        </div>}
                                    </td>
                                    <th className="border-2">
                                        <button className="btn btn-ghost btn-xs">details</button>
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

export default TaskList