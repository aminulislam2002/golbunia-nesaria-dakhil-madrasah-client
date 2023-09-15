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
            <div className="mb-3 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">ALTERNATIVE NAME</h1>
                  <h3 className="text-xs">Golbunia Nesaria Dakhil Madrash</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">EIIN</h1>
                  <h3 className="text-xs">102671</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">FOUNDED</h1>
                  <h3 className="text-xs">01-01-1984</h3>
                </div>
              </div>
            </div>
            <div className="mb-3 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">RECOGNITION</h1>
                  <h3 className="text-xs">Recognized</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">RECOGNITION DATE</h1>
                  <h3 className="text-xs">01-01-1990</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">RECOGNITION LEVEL</h1>
                  <h3 className="text-xs">Dakhil</h3>
                </div>
              </div>
            </div>
            <div className="mb-3 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">MPO LEVEL</h1>
                  <h3 className="text-xs">Yes</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">MPO NUMBER</h1>
                  <h3 className="text-xs">5402082106</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">TYPE</h1>
                  <h3 className="text-xs">Dakhil</h3>
                </div>
              </div>
            </div>
            <div className="mb-3 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">BOARD</h1>
                  <h3 className="text-xs">Madrasah</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">DISCIPLINES</h1>
                  <h3 className="text-xs">Science</h3>
                  <h3 className="text-xs">Business Studies</h3>
                  <h3 className="text-xs">Humanities</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">CO-EDUCATION</h1>
                  <h3 className="text-xs">Combined</h3>
                </div>
              </div>
            </div>
            <div className="mb-3 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">SHIFT</h1>
                  <h3 className="text-xs">Day</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">MANAGEMENT</h1>
                  <h3 className="text-xs">Managing</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">REGION</h1>
                  <h3 className="text-xs">Grameen</h3>
                </div>
              </div>
            </div>
            <div className="mb-3 border-t">
              <div className="flex justify-between items-start">
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">GEOGRAPHIC LOCATION</h1>
                  <h3 className="text-xs">PlainLand</h3>
                </div>
                <div className="w-1/3">
                  <h1 className="text-sm font-bold">CONSTITUENCY NO</h1>
                  <h3 className="text-xs">128</h3>
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
                <Link
                  target="_blank"
                  to="https://dme.gov.bd/site/page/2b185d62-70fe-4f3a-a505-e94561ce47ee/(%E0%A6%8F%E0%A6%AE,%E0%A6%87,%E0%A6%8F%E0%A6%AE,%E0%A6%86%E0%A6%87,%E0%A6%8F%E0%A6%B8)-%E0%A6%86%E0%A6%AC%E0%A7%87%E0%A6%A6%E0%A6%A8-"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  ই.এম.আই.এস সেল
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://bmeb.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  মাদ্রাসা শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link
                  target="_blank"
                  to="https://dhakaeducationboard.gov.bd/"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  ঢাকা শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link
                  target="_blank"
                  to="https://barisalboard.portal.gov.bd/"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  বরিশাল শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://moedu.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  শিক্ষা মন্ত্রনালয়
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://teachers.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  শিক্ষক বাতায়ন
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link target="_blank" to="/" className="hover:underline hover:text-red-500 px-5">
                  বাংলা সংবাদ পত্র
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link
                  target="_blank"
                  to="http://www.educationboardresults.gov.bd/"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  এসএসসি / দাখিল বোর্ড ফলাফল
                </Link>
              </li>
              <li className="mb-3 hover:bg-green-500 border-b">
                <Link
                  target="_blank"
                  to="https://dhakaeducationboard.portal.gov.bd/"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড
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
