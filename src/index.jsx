import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./tailwind.output.css";

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);

if (import.meta.hot) import.meta.hot.accept();
