import { useEffect, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllStudents = () => {
  const [allStudentsData, setAllStudentsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("https://madrasah-server.vercel.app/getAllStudents");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setAllStudentsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);
  const handleDeleteStudent = (id) => {
    fetch(`https://madrasah-server.vercel.app/deleteUser/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingData = allStudentsData.filter((s) => s._id != id);
          setAllStudentsData(remainingData);
          Swal.fire({
            icon: "success",
            title: "Delete Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to delete!",
          });
        }
      });
  };

  return (
    <div>
      <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">Manage all Students</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Class</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <>
              <div className="text-center my-4">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            </>
          ) : (
            <>
              <tbody>
                {allStudentsData.map((student, index) => (
                  <tr key={student._id}>
                    <th>{index + 1}</th>
                    <td>{student?.name}</td>
                    <td>{student?.email}</td>
                    <td>{student?.fatherName}</td>
                    <td>{student?.motherName}</td>
                    <td>{student?.class}</td>
                    <td>{student?.roll}</td>
                    <td>
                      <div>
                        <button>
                          <FcViewDetails className="w-5 h-5"></FcViewDetails>
                        </button>
                        <button onClick={() => handleDeleteStudent(student._id)}>
                          <MdDelete className="w-5 h-5 text-red-500"></MdDelete>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
