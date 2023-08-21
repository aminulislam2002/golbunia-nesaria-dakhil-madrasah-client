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
            <li>
              <Link className="">At A Glance</Link>
            </li>
            <li>
              <Link to="/history-of-madrasah">History of Madrasah</Link>
            </li>
            <li>
              <Link to="/mission-and-vision">Mission And Vision</Link>
            </li>
            <li>
              <Link to="/photos-gallery">Photo Gallery</Link>
            </li>
            <li>
              <Link to="authority-and-committee">Committee</Link>
            </li>
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
              <li>
                <li>Notice Board</li>
              </li>
            </Link>
            <Link>
              <li>
                <li>Student Protal</li>
              </li>
            </Link>
            <Link to="/students-results">
              <li>Result</li>
            </Link>
            <Link>
              <li>Events</li>
            </Link>
            <Link>
              <li>News</li>
            </Link>
            <Link>
              <li>Resources</li>
            </Link>
            <Link>
              <li>Rover Scut</li>
            </Link>
            <Link to="/students-routines">
              <li>Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li>Class Syllabus</li>
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
            <li>
              <Link>One</Link>
            </li>
            <li>
              <Link>Two</Link>
            </li>
            <li>
              <Link>Three</Link>
            </li>
            <li>
              <Link>Four</Link>
            </li>
            <li>
              <Link>Five</Link>
            </li>
            <li>
              <Link>Six</Link>
            </li>
            <li>
              <Link>Seven</Link>
            </li>
            <li>
              <Link>Eight</Link>
            </li>
            <li>
              <Link>Nine</Link>
            </li>
            <li>
              <Link>Ten</Link>
            </li>
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
              <li>eSIF</li>
            </Link>
            <Link to="/eFF">
              <li>eFF</li>
            </Link>
            <Link to="/eTIF">
              <li>eTIF</li>
            </Link>
            <Link to="/eRPS">
              <li>eRPS</li>
            </Link>
            <Link>
              <li>Madrasah Education Board</li>
            </Link>
            <Link>
              <li>Ministry Of Education</li>
            </Link>
            <Link>
              <li>National Web Protal</li>
            </Link>
            <Link>
              <li>Dhaka Education Board</li>
            </Link>
            <Link>
              <li>National Curriculum Textbook</li>
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
