import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Components/Home.js";
import Navbar from "../Components/Navbar.js";
import TitleBar from "../Components/TitleBar.js";
import Grinders from "../Grinders.js";
import NewRecipe from "../Components/NewRecipe.js";
import Machines from "../Components/Machines.js";
import Roasters from "../Components/Roasters.js";
import Management from "../Components/Management.js";

function App() {
  const URL = useLocation().pathname;

  return (
    <div className="App">
      <TitleBar></TitleBar>
      <Navbar URL={URL}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grinders" element={<Grinders />} />
        <Route path="/newrecipe" element={<NewRecipe />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/roasters" element={<Roasters />} />
        <Route path="/management" element={<Management />} />
      </Routes>
    </div>
  );
}

export default App;
