import Col from "react-bootstrap/Col";

const NetflixSingleMovie = (props) => {
  return (
    <Col xs={10} md={4} lg={2} id="preview">
      <img style={{ width: "100%", objectFit: "cover" }} src={props.movie.Poster} alt="movie-img" />
    </Col>
  );
};
export default NetflixSingleMovie;
