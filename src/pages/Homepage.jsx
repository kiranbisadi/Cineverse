import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdb";
import Moviecard from "../components/Moviecard"
import Header from "../components/Header";
import Footer from "../components/Footer"

function Homepage() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("")
    console.log(search);
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
    
    useEffect(()=>{handleSearch();},[search]);
    
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

    return (
        <>
            <Header
                search={search}
                setSearch={setSearch}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 overflow-hidden">
                {movies.map((movie) => (
                    <Moviecard
                        key={movie.id} movie={movie}
                    />
                ))}
            </div>

            <div>
                <Footer />
            </div>
        </>

    );
}
export default Homepage;