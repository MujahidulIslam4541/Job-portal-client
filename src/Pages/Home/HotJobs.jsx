import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div className="mt-24">
      <div>
        <h2 className="text-3xl font-bold text-center">Jobs of the day</h2>
        <p className="font-semibold text-center">
          Search and connect with the right candidates faster.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
       {
        jobs.map((job)=><HotJobCard key={job._id} job={job}></HotJobCard>)
       }
      </div>
    </div>
  );
};

export default HotJobs;
