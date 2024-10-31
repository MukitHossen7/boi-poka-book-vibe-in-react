import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import MainRouter from "./Components/Router/MainRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainRouter></MainRouter>
  </StrictMode>
);
