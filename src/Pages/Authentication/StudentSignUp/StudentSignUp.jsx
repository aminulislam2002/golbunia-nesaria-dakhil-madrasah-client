import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa";
import { useState } from "react";

const StudentSignUp = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("onSubmit function called");
    console.log(data);
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
          <div className="w-full max-w-md bg-gray-200 rounded shadow-md px-8 pt-4 pb-6">
            <h1 className="text-2xl font-bold text-center mb-2">Sign up</h1>
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
            <div className="py-4 text-sm flex justify-center items-center gap-1">
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
              <button>
                <BsFacebook className="w-8 h-8"></BsFacebook>
              </button>
              <button>
                <FcGoogle className="w-8 h-8"></FcGoogle>
              </button>
              <button>
                <FaLinkedin className="w-8 h-8"></FaLinkedin>
              </button>
              <button>
                <FaTwitterSquare className="w-8 h-8"></FaTwitterSquare>
              </button>
              <button>
                <FaGithub className="w-8 h-8"></FaGithub>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignUp;
