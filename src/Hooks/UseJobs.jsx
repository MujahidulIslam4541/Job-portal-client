import axios from "axios";
import { useEffect, useState } from "react";


const UseJobs = (sort,search) => {
 const [AllJobs,setAllJobs]=useState([])
 const [loading,setLoading]=useState(true)
 
    useEffect(()=>{
        axios.get(`https://job-portal-server-two-peach.vercel.app/jobs?sort=${sort}&search=${search}`)
        .then((res)=>{
            setAllJobs(res.data)
            setLoading(false)
        })
    },[sort,search])
    return {AllJobs,loading}
};

export default UseJobs;