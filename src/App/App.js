import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import TitleBar from "../Components/TitleBar";
import Grinders from "../Grinders";

function App() {
  const URL = useLocation().pathname;

  return (
    <div className="App">
      <TitleBar></TitleBar>
      <Navbar URL={URL}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grinders" element={<Grinders />} />
      </Routes>
    </div>
  );
}

export default App;