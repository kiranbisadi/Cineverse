function Header({search,setSearch}) {
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
                    onChange = {(e)=> {
                        setSearch(e.target.value);
                        handleSearch();
                    }}
                    className="w-80 px-4 py-2 rounded-lg border border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>
            <div className="flex gap-6">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">Favorites</p>
            </div>
        </header>

    )
}

export default Header;