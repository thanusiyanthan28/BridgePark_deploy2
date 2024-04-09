import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./components/common/Footer"
import Card from "../src/Pages/MeetingAndEvents/Card";


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Card />
      {<Footer />}
    </div>
  );
}
