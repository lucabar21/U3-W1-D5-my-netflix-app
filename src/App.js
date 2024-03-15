import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import NetflixHeadline from "./components/NetflixHeadline";
import NetflixMoviesRow from "./components/NetflixMoviesRow";

function App() {
  return (
    <div className="App">
      <NetflixNavbar />
      <NetflixHeadline />
      <NetflixMoviesRow query="Thriller" />
      <NetflixMoviesRow query="Cult" />
      <NetflixMoviesRow query="Romance" />
      <NetflixFooter />
    </div>
  );
}

export default App;
