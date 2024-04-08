import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from './components/common/Header'
import Facilities from './Pages/Facilities';
import Card from "./Pages/Facilities";

export default function App() {
  return (
    <div>

      

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use curly braces to pass element prop */}
          <Route path="/facilities" element={<Facilities />} />

        </Routes>
      </Router>
    </div>
  );
}
