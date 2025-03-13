import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProblemPage from "./ProblemPage.tsx";
import NavBar from "./NavBar.tsx";

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <NavBar></NavBar>
    <Router basename="/SnowCollegeHackathon">
      <Routes>
        <Route path="/" element={<ProblemPage />} />
        {/* <Route path="/rules" element={<Rules />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);
