import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link>HOME</Link>
      </li>
      <li className="relative group">
        <div className="flex">
          <p>ABOUT</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-gray-900 hover:bg-gray-900 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <li>
              <Link className="text-white hover:text-gray-300">Solutions</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300">Design</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300">Development</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300">Hosting</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300">Domain register</Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="relative group">
        <div className="flex">
          <p>ACADEMICS</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-gray-900 hover:bg-gray-900 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <li>
              <Link className="text-white hover:text-gray-300">Solutions</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300">Design</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300">Development</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300">Hosting</Link>
            </li>
            <li>
              <Link className="text-white hover:text-gray-300">Domain register</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link>RESULT</Link>
      </li>
      <li>
        <Link>PHOTOS</Link>
      </li>
      <li>
        <Link>CONTACT</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-900 text-white">
      <div className="navbar-start flex justify-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu></AiOutlineMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-gray-900 text-white rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end flex justify-start">
        <a className="btn">LOGIN</a>
      </div>
    </div>
  );
};

export default NavBar;
