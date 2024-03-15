import Col from "react-bootstrap/Col";

const NetflixSingleMovie = (props) => {
  return (
    <Col style={{ width: "100px" }}>
      <img style={{ width: "100%", objectFit: "cover" }} src={props.movie.Poster} alt="movie-img" />
    </Col>
  );
};
export default NetflixSingleMovie;
