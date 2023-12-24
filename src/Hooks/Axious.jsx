import axios from "axios"


const AxiousInstant = axios.create({
    baseURL: 'https://task-management-server-pi-six.vercel.app'
}
)


const AxiousPublic = () =>{
    return AxiousInstant
}


export default AxiousPublic