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
      <div className="grid grid-cols-3 gap-10">
        {upcomingEventsData.map((upcomingEventData, id) => (
          <div key={id}>
            <div className="card w-full bg-base-100 shadow-xl">
              <img src={upcomingEventData.images[0]} className="h-[266px]" alt="Event Image" />
              <div className="flex items-center px-5 py-5">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-yellow-500">{upcomingEventData.event_date[0]}</div>
                  <div className="font-bold">{upcomingEventData.event_date[1]}</div>
                  <div className="font-bold">{upcomingEventData.event_date[2]}</div>
                </div>
                <div className="px-10">
                  <h1>
                    <Link className="font-bold text-xl text-blue-950 hover:text-yellow-600 underline">
                      {upcomingEventData.event_name}
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div  className="flex justify-center items-center mt-10">
      <button className="btn bg-yellow-500 hover:bg-yellow-600 text-blue-950 w-1/3 font-semibold text-base">
        VIEW ALL EVENTS
      </button>
      </div>
    </div>
  );
};

export default EventsSection;
