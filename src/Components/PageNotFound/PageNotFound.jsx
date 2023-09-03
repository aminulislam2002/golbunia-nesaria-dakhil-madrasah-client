import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h1>
          <p className="text-gray-700">The page you're looking for doesn't exist.</p>
          <Link to="/">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
