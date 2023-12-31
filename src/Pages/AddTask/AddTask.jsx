import { useForm } from "react-hook-form"
import Pagetitle from "../../SharePages/pageTitle/Pagetitle"
import AxiousPublic from "../../Hooks/Axious"
import Swal from "sweetalert2"
import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"

const AddTask = () => {

    const { user } = useContext(AuthContext)
    const publicAxios = AxiousPublic()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        const aditionalData = {
            user: user?.email,
            createAt: new Date(),
        }
        const Task = { ...aditionalData, ...data }

        publicAxios.post('/task', Task)
            .then(respons => {
                if (respons.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task Susseccfully Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    reset()
                }
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
    // 



    return (
        <div>
            <Pagetitle title='Add Your Task' page='Add Task'></Pagetitle>
            <div className="md:w-3/4 bg-base-100 mx-auto mt-6 p-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-2xl text-center text-semibold pt-2">Add Your Task</h4>
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Title</span>
                        </div>
                        <input {...register("title")} type="text" placeholder="Task Title" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Description</span>
                        </div>
                        <input {...register("description")} type="text" placeholder="Task Description" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Deadline</span>
                        </div>
                        <input {...register("deadline")} type="date" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Priority</span>
                        </div>
                        <select {...register("priority")} className="select select-bordered w-full">
                            <option disabled selected hidden>--SELECT--</option>
                            <option>Low</option>
                            <option>Moderate</option>
                            <option>High</option>
                        </select>
                    </label>
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Status</span>
                        </div>
                        <select {...register("status")} className="select select-bordered w-full">
                            <option disabled selected hidden>--SELECT--</option>
                            <option value='Pending'>Pending</option>
                            <option value='Progress'>In-Progress</option>
                            <option value='Complate'>Complate</option>
                        </select>
                    </label>
                    <label className="form-control w-full mb-3">
                        <input type="submit" value='Add Task' duration-300 className="input input-bordered w-full bg-base-300 hover:bg-base-100" />
                    </label>
                </form>
            </div>
        </div>
    )
}


export default AddTask