import { Link, useLoaderData } from "react-router-dom";


const Jobdetails = () => {
    const {_id,title,description,location}=useLoaderData()
    
    return (
        <div>
            <h2>Job Details</h2>
            <h1 className="text-5xl">baki kaj amer korte hobe </h1>
            <h2 className="text-3xl">{title}</h2>
            <p>{description}</p>
            <p>{location}</p>

            <Link to={`/jobApply/${_id}`}>
            <button className="btn">Apply now</button></Link>
        </div>
    );
};

export default Jobdetails;