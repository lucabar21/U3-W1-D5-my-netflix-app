import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NetflixSingleMovie from "./NetflixSingleMovie";
class NetflixMoviesRow extends Component {
  state = {
    moviesContainer: [],
  };

  moviesFetch = () => {
    const { query } = this.props;
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=16d24798&s=${query}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema inaspettato nella ricezione dati!");
        }
      })
      .then((movie) => {
        this.setState({ moviesContainer: movie.Search });
      })
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.moviesFetch();
  }
  render() {
    const { query } = this.props;
    return (
      <Container fluid className="px-5 mt-4">
        <Row>
          <h3 style={{ color: "white" }}>{query}</h3>
          {this.state.moviesContainer.slice(0, 6).map((movie, i) => (
            <NetflixSingleMovie key={i} movie={movie} />
          ))}
        </Row>
      </Container>
    );
  }
}
export default NetflixMoviesRow;
