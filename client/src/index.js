import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Keep this if you have global styles
import App from "./App";  // Import your App.js
import reportWebVitals from "./reportWebVitals";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />  {/* This renders App.js inside index.html */}
  </React.StrictMode>
);

reportWebVitals();
