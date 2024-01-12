import React from "react";
import ReactDOM from "react-dom/client";
import Board from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-blue-950 saturate-20 flex justify-center items-center h-screen p-2">
      <Board />
    </div>
  </React.StrictMode>
);
