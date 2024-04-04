import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from './components/common/Header'

export default function App() {
  return ( 
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use curly braces to pass element prop */}
        </Routes>
      </Router>
    </div>
  );
}
