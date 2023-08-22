import { useForm } from "react-hook-form";

const UpdateNotice = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can submit the data to your backend here
  };

  return (
    <div className="mx-20">
      <h1 className="text-2xl font-bold mb-4">Update Notice</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="noticeHeadline" className="block text-gray-700 text-sm font-bold mb-2">
            Notice Headline
          </label>
          <input
            type="text"
            id="noticeHeadline"
            name="noticeHeadline"
            className="form-input mt-1 block w-full"
            {...register("noticeHeadline", { required: "Notice Headline is required" })}
          />
          {errors.noticeHeadline && <p className="text-red-500 mt-2">{errors.noticeHeadline.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="noticeDescription" className="block text-gray-700 text-sm font-bold mb-2">
            Notice Description
          </label>
          <textarea
            id="noticeDescription"
            name="noticeDescription"
            className="form-textarea mt-1 block w-full"
            rows="5"
            {...register("noticeDescription", { required: "Notice Description is required" })}
          />
          {errors.noticeDescription && <p className="text-red-500 mt-2">{errors.noticeDescription.message}</p>}
        </div>

        <div className="flex justify-center items-center">
          <div className="mb-4 w-full">
            <label htmlFor="noticeImage" className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              id="noticeImage"
              name="noticeImage"
              accept="image/*"
              {...register("noticeImage", { required: "Image is required" })}
            />
            {errors.noticeImage && <p className="text-red-500 mt-2">{errors.noticeImage.message}</p>}
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="publishedDateTime" className="block text-gray-700 text-sm font-bold mb-2">
              Published Date and Time
            </label>
            <input
              type="datetime-local"
              id="publishedDateTime"
              name="publishedDateTime"
              className="form-input mt-1 block w-full"
              {...register("publishedDateTime", { required: "Published Date and Time is required" })}
            />
            {errors.publishedDateTime && <p className="text-red-500 mt-2">{errors.publishedDateTime.message}</p>}
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-1/3">
            UPDATE NOTICE
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateNotice;
