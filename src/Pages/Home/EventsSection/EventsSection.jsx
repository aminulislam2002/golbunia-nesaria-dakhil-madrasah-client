import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventsSection = () => {
  const [upcomingEventsData, setUpcomingEventsData] = useState([]);

  useEffect(() => {
    fetch("events.json")
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
        {upcomingEventsData.map((upcomingEventData, id) => (
          <div key={id}>
            <div className="card w-full bg-gray-200 border border-gray-200 shadow-md hover:shadow-xl rounded-lg">
              <img
                src={upcomingEventData.images[0]}
                className="h-56 md:h-64 w-full object-cover rounded-t-lg"
                alt="Event Image"
              />
              <div className="px-5 py-4 flex gap-8">
                <div>
                  <div className="text-xl font-extrabold text-yellow-500">{upcomingEventData.event_date[0]}</div>
                  <div className="font-bold text-gray-800">{upcomingEventData.event_date[1]}</div>
                  <div className="font-bold text-gray-600">{upcomingEventData.event_date[2]}</div>
                </div>
                <div>
                  <Link to={`/event/${id}`} className="font-bold text-sm text-blue-900 hover:text-yellow-600">
                    {upcomingEventData.event_name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center items-center mt-6">
        <Link to="/events" className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-semibold text-base">
          VIEW ALL EVENTS
        </Link>
      </div>
    </div>
  );
};

export default EventsSection;
