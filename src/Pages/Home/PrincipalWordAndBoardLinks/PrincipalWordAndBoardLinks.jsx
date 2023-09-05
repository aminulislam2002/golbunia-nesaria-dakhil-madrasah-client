import { Link } from "react-router-dom";

const PrincipalWordAndBoardLinks = () => {
  return (
    <div className="container mx-auto py-10 px-3 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-8">
          <div>
            <div className="w-full py-3 bg-green-500">
              <h1 className="text-2xl text-center">প্রধান শিক্ষকের বাণী</h1>
            </div>
            <div>
              <div>
                <p className="text-lg mt-2">
                  <span className="font-bold">বাণী:</span> ইসলামিক কিছু উক্তি আল্লাহর কাছে আপনি প্রার্থনা করা বন্ধ করে দিলে
                  তিনি রাগান্বিত হন। অথচ আদম সন্তানের কাছে কিছু প্রার্থনা করলে সে রেগে যায়। - [ইমাম ইবনুল কাইয়্যিম
                  (রাহিমাহুল্লাহ)] যখন আপনি কুরআন তিলাওয়াত করেন তখন মনে করবেন আপনি আল্লাহর সাথে কথোপকথন করছেন এবং তিনি
                  সরাসরি আপনাকে বলছেন। - [ইমাম ইবনুল কায়্যিম (রহ)] আপনি যদি চান আল্লাহ্ আপনার সবগুলো পছন্দনীয় কাজ গ্রহণ
                  করুন, তাহলে আপনি আল্লাহর পছন্দনীয় কাজগুলোই করতে থাকুন। - [ড. বিলাল ফিলিপ্স] সত্যিকার বন্ধুরাই জান্নাতে (একে
                  অপরের) প্রতিবেশী হতে চায়। - [ড. বিলাল ফিলিপ্স] আল্লাহর প্রতি আপনার ভালোবাসা যতই বৃদ্ধি পেতে থাকবে,
                  দুনিয়ার প্রতি আপনার ভালোবাসা ততোই কমতে থাকবে। দুনিয়া অর্জন নয়, দুনিয়া বিমুখীতাতেই রয়েছে দেহ ও মনের
                  প্রশান্তি। - [উমার ইবনুল খাত্তাব (রা)]
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-2xl text-center">শিক্ষা বোর্ডের লিংক</h1>
          </div>
          <div className="shadow-emerald-300 shadow-lg py-3">
            <ul>
              <li className="mb-3 border-b">
                <Link to="/" className="hover:underline px-5">মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর</Link>
              </li>
              <li className="mb-3 border-b">
                <Link to="/" className="hover:underline px-5">বাংলাদেশ কারিগরি শিক্ষা বোর্ড</Link>
              </li>
              <li className="mb-3 border-b">
                <Link to="/" className="hover:underline px-5">বরিশাল শিক্ষা বোর্ড</Link>
              </li>
              <li className="mb-3 border-b">
                <Link to="/" className="hover:underline px-5">মাদ্রাসা শিক্ষা বোর্ড</Link>
              </li>
              <li className="mb-3 border-b">
                <Link to="/" className="hover:underline px-5">জাতীয় বিশ্ব বিদ্যালয়</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalWordAndBoardLinks;
