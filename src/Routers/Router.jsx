import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import StudentsRoutineLayout from "../Layouts/StudentsRoutineLayout";
import StudentsRoutines from "../Pages/Academics/StudentsRoutines/StudentsRoutines";
import ClassesSyllabusLayout from "../Layouts/ClassesSyllabusLayout";
import ClassesSyllabus from "../Pages/Academics/ClassesSyllabus/ClassesSyllabus";
import StudentsResultsLayout from "../Layouts/StudentsResultsLayout";
import StudentsResult from "../Pages/Academics/StudentsResult/StudentsResult";
import HistoryOfMadrasah from "../Pages/AboutUs/HistoryOfMadrasah/HistoryOfMadrasah";
import MissionAndVision from "../Pages/AboutUs/MissionAndVision/MissionAndVision";
import PhotosGallery from "../Pages/AboutUs/PhotosGallery/PhotosGallery";
import AuthorityAndCommittee from "../Pages/AboutUs/AuthorityAndCommittee/AuthorityAndCommittee";
import NoticeSection from "../Pages/Home/NoticeSection/NoticeSection";
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
        path: "notice-board",
        element: <NoticeSection></NoticeSection>,
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
        loader: ({ params }) => fetch(`https://madrasah-server.vercel.app/users/${params.id}`),
      },
      {
        path: "profile/update-teacher-profile/:id",
        element: <UpdateTeacherProfile></UpdateTeacherProfile>,
        loader: ({ params }) => fetch(`https://madrasah-server.vercel.app/users/${params.id}`),
      },
      {
        path: "manageEvents",
        element: <AllEvent></AllEvent>,
        loader: () => fetch("https://madrasah-server.vercel.app/events"),
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
        loader: () => fetch("https://madrasah-server.vercel.app/notices"),
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
    path: "students-routines",
    element: <StudentsRoutineLayout></StudentsRoutineLayout>,
    children: [
      {
        path: "",
        element: <StudentsRoutines></StudentsRoutines>,
      },
    ],
  },
  {
    path: "classes-syllabus",
    element: <ClassesSyllabusLayout></ClassesSyllabusLayout>,
    children: [
      {
        path: "",
        element: <ClassesSyllabus></ClassesSyllabus>,
      },
    ],
  },
  {
    path: "students-results",
    element: <StudentsResultsLayout></StudentsResultsLayout>,
    children: [
      {
        path: "",
        element: <StudentsResult></StudentsResult>,
      },
    ],
  },
  {
    path: "/*",
    element: <PageNotFound></PageNotFound>,
  },
]);
