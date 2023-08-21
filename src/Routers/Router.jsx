import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import StudentsRoutineLayout from "../Layouts/StudentsRoutineLayout";
import StudentsRoutines from "../Pages/Academics/StudentsRoutines/StudentsRoutines";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
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
]);
