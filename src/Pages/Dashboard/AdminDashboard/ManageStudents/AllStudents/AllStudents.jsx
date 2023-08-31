import { BsFillSendFill } from "react-icons/bs";
import { FcViewDetails } from "react-icons/fc";
import { MdDelete, MdEmail } from "react-icons/md";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const AllStudents = () => {
  const { data: students = [], refetch } = useQuery(["students"], async () => {
    const res = await fetch("http://localhost:5000/users/students?role=student");
    return res.json();
  });

  console.log(students);

  const handleDeleteAdmin = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "This student delete Successfully",
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
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Father Name</th>
              <th>Mother Name</th>
              <th>Date of Birth</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <th>1</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.fatherName}</td>
                <td>{student.motherName}</td>
                <td>{student.birthdayDate}</td>
                <td>
                  <div>
                    <button>
                      <FcViewDetails className="w-5 h-5"></FcViewDetails>
                    </button>
                    <button onClick={() => handleDeleteAdmin(student._id)}>
                      <MdDelete className="w-5 h-5 text-red-500"></MdDelete>
                    </button>
                    <button>
                      <BsFillSendFill className="w-5 h-5 text-blue-500"></BsFillSendFill>
                    </button>
                    <button>
                      <MdEmail className="w-5 h-5 text-yellow-500"></MdEmail>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
