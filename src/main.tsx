//react imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//component imports
import App from "./App.tsx";
import Stewards from "./pages/Stewards.tsx";
import { HashRouter, Routes, Route } from "react-router-dom";

//style imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PnkInfo from "./pages/PnkInfo.tsx";

const root: HTMLElement = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/">
          {/* home page */}
          <Route index element={<App />}></Route>
          <Route path="/stewards" element={<Stewards />}></Route>
          <Route path="/pnks" element={<PnkInfo />}></Route>
          {/* <Route path="/deployments" element={}></Route> */}
          {/* <Route path="/build-materials" element={}></Route> */}
          {/* <Route path="/team" element={}></Route> */}
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
);
