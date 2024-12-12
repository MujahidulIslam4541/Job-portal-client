import { useEffect, useState } from "react";
import UseContext from "../../Hooks/UseContex";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyApplication = () => {
  const { user } = UseContext();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
      });
  }, [user.email]);

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
        fetch(`http://localhost:5000/job-application/${id}`, {
          method: "DELETE",
        })
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
    console.log(id);
  };
  return (
    <div>
      <div className="overflow-x-auto my-10 border-2">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>JobDelete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.jobType}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.location}
                  </span>
                </td>
                <td>{job.applicationDeadline}</td>
                <th>
                  <button onClick={() => handleJobDelete(job._id)} className="">
                    <span className="text-2xl text-red-500">
                      <MdDelete />
                    </span>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
