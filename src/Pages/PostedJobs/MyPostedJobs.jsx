import { useEffect, useState } from "react";
import UseContext from "../../Hooks/UseContex";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <div className="relative bg-gradient-to-r from-blue-300 to-indigo-500 p-10 rounded-lg shadow-xl">
        {/* Content Section */}
        <div className="text-center text-white relative z-10">
          <h1 className="text-4xl font-extrabold mb-4 flex items-center justify-center">
            <FaBriefcase className="mr-2 text-5xl" />
            Posted Jobs
          </h1>
          <p className="text-lg">
            Explore the latest job opportunities and start your new career
            journey today! Find jobs that match your skills and interests.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="table w-full table-zebra">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr>
              <th className="p-3 text-center">#</th>
              <th className="p-3 text-center">Job Title</th>
              <th className="p-3 text-center">Application Date</th>
              <th className="p-3 text-center">Application Count</th>
              <th className="p-3 text-center">View Applications</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Dynamic Rows */}
            {postedJobs.map((job, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-all">
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3 text-center">{job.title}</td>
                <td className="p-3 text-center">{job.applicationDeadline}</td>
                <td className="p-3 text-center">{job.applicationCount}</td>
                <td className="p-3 text-center">
                  <Link to={`/viewApplications/${job._id}`}>
                    <button className="btn btn-link ">
                      View Application
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
