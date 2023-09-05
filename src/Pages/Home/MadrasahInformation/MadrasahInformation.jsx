import { IoIosPeople, IoMdNotificationsOutline, IoMdPeople } from "react-icons/io";
import { FaBookOpenReader, FaGraduationCap, FaUserGraduate } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { HiMiniBuildingLibrary } from "react-icons/hi2";

const MadrasahInformation = () => {
  return (
    <div className="container mx-auto py-10 lg:py-20">
      <div className="lg:flex flex-col lg:flex-row justify-center items-center gap-5">
        <div className="w-full lg:w-8/12">
          <div className="grid grid-cols-2 gap-5">
            {/* About Madrasah */}
            <div>
              <div className="bg-green-500 px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl mb-3">মাদ্রাসা সম্পর্কে</h1>
              </div>
              <div className="flex gap-3">
                <div className="flex justify-center items-start">
                  <HiMiniBuildingLibrary className="w-16 h-16"></HiMiniBuildingLibrary>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">মাদরাসার ল্যাব সম্পর্কিত তথ্য</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">মাদ্ররাসার শিক্ষার্থী সম্পর্কে তথ্য</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">অবকাঠামো সম্পর্কিত তথ্য</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">মাদ্রাসার পরিচিতি এবং ইতিহাস</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">মাদরাসার জমি সংক্রান্ত তথ্য</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Admission and Contact */}
            <div>
              <div className="bg-green-500 px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl mb-3">ভর্তি ও যোগাযোগ</h1>
              </div>
              <div className="flex gap-3">
                <div className="flex justify-center items-start">
                  <FaBookOpenReader className="w-16 h-16"></FaBookOpenReader>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">দাখিল/এসএসসি ভর্তি</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">আলিম/এইচএসসি ভর্তি</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Services for students */}
            <div>
              <div className="bg-green-500 px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl mb-3">ছাত্রদের জন্য সেবাসমূহ</h1>
              </div>
              <div className="flex gap-3">
                <div className="flex justify-center items-start">
                  <IoMdPeople className="w-16 h-16"></IoMdPeople>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">ক্লাস রুটিন</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">পরীক্ষা সম্পরকিত তথ্য</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">বাৎসরিক ছুটির তালিকা</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">টিসি বা প্রংসাপত্র</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">প্রয়োজনীয় বই সমূহ</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Teachers / Staffs */}
            <div>
              <div className="bg-green-500 px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl mb-3">শিক্ষক / কর্মচারী</h1>
              </div>
              <div className="flex gap-3">
                <div className="flex justify-center items-start">
                  <FaUserGraduate className="w-16 h-16"></FaUserGraduate>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">মাধ্যমিক (দাখিল) স্তরের শিক্ষক</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">প্রাথমিক (ইবতেদায়ী) স্তরের শিক্ষক</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">কর্মচারীবৃন্দ</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Results */}
            <div>
              <div className="bg-green-500 px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl mb-3">ফলাফল</h1>
              </div>
              <div className="flex gap-3">
                <div className="flex justify-center items-start">
                  <FaGraduationCap className="w-16 h-16"></FaGraduationCap>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">টিসি বা প্রংসাপত্র</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">আলিম বোর্ড পরীক্ষার ফলাফল</Link>
                  </div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">দাখিল বোর্ড পরীক্ষার ফলাফল</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Managing Committee */}
            <div>
              <div className="bg-green-500 px-5 py-2 mb-1">
                <h1 className="text-lg lg:text-2xl mb-3">ম্যানেজিং কমিটি</h1>
              </div>
              <div className="flex gap-3">
                <div className="flex justify-center items-start">
                  <IoIosPeople className="w-16 h-16"></IoIosPeople>
                </div>
                <div>
                  <div className="flex gap-1 items-center mb-1">
                    <AiFillCaretRight className="text-green-500"></AiFillCaretRight>
                    <Link className="hover:underline">কমিটির সদস্যবৃন্দ</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 mx-auto">
          <div className="text-center mb-0">
            <h1 className="text-3xl font-semibold text-blue-950 bg-green-500 py-5 flex justify-center items-center uppercase gap-3">
              <span>
                <IoMdNotificationsOutline className="text-white"></IoMdNotificationsOutline>
              </span>
              <span>Notice board</span>
            </h1>
          </div>
          <div className="notice-list overflow-y-auto max-h-[80vh] bg-white">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5">
              <Link className="font-semibold hover:underline">পরীক্ষা ফলাফল প্রকাশের নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm text-gray-500 mt-2">20 July, 2023</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5">
              <Link className="font-semibold hover:underline">পরীক্ষা স্থগিতের নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm text-gray-500 mt-2">05 May, 2023 </p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5">
              <Link className="font-semibold hover:underline">মাদরাসা খোলার নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm text-gray-500 mt-2">10 June, 2023</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5">
              <Link className="font-semibold hover:underline">পরীক্ষা ফলাফল প্রকাশের নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm text-gray-500 mt-2">20 July, 2023</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5">
              <Link className="font-semibold hover:underline">বার্ষিক পরীক্ষার রুটিন প্রকাশের নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm text-gray-500 mt-2">30 August, 2023</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5">
              <Link className="font-semibold hover:underline">মাদরাসা খোলার নোটিশ ২০২৩ ইং</Link>
              <p className="text-sm text-gray-500 mt-2">10 June, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadrasahInformation;
