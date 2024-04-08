import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
<<<<<<< HEAD:src/App.js
import Header from './components/common/Header'
import Facilities from './Pages/Facilities';
import Card from "./Pages/Facilities";
=======
import Footer from "./components/common/Footer"
>>>>>>> dev:src/App.jsx

export default function App() {
  return (
    <div>

      

      <Router>
        <Routes>
<<<<<<< HEAD:src/App.js
          <Route path="/" element={<HomePage />} /> {/* Use curly braces to pass element prop */}
          <Route path="/facilities" element={<Facilities />} />

=======
          <Route path="/" element={<HomePage />} />
>>>>>>> dev:src/App.jsx
        </Routes>
      </Router>
      {<Footer />}
    </div>
  );
}
