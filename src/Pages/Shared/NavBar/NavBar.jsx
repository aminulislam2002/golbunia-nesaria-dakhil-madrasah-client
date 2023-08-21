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
              <Link>History of Madrasah</Link>
            </li>
            <li>
              <Link>Mission And Vission</Link>
            </li>
            <li>
              <Link>Photo Gallary</Link>
            </li>
            <li>
              <Link>Committee</Link>
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
            <li>
              <a href="#Notice">Notice Board</a>
            </li>
            <li>
              <Link>Student Protal</Link>
            </li>
            <li>
              <Link to="/students-results">Result</Link>
            </li>
            <li>
              <Link>Events</Link>
            </li>
            <li>
              <Link>News</Link>
            </li>
            <li>
              <Link>Resources</Link>
            </li>
            <li>
              <Link>Rover Scut</Link>
            </li>
            <li>
              <Link to="/students-routines">Students Routine</Link>
            </li>
            <li>
              <Link to="/classes-syllabus">Class Syllabus</Link>
            </li>
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
    </>
  );

  return (
    <div className="navbar bg-blue-950 fixed top-0 z-50">
      <div className="navbar-start flex lg:w-3/12">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu></AiOutlineMenu>
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
