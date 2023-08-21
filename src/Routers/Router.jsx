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
