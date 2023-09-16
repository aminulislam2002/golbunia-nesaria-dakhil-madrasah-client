import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../Providers/AuthProvider";

const TeacherProfile = () => {
  const { user } = useContext(AuthContext);

  const { data: currentUser = {}, isLoading } = useQuery(["currentUser"], async () => {
    const res = await fetch(`https://madrasah-server.vercel.app/getUserByEmail/${user.email}`);
    return res.json();
  });

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {isLoading ? (
        <>
          <div className="text-center my-4">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative">
                {currentUser.photo ? (
                  <>
                    <img
                      src={currentUser?.photo}
                      alt="Profile"
                      className="w-40 h-40 rounded-full border-4 border-blue-600"
                    />
                    <div className="absolute bottom-0 right-0 bg-green-500 text-white py-1 px-2 rounded-full">Online</div>
                  </>
                ) : (
                  <>
                    <FaRegCircleUser className="w-40 h-40 rounded-full border-4 border-blue-600"></FaRegCircleUser>
                    <div className="absolute bottom-0 right-0 bg-green-500 text-white py-1 px-2 rounded-full">Online</div>
                  </>
                )}
              </div>

              <h1 className="text-3xl font-bold text-black">
                {currentUser?.name ? (
                  <>
                    <span>{currentUser?.name}</span>
                  </>
                ) : (
                  <>N/A</>
                )}
                {currentUser?.nickName ? (
                  <>
                    <span className="text-sm text-gray-600 ml-2">(@{currentUser?.nickName})</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm text-gray-600 ml-2">(@{"N/A"})</span>
                  </>
                )}
              </h1>
            </div>

            <div className="bg-white p-4 my-4 rounded-lg shadow">
              {currentUser?.position ? (
                <>
                  <p className="text-gray-800 font-semibold mb-2">
                    {currentUser?.position} at Golbunia Nesaria Dakhil Madrasah
                  </p>
                </>
              ) : (
                <>
                  <p>...N/A... at Golbunia Nesaria Dakhil Madrasah</p>
                </>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-800 font-semibold">Email</p>
                  <p>{currentUser?.email}</p>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">Mobile Number</p>
                  {currentUser?.mobileNumber ? (
                    <>
                      <p>{currentUser?.mobileNumber}</p>
                    </>
                  ) : (
                    <>N/A</>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white p-4 my-4 rounded-lg shadow">
              <div className="py-2 grid grid-cols-2 gap-2">
                <div className="text-gray-800 font-semibold">Father's Name</div>
                {currentUser?.fatherName ? (
                  <>
                    <div>{currentUser?.fatherName}</div>
                  </>
                ) : (
                  <>N/A</>
                )}
                <div className="text-gray-800 font-semibold">Mother's Name</div>
                {currentUser?.motherName ? (
                  <>
                    <div>{currentUser?.motherName}</div>
                  </>
                ) : (
                  <>N/A</>
                )}
                <div className="text-gray-800 font-semibold">Date of Birth</div>
                <div>
                  {currentUser?.birthdayDate
                    ? `${currentUser?.birthdayDate.slice(8, 10)}-${currentUser?.birthdayDate.slice(
                        5,
                        7
                      )}-${currentUser?.birthdayDate.slice(0, 4)}`
                    : "N/A"}
                </div>
                <div className="text-gray-800 font-semibold">Blood Group</div>
                {currentUser?.bloodGroup ? (
                  <>
                    <div className="text-red-600 font-semibold">{currentUser?.bloodGroup}</div>
                  </>
                ) : (
                  <>N/A</>
                )}
                <div className="text-gray-800 font-semibold">Address</div>
                {currentUser?.address ? (
                  <>
                    <div>{currentUser?.address}</div>
                  </>
                ) : (
                  <>N/A</>
                )}
              </div>
            </div>

            <div className="bg-white p-4 my-4 rounded-lg shadow">
              <h2 className="text-gray-950 font-semibold">Bio</h2>
              {currentUser?.bio ? (
                <>
                  <p className="text-gray-800">{currentUser?.bio}</p>
                </>
              ) : (
                <>N/A</>
              )}
            </div>

            <div className="flex justify-center items-center mt-8">
              <Link to={`update-teacher-profile/${currentUser?._id}`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                  Edit Public Details
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherProfile;
