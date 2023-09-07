import { IoIosPeople, IoMdNotificationsOutline, IoMdPeople } from "react-icons/io";
import { FaBookOpenReader, FaGraduationCap, FaUserGraduate } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { HiMiniBuildingLibrary } from "react-icons/hi2";

const MadrasahInformation = () => {
  const iconStyles = {
    fontSize: "2rem", // Adjust the size as needed
    marginRight: "0.5rem", // Adjust spacing
  };

  const buttonStyles = {
    // Define specific colors for each button here
    aboutMadrasah: { color: "#FF5733" }, // Example color for "About Madrasah"
    admissionContact: { color: "#4287f5" }, // Example color for "Admission and Contact"
    servicesForStudents: { color: "#13c608" }, // Example color for "Services for students"
    teachersStaffs: { color: "#ff00ff" }, // Color for "Teachers and Staffs"
    results: { color: "#ff9900" }, // Color for "Results"
    managingCommittee: { color: "#0066cc" }, // Color for "Managing Committee"
  };

  return (
    <div className="container mx-auto py-10 lg:py-20">
      <div className="lg:flex flex-col lg:flex-row justify-center items-start gap-5">
        <div className="w-full lg:w-8/12 h-full">
          <div className="grid grid-cols-2 gap-5">
            {/* About Madrasah */}
            <div>
              <div className="bg-green-500 lg:px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl text-center mb-3">মাদ্রাসা সম্পর্কে</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <HiMiniBuildingLibrary style={{ ...iconStyles, ...buttonStyles.aboutMadrasah }}></HiMiniBuildingLibrary>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">মাদরাসার ল্যাব সম্পর্কিত তথ্য</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">মাদ্ররাসার শিক্ষার্থী সম্পর্কে তথ্য</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">অবকাঠামো সম্পর্কিত তথ্য</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">মাদ্রাসার পরিচিতি এবং ইতিহাস</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">মাদরাসার জমি সংক্রান্ত তথ্য</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Admission and Contact */}
            <div>
              <div className="bg-green-500 lg:px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl text-center mb-3">ভর্তি ও যোগাযোগ</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <FaBookOpenReader style={{ ...iconStyles, ...buttonStyles.admissionContact }}></FaBookOpenReader>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">দাখিল/এসএসসি ভর্তি</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">আলিম/এইচএসসি ভর্তি</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Services for students */}
            <div>
              <div className="bg-green-500 lg:px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl text-center mb-3">ছাত্রদের জন্য সেবাসমূহ</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <IoMdPeople style={{ ...iconStyles, ...buttonStyles.servicesForStudents }}></IoMdPeople>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">ক্লাস রুটিন</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">পরীক্ষা সম্পরকিত তথ্য</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">বাৎসরিক ছুটির তালিকা</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">টিসি বা প্রংসাপত্র</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">প্রয়োজনীয় বই সমূহ</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Teachers / Staffs */}
            <div>
              <div className="bg-green-500 lg:px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl text-center mb-3">শিক্ষক / কর্মচারী</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <FaUserGraduate style={{ ...iconStyles, ...buttonStyles.teachersStaffs }}></FaUserGraduate>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">মাধ্যমিক (দাখিল) স্তরের শিক্ষক</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">প্রাথমিক (ইবতেদায়ী) স্তরের শিক্ষক</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">কর্মচারীবৃন্দ</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Results */}
            <div>
              <div className="bg-green-500 lg:px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl text-center mb-3">ফলাফল</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <FaGraduationCap style={{ ...iconStyles, ...buttonStyles.results }}></FaGraduationCap>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">টিসি বা প্রংসাপত্র</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">আলিম বোর্ড পরীক্ষার ফলাফল</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">দাখিল বোর্ড পরীক্ষার ফলাফল</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Managing Committee */}
            <div>
              <div className="bg-green-500 lg:px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl text-center mb-3">ম্যানেজিং কমিটি</h1>
              </div>
              <div className="lg:flex gap-3">
                <div className="flex justify-center items-start">
                  <IoIosPeople style={{ ...iconStyles, ...buttonStyles.managingCommittee }}></IoIosPeople>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline hover:text-red-500">কমিটির সদস্যবৃন্দ</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 h-full">
          <div className="text-center mb-0">
            <h1 className="text-3xl font-semibold text-blue-950 bg-green-500 py-5 flex justify-center items-center uppercase gap-3">
              <span>
                <IoMdNotificationsOutline className="text-white"></IoMdNotificationsOutline>
              </span>
              <span>Notice board</span>
            </h1>
          </div>
          <div className="notice-list overflow-y-auto max-h-[80vh] bg-white">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5 hover:bg-green-500 hover:text-white">
              <Link className="font-semibold hover:underline hover:text-red-500">পরীক্ষা ফলাফল প্রকাশের নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm mt-2">20 July, 2023</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5 hover:bg-green-500 hover:text-white">
              <Link className="font-semibold hover:underline hover:text-red-500">পরীক্ষা স্থগিতের নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm mt-2">05 May, 2023 </p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5 hover:bg-green-500 hover:text-white">
              <Link className="font-semibold hover:underline hover:text-red-500">মাদরাসা খোলার নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm mt-2">10 June, 2023</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5 hover:bg-green-500 hover:text-white">
              <Link className="font-semibold hover:underline hover:text-red-500">পরীক্ষা ফলাফল প্রকাশের নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm mt-2">20 July, 2023</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5 hover:bg-green-500 hover:text-white">
              <Link className="font-semibold hover:underline hover:text-red-500">বার্ষিক পরীক্ষার রুটিন প্রকাশের নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm mt-2">30 August, 2023</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5 hover:bg-green-500 hover:text-white">
              <Link className="font-semibold hover:underline hover:text-red-500">মাদরাসা খোলার নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm mt-2">10 June, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadrasahInformation;
