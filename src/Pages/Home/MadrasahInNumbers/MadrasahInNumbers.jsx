import { IoIosPeople } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { FaRegBuilding, FaUserGraduate } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { BsPeopleFill } from "react-icons/bs";

const MadrasahInNumbers = () => {
  return (
    <div className="py-20 bg-green-400">
      <div className="text-center mb-20">
        <h1 className="text-3xl font-semibold text-blue-950">Some facts of our Madrasah</h1>
        <p className="py-5 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque aperiam quod, labore voluptatum fuga.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <IoIosPeople className="w-16 h-16 md:w-40 md:h-40 p-2 md:p-4 bg-white bg-opacity-50 rounded-full border"></IoIosPeople>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Students</div>
            <div className="text-lg md:text-2xl font-bold">1200+</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-center">
            <FaUserGraduate className="w-16 h-16 md:w-40 md:h-40 p-2 md:p-4 bg-white bg-opacity-50 rounded-full border"></FaUserGraduate>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Passed</div>
            <div className="text-lg md:text-2xl font-bold">2000+</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-center">
            <GiTeacher className="w-16 h-16 md:w-40 md:h-40 p-2 md:p-4 bg-white bg-opacity-50 rounded-full border"></GiTeacher>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Teachers</div>
            <div className="text-lg md:text-2xl font-bold">15+</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-center">
            <SiGoogleclassroom className="w-16 h-16 md:w-40 md:h-40 p-2 md:p-4 bg-white bg-opacity-50 rounded-full border"></SiGoogleclassroom>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Classes</div>
            <div className="text-lg md:text-2xl font-bold">01-10</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-center">
            <FaRegBuilding className="w-16 h-16 md:w-40 md:h-40 p-2 md:p-4 bg-white bg-opacity-50 rounded-full border"></FaRegBuilding>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Rooms</div>
            <div className="text-lg md:text-2xl font-bold">20</div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="text-center">
            <BsPeopleFill className="w-16 h-16 md:w-40 md:h-40 p-2 md:p-4 bg-white bg-opacity-50 rounded-full border"></BsPeopleFill>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Staffs</div>
            <div className="text-lg md:text-2xl font-bold">2000+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadrasahInNumbers;