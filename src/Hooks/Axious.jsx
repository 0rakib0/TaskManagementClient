import axios from "axios"


const AxiousInstant = axios.create({
    baseURL: 'http://localhost:5000'
}
)


const AxiousPublic = () =>{
    return AxiousInstant
}


export default AxiousPublic