import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useUrl from "../../../Hooks/useUrl";

const TeacherSignUp = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url] = useUrl();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { createUserWithEmail, updateUserProfileName, createUserWithGoogle, user } = useContext(AuthContext);

  const predefinedTeacherIds = ["abc1", "abc2", "abc3", "abc4", "abc5", "abc6", "abc7", "abc8", "abc9", "abc10"];

  const handleGoogleSignUp = async () => {
    setIsLoading(true);

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
          showConfirmButton: false,
          timer: 1000,
        });
        // Authentication code is here
        createUserWithGoogle()
          .then((result) => {
            const loggedInUser = result.user;
            const saveUser = {
              name: loggedInUser.displayName,
              email: loggedInUser.email,
              photo: loggedInUser.photoURL,
              role: "teacher",
            };
            fetch(`${url}/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then(() => {
                setIsLoading(false);
                navigate(from, { replace: true });
              });
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
            Swal.fire({
              icon: "warning",
              title: `${user.displayName} Login Failed`,
              showConfirmButton: false,
              timer: 3000,
            });
            navigate(from, { replace: true });
          });
      } else {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Validation Failed",
          text: "Invalid Teacher ID",
        });
        navigate(from, { replace: true });
      }
    }
  };

  const onSubmit = (data) => {
    if (predefinedTeacherIds.includes(data.teacherId)) {
      if (data.password !== data.confirmPassword) {
        setPasswordMismatchError(true);
      } else {
        setPasswordMismatchError(false);
        setIsLoading(true);

        const userData = {
          name: `${data.fistName} ${data.lastName}`,
          email: data.email,
          password: data.password,
          role: "teacher",
        };

        // Registration logic here
        createUserWithEmail(data.email, data.password)
          .then((result) => {
            console.log("CURRENT USER INFORMATION:", result.user);
            updateUserProfileName(userData.name)
              .then(() => {
                const saveUserData = { name: userData.name, email: userData.email, role: userData.role };
                // User information saved db logic here
                fetch(`${url}/users`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(saveUserData),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    setIsLoading(false);
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
                setIsLoading(false);
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
            setIsLoading(false);
            Swal.fire({
              icon: "warning",
              title: `${userData.name} Login Failed`,
              showConfirmButton: false,
              timer: 3000,
            });
            navigate("/");
          });
      }
    } else {
      setIsLoading(false);
      Swal.fire({
        title: "Sorry!",
        text: "You are not a valid Teacher.",
        icon: "warning",
        confirmButtonText: "Okay",
      });
      navigate("/");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="w-full max-w-md bg-gray-200 rounded shadow-md px-8 pt-2 pb-4">
            <h1 className="text-xl font-bold text-center mb-1">Sign up</h1>
            {isLoading ? (
              <>
                <div className="text-center my-4">
                  <span className="loading loading-dots loading-lg"></span>
                </div>
              </>
            ) : (
              <>
                {" "}
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
                  {errors.teacherId && <span className="text-xs text-red-600">Teacher ID is required</span>}
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
              </>
            )}
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
              <button onClick={handleGoogleSignUp}>
                <FcGoogle className={`w-8 h-8 ${isLoading ? "pointer-events-none" : ""}`}></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignUp;
