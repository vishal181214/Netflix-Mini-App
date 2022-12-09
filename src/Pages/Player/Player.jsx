import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

function Player(props) {
  const { id } = useParams();
  let movie = props.currentMovies[id - 1];

  return (
    <div>
      <h1>Player Page of {movie.name} </h1>
      <ReactPlayer url={movie.urlv} />
    </div>
  );
}

export default connect((state) => state)(Player);