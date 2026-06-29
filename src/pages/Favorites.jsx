import { useEffect, useState } from "react";
import Moviecard from "../components/Moviecard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(data);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow p-4">
                <h1 className="text-3xl font-bold mb-6">❤️ Favorite Movies</h1>
                {favorites.length === 0 ? (
                    <h2 className="text-center text-2xl mt-10">No Favorite Movies</h2>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {favorites.map((movie) => (
                            <Moviecard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Favorites;