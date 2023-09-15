import { BiMessageAdd } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllEvent = () => {
  const events = useLoaderData();
  console.log(events);

  const handleDeleteEvent = (_id) => {
    fetch(`https://madrasah-server.vercel.app/events/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Event delete Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to delete an event!",
          });
        }
      });
  };

  return (
    <div>
      <div className="w-full">
        <div className="text-center mb-5 grid grid-cols-2">
          <div className="w-2/3">
            <h1 className="text-3xl font-semibold text-blue-950">MANAGE EVENTS</h1>
          </div>

          <Link to="/dashboard/addEvent">
            <div className="flex justify-center items-center gap-1 w-1/3 h-10 rounded-full border-2 text-blue-950 hover:text-white border-blue-950 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:border-blue-950">
              <span className="text-xl font-semibold">Add Event</span>
              <BiMessageAdd className="w-7 h-7 text-green-500"></BiMessageAdd>
            </div>
          </Link>
        </div>
        <div className="overflow-y-auto max-h-[70vh]">
          {events.map((event) => (
            <div key={event._id} className="notice-list overflow-y-auto max-h-[80vh] bg-white">
              <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-md transition duration-300 mb-5 flex justify-center items-center">
                <div className="w-11/12">
                  <h2 className="text-xl font-semibold">{event.eventTitle}</h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Event Date: {event.eventDateTime.slice(8, 10)}-{event.eventDateTime.slice(5, 7)}-
                    {event.eventDateTime.slice(0, 4)}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Event Time: {event.eventDateTime.slice(11, 16)}</p>
                  <button className="mt-3 px-4 py-2 rounded-full border-2 text-blue-950 hover:text-white border-blue-950 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:border-blue-950">
                    Read More
                  </button>
                </div>
                <div className="w-1/12">
                  <div className="flex flex-col-reverse justify-center items-center gap-10">
                    <button onClick={() => handleDeleteEvent(event._id)}>
                      <MdDelete className="w-8 h-8 text-red-500"></MdDelete>
                    </button>
                    <Link to="/dashboard/updateEvent">
                      <button>
                        <FiEdit className="w-7 h-7 text-blue-500"></FiEdit>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvent;
