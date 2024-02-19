import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex gap-3 items-center justify-center text-center">
      <div className="">
        <div className="">
          <img
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            alt="Not Found"
            className="rounded-md"
          />
        </div>
        <p className="text-sm italic text-gray-700">
          <strong>Ops! </strong> Seems Like The page you are looking for doesn't
          exist.
        </p>
        <Link to={"/"}>
          <div className="text-md underline italic mt-1 text-gray-700">
            Go Back Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
