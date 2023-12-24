import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import AxiousPublic from "../../Hooks/Axious"
import Pagetitle from "../../SharePages/pageTitle/Pagetitle"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"

const UpdateTask = () => {

    const Id = useParams()
    const taskId = Id.id
    const publicAxios = AxiousPublic()
    const { register, handleSubmit, reset } = useForm()


    const { data: task } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const res = await publicAxios(`/signle-task/${taskId}`)
            return res.data
        }
    })

    console.log(task)

    const onSubmit = (data) => {
        
        publicAxios.put(`/update-task/${taskId}`, data)
            .then(respons => {
                if (respons.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task Susseccfully update",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset()
                }
                console.log(respons.data)
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Not Added!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }


    return (
        <div>
            <Pagetitle title='Update Your Task' page='Update Task'></Pagetitle>
            <div className="md:w-3/4 bg-base-100 mx-auto mt-6 p-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-2xl text-center text-semibold pt-2">Add Your Task</h4>
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Title</span>
                        </div>
                        <input {...register("title")} defaultValue={task?.title} type="text" placeholder="Task Title" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Description</span>
                        </div>
                        <input {...register("description")} defaultValue={task?.description} type="text" placeholder="Task Description" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Deadline</span>
                        </div>
                        <input {...register("deadline")} defaultValue={task?.deadline} type="date" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Priority</span>
                        </div>
                        <select {...register("priority")} defaultValue={task?.priority} className="select select-bordered w-full">
                            {/* <option disabled selected hidden>--SELECT--</option> */}
                            <option>Low</option>
                            <option>Moderate</option>
                            <option>High</option>
                        </select>
                    </label>
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Status</span>
                        </div>
                        <select {...register("status")} defaultValue={task?.status} className="select select-bordered w-full">
                            
                            <option value='Pending'>Pending</option>
                            <option value='Progress'>In-Progress</option>
                            <option value='Complate'>Complate</option>
                        </select>
                    </label>
                    <label className="form-control w-full mb-3">
                        <input type="submit" value='Update Task' duration-300 className="input input-bordered w-full bg-base-300 hover:bg-base-100" />
                    </label>
                </form>
            </div>
        </div>
    )
}

export default UpdateTask