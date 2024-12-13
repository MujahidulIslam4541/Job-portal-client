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
    <div>
      <form onSubmit={handleAddJob} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* JOb title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered"
              required
            />
          </div>
          {/* location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job location"
              className="input input-bordered"
              required
            />
          </div>
          {/* JobType */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select
              name="jobType"
              id=""
              placeholder="Pick a Job Type"
              defaultValue={"Pick a Job Type"}
              className="border-2 h-full w-full rounded-md"
            >
              <option>Hybrid</option>
              <option>Remote</option>
              <option>FullTime</option>
              <option>Intern</option>
              <option>PartTime</option>
            </select>
          </div>
          {/* application date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Application Date</span>
            </label>
            <input
              type="date"
              placeholder="Application Date "
              name="applicationDeadline"
              className="input input-bordered"
              required
            />
          </div>
          {/* company */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company</span>
            </label>
            <input
              type="text"
              placeholder="Company "
              name="company"
              className="input input-bordered"
              required
            />
          </div>
          {/* company logo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="url"
              placeholder="Company Logo URL"
              name="company_logo"
              className="input input-bordered"
              required
            />
          </div>
          {/* hr-email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR-Email</span>
            </label>
            <input
              type="email"
              placeholder="hr-email "
              name="hr_email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          {/* hrName */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR-Name</span>
            </label>
            <input
              type="text"
              placeholder="hr Name "
              name="hr_name"
              className="input input-bordered"
              required
            />
          </div>
          {/* category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              id=""
              defaultValue={"Pick A One Category"}
              placeholder="Pick A One Category"
              className="w-full h-full rounded-md border"
            >
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Teaching</option>
              <option>Finance</option>
            </select>
          </div>
        </div>
        {/* salary Range */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="number"
              placeholder="Min "
              name="min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="number"
              placeholder="Max "
              name="max"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              name="currency"
              id=""
              defaultValue={"Please Select Your Currency"}
              placeholder="Please Select Your Currency"
              className="border-2 w-full h-12 rounded-md"
            >
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
              <option>RS</option>
            </select>
          </div>
        </div>

        {/* description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            rows={5}
            id=""
            placeholder="Description "
            name="description"
            required
          ></textarea>
        </div>
        {/* requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Job Requirements</span>
          </label>
          <textarea
            rows={5}
            id=""
            placeholder="Put Each requirements in new line "
            name="requirements"
            required
          ></textarea>
        </div>
        {/* responsibility */}
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Job Responsibility</span>
          </label>
          <textarea
            rows={5}
            id=""
            placeholder="Write Each responsibility in new line "
            name="responsibilities"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Post A Job</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
