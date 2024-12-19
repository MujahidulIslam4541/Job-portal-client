import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const application = useLoaderData();
  const handleStatus = (e, id) => {
    const data = {
      status: e.target.value,
    };

    fetch(`https://job-portal-server-two-peach.vercel.app/job-application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "",
            text: "Job Status Updated",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-300 to-lime-300  w-full py-20 rounded-lg">
        <h2 className="text-center text-3xl font-bold text-blue-600">
          View Applications
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table mt-10">
          {/* head */}
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr>
              <th className="p-3 text-center">#</th>
              <th className="p-3 text-center">Email</th>
              <th className="p-3 text-center">Resume</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {application.map((app, index) => (
              <tr key={app._id}>
                <th className="p-3 text-center">{index + 1}</th>
                <td className="p-3 text-center">{app.user_email}</td>
                <td className="p-3 ">{app.resume}</td>
                <td className="p-3 text-center">
                  <select
                    onChange={(e) => handleStatus(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className="select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
