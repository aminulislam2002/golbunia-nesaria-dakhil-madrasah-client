import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
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
        <div className="absolute z-50 hidden top-full w-52 bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">At A Glance</li>
            </Link>
            <Link to="/history-of-madrasah">
              <li className="hover:bg-white hover:text-black ps-2 rounded">History of Madrasah</li>
            </Link>
            <Link to="/mission-and-vision">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Mission And Vision</li>
            </Link>
            <Link to="/photos-gallery">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Photo Gallery</li>
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
        <div className="absolute z-50 hidden top-full w-48  bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
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
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">Resources</li>
            </Link>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">Rover Scut</li>
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
          <p>CLASSES</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link>
              <li className="hover:bg-white hover:text-black ps-2 rounded">One</li>
            </Link>
          </ul>
        </div>
      </li>
      <li className="text-white">
        <Link>BLOG</Link>
      </li>
      <li className="relative group text-white">
        <div className="flex">
          <p>LINKS</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-60  bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <Link to="/eSIF">
              <li className="hover:bg-white hover:text-black ps-2 rounded">eSIF</li>
            </Link>
            <Link to="/eFF">
              <li className="hover:bg-white hover:text-black ps-2 rounded">eFF</li>
            </Link>
            <Link to="/eTIF">
              <li className="hover:bg-white hover:text-black ps-2 rounded">eTIF</li>
            </Link>
            <Link to="/eRPS">
              <li className="hover:bg-white hover:text-black ps-2 rounded">eRPS</li>
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
    <div className="navbar bg-blue-950 fixed top-0 z-50">
      <div className="navbar-start flex lg:w-3/12">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-white"></AiOutlineMenu>
          </label>
          <ul tabIndex={0} className="menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-blue-950 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <div className="text-xl font-bold text-white hidden lg:block w-full">Golbunia Nesaria Dakhil Madrasah</div>
      </div>
      <div className="navbar-center hidden lg:flex justify-center items-center lg:w-8/12">
        {/* Use a mobile-friendly menu icon here for small screens */}
        <div className="lg:hidden">
          <AiOutlineMenu className="text-2xl cursor-pointer" />
        </div>
        <ul className="flex justify-center items-center gap-10 menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end flex justify-end lg:justify-center items-center lg:w-1/12">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 py-1 px-5 rounded font-semibold">LOGIN</button>
      </div>
    </div>
  );
};

export default NavBar;
