import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const [upcomingEventsData, setUpcomingEventsData] = useState([]);

  useEffect(() => {
    fetch("https://madrasah-server.vercel.app/events")
      .then((res) => res.json())
      .then((data) => setUpcomingEventsData(data));
  }, []);

  return (
    <div className="container mx-auto py-10">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-950">UPCOMING EVENTS</h1>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEventsData.map((upcomingEventData) => (
          <div key={upcomingEventData._id}>
            <div className="card w-full h-full bg-gray-200 border border-gray-200 shadow-md hover:shadow-xl rounded-lg">
              <img
                src={upcomingEventData.eventImage}
                className="h-56 md:h-64 w-full object-cover rounded-t-lg"
                alt="Event Image"
              />
              <div className="px-5 py-4 flex gap-5">
                <div className="w-1/3">
                  <div className="text-lg font-extrabold text-gray-950">
                    {upcomingEventData.eventDateTime.slice(8, 10)}-{upcomingEventData.eventDateTime.slice(5, 7)}-
                    {upcomingEventData.eventDateTime.slice(0, 4)}
                  </div>
                  <div className="font-bold text-gray-500">Time: {upcomingEventData.eventDateTime.slice(11, 16)}</div>
                </div>
                <div className="w-2/3">
                  <Link
                    to={`/event/${upcomingEventData._id}`}
                    className="font-bold text-sm text-blue-900 hover:text-yellow-600"
                  >
                    {upcomingEventData.eventTitle.slice(0, 100)}...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button
      <div className="flex justify-center items-center mt-6">
        <Link to="/events" className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-semibold text-base">
          VIEW ALL EVENTS
        </Link>
      </div> */}
    </div>
  );
};

export default EventsSection;
