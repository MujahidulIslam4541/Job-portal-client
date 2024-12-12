/* eslint-disable react/prop-types */
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";


const PrivetRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children;
    }
        return <Navigate to='/signIn' state={location?.pathname}></Navigate>
    
};

export default PrivetRouter;