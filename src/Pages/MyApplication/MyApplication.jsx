import { useEffect, useState } from "react";
import UseContext from "../../Hooks/UseContex";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { FaClipboardCheck } from "react-icons/fa";
import axios from "axios";

const MyApplication = () => {
  const { user } = UseContext();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get(`https://job-portal-server-two-peach.vercel.app/job-application?email=${user?.email}`,{withCredentials:true})
      .then((res) => setJobs(res.data));
  }, [user?.email]);

  //   delete job
  const handleJobDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://job-portal-server-two-peach.vercel.app/job-application/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your job has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="relative bg-gradient-to-r from-teal-400 to-blue-500 p-10 rounded-lg shadow-lg overflow-hidden">
        {/* Banner Content */}
        <div className="text-center text-white relative z-10">
          <h1 className="text-4xl font-extrabold mb-4 flex items-center justify-center">
            <FaClipboardCheck className="mr-2 text-5xl" />
            My Applications
          </h1>
          <p className="text-lg mb-6">
            Stay organized and track all your job applications in one place.
            Keep tabs on your progress and next steps!
          </p>
          <button className="btn btn-primary w-52 mx-auto mt-4">
            View Applications
          </button>
        </div>
      </div>
      <div className="overflow-x-auto my-10 border-2 rounded-lg shadow-lg">
        <table className="table table-striped w-full">
          {/* Table Header */}
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr>
              <th className="p-3 text-center">Name</th>
              <th className="p-3 text-center">Job</th>
              <th className="p-3 text-center">Application Date</th>
              <th className="p-3 text-center">Delete Job</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Dynamic Rows */}
            {jobs.map((job) => (
              <tr key={job._id} className="hover:bg-gray-100 transition-all">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt="Company Logo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.jobType}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  {job.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.location}
                  </span>
                </td>
                <td className="p-3">{job.applicationDeadline}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleJobDelete(job._id)}
                    className="text-2xl text-red-500 hover:text-red-700 transition duration-300"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
