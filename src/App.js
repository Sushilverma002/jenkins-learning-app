import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/Sushilverma002/jenkins-learning-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jenkins learning app By Sushil.
        </a>
      </header>
      <p>Application version: 1</p>
    </div>
  );
}

export default App;
