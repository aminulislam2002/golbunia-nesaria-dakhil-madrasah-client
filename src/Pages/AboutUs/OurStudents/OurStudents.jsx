import image from "../../../assets/image/principle-mea.jpg";

const OurStudents = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto py-10">
        <div className="w-full lg:w-6/12 mx-auto py-3 mb-10 bg-green-500">
          <h1 className="text-lg lg:text-2xl text-center uppercase text-white">MEET with OUR Topper Students</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-4 bg-white">
            <div className=" shadow-md py-2 text-center px-10">
              <img
                src={image}
                className="w-44 h-44 mx-auto border-4 border-green-500 mt-3-3 rounded-full"
                alt="Principal's Photo"
              />
              <div className="text-lg font-semibold py-2 flex justify-start items-center">
                <div className="w-1/2 text-left">নামঃ</div>
                <div className="w-1/2 text-left text-blue-500">মুশতারী তুবা</div>
              </div>
              <div className="text-lg font-semibold py-2 flex justify-start items-center">
                <div className="w-1/2 text-left">পিতার নামঃ</div>
                <div className="w-1/2 text-left text-blue-500">মোঃ নেছার উদ্দিন</div>
              </div>
              <div className="text-lg font-semibold py-2 flex justify-start items-center">
                <div className="w-1/2 text-left">জন্ম তারিখঃ</div>
                <div className="w-1/2 text-left text-blue-500">০১ মে, ২০১১ইং</div>
              </div>
              <div className="text-lg font-semibold py-2 flex justify-start items-center">
                <div className="w-1/2 text-left">শ্রেণিঃ</div>
                <div className="w-1/2 text-left text-blue-500">সপ্তম</div>
              </div>
              <div className="text-lg font-semibold py-2 flex justify-start items-center">
                <div className="w-1/2 text-left">রোল নং</div>
                <div className="w-1/2 text-left text-blue-500">০১</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStudents;
