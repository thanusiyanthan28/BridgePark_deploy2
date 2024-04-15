import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Rooms from "./Pages/Rooms";
import Footer from "./components/common/Footer"

export default function App() {
  return (
    <div>

      

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </Router>
      {/*<Footer />*/}
    </div>
  );
}
