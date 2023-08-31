import useAdmin from "../../../../Hooks/useAdmin";
import useStudent from "../../../../Hooks/useStudent";
import useTeacher from "../../../../Hooks/useTeacher";
import AdminProfile from "../AdminProfile/AdminProfile";
import StudentProfile from "../StudentProfile/StudentProfile";
import TeacherProfile from "../TeacherProfile/TeacherProfile";

const Profile = () => {
  const [isAdmin] = useAdmin();
  const [isTeacher] = useTeacher();
  const [isStudent] = useStudent();
  return (
    <div>
      <span>
        {isAdmin && (
          <>
            <AdminProfile></AdminProfile>
          </>
        )}
        {isTeacher && (
          <>
            <TeacherProfile></TeacherProfile>
          </>
        )}
        {isStudent && (
          <>
            <StudentProfile></StudentProfile>
          </>
        )}
      </span>
    </div>
  );
};

export default Profile;
