import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdb";
import Moviecard from "../components/Moviecard";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Homepage() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchMovies() {
            try {
                const data = await getPopularMovies();
                setMovies(data);
            } catch (error) {
                console.error("Failed to load movies:", error);
            }
        }

        fetchMovies();
    }, []);

    useEffect(() => {
        handleSearch();
    }, [search]);

    async function handleSearch() {
        try {
            let data;

            if (search.trim() === "") {
                data = await getPopularMovies();
            } else {
                data = await searchMovies(search);
            }

            setMovies(data);
        } catch (error) {
            console.error("Search failed:", error);
        }
    }

    function goHome() {
        setSearch("");
    }
    return (
        <div className="min-h-screen flex flex-col">
            <Header
                search={search}
                setSearch={setSearch}
                goHome={goHome}
            />

            <div className="flex-grow">
                {movies.length === 0 ? (
                    <h2 className="text-center text-2xl mt-10">
                        No Movies Found
                    </h2>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                        {movies.map((movie) => (
                            <Moviecard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default Homepage;