import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Wrapper } from "./context/Wrapper.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Wrapper>
   <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
   </BrowserRouter>
  </Wrapper>
);
