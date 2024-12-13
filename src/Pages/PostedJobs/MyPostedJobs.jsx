import { useEffect, useState } from "react";
import UseContext from "../../Hooks/UseContex";

const MyPostedJobs = () => {
  const { user } = UseContext();
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPostedJobs(data));
  }, [user.email]);
  return (
    <div>
      <h2>My posted Jobs{postedJobs.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Application Date</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {postedJobs.map((job, index) => (
              <tr key={index}>
                <th>{index+1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
