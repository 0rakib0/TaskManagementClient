import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import AxiousPublic from "./Axious"

const UserInfo = () =>{
    const axiosPublit = AxiousPublic()
    const {user} = useContext(AuthContext)

    const {data: userData} = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () =>{
            const res = await axiosPublit(`/user/${user?.email}`)
            return res.data
        }
    })
    return (
        userData
    )
}

export default UserInfo