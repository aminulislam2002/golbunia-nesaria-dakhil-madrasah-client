import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("onSubmit function called");
    console.log(data);
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      ></div>

      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center order-2 md:order-1">
          <div className="w-full max-w-md bg-white rounded shadow-md px-8 pt-4 pb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sint quae fugiat, quos repudiandae labore nihil
            cum molestias esse nostrum illum quibusdam quas fuga accusamus tenetur, odit non sunt natus?
          </div>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="w-full max-w-md bg-white rounded shadow-md px-8 pt-4 pb-6">
            <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              {/* Phone Number or Email Address field */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number or Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Enter your phone number or email"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* Password field */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  placeholder="Enter your login password"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* Forgot password button */}
              <div className="flex justify-end items-end mb-4 text-sm">
                <Link to="" className="text-blue-500">
                  Forgot password?
                </Link>
              </div>
              {/* Sign In button field */}
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
            {/* Sign up route */}
            <div className="py-4 text-sm flex justify-center items-center gap-1">
              <p className="text-center text-gray-500">Do not have an account?</p>
              <Link to="register-account" className="text-blue-500">
                Create new account
              </Link>
            </div>
            {/* Social Login */}
            <div className="grid grid-cols-3 items-center justify-center mb-4">
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

export default Login;
