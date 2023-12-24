import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"
import Swal from "sweetalert2"

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const naviget = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user
                Swal.fire({
                    title: "Accout successfully Login",
                    text: `${user.email} succesfully login`,
                    icon: "success"
                });
                naviget('/dashbord')
            })
            .catch(error => {
                Swal.fire({
                    title: "Something wrong",
                    text: error.message,
                    icon: "error"
                });
                naviget('/dashbord')
            })
    }

    return (
        <div className="w-11/12 md:w-3/4 mx-auto md:mt-12 mt-6">
            <div className="bg-base-200 shadow-lg md:w-6/12 mx-auto p-4 rounded-lg">
                <form onSubmit={handleSubmit}>
                    <h4 className="text-center text-2xl font-semibold">Login Account</h4>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full mt-6 pb-6">
                        <input type="submit" value='Login' className="input input-bordered w-full bg-gradient-to-r from-[#344e7d] via-[#53718b] to-[#41649f] text-white" />
                    </label>
                    <p>Do not Have Account? <Link className="text-blue-400 pb-4" to='/register'>Register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login