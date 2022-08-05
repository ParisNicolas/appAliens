import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Curriculum from "./Avatar"; //importar funcion

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Curriculum />
    <Curriculum />
    <Curriculum />
    <Curriculum />
  </StrictMode>
);
