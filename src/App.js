import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Definition search</p>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          <a
            href="https://github.com/gemher/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>{" "}
          code by Gema Hernandez
        </small>
      </footer>
    </div>
  );
}

export default App;
