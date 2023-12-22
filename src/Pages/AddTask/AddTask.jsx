import Pagetitle from "../../SharePages/pageTitle/Pagetitle"

const AddTask = () => {



    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
    }

    return (
        <div>
            <Pagetitle title='Add Your Task' page='Add Task'></Pagetitle>
            <div className="md:w-3/4 bg-base-100 mx-auto mt-6 p-4 rounded-lg">
                <form onSubmit={handleSubmit}>
                    <h4 className="text-2xl text-center text-semibold pt-2">Add Your Task</h4>
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Title</span>
                        </div>
                        <input type="text" placeholder="Task Title" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Description</span>
                        </div>
                        <input type="text" placeholder="Task Description" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Deadline</span>
                        </div>
                        <input type="text" placeholder="Task Deadline" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Task Priority</span>
                        </div>
                        <select className="select select-bordered w-full">
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
                        <select className="select select-bordered w-full">
                            <option disabled selected hidden>--SELECT--</option>
                            <option>Pending</option>
                            <option>In-Progress</option>
                            <option>Complate</option>
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