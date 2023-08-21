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
