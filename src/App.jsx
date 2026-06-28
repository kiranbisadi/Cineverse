import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;