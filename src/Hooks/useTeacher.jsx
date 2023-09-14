import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "react-query";

const useTeacher = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: isTeacher, isLoading: isTeacherLoading } = useQuery({
    queryKey: ["isTeacher", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/getTeacher/${user.email}`);
      const data = await res.json();
      return data.teacher;
    },
  });

  return [isTeacher, isTeacherLoading];
};

export default useTeacher;
