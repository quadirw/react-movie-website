import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home"
import Searching from "./pages/Searching";
import "./index.css";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
  <div className="App">
          <Nav /> 
  <Routes>
          <Route path="/movies" exact element={<Home />} />
          <Route path="/Searching/:id" element={<Searching />} />
  </Routes>
  </div>
  <Footer />
    </Router>
  );
}

export default App;
