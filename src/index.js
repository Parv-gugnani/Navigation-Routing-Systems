import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NavigationProvider } from "./context/navigation";

const el = document.getElementById("root");

// Create a root and render the App component within it
const root = ReactDOM.createRoot(el);

// Wrap your App component with the NavigationProvider
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>
);
