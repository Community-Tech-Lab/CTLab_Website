//react imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//component imports
import App from "./App.tsx";
import Stewards from "./pages/Stewards.tsx";
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
          {/* home page */}
          <Route index element={<App />}></Route>
          <Route path="/CTLab_Website/stewards/" element={<Stewards />}></Route>
          {/* <Route path="/deployments" element={}></Route> */}
          {/* <Route path="/build-materials" element={}></Route> */}
          {/* <Route path="/team" element={}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
