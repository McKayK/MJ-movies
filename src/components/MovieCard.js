import React, { useEffect, useState } from "react";
import "./MovieCard.css";

const MovieCard = ({ movieData }) => {
  const [certification, setCertification] = useState();
  const [runtime, setRuntime] = useState("");
  const [trailer, setTrailer] = useState();
  const [cast, setCast] = useState();
  const [viewCast, setViewCast] = useState(false);

  //This gets the top cast from the movie
  let topCast = [];
  for (let i = 0; i < 21; i++) {
    topCast.push(
      `${movieData.credits.cast[i].name} (${movieData.credits.cast[i].character})`
    );
  }
  //Changes the view status of the top cast
  const handleCast = () => {
    if (!viewCast) {
      setViewCast(true);
    } else {
      setViewCast(false);
    }
  };

  //This will find the movies certification(PG-13)
  let movieCert = movieData.release_dates.results.find(
    (elem) => elem.iso_3166_1 === "US"
  );

  //This will find the YouTube Key
  let movieTrailer = movieData.videos.results.find(
    (elem) => elem.type === "Trailer"
  );

  //This will find the director in the cast
  let movieDirector = movieData.credits.cast.find(
    (elem) => elem.known_for_department === "Directing"
  );

  useEffect(() => {
    setRuntime(`${(movieData.runtime / 60) | 0}h ${movieData.runtime % 60}m`);
    setCertification(movieCert.release_dates[0].certification);
    setTrailer(`https://www.youtube.com/embed/${movieTrailer.key}`);
    setCast(topCast);
  }, [movieData]);

  console.log("this is from the movie card comp.:", movieData);
  return (
    <div className="movie-card">
      <div className="movie-header">
        <h1>{movieData.original_title}</h1>
        <h5>{movieData.release_date.split("-")[0]}</h5>
        <h5>{certification}</h5>
        <h5>{runtime}</h5>

        <div className="movie-media">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt="poster"
          />
          <iframe
            width="853"
            height="480"
            src={trailer}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div className="movie-desc">
          <p>{movieData.overview}</p>
          <h1>
            Director <br /> {movieDirector.name}
          </h1>
          <button onClick={handleCast}>View Top Cast</button>
          {viewCast && cast.map((elem) => <h4 key={elem}>{elem}</h4>)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
