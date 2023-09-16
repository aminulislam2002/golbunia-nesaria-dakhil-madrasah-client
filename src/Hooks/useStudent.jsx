import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "react-query";
import useUrl from "./useUrl";

const useStudent = () => {
  const { user, loading } = useContext(AuthContext);
  const [url] = useUrl();

  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`${url}/getStudent/${user.email}`);
      const data = await res.json();
      return data.student;
    },
  });

  return [isStudent, isStudentLoading];
};

export default useStudent;
