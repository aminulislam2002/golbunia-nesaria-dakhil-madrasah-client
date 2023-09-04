import { useEffect } from "react";
import { useState } from "react";

const NoticeSection = () => {
  const [allNoticesData, setAllNoticesData] = useState([]);

  useEffect(() => {
    fetch("https://madrasah-server.vercel.app/notices")
      .then((res) => res.json())
      .then((data) => setAllNoticesData(data));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div id="Notice" className="w-full">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-blue-950">NOTICE BOARD</h1>
          </div>
          <div className="notice-list overflow-y-auto max-h-[80vh] bg-white">
            {allNoticesData.map((notice) => (
              <div
                key={notice._id}
                className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 mb-5"
              >
                <h2 className="text-xl font-semibold">{notice.noticeHeadline}</h2>
                <p className="text-sm text-gray-500 mt-2">
                  Published Date & Time: {notice.publishedDateTime.slice(8, 10)}-{notice.publishedDateTime.slice(5, 7)}-
                  {notice.publishedDateTime.slice(0, 4)} {notice.publishedDateTime.slice(11, 16)}
                </p>
                <button className="mt-3 px-4 py-2 rounded-full border-2 text-blue-950 hover:text-white border-blue-950 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:border-blue-950">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full" id="Contact">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-blue-950">CONTACT US</h1>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-blue-950"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-blue-950"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-48 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-blue-950"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-950 text-white rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:bg-opacity-90"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;
