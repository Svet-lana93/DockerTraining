import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const makeBackendRequest = () => {
    console.log('makeBackendRequest');
    axios("backend/user").then(response => {
      console.log("response", response);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. !!!!!2222
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeBackendRequest}>Make backend request</button>
    </div>
  );
}

export default App;
