//react imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//component imports
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//style imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root: HTMLElement = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/CTLab_Website">
          <Route index element={<App />}></Route>
          {/* <Route path="/deployments" element={}></Route> */}
          {/* <Route path="/build-materials" element={}></Route> */}
          {/* <Route path="/team" element={}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
