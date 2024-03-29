import { useEffect, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useUrl from "../../../../../Hooks/useUrl";

const AllAdmins = () => {
  const [allAdminsData, setAllAdminsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [url] = useUrl();

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await fetch(`${url}/getAllAdmins`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setAllAdminsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchAdmins();
  }, [url]);

  const handleRemoveAdmin = (id) => {
    fetch(`${url}/removeAdmin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remainingData = allAdminsData.filter((s) => s._id != id);
        setAllAdminsData(remainingData);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully make a teacher!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to make a teacher!",
          });
        }
      });
  };

  const handleDeleteAdmin = (id) => {
    fetch(`${url}/deleteUser/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remainingData = allAdminsData.filter((s) => s._id != id);
        setAllAdminsData(remainingData);
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "This admin delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to delete an admin!",
          });
        }
      });
  };

  return (
    <div>
      <div className="w-full lg:w-6/12 mx-auto py-3 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">Manage all admins</h1>
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
                <tbody>
                  {/* Row */}
                  {allAdminsData.map((admin, index) => (
                    <tr key={admin._id}>
                      <td>{index + 1}</td>
                      <td>{admin.name}</td>
                      <td>{admin.email}</td>
                      <td>
                        {admin.role === "admin" && (
                          <button
                            onClick={() => handleRemoveAdmin(admin._id)}
                            className="btn btn-xs btn-outline btn-primary"
                          >
                            Remove Admin
                          </button>
                        )}
                      </td>
                      <td>
                        <div>
                          <button>
                            <FcViewDetails className="w-8 h-8"></FcViewDetails>
                          </button>
                          <button onClick={() => handleDeleteAdmin(admin._id)}>
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

export default AllAdmins;
