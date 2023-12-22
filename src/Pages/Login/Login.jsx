import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="w-11/12 md:w-3/4 mx-auto md:mt-12 mt-6">
            <div className="bg-base-200 shadow-lg md:w-6/12 mx-auto p-4 rounded-lg">
                <form>
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
                        <input type="password"  placeholder="Password" name="password" className="input input-bordered w-full" />
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