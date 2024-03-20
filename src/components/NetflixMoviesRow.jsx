import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NetflixSingleMovie from "./NetflixSingleMovie";
import Spinner from "react-bootstrap/Spinner";
import { useEffect } from "react";
import { useState } from "react";

const NetflixMoviesRow = (props) => {
  // state = {
  //   moviesContainer: [],
  //   loading: true,
  // };
  const [moviesContainer, setMovieContainer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    moviesFetch();
  }, []);

  useEffect(() => {
    moviesFetch();
  }, [props]);

  const moviesFetch = () => {
    // const { query } = this.props;
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=16d24798&s=${props.query}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema inaspettato nella ricezione dati!");
        }
      })
      .then((movie) => {
        setMovieContainer(movie.Search);
        setIsLoading(!true);
        // this.setState({ moviesContainer: movie.Search, loading: false });
      })
      .catch((error) => console.log(error));
  };
  // componentDidMount() {
  //   this.moviesFetch();
  // }
  // const { query } = this.props;
  // const { loading } = this.state;
  return (
    <Container fluid className="px-5 mt-4">
      <Row className="justify-content-center row-gap-3">
        <h3 style={{ color: "white" }}>{props.query}</h3>
        {isLoading ? (
          <Spinner />
        ) : (
          moviesContainer.slice(0, 6).map((movie) => <NetflixSingleMovie key={movie.imdbID} movie={movie} />)
        )}
      </Row>
    </Container>
  );
};
export default NetflixMoviesRow;
