import { Link } from "react-router-dom";

const MadrasahOverviewAndLinks = () => {
  return (
    <div className="container mx-auto py-10 px-3 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-8">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-lg lg:text-2xl text-center text-white">Golbunia Nesaria Dakhil Madrash basic info</h1>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-4 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-md font-bold">ALTERNATIVE NAME</h1>
                  <h3 className="">Golbunia Nesaria Dakhil Madrash</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">EIIN</h1>
                  <h3 className="">102671</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">FOUNDED</h1>
                  <h3 className="">01-01-1984</h3>
                </div>
              </div>
            </div>
            <div className="mb-4 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-md font-bold">RECOGNITION</h1>
                  <h3 className="">Recognized</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">RECOGNITION DATE</h1>
                  <h3 className="">01-01-1990</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">RECOGNITION LEVEL</h1>
                  <h3 className="">Dakhil</h3>
                </div>
              </div>
            </div>
            <div className="mb-4 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-md font-bold">MPO LEVEL</h1>
                  <h3 className="">Yes</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">MPO NUMBER</h1>
                  <h3 className="">5402082106</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">TYPE</h1>
                  <h3 className="">Dakhil</h3>
                </div>
              </div>
            </div>
            <div className="mb-4 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-md font-bold">BOARD</h1>
                  <h3 className="">Madrasah</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">DISCIPLINES</h1>
                  <h3 className="">Science</h3>
                  <h3 className="">Business Studies</h3>
                  <h3 className="">Humanities</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">CO-EDUCATION</h1>
                  <h3 className="">Combined</h3>
                </div>
              </div>
            </div>
            <div className="mb-4 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-md font-bold">SHIFT</h1>
                  <h3 className="">Day</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">MANAGEMENT</h1>
                  <h3 className="">Managing</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">REGION</h1>
                  <h3 className="">Grameen</h3>
                </div>
              </div>
            </div>
            <div className="mb-4 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-md font-bold">GEOGRAPHIC LOCATION</h1>
                  <h3 className="">PlainLand</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-md font-bold">CONSTITUENCY NO</h1>
                  <h3 className="">128</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-lg ltext-2xl text-center text-white">গুরুত্বপূর্ণ লিংক</h1>
          </div>
          <div className="shadow-emerald-300 shadow-lg py-3">
            <ul>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link to="/" className="hover:underline hover:text-red-500 px-5">
                  ই.এম.আই.এস সেল
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link to="/" className="hover:underline hover:text-red-500 px-5">
                  ই.এস.আই.এফ
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link to="/" className="hover:underline hover:text-red-500 px-5">
                  ই.এফ.এফ
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link to="/" className="hover:underline hover:text-red-500 px-5">
                  ই.টি.আই.এফ
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link to="/" className="hover:underline hover:text-red-500 px-5">
                  ই.আর.পি.এস
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link to="/" className="hover:underline hover:text-red-500 px-5">
                  শিক্ষা মন্ত্রনালয়
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link to="/" className="hover:underline hover:text-red-500 px-5">
                  শিক্ষক বাতায়ন
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link to="/" className="hover:underline hover:text-red-500 px-5">
                  বাংলা সংবাদ পত্র
                </Link>
              </li>

              <li className="mb-3 hover:bg-green-500 border-b">
                <Link to="/" className="hover:underline hover:text-red-500 px-5">
                  ব্যানবেইস
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadrasahOverviewAndLinks;
