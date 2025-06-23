import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Test from "./Test.jsx";
import Pokeapi from "./Pokeapi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Test />
    <Pokeapi />
  </StrictMode>
);
