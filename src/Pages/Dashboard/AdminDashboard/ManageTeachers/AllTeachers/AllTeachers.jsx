import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const AllTeachers = () => {
  const { data: teachers = [], refetch } = useQuery(["teachers"], async () => {
    const res = await fetch("https://golbunia-nesaria-dakhil-madrasah-server.vercel.app/users/teachers?role=teacher");
    return res.json();
  });

  console.log(teachers);

  const handleMakeAdmin = (user) => {
    fetch(`https://golbunia-nesaria-dakhil-madrasah-server.vercel.app/users/makeAdmin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeleteTeacher = (_id) => {
    fetch(`https://golbunia-nesaria-dakhil-madrasah-server.vercel.app/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "This teacher delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
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
                <th>Set Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Row */}
              {teachers.map((teacher, index) => (
                <tr key={teacher._id}>
                  <td>{index}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.email}</td>
                  <td>
                    {teacher.role === "teacher" && (
                      <button onClick={() => handleMakeAdmin(teacher)} className="btn btn-xs btn-outline btn-primary">
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
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;
