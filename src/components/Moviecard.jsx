import { Link } from "react-router-dom";

function Moviecard({ movie }) {

      const { title, poster_path, vote_average, release_date, overview ,id} = movie;
    return (
        <div className=" flex flex-col rounded-lg shadow-lg overflow-hidden w-full transition duration-200 hover:scale-105 hover:shadow-2xl">
            <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt={movie.title}
                className="w-full h-80"
            />
            <div className="p-2 flex flex-col justify-between">
                <h4 className="font-bold text-sm"><strong>{title}</strong></h4>
                <p className="text-yellow-400 text-xs"><strong>⭐ {vote_average.toFixed(1)}</strong></p>
                <p className="text-gray-800 text-xs"><strong>Release Date:{release_date}</strong></p>
                <Link to={`/movie/${id}`}>
                    <button className="mt-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-1 px-3 rounded transition duration-300">
                        View more
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Moviecard;