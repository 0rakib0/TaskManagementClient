import axios from "axios"


const AxiousInstant = axios.create({
    baseURL: 'http://localhost:5000'
}
)


const Axious = () =>{
    return AxiousInstant
}


export default Axious