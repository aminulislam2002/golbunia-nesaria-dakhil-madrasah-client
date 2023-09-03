import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddEvent = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`; // Ensure the URL is constructed correctly

  console.log(image_hosting_token);

  const onSubmit = (data) => {
    // Create a FormData object to append the image file
    const formData = new FormData();
    formData.append("image", data.eventImage[0]); // Ensure the field name matches the API's expectations

    // Send a POST request to the ImgBB API to upload the image
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { eventTitle, eventDescription, eventDateTime } = data;
          const newItem = { eventTitle, eventDescription, eventDateTime, eventImage: imgURL };

          // Send a POST request to your server to save the event data
          fetch("https://golbunia-nesaria-dakhil-madrasah-server.vercel.app/events", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Correct the content type header
            },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged === true) {
                Swal.fire({
                  icon: "success",
                  title: "Event Added Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Failed to add event!",
                });
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // ... Rest of your component code ...

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
          <div className="form-control w-full mb-4 me-3">
            <label className="label">
              <span className="text-gray-700 text-sm font-bold">Item Image</span>
            </label>
            <input
              type="file"
              {...register("eventImage", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>

          <div className="mb-4 w-full ms-3">
            <label htmlFor="eventDateTime" className="block text-gray-700 text-sm font-bold mb-2">
              Event Date and Time
            </label>
            <input
              type="datetime-local"
              id="eventDateTime"
              name="eventDateTime"
              className="form-input mt-1 block w-full h-10"
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
