import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CardProvider from "./context/CardProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CardProvider>
      <App />
      </CardProvider>
    </BrowserRouter>
  </StrictMode>
);
