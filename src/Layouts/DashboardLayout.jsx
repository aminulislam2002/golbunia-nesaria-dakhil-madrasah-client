import { Link, Outlet } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import ActiveLink from "../Components/ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const isAdmin = true;
  const isTeacher = false;
  const isStudent = false;

  const optionsOne = (
    <>
      <ActiveLink to="/dashboard/manageEvents">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Events
        </li>
      </ActiveLink>
      <ActiveLink to="/dashboard/manageNotices">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Notices
        </li>
      </ActiveLink>
      <ActiveLink to="/dashboard/manageTeachers">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Teachers
        </li>
      </ActiveLink>
      <ActiveLink to="/dashboard/manageStudents">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Manage Students
        </li>
      </ActiveLink>
      <ActiveLink to="/dashboard/abc">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Route
        </li>
      </ActiveLink>
    </>
  );

  const optionsTwo = (
    <>
      <Link to="/dashboard">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Route
        </li>
      </Link>
      <Link to="/dashboard">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Route
        </li>
      </Link>
      <Link to="/dashboard">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Route
        </li>
      </Link>
    </>
  );

  const optionsThree = (
    <>
      <Link to="/dashboard">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Route
        </li>
      </Link>
      <Link to="/dashboard">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Route
        </li>
      </Link>
      <Link to="/dashboard">
        <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2 lg:text-xl font-semibold">
          Route
        </li>
      </Link>
    </>
  );

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="hidden lg:block">
        <NavBar />
      </div>
      <div className="drawer container mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:flex gap-1">
          <div className="w-full lg:w-3/12 bg-blue-950 lg:pt-16 overflow-y-auto max-h-[100vh] lg:h-screen">
            <div className="flex justify-start">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <GrMenu className="w-6 h-6" />
                </label>
              </div>
              <div className="px-2 w-auto lg:w-full">
                <ActiveLink to="/dashboard/profile">
                  <div className="ms-2 text-lg font-semibold text-yellow-500">{user.displayName}</div>
                </ActiveLink>
              </div>
            </div>
            <div className="flex-none hidden lg:block mt-4">
              <ul className="menu-vertical">
                {isAdmin && <> {optionsOne} </>}
                {isTeacher && <> {optionsTwo} </>}
                {isStudent && <> {optionsThree} </>}
              </ul>
            </div>
          </div>
          <div className="lg:w-9/12 p-4">
            <div className="lg:pt-16">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay overflow-x-auto max-h-[100vh]"></label>
          <ul className="p-4 w-52 bg-blue-950 overflow-y-auto">
            {isAdmin && <> {optionsOne} </>}
            {isTeacher && <> {optionsTwo} </>}
            {isStudent && <> {optionsThree} </>}
          </ul>
        </div>
      </div>
      <div>{/* Footer position [if need] */}</div>
    </div>
  );
};

export default DashboardLayout;
