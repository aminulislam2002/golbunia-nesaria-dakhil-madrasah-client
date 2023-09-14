import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const ForgotPasswordField = () => {
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email; // Use data.email from React Hook Form
    if (!email) {
      alert("Please provide your email address to reset the password");
      return;
    }
    try {
      // Call your resetPassword function from the AuthContext.
      await resetPassword(email);
      alert("Please check your email for password reset instructions.");
      navigate(from);
    } catch (error) {
      console.error(error);
      alert("Password reset failed. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md bg-white rounded shadow-md px-8 pt-4 pb-6">
        <h1 className="text-2xl font-bold text-center mb-2">Reset Your Password</h1>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="flex items-center justify-between mb-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordField;