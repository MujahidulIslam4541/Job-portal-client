import { useContext } from "react"
import AuthContext from "../context/AuthContext"

const UseContext=()=>{
    const context=useContext(AuthContext)
    return context;
}
export default UseContext;