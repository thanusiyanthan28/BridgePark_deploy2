import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from './components/common/Header'
import Footer from "./components/common/Footer";

export default function App() {
  return ( 
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use curly braces to pass element prop */}
        </Routes>
      </Router>
      {<Footer/> }
    </div>
  );
}
