import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  const { user } = useContext(AuthContext);

  const { data: currentUser = {} } = useQuery(["currentUser"], async () => {
    const res = await fetch(`https://madrasah-server.vercel.app/user/${user.email}`);
    return res.json();
  });

  //   console.log(currentUser);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Student Cover Photo */}
      <div className="bg-gray-800 h-52 rounded-lg mb-4">
        {/* <img src="" className="h-52 w-full" alt="" /> */}
        {/* Add your cover photo here */}
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center items-center -mt-24">
        <img
          src={currentUser.photo} // Replace with the actual profile picture URL
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-blue-600"
        />
      </div>

      <div className="bg-white px-4 py-2 my-2 rounded-lg shadow">
        <h1>
          <span className="text-gray-950 me-1 font-bold">Bio:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Earum, quae.
        </h1>
      </div>

      {/* Student Details */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h1 className="font-semibold mb-2">
          <span className="text-gray-800 font-bold">Name:</span>
          <span className="text-black text-base ms-1">{currentUser.name}</span>
          <span className="text-black text-sm ms-1">({currentUser.nickName})</span>
        </h1>
        <p className="mb-2">
          <span className="text-gray-800 font-bold">Email:</span>{" "}
          <span className="text-black ms-1">{currentUser.email}</span>
        </p>
        <p className="mb-2">
          <span className="text-gray-800 font-bold">Mobile Number:</span>
          <span className="text-black ms-1">{currentUser.mobileNumber}</span>
        </p>
        <p className="mb-2">
          <span className="text-gray-800 font-bold">Father Name:</span>
          <span className="text-black ms-1">{currentUser.fatherName}</span>
        </p>
        <p className="mb-2">
          <span className="text-gray-800 font-bold">Mother Name:</span>
          <span className="text-black ms-1">{currentUser.motherName}</span>
        </p>
        <p className="mb-2">
          <span className="text-gray-800 font-bold">Date of Birth:</span>
          <span className="text-black ms-1">
            {currentUser?.birthdayDate
              ? `${currentUser.birthdayDate.slice(8, 10)}-${currentUser.birthdayDate.slice(
                  5,
                  7
                )}-${currentUser.birthdayDate.slice(0, 4)}`
              : "N/A"}
          </span>
        </p>
        <p className="mb-2">
          <span className="text-gray-800 font-bold">Blood Group:</span>
          <span className="text-red-600"> {currentUser.bloodGroup}</span>
        </p>
        <p className="mb-2">
          <span className="text-gray-800 font-bold">Class:</span>{" "}
          <span className="text-black ms-1">{currentUser.class}</span>
        </p>
        <p className="mb-2">
          <span className="text-gray-800 font-bold">Roll:</span> <span className="text-black ms-1">{currentUser.roll}</span>
        </p>
      </div>

      <div className="flex justify-center items-center mt-10">
        <Link to={`update-student-profile/${currentUser._id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
            Edit public details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StudentProfile;
