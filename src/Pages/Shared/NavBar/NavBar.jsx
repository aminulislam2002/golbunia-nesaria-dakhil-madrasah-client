import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { PiSignOutBold } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: `${user.displayName} Logout Successful`,
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "warning",
          title: `${user.displayName} Logout Failed`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  const navOptions = (
    <>
      <li className="text-white">
        <Link to="/">HOME</Link>
      </li>
      <li className="relative group text-white">
        <div className="flex">
          <p>ABOUT US</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-52 bg-green-600 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link to="/history-of-madrasah">
              <li className="hover:bg-white hover:text-black ps-2 rounded">History of Madrasah</li>
            </Link>
            <Link to="/mission-and-vision">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Mission And Vision</li>
            </Link>
            <Link to="/photos-gallery">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Photo Gallery</li>
            </Link>
            <Link to="our-students">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Our Students</li>
            </Link>
            <Link to="authority-and-committee">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Committee</li>
            </Link>
          </ul>
        </div>
      </li>
      <li className="relative group text-white">
        <div className="flex">
          <p>ACADEMICS</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-green-600 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link to="/notice-board">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">Student Protal</li>
            </Link>
            <Link to="/students-results">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>
      <li className="relative group text-white">
        <div className="flex">
          <p>LINKS</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-60  bg-green-600 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link to="https://bmeb.gov.bd/">
              <li className="hover:bg-white hover:text-black ps-2 rounded">e S I F</li>
            </Link>
            <Link to="https://bmeb.gov.bd/">
              <li className="hover:bg-white hover:text-black ps-2 rounded">e F F</li>
            </Link>
            <Link to="https://bmeb.gov.bd/">
              <li className="hover:bg-white hover:text-black ps-2 rounded">e T I F</li>
            </Link>
            <Link to="https://bmeb.gov.bd/">
              <li className="hover:bg-white hover:text-black ps-2 rounded">e R P S</li>
            </Link>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">Madrasah Education Board</li>
            </Link>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">Ministry Of Education</li>
            </Link>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">National Web Protal</li>
            </Link>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">Dhaka Education Board</li>
            </Link>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">National Curriculum Textbook</li>
            </Link>
          </ul>
        </div>
      </li>
    </>
  );

  return (
    <div className="navbar bg-green-600 fixed top-0 z-50">
      <div className="navbar-start flex lg:w-3/12">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-white"></AiOutlineMenu>
          </label>
          <ul tabIndex={0} className="menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-green-600 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <div>
          <span className="lg:text-xl font-bold text-white w-full">Golbunia Nesaria Dakhil Madrasah</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex justify-center items-center lg:w-8/12">
        {/* Use a mobile-friendly menu icon here for small screens */}
        <div className="lg:hidden">
          <AiOutlineMenu className="text-2xl cursor-pointer" />
        </div>
        <ul className="flex justify-center items-center gap-10 menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end flex justify-end lg:justify-center items-center lg:w-1/12">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 py-1 px-5 rounded font-semibold">
            LOGIN
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow rounded-box w-52 mt-4 bg-green-600 text-white">
            {user ? (
              <>
                <Link to="/dashboard/profile">
                  <div className="flex justify-center items-center gap-1">
                    <img src={user.photoURL} className="w-7 h-7 rounded-full" alt="" />
                    <button className="w-full text-left">
                      <li className="bg-blue-900 hover:bg-white hover:text-black rounded py-2 my-1 px-3">
                        {user.displayName}
                      </li>
                    </button>
                  </div>
                </Link>
                <div className="flex justify-center items-center gap-1">
                  <PiSignOutBold className="w-7 h-7"></PiSignOutBold>
                  <button onClick={handleLogOut} className="w-full text-left">
                    <li className="bg-blue-900 hover:bg-white hover:text-black rounded py-2 my-1 px-3">Log Out</li>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="login-register/student-register">
                  <li className="bg-blue-900 hover:bg-white hover:text-black rounded py-2 my-1 px-3">Student Login</li>
                </Link>
                <Link to="login-register/teacher-register">
                  <li className="bg-blue-900 hover:bg-white hover:text-black rounded py-2 my-1 px-3">Teacher Login</li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
