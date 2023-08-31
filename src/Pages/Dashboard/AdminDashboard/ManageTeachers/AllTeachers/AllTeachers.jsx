import { useState, useEffect } from "react";
import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/teachers?role=teacher")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteTeacher = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Teacher id delete Successfully",
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
      <div>
        <h1 className="text-3xl font-semibold text-blue-950 text-center">MANAGE TEACHERS</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Row */}

              {teachers.map((teacher, index) => (
                <tr key={teacher._id}>
                  <th>{index}</th>
                  <th>{teacher.name}</th>
                  <th>{teacher.email}</th>
                  <th>
                    <div>
                      <button>
                        <FcViewDetails className="w-8 h-8"></FcViewDetails>
                      </button>
                      <button onClick={() => handleDeleteTeacher(teacher._id)}>
                        <MdDelete className="w-8 h-8 text-red-500"></MdDelete>
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;
