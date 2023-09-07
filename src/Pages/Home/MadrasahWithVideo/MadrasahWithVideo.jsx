import video1 from "../../../assets/videos/video-1.mp4";

const MadrasahWithVideo = () => {
  return (
    <div className="container mx-auto py-10 lg:py-20">
      <div className="w-full lg:w-1/2 mx-auto py-3 my-10 bg-green-500">
        <h1 className="text-2xl text-center text-white">VIDEO GALLERY</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <div className="bg-gray-200 p-4 rounded-lg">
            <iframe title="Video 1" width="100%" height="300" src={video1} allowfullscreen></iframe>
            <h3 className="hover:underline hover:cursor-pointer font-semibold mt-2">
              মহান বিজয় দিবস উপলক্ষে গোলবুনিয়া নেছারিয়া দাখিল মাদ্রাসায় অনুষ্ঠান
            </h3>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="bg-gray-200 p-4 rounded-lg">
            <iframe title="Video 2" width="100%" height="300" src={video1} allowfullscreen></iframe>
            <h3 className="hover:underline hover:cursor-pointer font-semibold mt-2">
              মহান বিজয় দিবস উপলক্ষে গোলবুনিয়া নেছারিয়া দাখিল মাদ্রাসায় অনুষ্ঠান
            </h3>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="bg-gray-200 p-4 rounded-lg">
            <iframe title="Video 3" width="100%" height="300" src={video1} allowfullscreen></iframe>
            <h3 className="hover:underline hover:cursor-pointer font-semibold mt-2">
              মহান বিজয় দিবস উপলক্ষে গোলবুনিয়া নেছারিয়া দাখিল মাদ্রাসায় অনুষ্ঠান
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadrasahWithVideo;
