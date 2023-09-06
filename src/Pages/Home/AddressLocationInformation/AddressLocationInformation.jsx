const AddressLocationInformation = () => {
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11234.248758184116!2d89.942892!3d22.3934796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.75!3m3!1m2!1s0x0%3A0xe9b6815403ecff7f!2sGolbunia%20Nesaria%20Dakhil%20Madrasah!5e0!3m2!1sen!2sbd!4v1630849458080!5m2!1sen!2sbd";

  // ...

  return (
    <div className="container mx-auto py-10 px-3">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-6">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-2xl text-center text-white">প্রতিষ্ঠানের মেইলিং ঠিকানা</h1>
          </div>
          <div className="bg-white p-4 rounded shadow-lg mt-4">
            <div className="py-1 px-3 hover:bg-green-500">
              <span className="font-semibold">প্রতিষ্ঠানের নাম:</span>
              <span className="ml-2">গোলবুনিয়া নেছারিয়া দাখিল মাদ্রাসা</span>
            </div>
            <div className="py-1 px-3 hover:bg-green-500">
              <span className="font-semibold">ই. আই. আই. এন:</span>
              <span className="ml-2">102671</span>
            </div>
            <div className="py-1 px-3 hover:bg-green-500">
              <span className="font-semibold">মোবাইল নম্বর:</span>
              <span className="ml-2">+880 173-086705</span>
            </div>
            <div className="py-1 px-3 hover:bg-green-500">
              <span className="font-semibold">ই-মেইল:</span>
              <span className="ml-2">golbunianesariadakhilmadrasah@gmail.com</span>
            </div>
            <div className="py-1 px-3 hover:bg-green-500">
              <span className="font-semibold">ডাকঘরঃ</span>
              <span className="ml-2">গোলবুনিয়া</span>
            </div>
            <div className="py-1 px-3 hover:bg-green-500">
              <span className="font-semibold">উপজেলাঃ</span>
              <span className="ml-2">ভান্ডারিয়া</span>
            </div>
            <div className="py-1 px-3 hover:bg-green-500">
              <span className="font-semibold">জেলঃ</span>
              <span className="ml-2">পিরোজপুর</span>
            </div>
            <div className="py-1 px-3 hover:bg-green-500">
              <span className="font-semibold">স্থাপিতঃ</span>
              <span className="ml-2">১৯৮৪ খ্রিঃ</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="w-full py-3 bg-green-500">
            <h1 className="text-2xl text-center text-white">প্রতিষ্ঠানের গুগল ম্যাপ এর লোকেশন</h1>
          </div>
          {/* Google Maps Embed */}
          <div className="map-container mt-4">
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
