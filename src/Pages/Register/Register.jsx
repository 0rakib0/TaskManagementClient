import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider"
import Swal from "sweetalert2"
import AxiousPublic from "../../Hooks/Axious"

const Register = () => {

    const { createUser, Logout } = useContext(AuthContext)
    const naviget = useNavigate()
    const publicAxios = AxiousPublic()

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const profilePic = form.profile.value;
        const email = form.email.value;
        const profession = form.profession.value;
        const password = form.password.value;

        const userData = {
            name,
            profession,
            profilePic,
            email,
            password
        }
        createUser(email, password)
            .then(result => {
                const user = result.user
                Swal.fire({
                    title: "Account successfully register!",
                    text: "Your account successfully register please login!",
                    icon: "success"
                });
                console.log('Hello')
                publicAxios.post('/users', userData)
                .then(res => {
                    console.log(res.data)
                })

                Logout()
                naviget('/login')
            })
            .catch(error => {
                Swal.fire({
                    title: "Register Not success!",
                    text: "Your account not successfully register please login!",
                    icon: "error"
                });
            })
    }

    return (
        <div className="w-11/12 md:w-3/4 mx-auto md:mt-12 mt-6">
            <div className="bg-base-200 shadow-lg md:w-7/12 mx-auto p-4 rounded-lg">
                <form onSubmit={handleRegister}>
                    <h4 className="text-center text-2xl font-semibold">Register Account</h4>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Full Name</span>
                        </div>
                        <input type="text" placeholder="Full Name" name="name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Profile Pic</span>
                        </div>
                        <input type="text" placeholder="Profile URL" name="profile" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">profession</span>
                        </div>
                        <input type="text" placeholder="Profession" name="profession" className="input input-bordered w-full" />
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
                    <p>Already Have Account? <Link to='/login' className="text-blue-400 pb-4">Login</Link></p>
                </form>
            </div>
        </div>
    )
}


export default Register