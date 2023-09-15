import { Link } from "react-router-dom";

const PrincipalWordAndBoardLinks = () => {
  return (
    <div className="container mx-auto py-10 lg:py-20 px-3">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-8">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-lg lg:text-2xl text-center text-white">গুরুত্বপূর্ণ কিছু বাণী</h1>
          </div>
          <div className="shadow-md p-5 text-justify">
            <div className="mt-1">
              <span className="font-bold">বাণী-১:</span> ইসলামিক কিছু উক্তি আল্লাহর কাছে আপনি প্রার্থনা করা বন্ধ করে দিলে
              তিনি রাগান্বিত হন। অথচ আদম সন্তানের কাছে কিছু প্রার্থনা করলে সে রেগে যায়। - [ইমাম ইবনুল কাইয়্যিম
              (রাহিমাহুল্লাহ)]
            </div>
            <div className="mt-1">
              <span className="font-bold">বাণী-২:</span> যখন আপনি কুরআন তিলাওয়াত করেন তখন মনে করবেন আপনি আল্লাহর সাথে
              কথোপকথন করছেন এবং তিনি সরাসরি আপনাকে বলছেন। - [ইমাম ইবনুল কায়্যিম (রহ)]
            </div>
            <div className="mt-1">
              <span className="font-bold">বাণী-৩:</span> আপনি যদি চান আল্লাহ্ আপনার সবগুলো পছন্দনীয় কাজ গ্রহণ করুন, তাহলে
              আপনি আল্লাহর পছন্দনীয় কাজগুলোই করতে থাকুন। - [ড. বিলাল ফিলিপ্স]
            </div>
            <div className="mt-1">
              <span className="font-bold">বাণী-৪:</span>
              সত্যিকার বন্ধুরাই জান্নাতে (একে অপরের) প্রতিবেশী হতে চায়। - [ড. বিলাল ফিলিপ্স]
            </div>
            <div className="mt-1">
              <span className="font-bold">বাণী-৫:</span>আল্লাহর প্রতি আপনার ভালোবাসা যতই বৃদ্ধি পেতে থাকবে, দুনিয়ার প্রতি
              আপনার ভালোবাসা ততোই কমতে থাকবে। দুনিয়া অর্জন নয়, দুনিয়া বিমুখীতাতেই রয়েছে দেহ ও মনের প্রশান্তি। - [উমার ইবনুল
              খাত্তাব (রা)]
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-lg lg:text-2xl text-center text-white">শিক্ষা বোর্ডের লিংক</h1>
          </div>
          <div className="shadow-md p-5">
            <ul>
              <li className="mb-2 pb-2 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://dshe.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর
                </Link>
              </li>
              <li className="mb-2 pb-2 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://bteb.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  বাংলাদেশ কারিগরি শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-2 pb-2 hover:bg-green-500 border-b">
                <Link
                  target="_blank"
                  to="https://dhakaeducationboard.gov.bd/"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  ঢাকা শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-2 pb-2 hover:bg-green-500 border-b">
                <Link
                  target="_blank"
                  to="https://barisalboard.portal.gov.bd/"
                  className="hover:underline hover:text-red-500 px-5"
                >
                  বরিশাল শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="mb-2 pb-2 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://bmeb.gov.bd/" className="hover:underline hover:text-red-500 px-5">
                  মাদ্রাসা শিক্ষা বোর্ড
                </Link>
              </li>
              <li className="pb-2 hover:bg-green-500 border-b">
                <Link target="_blank" to="https://www.nu.ac.bd/" className="hover:underline hover:text-red-500 px-5">
                  জাতীয় বিশ্ব বিদ্যালয়
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalWordAndBoardLinks;
