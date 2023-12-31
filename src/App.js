import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Denver" />
        <footer>
          This project was coded by <strong>Laurel Rubel</strong> and is{" "}
          <a
            href="https://github.com/LaurelFR/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
