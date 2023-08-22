import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

const TeacherSignUp = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const predefinedTeacherIds = ["abc1", "abc2", "abc3", "abc4", "abc5", "abc6", "abc7", "abc8", "abc9", "abc10"];

  const handleFacebookSignUp = async () => {
    const { value: userId } = await Swal.fire({
      title: "Enter your Teacher ID:",
      input: "text",
      inputPlaceholder: "Teacher ID",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Cancel",
    });

    if (userId) {
      if (predefinedTeacherIds.includes(userId)) {
        Swal.fire({
          icon: "success",
          title: "Validation Successful",
        });
        console.log("Yes you are valid!");
        // Authentication code is here
      } else {
        Swal.fire({
          icon: "error",
          title: "Validation Failed",
          text: "Invalid Teacher ID",
        });
      }
    }
  };
  const handleGoogleSignUp = async () => {
    const { value: userId } = await Swal.fire({
      title: "Enter your Teacher ID:",
      input: "text",
      inputPlaceholder: "Teacher ID",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Cancel",
    });

    if (userId) {
      if (predefinedTeacherIds.includes(userId)) {
        Swal.fire({
          icon: "success",
          title: "Validation Successful",
        });
        console.log("Yes you are valid!");
        // Authentication code is here
      } else {
        Swal.fire({
          icon: "error",
          title: "Validation Failed",
          text: "Invalid Teacher ID",
        });
      }
    }
  };
  const handleLinkedinSignUp = async () => {
    const { value: userId } = await Swal.fire({
      title: "Enter your Teacher ID:",
      input: "text",
      inputPlaceholder: "Teacher ID",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Cancel",
    });

    if (userId) {
      if (predefinedTeacherIds.includes(userId)) {
        Swal.fire({
          icon: "success",
          title: "Validation Successful",
        });
        console.log("Yes you are valid!");
        // Authentication code is here
      } else {
        Swal.fire({
          icon: "error",
          title: "Validation Failed",
          text: "Invalid Teacher ID",
        });
      }
    }
  };
  const handleTwitterSignUp = async () => {
    const { value: userId } = await Swal.fire({
      title: "Enter your Teacher ID:",
      input: "text",
      inputPlaceholder: "Teacher ID",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Cancel",
    });

    if (userId) {
      if (predefinedTeacherIds.includes(userId)) {
        Swal.fire({
          icon: "success",
          title: "Validation Successful",
        });
        console.log("Yes you are valid!");
        // Authentication code is here
      } else {
        Swal.fire({
          icon: "error",
          title: "Validation Failed",
          text: "Invalid Teacher ID",
        });
      }
    }
  };
  const handleGithubSignUp = async () => {
    const { value: userId } = await Swal.fire({
      title: "Enter your Teacher ID:",
      input: "text",
      inputPlaceholder: "Teacher ID",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Cancel",
    });

    if (userId) {
      if (predefinedTeacherIds.includes(userId)) {
        Swal.fire({
          icon: "success",
          title: "Validation Successful",
        });
        console.log("Yes you are valid!");
        // Authentication code is here
      } else {
        Swal.fire({
          icon: "error",
          title: "Validation Failed",
          text: "Invalid Teacher ID",
        });
      }
    }
  };

  const onSubmit = (data) => {
    if (predefinedTeacherIds.includes(data.teacherId)) {
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      console.log("onSubmit function called");
      console.log(data);
      // Authentication code is here
    } else {
      Swal.fire({
        title: "Sorry!",
        text: "You are not valid Teacher.",
        icon: "warning",
        confirmButtonText: "Okay",
      });
      // Clear the form
      reset();
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-no-repeat max-h-screen bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/isometric-data-protection-concept-with-parent-child-login-window-lock-3d_1284-63713.jpg?size=626&ext=jpg&uid=R93922666&ga=GA1.2.235952763.1681062999&semt=sph)",
        }}
      ></div>

      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center order-2 md:order-1">
          <div className="w-full max-w-md bg-gray-200 rounded shadow-md px-8 pt-4 pb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sint quae fugiat, quos repudiandae labore nihil
            cum molestias esse nostrum illum quibusdam quas fuga accusamus tenetur, odit non sunt natus?
          </div>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="w-full max-w-md bg-gray-200 rounded shadow-md px-8 pt-2 pb-4">
            <h1 className="text-xl font-bold text-center mb-1">Sign up</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              {/* Full name*/}
              <div className="flex justify-center items-center gap-4 mb-2">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-1">First Name:</label>
                  <input
                    type="text"
                    {...register("fistName", { required: true })}
                    name="fistName"
                    placeholder="Enter your first name"
                    className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-1">Last Name:</label>
                  <input
                    type="text"
                    {...register("lastName", { required: true })}
                    name="lastName"
                    placeholder="Enter your last name"
                    className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              {/* Email Address field */}
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Enter your email"
                  className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* Teacher id number field */}
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">Teacher ID</label>
                <input
                  type="text"
                  {...register("teacherId", { required: true })}
                  name="teacherId"
                  placeholder="Enter your id"
                  className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* Password field */}
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">Login Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  name="password"
                  placeholder="Set the login password"
                  className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* Confirm Password field */}
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-1">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                  })}
                  name="confirmPassword"
                  placeholder="Set the login password again"
                  className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* Terms and condition checkbox  */}
              <div className="form-control">
                <label className="flex gap-4 text-sm mb-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    readOnly
                    checked={isAgreed}
                    onChange={handleCheckboxChange}
                  />
                  <div>
                    I agree to <button className="text-blue-500">Terms & Conditions of Use</button> and
                    <button className="text-blue-500">Privacy Policy</button>.
                  </div>
                </label>
              </div>
              {/* Register button field */}
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={!isAgreed}
                >
                  Agree and Register
                </button>
              </div>
            </form>
            {/* Sign up route */}
            <div className="py-2 text-sm flex justify-center items-center gap-1">
              <p className="text-center text-gray-500">Already have an account?</p>
              <Link to="/login-register/login" className="text-blue-500">
                Sign in
              </Link>
            </div>
            {/* Social Login */}
            <div className="grid grid-cols-3 items-center justify-center mb-2">
              <hr />
              <span className="text-center block text-gray-700 text-sm font-bold">Sign in with</span>
              <hr />
            </div>
            <div className="flex justify-center items-center gap-5">
              <button onClick={handleFacebookSignUp}>
                <BsFacebook className="w-8 h-8"></BsFacebook>
              </button>
              <button onClick={handleGoogleSignUp}>
                <FcGoogle className="w-8 h-8"></FcGoogle>
              </button>
              <button onClick={handleLinkedinSignUp}>
                <FaLinkedin className="w-8 h-8"></FaLinkedin>
              </button>
              <button onClick={handleTwitterSignUp}>
                <FaTwitterSquare className="w-8 h-8"></FaTwitterSquare>
              </button>
              <button onClick={handleGithubSignUp}>
                <FaGithub className="w-8 h-8"></FaGithub>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignUp;
