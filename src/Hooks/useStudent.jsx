import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "react-query";

const useStudent = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://madrasah-server.vercel.app/getStudent/${user.email}`);
      const data = await res.json();
      return data.student;
    },
  });

  return [isStudent, isStudentLoading];
};

export default useStudent;
