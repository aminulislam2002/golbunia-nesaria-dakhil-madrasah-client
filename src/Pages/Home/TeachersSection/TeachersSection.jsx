import { useEffect, useState } from "react";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const TeachersSection = () => {
  const [showAllTeachersData, setShowAllTeachersData] = useState(false);
  const [teachersData, setTeachersData] = useState([]);

  const dataToShow = showAllTeachersData ? teachersData : teachersData.slice(0, 8);

  const handleSeeMoreClick = () => {
    setShowAllTeachersData(true);
  };

  const handleSeeLessClick = () => {
    setShowAllTeachersData(false);
  };

  useEffect(() => {
    fetch("/teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachersData(data));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="w-full lg:w-6/12 mx-auto py-3 my-10 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">MEET OUR TEACHERS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataToShow.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-blue-100 text-gray-800 hover:bg-blue-200 hover:text-gray-900 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="bg-blue-200 rounded- p-2 mx-auto">
              <BiSolidUserRectangle className="w-full h-40 object-cover rounded-full" />
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-900">{teacher.name}</h2>
            <p className="text-sm text-gray-600">{teacher.position}</p>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <FaHome className="text-blue-500 text-lg" />
                <span className="text-sm">{teacher.address}</span>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <MdCall className="text-green-500 text-lg" />
                <span className="text-sm">{teacher.mobileNumber}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        {!showAllTeachersData ? (
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 w-full md:w-auto font-semibold text-base rounded-lg shadow-md"
            onClick={handleSeeMoreClick}
          >
            VIEW ALL TEACHERS
          </button>
        ) : (
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 w-full md:w-auto font-semibold text-base rounded-lg shadow-md"
            onClick={handleSeeLessClick}
          >
            SEE LESS...
          </button>
        )}
      </div>
    </div>
  );
};

export default TeachersSection;
