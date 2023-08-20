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
    fetch("teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachersData(data));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-3 gap-20">
        {dataToShow.map((teacherData, id) => (
          <div key={id}>
            <Link>
              <div className="card w-full glass py-10">
                <div className="flex justify-center items-center">
                  <img src={teacherData.image} alt="car!" className="w-[200px] h-[180px] " />
                </div>
                <div className="flex justify-center items-center ">
                  <div>
                    <h2 className="font-bold text-center text-gray-500">{teacherData.name}</h2>
                    <p className="font-bold text-center text-blue-950">{teacherData.position}</p>
                  </div>
                </div>
                <div>
                  <span className="flex justify-center items-center gap-1">
                    <MdEmail></MdEmail>
                    <p>{teacherData.contact?.email}</p>
                  </span>
                  <span className="flex justify-center items-center gap-1">
                    <IoIosCall></IoIosCall>
                    <p>{teacherData.contact?.phone}</p>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        {!showAllTeachersData ? (
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 w-1/3 font-semibold text-base"
            onClick={handleSeeMoreClick}
          >
            VIEW ALL TEACHERS
          </button>
        ) : (
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 w-1/3 font-semibold text-base"
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
