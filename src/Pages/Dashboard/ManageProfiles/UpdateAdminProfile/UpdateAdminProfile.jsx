import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateAdminProfile = () => {
  const user = useLoaderData();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/userUpdate/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/dashboard/profile");
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name}'s Your profile updated successful!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-950 uppercase">Update your profile</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Edit name field  */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2">Edit Your Name:</label>
            <input
              type="text"
              {...register("name")}
              name="name"
              placeholder="Enter your name"
              defaultValue={user?.name}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Edit nickName field  */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2">Edit Your NickName:</label>
            <input
              type="text"
              {...register("nickName")}
              name="nickName"
              placeholder="Enter your nickName"
              defaultValue={user?.nickName}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Edit bio field  */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2">Edit Your Bio:</label>
            <input
              type="text"
              {...register("bio")}
              name="bio"
              placeholder="Enter your bio"
              defaultValue={user?.bio}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Edit your position filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2">Edit Your Position:</label>
            <input
              type="text"
              {...register("position")}
              name="position"
              placeholder="Enter your position"
              defaultValue={user?.position}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Edit father name field  */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2">Edit Your Father Name:</label>
            <input
              type="text"
              {...register("fatherName")}
              name="fatherName"
              placeholder="Enter your father name"
              defaultValue={user?.fatherName}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Edit mother name field  */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2">Edit Your Mother Name:</label>
            <input
              type="text"
              {...register("motherName")}
              name="motherName"
              placeholder="Enter your mother name"
              defaultValue={user?.motherName}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Edit your mobile number filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2">Edit Your Mobile Number:</label>
            <input
              type="number"
              {...register("mobileNumber")}
              name="mobileNumber"
              placeholder="Enter your mobile number"
              defaultValue={user?.mobileNumber}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Edit your blood group filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2">Edit Your Blood Group:</label>
            <input
              type="text"
              {...register("bloodGroup")}
              name="bloodGroup"
              placeholder="Enter your blood group"
              defaultValue={user?.bloodGroup}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Edit your birthday filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2">Edit Your Birthday:</label>
            <input
              type="date"
              {...register("birthdayDate")}
              name="birthdayDate"
              placeholder="Enter your birthday"
              defaultValue={user?.birthdayDate}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Edit your address filed */}
          <div>
            <label className="block text-gray-700 text-sm font-bold my-2">Edit Your Address:</label>
            <input
              type="text"
              {...register("address")}
              name="address"
              placeholder="Enter your address"
              defaultValue={user?.address}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded w-full focus:outline-none focus:shadow-outline"
            >
              Update your profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAdminProfile;
