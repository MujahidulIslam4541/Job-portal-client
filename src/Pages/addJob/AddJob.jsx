const AddJob = () => {
  return (
    <div>
      <form className="card-body">
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
          <select name="jobType" id="" placeholder="Pick a Job Type">
            <option value="a">Hybrid</option>
            <option value="b">FullTime</option>
            <option value="c">Intern</option>
            <option value="d">PartTime</option>
          </select>
        </div>
        {/* application date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Date</span>
          </label>
          <input
            type="text"
            placeholder="Application Date "
            name="appDate"
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
            <span className="label-text">Company Logo</span>
          </label>
          <input
            type="url"
            placeholder="Company Logo"
            name="companyLogo"
            className="input input-bordered"
            required
          />
        </div>
        {/* hr-email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">hr-email</span>
          </label>
          <input
            type="text"
            placeholder="hr-email "
            name="hrEmail"
            className="input input-bordered"
            required
          />
        </div>
        {/* hrName */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">hr-Name</span>
          </label>
          <input
            type="text"
            placeholder="hr Name "
            name="hrName"
            className="input input-bordered"
            required
          />
        </div>
        {/* category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select name="category" id="" placeholder="Pick A One Category">
            <option value="">Engineering</option>
            <option value="">Marketing</option>
            <option value="">Teaching</option>
            <option value="">Finance</option>
          </select>
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
              name="category"
              id=""
              placeholder="Please Select Your Currency"
            >
              <option value="">BDT</option>
              <option value="">USD</option>
              <option value="">INR</option>
              <option value="">RS</option>
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
            name="description"
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
            name="responsibility"
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
