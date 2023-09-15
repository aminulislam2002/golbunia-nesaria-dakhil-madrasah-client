import { IoIosPeople } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { FaRegBuilding, FaUserGraduate } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { BsPeopleFill } from "react-icons/bs";

const MadrasahInNumbers = () => {
  const cardStyles =
    "flex justify-center items-center p-5 bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out";

  return (
    <div className="my-20 bg-green-400">
      <div className="header-bg">
        <div className="text-center mb-5">
          <h1 className="text-lg lg:text-3xl font-semibold text-white pt-8 uppercase">Some facts of our Madrasah</h1>
          <p className="py-5 text-base text-white">
            <span className="font-bold text-lg">Address:</span>
            <span className="ms-1">Golbunia,</span>
            <span className="ms-1">Telikhali,</span>
            <span className="ms-1">Bhandaria Upazila,</span>
            <span className="ms-1">Pirojpur District,</span>
            <span className="ms-1">Barisal Division,</span>
            <span className="ms-1">Bangladesh.</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className={cardStyles}>
          <div className="text-center">
            <IoIosPeople className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-4 bg-blue-500 text-white rounded-full border"></IoIosPeople>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Students</div>
            <div className="text-lg md:text-2xl font-bold">300+</div>
          </div>
        </div>

        <div className={cardStyles}>
          <div className="text-center">
            <FaUserGraduate className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-4 bg-red-500 text-white rounded-full border"></FaUserGraduate>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Passed</div>
            <div className="text-lg md:text-2xl font-bold">2000+</div>
          </div>
        </div>

        <div className={cardStyles}>
          <div className="text-center">
            <GiTeacher className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-4 bg-sky-500 text-white rounded-full border"></GiTeacher>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Teachers</div>
            <div className="text-lg md:text-2xl font-bold">15</div>
          </div>
        </div>

        <div className={cardStyles}>
          <div className="text-center">
            <SiGoogleclassroom className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-4 bg-yellow-500 text-white rounded-full border"></SiGoogleclassroom>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Classes</div>
            <div className="text-lg md:text-2xl font-bold">01-10</div>
          </div>
        </div>

        <div className={cardStyles}>
          <div className="text-center">
            <FaRegBuilding className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-4 bg-purple-500 text-white rounded-full border"></FaRegBuilding>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Rooms</div>
            <div className="text-lg md:text-2xl font-bold">10</div>
          </div>
        </div>

        <div className={cardStyles}>
          <div className="text-center">
            <BsPeopleFill className="w-16 h-16 md:w-32 md:h-32 p-2 md:p-4 bg-pink-500 text-white rounded-full border"></BsPeopleFill>
            <div className="text-lg md:text-2xl font-bold text-white mt-4">Staffs</div>
            <div className="text-lg md:text-2xl font-bold">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadrasahInNumbers;
