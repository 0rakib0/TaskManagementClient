import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider"

const PrivetRout = ({ children}) =>{
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <p>Lorading....</p>
    }


    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
}

export default PrivetRout