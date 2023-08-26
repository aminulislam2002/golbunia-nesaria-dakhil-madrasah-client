import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { GridLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <GridLoader color="#36d7b7" />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login-register/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
