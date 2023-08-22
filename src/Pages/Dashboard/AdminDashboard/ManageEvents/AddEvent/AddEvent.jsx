import { useForm } from "react-hook-form";

const AddEvent = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can submit the event data to your backend here
  };

  return (
    <div className="mx-20">
      <h1 className="text-2xl font-bold mb-4">Add Upcoming Event</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="eventTitle" className="block text-gray-700 text-sm font-bold mb-2">
            Event Title
          </label>
          <input
            type="text"
            id="eventTitle"
            name="eventTitle"
            className="form-input mt-1 block w-full"
            {...register("eventTitle", { required: "Event Title is required" })}
          />
          {errors.eventTitle && <p className="text-red-500 mt-2">{errors.eventTitle.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="eventDescription" className="block text-gray-700 text-sm font-bold mb-2">
            Event Description
          </label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            className="form-textarea mt-1 block w-full"
            rows="5"
            {...register("eventDescription", { required: "Event Description is required" })}
          />
          {errors.eventDescription && <p className="text-red-500 mt-2">{errors.eventDescription.message}</p>}
        </div>

        <div className="flex justify-center items-center">
          <div className="mb-4 w-full">
            <label htmlFor="eventImage" className="block text-gray-700 text-sm font-bold mb-2">
              Event Image
            </label>
            <input
              type="file"
              id="eventImage"
              name="eventImage"
              accept="image/*"
              {...register("eventImage", { required: "Event Image is required" })}
            />
            {errors.eventImage && <p className="text-red-500 mt-2">{errors.eventImage.message}</p>}
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="eventDateTime" className="block text-gray-700 text-sm font-bold mb-2">
              Event Date and Time
            </label>
            <input
              type="datetime-local"
              id="eventDateTime"
              name="eventDateTime"
              className="form-input mt-1 block w-full"
              {...register("eventDateTime", { required: "Event Date and Time is required" })}
            />
            {errors.eventDateTime && <p className="text-red-500 mt-2">{errors.eventDateTime.message}</p>}
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-1/3">
            ADD EVENT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
