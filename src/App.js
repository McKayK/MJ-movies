import "./App.css";
import axios from 'axios'

function App() {
  //this function is hitting the end server to get the LOTR movie obj
  const movieObj = () => {
    axios.get(`http://localhost:3004/movie`)
    .then(res => {
      //this is the obj if you want to you it to start styling i have it on the button
      console.log(res.data)
    })
  };

  return (
    <div className="App">
      hello git this is the pull test for M another one
      <div>
        <h1>This is McKay's Div, don't touch it!</h1>
        <h1>This is my new header. It's so pretty!</h1>
      </div>
      <div>
        <h1>this is jacobs div you can add changes</h1>
      </div>
      <button onClick={movieObj}>
        click me
      </button>
    </div>
  );
}

export default App;
