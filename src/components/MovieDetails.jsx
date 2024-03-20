import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const [movieObject, setMovieObject] = useState(null);
  const [commentObject, setCommentObject] = useState([]);

  const params = useParams();
  console.log(params);
  console.log(params.movieId);

  useEffect(() => {
    moviesFetchDetails();
    commentsFetch();
  }, []);

  const moviesFetchDetails = () => {
    // const { query } = this.props;
    fetch(`http://www.omdbapi.com/?apikey=16d24798&i=${params.movieId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema inaspettato nella ricezione dati!");
        }
      })
      .then((movie) => {
        console.log(movie);
        // console.log(movie.Search[0].imdbID);

        setMovieObject(movie);

        //   navigate(`/not-found`);
      })
      .catch((error) => console.log(error));
  };

  const commentsFetch = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZiMDY5NjcxNzQ3YjAwMWExYjAzMjgiLCJpYXQiOjE3MTA5NTAwMzgsImV4cCI6MTcxMjE1OTYzOH0.2Fl88NMfYiMzDyVUu-ccx6U1B-wS3_-bOaCx0cBGjBw",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema inaspettato nella ricezione dati!");
        }
      })
      .then((comment) => {
        console.log(comment);
        setCommentObject(comment);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {movieObject && (
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={movieObject.Poster} />
          <Card.Body>
            <Card.Title>{movieObject.Title}</Card.Title>
            <Card.Text>{movieObject.Plot}</Card.Text>
          </Card.Body>
        </Card>
      )}
      {commentObject &&
        commentObject.map((comment) => {
          return <p style={{ color: "white" }}>{comment}</p>;
        })}
    </>
  );
};
export default MovieDetails;
