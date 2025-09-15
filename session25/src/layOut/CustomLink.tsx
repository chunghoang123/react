import { Link } from "react-router-dom";

export default function CustomLink() {
  return (
    <div className="flex justify-center mt-6">
      <Link
        to="/home-page"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Home Page
      </Link>
    </div>
  );
}
