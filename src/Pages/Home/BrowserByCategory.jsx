import Marquee from "react-fast-marquee";
import { FaHeadset, FaLandmark } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { SiAdobephotoshop, SiCanva, SiLibreofficewriter } from "react-icons/si";

const BrowserByCategory = () => {
  return (
    <div className="mt-32">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-center ">Browser By Category</h2>
        <p className="text-center font-semibold">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
      </div>

      <div>
        <Marquee>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="max-w-sm mx-auto">
              <div className="card bg-base-100 shadow-lg border rounded-md p-4">
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="text-blue-500 text-3xl">
                    <FaHeadset />
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="text-lg font-bold">Human Resource</h2>
                    <p className="text-gray-500">No Job Available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-sm mx-auto">
              <div className="card bg-base-100 shadow-lg border rounded-md p-4">
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="text-blue-500 text-3xl">
                  <FaLandmark />
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="text-lg font-bold">Market Reachers</h2>
                    <p className="text-gray-500"> Job Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="card bg-base-100 shadow-lg border rounded-md p-4">
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="text-blue-500 text-3xl">
                  <GrCloudSoftware />
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="text-lg font-bold">Software</h2>
                    <p className="text-gray-500">No Job Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="card bg-base-100 shadow-lg border rounded-md p-4">
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="text-blue-500 text-3xl">
                  <SiLibreofficewriter />
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="text-lg font-bold">Content Writer</h2>
                    <p className="text-gray-500">No Job Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="card bg-base-100 shadow-lg border rounded-md p-4">
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="text-blue-500 text-3xl">
                  <FaComputer />
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="text-lg font-bold">Computer engineer</h2>
                    <p className="text-gray-500"> Job Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="card bg-base-100 shadow-lg border rounded-md p-4">
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="text-blue-500 text-3xl">
                  <SiCanva />
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="text-lg font-bold">Designer</h2>
                    <p className="text-gray-500"> Job Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="card bg-base-100 shadow-lg border rounded-md p-4">
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="text-blue-500 text-3xl">
                  <SiLibreofficewriter />
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="text-lg font-bold">Content Writer</h2>
                    <p className="text-gray-500">No Job Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="card bg-base-100 shadow-lg border rounded-md p-4">
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="text-blue-500 text-3xl">
                    <FaHeadset />
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="text-lg font-bold">Human Resource</h2>
                    <p className="text-gray-500">No Job Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="card bg-base-100 shadow-lg border rounded-md p-4">
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="text-blue-500 text-3xl">
                  <GrCloudSoftware />
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="text-lg font-bold">Software</h2>
                    <p className="text-gray-500">No Job Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="card bg-base-100 shadow-lg border rounded-md p-4">
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <div className="text-blue-500 text-3xl">
                  <SiAdobephotoshop />
                  </div>
                  {/* Content */}
                  <div>
                    <h2 className="text-lg font-bold">Graphics Designer</h2>
                    <p className="text-gray-500"> Job Available</p>
                  </div>
                </div>
              </div>
            </div>

        
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BrowserByCategory;
