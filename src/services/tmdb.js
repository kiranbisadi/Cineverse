import axios from "axios";

const Base_URL = "https://api.themoviedb.org/3"

const options = {
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
};

export const getTrendingMovies = async () => {
    try {
        const response = await axios.get(`${Base_URL}/trending/movie/day`, options);
        return response.data.results;
    } catch (error) {
        console.error("request failed:", error);
        return [];
    }
};
export const getPopularMovies = async () => {
    try {
        const response = await axios.get(`${Base_URL}/movie/popular`, options);
        return response.data.results;
    } catch (error) {
        console.log(error.response);
        return [];
    }
};
export const getMovieById = async (id) => {
    try {
        const response = await axios.get(`${Base_URL}/movie/${id}`, options);
        return response.data;
    } catch (error) {
        console.log(error.response);
        return [];
    }
};
export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${Base_URL}/search/movie?query=${query}`, options);
        return response.data.results;
    }catch(error){
        console.log("search failed:",error);
        return[];
    }
};
