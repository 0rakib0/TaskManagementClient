import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div>
            <img src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" className="mx-auto" alt="" />
            <div className="flex justify-center">
                <button className="bg-[#61C5B3] p-2 p-2 text-white rounded-lg"><Link to='/'>Back To Home</Link></button>
            </div>
        </div>
    )
}

export default ErrorPage