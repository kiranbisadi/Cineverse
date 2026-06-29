import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
            <h1 className="text-8xl font-bold text-red-600">404</h1>

            <h2 className="text-3xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-400 mt-2">
                Sorry, the page you are looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold"
            >
                Go to Home
            </Link>
        </div>
    );
}

export default NotFound;