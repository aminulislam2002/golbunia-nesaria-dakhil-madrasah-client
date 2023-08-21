import { Outlet } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const ClassesSyllabusLayout = () => {
  const options = (
    <>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      <li className="mb-2 px-5 py-1 rounded text-white hover:text-black hover:bg-white mx-2">
        <button className="lg:text-xl font-semibold">Filter menu</button>
      </li>
      {/* Add more menu items here */}
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
          <div className="w-full lg:w-3/12 bg-blue-800 lg:mt-16 overflow-y-auto max-h-[100vh]">
            <div className="flex justify-start">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                  <GrMenu className="w-6 h-6" />
                </label>
              </div>
              <div className="px-2 w-auto lg:w-full">
                <div className="ms-2 text-lg font-semibold">Filter as your choice</div>
              </div>
            </div>
            <div className="flex-none hidden lg:block mt-4">
              <ul className="menu-vertical">
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
          <ul className="p-4 w-52 bg-blue-800 h-full overflow-y-auto">
            {/* Add more sidebar items here */}
            {options}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClassesSyllabusLayout;
