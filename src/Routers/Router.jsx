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
import Esif from "../Pages/Links/ESIF/ESIF.JSX";
import Eff from "../Pages/Links/Eff/Eff";
import Etif from "../Pages/Links/Etif/Etif";
import Erps from "../Pages/Links/Erps/Erps";
import NoticeSection from "../Pages/Home/NoticeSection/NoticeSection";
import LoginSignUpLayout from "../Layouts/LoginSignUpLayout";
import StudentSignUp from "../Pages/Authentication/StudentSignUp/StudentSignUp";
import TeacherSignUp from "../Pages/Authentication/TeacherSignUp/TeacherSignUp";
import Login from "../Pages/Authentication/Login/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AllEvent from "../Pages/Dashboard/AdminDashboard/ManageEvents/AllEvent/AllEvent";
import AddEvent from "../Pages/Dashboard/AdminDashboard/ManageEvents/AddEvent/AddEvent";
import UpdateEvent from "../Pages/Dashboard/AdminDashboard/ManageEvents/UpdateEvent/UpdateEvent";
import AllNotice from "../Pages/Dashboard/AdminDashboard/ManageNotices/AllNotice/AllNotice";
import AddNotice from "../Pages/Dashboard/AdminDashboard/ManageNotices/AddNotice/AddNotice";
import UpdateNotice from "../Pages/Dashboard/AdminDashboard/ManageNotices/UpdateNotice/UpdateNotice";
import AllTeachers from "../Pages/Dashboard/AdminDashboard/ManageTeachers/AllTeachers/AllTeachers";
import AllStudents from "../Pages/Dashboard/AdminDashboard/ManageStudents/AllStudents/AllStudents";

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
        path: "eSIF",
        element: <Esif></Esif>,
      },
      {
        path: "eFF",
        element: <Eff></Eff>,
      },
      {
        path: "eTIF",
        element: <Etif></Etif>,
      },
      {
        path: "Erps",
        element: <Erps></Erps>,
      },
      {
        path: "notice-board",
        element: <NoticeSection></NoticeSection>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "manageEvents",
        element: <AllEvent></AllEvent>,
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
]);
