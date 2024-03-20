import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const NetflixSingleMovie = (props) => {
  return (
    <Col xs={10} md={4} lg={2} id="preview">
      <Link to={`/movie-details/` + props.movie.imdbID}>
        <img style={{ width: "100%", objectFit: "cover" }} src={props.movie.Poster} alt="movie-img" />
      </Link>
    </Col>
  );
};
export default NetflixSingleMovie;
