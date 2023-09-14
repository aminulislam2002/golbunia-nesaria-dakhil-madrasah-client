import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const StudentSignUp = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUserWithEmail, updateUserProfileName, createUserWithGoogle, user } = useContext(AuthContext);

  const handleGoogleSignUp = () => {
    createUserWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          photo: loggedInUser.photoURL,
          role: "student",
        };
        fetch("http://localhost:5000/users", {
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
        navigate(from, { replace: true });
      });
  };

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setPasswordMismatchError(true);
    } else {
      setPasswordMismatchError(false);

      const userData = {
        name: `${data.fistName} ${data.lastName}`,
        email: data.email,
        password: data.password,
        role: "student",
      };

      // Continue with your registration logic here
      createUserWithEmail(data.email, data.password)
        .then((result) => {
          console.log("CURRENT USER INFORMATION:", result.user);
          updateUserProfileName(userData.name)
            .then(() => {
              const saveUserData = { name: userData.name, email: userData.email, role: userData.role };
              // User information saved db logic here
              fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(saveUserData),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.insertedId) {
                    reset();
                    Swal.fire({
                      icon: "success",
                      title: `${userData.name} Login Successful`,
                      showConfirmButton: false,
                      timer: 3000,
                    });
                    navigate("/");
                  }
                });
            })
            .catch((error) => {
              console.log(error);
              Swal.fire({
                icon: "warning",
                title: `${userData.name} Login Failed`,
                showConfirmButton: false,
                timer: 3000,
              });
              navigate("/");
            });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "warning",
            title: `${userData.name} Login Failed`,
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/");
        });
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex justify-center items-center">
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
              {errors.fistName && <span className="text-xs text-red-600">First Name is required</span>}
              {errors.lastName && <span className="text-xs text-red-600">Last Name is required</span>}
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
              {errors.email && <span className="text-xs text-red-600">Email Address is required</span>}
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
              {errors.password && <span className="text-xs text-red-600">Password is required</span>}
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
              {errors.confirmPassword && <span className="text-xs text-red-600">Confirm Password is required</span>}
              {passwordMismatchError && (
                <div className="text-red-500 text-sm mb-2">
                  Passwords do not match. Please make sure both passwords are the same.
                </div>
              )}
              {/* Terms and condition checkbox  */}
              <div className="form-control">
                <label className="flex gap-4 text-sm mb-2">
                  <input type="checkbox" className="checkbox checkbox-sm" readOnly onChange={handleCheckboxChange} />
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
              <button onClick={handleGoogleSignUp}>
                <FcGoogle className="w-8 h-8"></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSignUp;
