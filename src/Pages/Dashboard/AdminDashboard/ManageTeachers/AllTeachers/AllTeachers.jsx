import { useEffect, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useUrl from "../../../../../Hooks/useUrl";

const AllTeachers = () => {
  const [allTeachersData, setAllTeachersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url] = useUrl();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch(`${url}/getAllTeachers`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setAllTeachersData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchTeachers();
  }, [url]);

  console.log(allTeachersData);

  const handleMakeAdmin = (id) => {
    fetch(`${url}/makeAdmin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remainingData = allTeachersData.filter((s) => s._id != id);
        setAllTeachersData(remainingData);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: " Successfully make an admin!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to make an admin!",
          });
        }
      });
  };

  const handleDeleteTeacher = (id) => {
    fetch(`${url}/deleteUser/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remainingData = allTeachersData.filter((s) => s._id != id);
        setAllTeachersData(remainingData);
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "This teacher delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to delete an teacher!",
          });
        }
      });
  };

  return (
    <div>
      <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">Manage all Teachers</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Set Role</th>
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
                {" "}
                <tbody>
                  {/* Row */}
                  {allTeachersData.map((teacher, index) => (
                    <tr key={teacher._id}>
                      <td>{index + 1}</td>
                      <td>{teacher.name}</td>
                      <td>{teacher.email}</td>
                      <td>
                        {teacher.role === "teacher" && (
                          <button
                            onClick={() => handleMakeAdmin(teacher._id)}
                            className="btn btn-xs btn-outline btn-primary"
                          >
                            Make Admin
                          </button>
                        )}
                      </td>
                      <td>
                        <div>
                          <button>
                            <FcViewDetails className="w-8 h-8"></FcViewDetails>
                          </button>
                          <button onClick={() => handleDeleteTeacher(teacher._id)}>
                            <MdDelete className="w-8 h-8 text-red-500"></MdDelete>
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
    </div>
  );
};

export default AllTeachers;
