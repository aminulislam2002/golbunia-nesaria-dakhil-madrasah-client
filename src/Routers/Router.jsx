import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import HistoryOfMadrasah from "../Pages/AboutUs/HistoryOfMadrasah/HistoryOfMadrasah";
import MissionAndVision from "../Pages/AboutUs/MissionAndVision/MissionAndVision";
import PhotosGallery from "../Pages/AboutUs/PhotosGallery/PhotosGallery";
import AuthorityAndCommittee from "../Pages/AboutUs/AuthorityAndCommittee/AuthorityAndCommittee";
import LoginSignUpLayout from "../Layouts/LoginSignUpLayout";
import StudentSignUp from "../Pages/Authentication/StudentSignUp/StudentSignUp";
import TeacherSignUp from "../Pages/Authentication/TeacherSignUp/TeacherSignUp";
import Login from "../Pages/Authentication/Login/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../Pages/Dashboard/ManageProfiles/Profile/Profile";
import AllEvent from "../Pages/Dashboard/AdminDashboard/ManageEvents/AllEvent/AllEvent";
import AddEvent from "../Pages/Dashboard/AdminDashboard/ManageEvents/AddEvent/AddEvent";
import UpdateEvent from "../Pages/Dashboard/AdminDashboard/ManageEvents/UpdateEvent/UpdateEvent";
import AllNotice from "../Pages/Dashboard/AdminDashboard/ManageNotices/AllNotice/AllNotice";
import AddNotice from "../Pages/Dashboard/AdminDashboard/ManageNotices/AddNotice/AddNotice";
import UpdateNotice from "../Pages/Dashboard/AdminDashboard/ManageNotices/UpdateNotice/UpdateNotice";
import AllTeachers from "../Pages/Dashboard/AdminDashboard/ManageTeachers/AllTeachers/AllTeachers";
import AllStudents from "../Pages/Dashboard/AdminDashboard/ManageStudents/AllStudents/AllStudents";
import PrivateRoute from "./PrivateRoute";
import AllAdmins from "../Pages/Dashboard/AdminDashboard/ManageAdmins/AllAdmins/AllAdmins";
import UpdateStudentProfile from "../Pages/Dashboard/ManageProfiles/UpdateStudentProfile/UpdateStudentProfile";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import UpdateTeacherProfile from "../Pages/Dashboard/ManageProfiles/UpdateTeacherProfile/UpdateTeacherProfile";
import UpdateAdminProfile from "../Pages/Dashboard/ManageProfiles/UpdateAdminProfile/UpdateAdminProfile";
import OurStudents from "../Pages/AboutUs/OurStudents/OurStudents";
import StudentProtocol from "../Pages/Academics/StudentProtocol/StudentProtocol";
import Events from "../Pages/Academics/Events/Events";
import News from "../Pages/Academics/News/News";
import MadrasahInformation from "../Pages/Home/MadrasahInformation/MadrasahInformation";
import StudentsRoutine from "../Pages/Students/StudentsRoutine/StudentsRoutine";
import ClassSyllabus from "../Pages/Students/ClassSyllabus/ClassSyllabus";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "history-of-madrasah",
        element: <HistoryOfMadrasah></HistoryOfMadrasah>,
      },
      {
        path: "mission-and-vision",
        element: <MissionAndVision></MissionAndVision>,
      },
      {
        path: "photos-gallery",
        element: <PhotosGallery></PhotosGallery>,
      },
      {
        path: "authority-and-committee",
        element: <AuthorityAndCommittee></AuthorityAndCommittee>,
      },
      {
        path: "our-students",
        element: <OurStudents></OurStudents>,
      },
      {
        path: "student-protocol",
        element: <StudentProtocol></StudentProtocol>,
      },
      {
        path: "events",
        element: <Events></Events>,
      },
      {
        path: "news",
        element: <News></News>,
      },
      {
        path: "notice-board",
        element: <MadrasahInformation></MadrasahInformation>,
      },
      {
        path: "students-routines",
        element: <StudentsRoutine></StudentsRoutine>,
      },
      {
        path: "classes-syllabus",
        element: <ClassSyllabus></ClassSyllabus>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "profile/update-student-profile/:id",
        element: <UpdateStudentProfile></UpdateStudentProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/getUserById/${params.id}`),
      },
      {
        path: "profile/update-teacher-profile/:id",
        element: <UpdateTeacherProfile></UpdateTeacherProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/getUserById/${params.id}`),
      },
      {
        path: "profile/update-admin-profile/:id",
        element: <UpdateAdminProfile></UpdateAdminProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/getUserById/${params.id}`),
      },
      {
        path: "manageEvents",
        element: <AllEvent></AllEvent>,
        loader: () => fetch("http://localhost:5000/events"),
      },
      {
        path: "addEvent",
        element: <AddEvent></AddEvent>,
      },
      {
        path: "updateEvent",
        element: <UpdateEvent></UpdateEvent>,
      },
      {
        path: "manageNotices",
        element: <AllNotice></AllNotice>,
        loader: () => fetch("http://localhost:5000/notices"),
      },
      {
        path: "addNotice",
        element: <AddNotice></AddNotice>,
      },
      {
        path: "updateNotice",
        element: <UpdateNotice></UpdateNotice>,
      },
      {
        path: "manageAdmins",
        element: <AllAdmins></AllAdmins>,
      },
      {
        path: "manageTeachers",
        element: <AllTeachers></AllTeachers>,
      },
      {
        path: "manageStudents",
        element: <AllStudents></AllStudents>,
      },
    ],
  },
  {
    path: "login-register",
    element: <LoginSignUpLayout></LoginSignUpLayout>,
    children: [
      {
        path: "student-register",
        element: <StudentSignUp></StudentSignUp>,
      },
      {
        path: "teacher-register",
        element: <TeacherSignUp></TeacherSignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/*",
    element: <PageNotFound></PageNotFound>,
  },
]);
