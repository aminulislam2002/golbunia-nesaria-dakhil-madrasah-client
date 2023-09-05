import image from "../../../assets/image/overview.jpg";
import principal from "../../../assets/image/principal.jpg";

const AboutMadrasahSection = () => {
  return (
    <div className="container mx-auto py-10 px-3 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-8">
          <div>
            <div className="w-full py-3 bg-green-500">
              <h1 className="text-2xl text-center">প্রতিষ্ঠান পরিচিতি</h1>
            </div>
            <div>
              <img src={image} className="w-full" alt="" />
              <h5 className="text-center font-bold">Photo: Golbunia Nesaria Dakhil Madrash</h5>
              <div>
                <p className="text-lg">
                  <span className="font-bold">Overview:</span> Golbunia Nesaria Dakhil Madrash is an educational
                  establishment that is located at Kalaran Shafabandar Bhandaria Pirojpur. Its Educational Institute
                  Identification Number or ElIN, is 102671. On 01 January, 1984, it was first put into operation. The
                  alternative name for Golbunia Nesaria Dakhil Madrasah is o lis a Combined sort of co-educational program.
                  The institution provides education in the following fields: Humanities, Business Studies, Science. Its MPO
                  number is 5402082106. It operates on Day shifts. Its management is Managing. Its recognition is Recognized
                  by the government and the recognition level is Dakhil. The school/college has MPO level with MPO number
                  5402082106 and the MPO type is Yes. Golbunia Nesaria Dakhil Madrasah is under Madrasah Education Board.
                  While many other high schools teach numerous disciplines, you can find the major disciplines that they
                  teach in this high school as Humanities, Business Studies, Science. The management type of this institute
                  is Managing. The region in which it is located is Grameen with geographic location as Plain Land. The
                  institute is in the constituency no 128.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-2xl text-center">প্রতিষ্ঠান প্রধান</h1>
          </div>
          <div className="shadow-emerald-300 shadow-lg py-3">
            <img
              src={principal}
              className="rounded-full w-48 h-48 mx-auto border-4 border-green-500 mt-3-3"
              alt="Principal's Photo"
            />
            <h1 className="text-center py-2">মো: মোশারেফ হোসেন</h1>
            <p className="text-center py-2">
              <span className="">Contact Number:</span> +880 173-086705
            </p>
          </div>
          <div>
            <div className="w-full py-3 bg-green-500">
              <h1 className="text-2xl text-center">Opening Hours</h1>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-600">Sunday:</div>
                <div className="text-green-600 font-semibold">10:00 AM - 4:00 PM</div>

                <div className="text-gray-600">Monday:</div>
                <div className="text-green-600 font-semibold">10:00 AM - 4:00 PM</div>

                <div className="text-gray-600">Tuesday:</div>
                <div className="text-green-600 font-semibold">10:00 AM - 4:00 PM</div>

                <div className="text-gray-600">Wednesday:</div>
                <div className="text-green-600 font-semibold">10:00 AM - 4:00 PM</div>

                <div className="text-gray-600">Thursday:</div>
                <div className="text-red-600 font-semibold">10:00 AM - 2:00 PM</div>

                <div className="text-gray-600">Friday:</div>
                <div className="text-red-600 font-semibold">Closed</div>

                <div className="text-gray-600">Saturday:</div>
                <div className="text-red-600 font-semibold">Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMadrasahSection;
