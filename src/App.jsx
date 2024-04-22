import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Rooms from "./Pages/Rooms";
import Footer from "./components/common/Footer"
import Facilities from "./Pages/Facilities";

export default function App() {
  return (
    <div>

      

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
      
    </div>
  );
}
