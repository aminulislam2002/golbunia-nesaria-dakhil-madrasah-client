import { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const TeachersSection = () => {
  const [showAllTeachersData, setShowAllTeachersData] = useState(false);
  const [teachersData, setTeachersData] = useState([]);

  const dataToShow = showAllTeachersData ? teachersData : teachersData.slice(0, 6);

  const handleSeeMoreClick = () => {
    setShowAllTeachersData(true);
  };

  const handleSeeLessClick = () => {
    setShowAllTeachersData(false);
  };

  useEffect(() => {
    fetch("https://madrasah-server.vercel.app/users/teachers?role=teacher")
      .then((res) => res.json())
      .then((data) => setTeachersData(data));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-950">MEET OUR TEACHERS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataToShow.map((teacherData, id) => (
          <div key={id}>
            <Link to={`/teacher/${id}`} className="hover:no-underline">
              <div className="card w-full glass p-4 rounded-lg shadow-lg bg-slate-200">
                <div className="flex justify-center items-center mb-4">
                  <img src={teacherData.photo} alt={teacherData.name} className="w-32 h-32 md:w-[150px] md:h-[150px] " />
                </div>
                <div>
                  <h2 className="font-bold text-center text-gray-800 text-lg">{teacherData.name}</h2>
                  <p className="font-semibold text-center text-blue-500">{teacherData.position}</p>
                </div>
                <div className="mt-4">
                  <div className="flex justify-center items-center gap-1">
                    <MdEmail className="text-blue-500" />
                    <p>{teacherData?.email}</p>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <IoIosCall className="text-blue-500" />
                    <p>{teacherData?.phone}</p>
                  </div>
                </div>
              </div>
            </Link>
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
