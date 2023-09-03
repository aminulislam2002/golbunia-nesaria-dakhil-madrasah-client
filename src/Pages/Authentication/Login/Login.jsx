import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, user, createUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `${user.displayName} Login Successful`,
          showConfirmButton: false,
          timer: 3000,
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "warning",
          title: `${user.displayName} Login Failed`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  const handleGoogleSignIn = () => {
    createUserWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photo: loggedInUser.photoURL,
        };
        fetch("https://golbunia-nesaria-dakhil-madrasah-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "warning",
          title: `${user.displayName} Login Failed`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/isometric-data-protection-concept-with-parent-child-login-window-lock-3d_1284-63713.jpg?size=626&ext=jpg&uid=R93922666&ga=GA1.2.235952763.1681062999&semt=sph)",
        }}
      ></div>

      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center order-2 md:order-1">
          <div className="w-full max-w-md  px-8 pt-4 pb-6">
            <Link to="/">
              <button className="uppercase text-2xl px-10 py-3 text-center rounded-full bg-yellow-500">Back to home</button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="w-full max-w-md bg-white rounded shadow-md px-8 pt-4 pb-6">
            <h1 className="text-2xl font-bold text-center mb-2">Sign In</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              {/* Email Address field */}
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Enter your email"
                  className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {errors.email && <span className="text-xs text-red-600">Email Address is required</span>}
              {/* Password field */}
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  placeholder="Enter your login password"
                  className="appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {errors.password && <span className="text-xs text-red-600">Password is required</span>}
              {/* Forgot password button */}
              <div className="flex justify-end items-end mb-2 text-sm">
                <Link to="" className="text-blue-500">
                  Forgot password?
                </Link>
              </div>
              {/* Sign In button field */}
              <div className="flex items-center justify-between mb-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
            {/* Social Login */}
            <div className="grid grid-cols-3 items-center justify-center mb-2">
              <hr />
              <span className="text-center block text-gray-700 text-sm font-bold">Sign in with</span>
              <hr />
            </div>
            <div className="flex justify-center items-center gap-5">
              <button onClick={() => handleGoogleSignIn()}>
                <FcGoogle className="w-8 h-8"></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
