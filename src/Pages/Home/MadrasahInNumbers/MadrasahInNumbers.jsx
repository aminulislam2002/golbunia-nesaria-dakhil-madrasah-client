import { BiSolidSchool } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

const MadrasahInNumbers = () => {
  return (
    <div className="container mx-auto py-10 bg-gray-200 bg-opacity-30">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-950">MADRASAH IN NUMBERS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <BiSolidSchool className="w-20 h-20 md:w-40 md:h-40 p-4 md:p-6 bg-lime-200 bg-opacity-50 rounded-full border"></BiSolidSchool>
            <div className="text-lg md:text-2xl font-bold text-yellow-500 mt-4">Founded</div>
            <div className="text-lg md:text-2xl font-bold">1998</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <FaUserShield className="w-20 h-20 md:w-40 md:h-40 p-4 md:p-6 bg-lime-200 bg-opacity-50 rounded-full border"></FaUserShield>
            <div className="text-lg md:text-2xl font-bold text-yellow-500 mt-4">Faculty Members</div>
            <div className="text-lg md:text-2xl font-bold">10+</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <HiUserGroup className="w-20 h-20 md:w-40 md:h-40 p-4 md:p-6 bg-lime-200 bg-opacity-50 rounded-full border"></HiUserGroup>
            <div className="text-lg md:text-2xl font-bold text-yellow-500 mt-4">Regular Students</div>
            <div className="text-lg md:text-2xl font-bold">500+</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-center">
            <FaUserGraduate className="w-20 h-20 md:w-40 md:h-40 p-4 md:p-6 bg-lime-200 bg-opacity-50 rounded-full border"></FaUserGraduate>
            <div className="text-lg md:text-2xl font-bold text-yellow-500 mt-4">Passed</div>
            <div className="text-lg md:text-2xl font-bold">2000+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadrasahInNumbers;
