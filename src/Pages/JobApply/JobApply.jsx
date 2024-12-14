import { useNavigate, useParams } from "react-router-dom";
import UseContext from "../../Hooks/UseContex";
import Swal from "sweetalert2";

const JobApply = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = UseContext();
  // console.log(id,user);

  const handleJobApply = (e) => {
    e.preventDefault();
    const from = e.target;
    const linkedIn = from.linkedIn.value;
    const github = from.github.value;
    const resume = from.resume.value;
    const description = from.description.value;

    const jobApplication = {
      user_id: id,
      user_email: user.email,
      linkedIn,
      github,
      resume,
      description,
    };
    // console.log(jobApplication);

    fetch("http://localhost:5000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Job Apply Successful",
            icon: "success",
          });
        }
        navigate("/myApplications");
      });
  };
  return (
    <div className="card bg-base-100 w-full sm:w-10/12 mx-auto md:w-8/12 my-8 shadow-2xl rounded-lg p-6">
      <h1 className="text-3xl mt-4 text-center font-bold text-indigo-600">
        Apply for Job
      </h1>
      
      <form onSubmit={handleJobApply} className="card-body space-y-6">
        {/* LinkedIn URL Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-lg">
              LinkedIn URL
            </span>
          </label>
          <input
            type="url"
            name="linkedIn"
            placeholder="Enter LinkedIn URL"
            className="input input-bordered border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
            required
          />
        </div>

        {/* Github URL Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-lg">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Enter Github URL"
            className="input input-bordered border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
            required
          />
        </div>

        {/* Resume URL Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-lg">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Enter Resume URL"
            className="input input-bordered border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
            required
          />
        </div>

        {/* Why Selected You Field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-lg">
              Why should we select you?
            </span>
          </label>
          <textarea
            name="description"
            rows={5}
            placeholder="Describe why you're the best candidate for this job."
            className="textarea textarea-bordered border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full text-lg py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
