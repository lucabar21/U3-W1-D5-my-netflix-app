import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import NetflixHeadline from "./components/NetflixHeadline";
import NetflixMoviesRow from "./components/NetflixMoviesRow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NetflixNavbar />
        <NetflixHeadline />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NetflixMoviesRow query="Horror" />
                <NetflixMoviesRow query="Cult" />
                <NetflixMoviesRow query="Romance" />
              </>
            }
          />
          <Route path="tv-shows" element={<NetflixMoviesRow query="John Wick" />} />
          <Route path="movies" element={<NetflixMoviesRow query="Marvel" />} />
          <Route path="recently-added" element={<NetflixMoviesRow query="Narnia" />} />
          <Route path="my-list" element={<NetflixMoviesRow query="Fantozzi" />} />
          <Route path="movie-details/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NetflixFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
