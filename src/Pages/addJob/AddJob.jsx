import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseContext from "../../Hooks/UseContex";

const AddJob = () => {
  const navigate = useNavigate();
  const { user } = UseContext();
  const handleAddJob = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const initialData = Object.fromEntries(fromData.entries());
    // console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    // console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    // console.log(newJob)
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Job has been added",
            icon: "success",
          });
        }
        navigate("/myPostedJobs");
      });
  };
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Add a New Job
      </h1>
      <form onSubmit={handleAddJob} className="space-y-6">
        {/* Grid for Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Job Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job Location"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Type</span>
            </label>
            <select
              name="jobType"
              defaultValue="Pick a Job Type"
              className="select select-bordered w-full"
            >
              <option disabled>Pick a Job Type</option>
              <option>Hybrid</option>
              <option>Remote</option>
              <option>FullTime</option>
              <option>Intern</option>
              <option>PartTime</option>
            </select>
          </div>

          {/* Application Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Application Deadline
              </span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Company */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Company</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Company Logo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Company Logo URL</span>
            </label>
            <input
              type="url"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">HR Email</span>
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="HR Email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              name="category"
              defaultValue="Pick a Category"
              className="select select-bordered w-full"
            >
              <option disabled>Pick a Category</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Teaching</option>
              <option>Finance</option>
            </select>
          </div>
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Salary Range (Min)
              </span>
            </label>
            <input
              type="number"
              name="min"
              placeholder="Min"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Salary Range (Max)
              </span>
            </label>
            <input
              type="number"
              name="max"
              placeholder="Max"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Currency</span>
            </label>
            <select
              name="currency"
              defaultValue="Please Select Your Currency"
              className="select select-bordered w-full"
            >
              <option disabled>Please Select Your Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
              <option>RS</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            rows={5}
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Job Requirements</span>
          </label>
          <textarea
            rows={5}
            name="requirements"
            placeholder="Put each requirement on a new line"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">
              Job Responsibilities
            </span>
          </label>
          <textarea
            rows={5}
            name="responsibilities"
            placeholder="Put each responsibility on a new line"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300">
            Post A Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
