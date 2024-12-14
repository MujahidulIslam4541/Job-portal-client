import { useLoaderData } from "react-router-dom";
import AllJob from "./AllJob";
import { FaBriefcase } from "react-icons/fa";

const AllJobs = () => {
  const AllJobs = useLoaderData();
  // console.log(AllJobs);
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-16 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-6xl md:text-8xl text-yellow-400">
            <FaBriefcase /> 
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              🚀 Explore Exciting Job Opportunities!
            </h1>
            <p className="text-lg md:text-xl font-light">
              Discover a wide range of jobs tailored to your skills and
              aspirations. Join us and take the next step in your career
              journey.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {AllJobs.map((job) => (
          <AllJob key={job._id} job={job}></AllJob>
        ))}
      </div>
    </>
  );
};

export default AllJobs;
