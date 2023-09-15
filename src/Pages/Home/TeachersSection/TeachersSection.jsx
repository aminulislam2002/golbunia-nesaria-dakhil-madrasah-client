import { useEffect, useState } from "react";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdCall } from "react-icons/md";

import image1 from "../../../assets/photos/principal.jpg";
import image2 from "../../../assets/photos/nesar-uddin.jpg";
import image3 from "../../../assets/photos/mosaref-hossain.jpg";
import image4 from "../../../assets/photos/abdur-rahim.jpg";
import image5 from "../../../assets/photos/naisr-uddin.jpg";
import image6 from "../../../assets/photos/ruhul-amin.jpg";
import image7 from "../../../assets/photos/sahidul-islam.jpg";
import image8 from "../../../assets/photos/khaleda-akter.jpg";
import image9 from "../../../assets/photos/asma.jpg";

import image12 from "../../../assets/photos/abbas-mia.jpg";
import image13 from "../../../assets/photos/jashim-uddin.jpg";
import image14 from "../../../assets/photos/jamal-doptory.jpg";
import image15 from "../../../assets/photos/monira-aya.jpg";
import image16 from "../../../assets/photos/nirapotta-kormi.jpg";


const TeachersSection = () => {
  const allTeachersDataHere = [
    {
      id: 1,
      image: image1,
      name: "মো: মোশারেফ হোসেন",
      position: "সুপার",
      mobileNumber: "০১৭৩২০৮৬৭০৫",
      address: "ভান্ডারিয়া, পিরোজপুর",
    },
    {
      id: 2,
      image: image2,
      name: "মোঃ নেছারউদ্দিন",
      position: "সহঃ সুপার",
      mobileNumber: "০১৭১৮৫৫৫৮৪৮",
      address: "মঠবাড়িয়া, পিরোজপুর",
    },
    {
      id: 3,
      image: image3,
      name: "এস কে মোশাররফ হোসেন",
      position: "সহঃ শিক্ষক (শরীর চর্চা)    ",
      mobileNumber: "০১৭৩৮৭৬১৬৬৫",
      address: "ভান্ডারিয়া, পিরোজপুর",
    },
    {
      id: 4,
      image: image4,
      name: "মাওঃ মোঃ আঃ রাহিম",
      position: "সহঃ মৌলভী    ",
      mobileNumber: "০১৭৩৮৪১৫৩০১",
      address: "ভান্ডারিয়া, পিরোজপুর",
    },
    {
      id: 5,
      image: image5,
      name: "মাওঃ মোঃ নাসির উদ্দিন",
      position: "সহঃ মৌলভী",
      mobileNumber: "০১৭৪৫৪৬৪৫১৬",
      address: "ভান্ডারিয়া, পিরোজপুর",
    },
    {
      id: 6,
      image: image6,
      name: "মাঃ মোঃ রুহুল আমিন",
      position: "সহঃ মৌলভী",
      mobileNumber: "০১৭৫৯৬৩৮৬৯৮",
      address: "মঠবাড়িয়া, পিরোজপুর",
    },
    {
      id: 7,
      image: image7,
      name: "মোঃ শহিদুল ইসলাম",
      position: "সহঃ শিক্ষক",
      mobileNumber: "০১৭১৪৯০৬৪৪৯",
      address: "মঠবাড়িয়া, পিরোজপুর",
    },
    {
      id: 8,
      image: image8,
      name: "খালেদা আক্তার",
      position: "I.C.T",
      mobileNumber: "০১৭৭৭৫৩১১২১",
      address: "মঠবাড়িয়া, পিরোজপুর",
    },
    {
      id: 9,
      image: image9,
      name: "আচমা আক্তার",
      position: "সহঃ শিক্ষক",
      mobileNumber: "০১৬৩৮৭৬০৫৩২",
      address: "কাউখালি, পিরোজপুর",
    },
    {
      id: 10,
      name: "আবু সাইদ বাকি-বিল্লাহ",
      position: "এবঃ প্রধান",
      mobileNumber: "০১৭৯৮৫৫৬১১২",
      address: "ভান্ডারিয়া, পিরোজপুর",
    },
    {
      id: 11,
      name: "মোঃ মশিউর রহমান",
      position: "জুনিয়র শিক্ষক",
      mobileNumber: "০১৭৫৪১৬৬৮৩২",
      address: "মঠবাড়িয়া, পিরোজপুর",
    },
    {
      id: 12,
      image: image12,
      name: "মোঃ আব্বাস মিয়া",
      position: "এবঃ কারী",
      mobileNumber: "০১৭৪৭৭৩১৪৩৪",
      address: "ভান্ডারিয়া, পিরোজপুর",
    },
    {
      id: 13,
      image: image13,
      name: "মোঃ জসিম উদ্দিন",
      position: "অফিস সহঃ",
      mobileNumber: "",
      address: "মঠবাড়িয়া, পিরোজপুর",
    },
    {
      id: 14,
      image: image14,
      name: "মোঃ জামাল",
      position: "দপ্তরী",
      mobileNumber: "",
      address: "ভান্ডারিয়া, পিরোজপুর",
    },
    {
      id: 15,
      image: image15,
      name: "মনিরা",
      position: "আয়া",
      mobileNumber: "",
      address: "ভান্ডারিয়া, পিরোজপুর",
    },
    {
      id: 16,
      image: image16,
      name: "",
      position: "নিরাপত্তা কর্মী",
      mobileNumber: "",
      address: "ভান্ডারিয়া, পিরোজপুর",
    },
  ];

  const [showAllTeachersData, setShowAllTeachersData] = useState(false);
  const [teachersData, setTeachersData] = useState([]);

  const dataToShow = showAllTeachersData ? teachersData : teachersData.slice(0, 8);

  const handleSeeMoreClick = () => {
    setShowAllTeachersData(true);
  };

  const handleSeeLessClick = () => {
    setShowAllTeachersData(false);
  };

  useEffect(() => {
    // Set the initial teacher data
    setTeachersData(allTeachersDataHere);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="w-full lg:w-6/12 mx-auto py-3 my-10 bg-green-500">
        <h1 className="text-lg lg:text-2xl text-center uppercase text-white">MEET OUR TEACHERS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataToShow.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-blue-100 text-gray-800 hover:bg-blue-200 hover:text-gray-900 rounded-lg shadow-md p-6 mx-10 md:mx-0 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="bg-blue-200 rounded- p-2 mx-auto">
              {teacher?.image ? (
                <>
                  <img src={teacher?.image} className="w-full lg:h-52 bg-cover bg-center rounded" alt="Teacher" />
                </>
              ) : (
                <>
                  <BiSolidUserRectangle className="w-full h-52 object-cover rounded-full" />
                </>
              )}
            </div>
            <h2 className="lg:text-lg font-semibold mt-4 text-gray-900">{teacher.name}</h2>
            <p className="text-sm text-gray-600">{teacher.position}</p>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <FaHome className="text-blue-500 text-lg" />
                <span className="text-sm">{teacher.address}</span>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <MdCall className="text-green-500 text-lg" />
                <span className="text-sm">{teacher.mobileNumber}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        {!showAllTeachersData ? (
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 w-2/3 mx-auto md:w-auto font-semibold text-base rounded-lg shadow-md"
            onClick={handleSeeMoreClick}
          >
            VIEW ALL TEACHERS
          </button>
        ) : (
          <button
            className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 w-2/3 mx-auto md:w-auto font-semibold text-base rounded-lg shadow-md"
            onClick={handleSeeLessClick}
          >
            SEE LESS...
          </button>
        )}
      </div>
    </div>
  );
};

export default TeachersSection;
