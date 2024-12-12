import { useParams } from "react-router-dom";
import UseContext from "../../Hooks/UseContex";
import Swal from "sweetalert2";

const JobApply = () => {
    const {id}=useParams()
    const {user}=UseContext()
    // console.log(id,user);

    const handleJobApply=e=>{
        e.preventDefault()
        const from=e.target;
        const linkedIn=from.linkedIn.value;
        const github=from.github.value;
        const resume=from.resume.value;
        const description=from.description.value;

        const jobApplication={
            user_id:id,
            user_email:user.email,
            linkedIn,
            github,
            resume,
            description
        }
        // console.log(jobApplication);

        fetch('http://localhost:5000/job-application',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Job Apply Successful",
                    icon: "success",
                  });
            }
        })
    }
  return (
    <div className="card bg-base-100 w-full sm:w-10/12 mx-auto md:w-8/12 my-8  shadow-2xl">
        <h1 className="text-2xl mt-4 text-center font-bold">Apply job</h1>
      <form onSubmit={handleJobApply} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            type="url"
            name="linkedIn"
            placeholder="LinkedIn URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            placeholder="Github URL"
            name="github"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            placeholder="Resume URL"
            name="resume"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Why selected You?</span>
          </label>
          <textarea name="description" rows={5} id="" placeholder="Why Selected You" className="border"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
