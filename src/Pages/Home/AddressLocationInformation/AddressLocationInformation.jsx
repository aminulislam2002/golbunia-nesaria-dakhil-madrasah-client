const AddressLocationInformation = () => {
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11234.248758184116!2d89.942892!3d22.3934796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.75!3m3!1m2!1s0x0%3A0xe9b6815403ecff7f!2sGolbunia%20Nesaria%20Dakhil%20Madrasah!5e0!3m2!1sen!2sbd!4v1630849458080!5m2!1sen!2sbd";

  // ...

  return (
    <div className="container mx-auto py-10 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-6 w-full">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-lg lg:text-2xl text-center text-white">প্রতিষ্ঠানের মেইলিং ঠিকানা</h1>
          </div>
          <div className="bg-white p-2 rounded shadow-md">
            <div className="py-1 px-3 flex justify-start items-center hover:bg-green-500">
              <div className="w-3/12 font-semibold text-base">প্রতিষ্ঠানের নাম</div>
              <div className="w-1/12">:</div>
              <div className="w-8/12 ml-2">গোলবুনিয়া নেছারিয়া দাখিল মাদ্রাসা</div>
            </div>
            <div className="py-1 px-3 flex justify-start items-center hover:bg-green-500">
              <div className="w-3/12 font-semibold text-base">ই.আই.আই.এন</div>
              <div className="w-1/12">:</div>
              <div className="w-8/12 ml-2">১০২৬৭১</div>
            </div>
            <div className="py-1 px-3 flex justify-start items-center hover:bg-green-500">
              <div className="w-3/12 font-semibold text-base">মোবাইল</div>
              <div className="w-1/12">:</div>
              <div className="w-8/12 ml-2">+৮৮০ ১৭৩২-০৮৬৭০৫</div>
            </div>
            <div className="py-1 px-3 flex justify-start items-center hover:bg-green-500">
              <div className="w-3/12 font-semibold text-base">ই-মেইল</div>
              <div className="w-1/12">:</div>
              <div className="w-8/12 ml-2 text-xs md:text-base">golbunianesariadakhilmadrasah@gmail.com</div>
            </div>
            <div className="py-1 px-3 flex justify-start items-center hover:bg-green-500">
              <div className="w-3/12 font-semibold text-base">পোস্ট অফিস</div>
              <div className="w-1/12">:</div>
              <div className="w-8/12 ml-2">গোলবুনিয়া</div>
            </div>
            <div className="py-1 px-3 flex justify-start items-center hover:bg-green-500">
              <div className="w-3/12 font-semibold text-base">পোস্ট কোড</div>
              <div className="w-1/12">:</div>
              <div className="w-8/12 ml-2">N/A</div>
            </div>
            <div className="py-1 px-3 flex justify-start items-center hover:bg-green-500">
              <div className="w-3/12 font-semibold text-base">উপজেলা</div>
              <div className="w-1/12">:</div>
              <div className="w-8/12 ml-2">ভান্ডারিয়া</div>
            </div>
            <div className="py-1 px-3 flex justify-start items-center hover:bg-green-500">
              <div className="w-3/12 font-semibold text-base">জেলা</div>
              <div className="w-1/12">:</div>
              <div className="w-8/12 ml-2">পিরোজপুর</div>
            </div>
            <div className="py-1 px-3 flex justify-start items-center hover:bg-green-500">
              <div className="w-3/12 font-semibold text-base">স্থাপিত</div>
              <div className="w-1/12">:</div>
              <div className="w-8/12 ml-2">১৯৮৪ খ্রিঃ</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 w-full">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-lg lg:text-2xl text-center text-white">প্রতিষ্ঠানের গুগল ম্যাপ এর লোকেশন</h1>
          </div>
          {/* Google Maps Embed */}
          <div className="map-container mt-0">
            <iframe
              title="Google Map Location"
              src={googleMapsEmbedUrl}
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressLocationInformation;
