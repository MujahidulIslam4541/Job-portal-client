/* eslint-disable react/prop-types */

import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
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
      <div className="card card-compact h-[450px] bg-white border border-gray-200 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-500 group">
        <div className="flex items-center gap-3 p-3">
          <figure>
            <img
              className="w-12 rounded-full"
              src={company_logo}
              alt="Company Logo"
            />
          </figure>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{company}</h2>
            <p className="flex items-center gap-1 text-gray-600">
              <FaLocationDot className="text-blue-500" />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body p-3">
          <h2 className="card-title flex items-center">
            {title}
            <div className="badge badge-primary ml-2">NEW</div>
          </h2>
          <p className="text-gray-700">{jobType}</p>
          <p className="text-gray-600">{description}</p>
          <div className="grid grid-cols-3 gap-2 my-2">
            {requirements?.map((requirement, index) => (
              <p
                key={index}
                className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md shadow-sm"
              >
                {requirement}
              </p>
            ))}
          </div>
          <div className="card-actions flex justify-between items-center">
            <p className="text-gray-800 font-medium">
              Salary: {salaryRange?.min}-{salaryRange?.max}{" "}
              {salaryRange?.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn bg-gray-500 text-white group-hover:bg-blue-500">
                Apply now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
