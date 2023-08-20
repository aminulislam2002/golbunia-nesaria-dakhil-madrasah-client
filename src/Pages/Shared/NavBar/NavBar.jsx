import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li className="relative group">
        <div className="flex">
          <p>ABOUT</p>
          <span className="group-hover:rotate-180">
            <AiOutlineDown></AiOutlineDown>
          </span>
        </div>
        <div className="absolute z-50 hidden top-full w-48 bg-white hover:bg-white p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <li>
              <Link>Solutions</Link>
            </li>
            <li>
              <Link>Design</Link>
            </li>
            <li>
              <Link>Development</Link>
            </li>
            <li>
              <Link>Hosting</Link>
            </li>
            <li>
              <Link>Domain register</Link>
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
        <div className="absolute z-50 hidden top-full w-48  bg-white hover:bg-white p-3 group-hover:block left-1/2 transform -translate-x-1/2">
          <ul>
            <li>
              <Link>Solutions</Link>
            </li>
            <li>
              <Link>Design</Link>
            </li>
            <li>
              <Link>Development</Link>
            </li>
            <li>
              <Link>Hosting</Link>
            </li>
            <li>
              <Link>Domain register</Link>
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
        <a href="#Notice" >
          NOTICE
        </a>
      </li>
      <li>
        <a href="#Contact" >CONTACT</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white  fixed top-0 z-50">
      <div className="navbar-start flex lg:justify-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu></AiOutlineMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-white  rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <butto className="btn btn-ghost normal-case text-xl hidden md:block">Golbunia Nesaria Dakhil Madrasah</butto>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end flex lg:justify-start">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 py-1 px-5 rounded font-semibold">LOGIN</button>
      </div>
    </div>
  );
};

export default NavBar;
