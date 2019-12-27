import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from "./components/LikeButton";
// import ShowWords from "./components/showWords";
import MouseTracker from "./components/clickTracker";
// import ShowDogs from "./components/ShowDogs";
import ShowDogs2 from "./components/ShowDogs2";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>

        </p>
        <div>
          <LikeButton/>
          {/*<ShowWords></ShowWords>*/}
          <MouseTracker></MouseTracker>
          {/*<ShowDogs/>*/}
          <ShowDogs2/>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
