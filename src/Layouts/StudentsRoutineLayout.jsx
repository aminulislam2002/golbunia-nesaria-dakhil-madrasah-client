import { Outlet } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const StudentsRoutineLayout = () => {
  const options = (
    <>
      <li className="lg:mb-2">
        <button className="lg:text-xl font-semibold text-gray-700">Filter menu</button>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
      <li className="mb-2">
        <h1 className="text-xl font-semibold text-gray-700">Filter menu</h1>
      </li>
    </>
  );
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="hidden lg:block">
        <NavBar />
      </div>
      <div className="drawer container mx-auto">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:flex gap-1">
          <div className="w-full lg:w-3/12 bg-base-300 lg:mt-16 lg:overflow-y-auto lg:max-h-[100vh]">
            <div className="flex justify-start">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <GrMenu className="w-6 h-6" />
                </label>
              </div>
              <div className="px-2 w-auto lg:w-full">
                <div className="ms-2 text-lg font-semibold text-gray-700">Filter as your choice</div>
              </div>
            </div>
            <div className="flex-none hidden lg:block mt-4">
              <ul className="menu menu-vertical">
             {/* Add more menu items here */}
                {options}
              </ul>
            </div>
          </div>
          <div className="lg:w-9/12 p-4">
            <div className="lg:mt-16">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay overflow-x-auto max-h-[100vh]"></label>
          <ul className="menu p-4 max-w-[50vh] bg-base-200 overflow-y-auto">
            {/* Add more sidebar items here */}
            {options}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentsRoutineLayout;
