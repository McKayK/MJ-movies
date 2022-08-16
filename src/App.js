import "./App.css";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import { useState } from "react";

function App() {
  const [movieData, setMovieData] = useState();
  const [showMovieStatus, setShowMovieStatus] = useState(false);
  //this function is hitting the end server to get the LOTR movie obj
  const movieObj = () => {
    axios.get(`http://localhost:3004/movie`).then((res) => {
      //this is the obj if you want to you it to start styling i have it on the button
      if (!showMovieStatus) {
        setShowMovieStatus(true);
      }
      setMovieData(res.data);
      // console.log(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={movieObj}>click me</button>
      {showMovieStatus && <MovieCard movieData={movieData} />}
    </div>
  );
}

export default App;
