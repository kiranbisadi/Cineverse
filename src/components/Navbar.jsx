import { Link } from "react-router-dom";

function Navbar({ search = "", setSearch = () => {} }) {
    return (
        <header className="flex justify-between items-center bg-black text-white px-8 py-4 gap-8 w-full shadow-lg">
            <div>
                <h1 className="text-4xl font-bold text-red-600">Cineverse</h1>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search movies"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-80 px-4 py-2 rounded-lg border border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>
            <div className="flex gap-6">
                <Link to="/"><p className="cursor-pointer hover:text-red-500">Home</p></Link>
                <Link to="/favorites"><p className="cursor-pointer hover:text-red-500">Favorites</p></Link>
            </div>
        </header>
    )
}

export default Navbar;