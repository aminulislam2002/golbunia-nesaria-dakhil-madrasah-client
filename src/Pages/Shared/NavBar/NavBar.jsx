import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link className="text-white hover:text-white">HOME</Link>
      </li>
      <li className="relative group">
        <div className="flex text-white hover:text-white">
          <p>ABOUT</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48 bg-blue-950 hover:bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <li>
              <Link className="text-white hover:text-yellow-300">Solutions</Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300">Design</Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300">Development</Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300">Hosting</Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300">Domain register</Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="relative group">
        <div className="flex hover:text-white">
          <p>ACADEMICS</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48  bg-blue-950 hover:bg-blue-950 p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <li>
              <Link className="text-white hover:text-yellow-300">Solutions</Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300">Design</Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300">Development</Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300">Hosting</Link>
            </li>
            <li>
              <Link className="text-white hover:text-yellow-300">Domain register</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link className="hover:text-white">RESULT</Link>
      </li>
      <li>
        <Link className="hover:text-white">PHOTOS</Link>
      </li>
      <li>
        <Link to="#Notice" className="hover:text-white">
          NOTICE
        </Link>
      </li>
      <li>
        <Link className="hover:text-white">CONTACT</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-blue-950 text-white fixed top-0 z-50">
      <div className="navbar-start flex justify-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu></AiOutlineMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-blue-950 text-white rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Golbunia Nesaria Dakhil Madrasah</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end flex justify-start">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 py-1 px-5 rounded font-semibold">LOGIN</button>
      </div>
    </div>
  );
};

export default NavBar;
