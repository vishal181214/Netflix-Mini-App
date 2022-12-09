import React from "react";
import Cards from "../../Components/Cards";
import { connect } from "react-redux";

function Home(props) {
  const movies = props.currentMovies;
  return (
    <>
      <h1 className="text-center">
        Welcome to <span style={{ color: "red" }}> Netflix Mini app </span>
      </h1>{" "}
      <hr />
      <div className="container gridsss">
        {movies.length > 0
          ? movies.map((val, i) => {
              return (
                <Cards
                  img={val.img}
                  name={val.name}
                  description={val.description}
                  url={val.urlv}
                  key={i}
                  id = {val.id}
                />
              );
            })
          : 
          
          
          <h1 style={{ color: "red", textAlign:"center", padding:"150px" }}>No Movies Found please Go back to Home and find something to watch!!!</h1>}
      </div>
    </>
  );
}


export default connect(state => state)(Home);