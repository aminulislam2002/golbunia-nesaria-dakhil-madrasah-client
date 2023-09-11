import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import MainFooter from "../Pages/Shared/MainFooter/MainFooter";
import TopNavBar from "../Pages/Shared/TopNavBar/TopNavBar";

const MainLayout = () => {
  return (
    <div>
      <TopNavBar></TopNavBar>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <MainFooter></MainFooter>
    </div>
  );
};

export default MainLayout;
