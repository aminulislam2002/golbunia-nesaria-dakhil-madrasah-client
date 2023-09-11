import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

import "./NavBar.css";

import { useEffect, useState } from "react";

// import instituteLogo from "../../../assets/image/logo.png";
// import govtLogo from "../../../assets/image/govtLogo.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isAcademicsDropdownOpen, setIsAcademicsDropdownOpen] = useState(false);
  const [isAdmissionDropdownOpen, setIsAdmissionDropdownOpen] = useState(false);
  const [isStudentsDropdownOpen, setIsStudentsDropdownOpen] = useState(false);
  const [isFacilitiesDropdownOpen, setIsFacilitiesDropdownOpen] = useState(false);
  const [isResultsDropdownOpen, setIsResultsDropdownOpen] = useState(false);
  const [isOthersDropdownOpen, setIsOthersDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond a certain point (e.g., 100 pixels)
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add the "fixed-navbar" class to the navbar when isScrolled is true
  const navbarClass = isScrolled ? "navbar fixed-navbar bg-blue-950" : "navbar relative z-[19] bg-blue-950";

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    // Close other dropdowns
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
  };

  const toggleAcademicsDropdown = () => {
    setIsAcademicsDropdownOpen(!isAcademicsDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
  };

  const toggleAdmissionDropdown = () => {
    setIsAdmissionDropdownOpen(!isAdmissionDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
  };

  const toggleStudentsDropdown = () => {
    setIsStudentsDropdownOpen(!isStudentsDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
  };

  const toggleFacilitiesDropdown = () => {
    setIsFacilitiesDropdownOpen(!isFacilitiesDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
  };

  const toggleResultsDropdown = () => {
    setIsResultsDropdownOpen(!isResultsDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsOthersDropdownOpen(false);
  };

  const toggleOthersDropdown = () => {
    setIsOthersDropdownOpen(!isOthersDropdownOpen);
    // Close other dropdowns
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
  };

  const closeDropdowns = () => {
    setIsAboutDropdownOpen(false);
    setIsAcademicsDropdownOpen(false);
    setIsAdmissionDropdownOpen(false);
    setIsStudentsDropdownOpen(false);
    setIsFacilitiesDropdownOpen(false);
    setIsResultsDropdownOpen(false);
    setIsOthersDropdownOpen(false);
  };

  const navOptions = (
    <>
      <li className="text-white">
        <Link to="/">Home</Link>
      </li>

      {/* About Us Dropdown */}
      <li
        className={`relative group text-white ${isAboutDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleAboutDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isAboutDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleAboutDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>About Us</p>
          <span className={`${isAboutDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isAboutDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/history-of-madrasah">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">History of Madrasah</li>
            </Link>
            <Link to="/mission-and-vision">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Mission And Vision</li>
            </Link>
            <Link to="/photos-gallery">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Photo Gallery</li>
            </Link>
            <Link to="/our-students">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Our Students</li>
            </Link>
            <Link to="/authority-and-committee">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Committee</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Academics Dropdown */}
      <li
        className={`relative group text-white ${isAcademicsDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleAcademicsDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isAcademicsDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleAcademicsDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Academics</p>
          <span className={`${isAcademicsDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isAcademicsDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="events">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link to="news">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/student-protocol">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Student Protocol</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Admission Dropdown */}
      <li
        className={`relative group text-white ${isAdmissionDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleAdmissionDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isAdmissionDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleAdmissionDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Admission</p>
          <span className={`${isAdmissionDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isAdmissionDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/students-results">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Result</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Events</li>
            </Link>
            <Link>
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">News</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/help-for-admission">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Help</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Students Dropdown */}
      <li
        className={`relative group text-white ${isStudentsDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleStudentsDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isStudentsDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleStudentsDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Students</p>
          <span className={`${isStudentsDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isStudentsDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/notice-board">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Notice Board</li>
            </Link>
            <Link to="/students-routines">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Students Routine</li>
            </Link>
            <Link to="/classes-syllabus">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Class Syllabus</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Facilities Dropdown */}
      <li
        className={`relative group text-white ${isFacilitiesDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleFacilitiesDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isFacilitiesDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleFacilitiesDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Facilities</p>
          <span className={`${isFacilitiesDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isFacilitiesDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/science-lab">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Science Lab</li>
            </Link>
            <Link to="/computer-lab">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Computer Lab</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Results Dropdown */}
      <li
        className={`relative group text-white ${isResultsDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleResultsDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isResultsDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleResultsDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Results</p>
          <span className={`${isResultsDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isResultsDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
          <ul>
            <Link to="/class-nine-result">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Nine-09</li>
            </Link>
            <Link to="/class-ten-result">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Ten-10</li>
            </Link>
            <Link to="/class-eleven-result">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Eleven-11</li>
            </Link>
            <Link to="/class-twelve-result">
              <li className="text-white hover:bg-white hover:text-black ps-2 rounded">Twelve-12</li>
            </Link>
          </ul>
        </div>
      </li>

      {/* Others Dropdown */}
      <li
        className={`relative group text-white ${isOthersDropdownOpen ? "dropdown-open" : ""}`}
        onMouseEnter={toggleOthersDropdown}
        onMouseLeave={closeDropdowns}
        onClick={() => {
          if (isOthersDropdownOpen) {
            closeDropdowns(); // Close the dropdown
          } else {
            toggleOthersDropdown(); // Toggle open the dropdown
          }
        }}
      >
        <div className="flex justify-start items-center">
          <p>Links</p>
          <span className={`${isOthersDropdownOpen ? "rotate-180" : "rotate-0"}`}>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`absolute z-50 ${
            isOthersDropdownOpen ? "block" : "hidden"
          } top-full w-52 bg-blue-950 p-3 left-1/2 transform -translate-x-1/2`}
        >
          {/* Dropdown content */}
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
            <Link to="https://bmeb.gov.bd/">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Madrasah Education Board</li>
            </Link>
            <Link to="https://moedu.gov.bd/">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Ministry Of Education</li>
            </Link>
            <Link to="https://bangladesh.gov.bd/index.php">
              <li className="hover:bg-white hover:text-black ps-2 rounded">National Web Protal</li>
            </Link>
            <Link to="https://dhakaeducationboard.gov.bd/">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Dhaka Education Board</li>
            </Link>
            <Link to="https://barisalboard.portal.gov.bd/">
              <li className="hover:bg-white hover:text-black ps-2 rounded">Barisal Education Board</li>
            </Link>
            <Link to="http://www.nctb.gov.bd/">
              <li className="hover:bg-white hover:text-black ps-2 rounded">National Curriculum Textbook</li>
            </Link>
          </ul>
        </div>
      </li>
    </>
  );

  return (
    <>
      <div className={navbarClass}>
        <div className="navbar-start flex lg:w-4/12">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AiOutlineMenu className="text-white h-6 w-6"></AiOutlineMenu>
            </label>
            <ul tabIndex={0} className="menu-sm dropdown-content mt-0 z-[1] p-2 shadow bg-blue-950 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          {/* <div className="flex">
            <img className="w-12 h-12" src={instituteLogo} alt="Institute Logo" />
            <img className="w-10 h-10" src={govtLogo} alt="Government Logo" />
          </div> */}

          <div>
            <span className="lg:text-xl font-bold text-white w-full">Golbunia Nesaria Dakhil Madrasah</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex justify-center items-center lg:w-8/12">
          {/* Use a mobile-friendly menu icon here for small screens */}
          <div className="lg:hidden">
            <AiOutlineMenu className="text-2xl cursor-pointer" />
          </div>
          <ul className="flex justify-center items-center gap-8 menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end flex justify-end lg:justify-center items-center lg:w-2/12">
          <button className="animated-button">Online Apply</button>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
