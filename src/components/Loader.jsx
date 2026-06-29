function Loader() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>

            <h2 className="text-xl font-semibold text-gray-700">
                Loading Movies...
            </h2>

            <p className="text-gray-500">
                Please wait while we fetch the latest movies.
            </p>
        </div>
    );
}

export default Loader;