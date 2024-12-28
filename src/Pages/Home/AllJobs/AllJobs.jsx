// import AllJob from "./AllJob";
import { FaBriefcase } from "react-icons/fa";
import { useState } from "react";
import UseJobs from "../../../Hooks/UseJobs";
import Loading from "../../../Loading/Loading";
import HotJobCard from "../HotJobCard";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search,setSearch]=useState("")
  const { AllJobs, loading } = UseJobs(sort,search);

  if (loading) {
    return <Loading></Loading>;
  }

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

      <div className=" mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <button
          onClick={() => setSort(!sort)}
          className={`py-2 px-4 border-2 ${
            sort && `border-blue-500 text-blue-500`
          } font-semibold rounded-md   transition-colors duration-300`}
        >
          {sort == true ? "Sorted By Salary" : "Sort By Salary"}
        </button>
        <input
        onChange={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder="Search By Location"
          className=" w-full md:w-96 border-2 border-gray-500 rounded-lg px-2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {/* {AllJobs.map((job) => (
          <AllJob key={job._id} job={job}></AllJob>
        ))} */}

        {AllJobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </>
  );
};

export default AllJobs;
