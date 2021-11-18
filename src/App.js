import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Upload } from "./Upload";

function App() {
  return (
    <div className="App">
      <Upload></Upload>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
