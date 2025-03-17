import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import MySpacePage from "./pages/MySpacePage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define Routes for Different Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/MySpace" element={<MySpacePage />} />
      </Routes>
    </Router>
  );
};

export default App;
