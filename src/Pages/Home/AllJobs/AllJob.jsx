/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllJob = ({ job }) => {
  const {
    _id,
    title,
    location,
    salaryRange,
    description,
    requirements,
    jobType,
    company,
    company_logo,
  } = job;
  return (
    <div>
      <div className="card card-compact hover:border hover:border-blue-300 hover:-inset-y-1 shadow-xl transition ease-in duration-500">
        <div className="flex items-center gap-4 mt-2">
          <figure>
            <img className="w-12" src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h2 className="text-2xl">{company}</h2>
            <p className="flex items-center gap-1">
              <FaLocationDot />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p>{jobType}</p>
          <p>{description}</p>

          <div className="grid grid-cols-3">
            {requirements.map((requirement, index) => (
              <p key={index}>{requirement}</p>
            ))}
          </div>
          <div className="card-actions ">
            <p>
              Salary: {salaryRange.min}-{salaryRange.max}
              {salaryRange.currency}
            </p>
            <Link to={`jobs/${_id}`}>
              <button className="btn hover:bg-blue-500 hover:text-white">
                Apply now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJob;
