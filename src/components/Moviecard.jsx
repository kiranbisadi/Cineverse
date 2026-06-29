import { Link } from "react-router-dom";

function Moviecard({ movie }) {

    const { title, poster_path, vote_average, release_date, id } = movie;

    function addToFavorites(movie) {
        const favorites =
            JSON.parse(localStorage.getItem("favorites")) || [];

        const exists = favorites.find(
            (item) => item.id === movie.id
        );

        if (exists) {
            alert("Movie already in Favorites!");
            return;
        }

        favorites.push(movie);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("Movie added to Favorites!");
    }

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden w-full transition duration-200 hover:scale-105 hover:shadow-2xl">

            <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt={title}
                className="w-full h-100 object-fit"
            />

            <div className="p-2 flex flex-col justify-between">

                <h4 className="font-bold text-sm">{title}</h4>

                <p className="text-yellow-400 text-xs">
                    ⭐ {vote_average.toFixed(1)}
                </p>

                <p className="text-gray-800 text-xs">
                    Release Date: {release_date}
                </p>

                <button
                    onClick={() => addToFavorites(movie)}
                    className="mt-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold py-2 rounded transition"
                >
                    ❤️ Favorite
                </button>

                <Link to={`/movie/${id}`}>
                    <button className="mt-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded w-full">
                        View More
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Moviecard;