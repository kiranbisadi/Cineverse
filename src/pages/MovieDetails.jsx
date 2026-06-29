import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById, getMovieCast } from "../services/tmdb";
import Loader from "../components/Loader";

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function fetchMovie() {
            const data = await getMovieById(id);
            setMovie(data);

            const castData = await getMovieCast(id);
            setCast(castData);
        }

        fetchMovie();
    }, [id]);

    if (!movie) return <Loader />;

    const {
        title, poster_path, backdrop_path, tagline, vote_average,
        vote_count, release_date, runtime, popularity, genres,
        production_companies, budget, revenue, overview,
        original_language, status } = movie;

    return (
        <div className="bg-gray-900 min-h-screen text-white">

            <div
                className="h-80 bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
                }}
            >
                <div className="bg-black/60 h-full flex items-start p-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                    >
                        ← Back
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row gap-10">
                <div className="self-start sticky top-6">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        className="w-72 rounded-lg shadow-2xl"
                    />
                </div>
                <div className="flex-1">

                    <h1 className="text-5xl font-bold mb-2">
                        {title}
                    </h1>

                    {tagline && (
                        <p className="italic text-gray-400 mb-5">
                            "{tagline}"
                        </p>
                    )}

                    <div className="space-y-3">

                        <p className="text-yellow-400 text-xl">
                            ⭐ {vote_average.toFixed(1)}
                            <span className="text-gray-400 text-base">
                                {" "}({vote_count} votes)
                            </span>
                        </p>

                        <p>🎬 <strong>Status:</strong> {status}</p>

                        <p>📅 <strong>Release Date:</strong> {release_date}</p>

                        <p>🌐 <strong>Language:</strong> {original_language.toUpperCase()}</p>

                        <p>⏱ <strong>Runtime:</strong> {runtime} mins</p>

                        <p>🔥 <strong>Popularity:</strong> {popularity.toFixed(1)}</p>

                        <div className="flex gap-2 flex-wrap">
                            {genres.map((genre) => (
                                <span
                                    key={genre.id}
                                    className="bg-red-600 px-3 py-1 rounded-full text-sm"
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div>

                        <p>
                            🏢 <strong>Production:</strong>{" "}
                            {production_companies
                                .map((company) => company.name)
                                .join(", ")}
                        </p>

                        <p>
                            💰 <strong>Budget:</strong>{" "}
                            {budget > 0
                                ? `$${budget.toLocaleString()}`
                                : "N/A"}
                        </p>

                        <p>
                            💵 <strong>Revenue:</strong>{" "}
                            {revenue > 0
                                ? `$${revenue.toLocaleString()}`
                                : "N/A"}
                        </p>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-3xl font-semibold mb-3">
                            Overview
                        </h2>

                        <p className="text-gray-300 leading-8">
                            {overview}
                        </p>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-3xl font-semibold mb-4">
                            Cast
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {cast.slice(0, 12).map((actor) => (
                                <div key={actor.id} className="text-center">

                                    <img
                                        src={
                                            actor.profile_path
                                                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                                : "https://via.placeholder.com/200x300?text=No+Image"
                                        }
                                        alt={actor.name}
                                        className="rounded-lg w-full"
                                    />

                                    <h3 className="mt-2 font-semibold">
                                        {actor.name}
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        {actor.character}
                                    </p>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default MovieDetails;