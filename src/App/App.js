import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import TitleBar from "../Components/TitleBar";
import Grinders from "../Grinders/Grinders.tsx";
import NewRecipe from "../Components/NewRecipe";
import Machines from "../Components/Machines";
import Roasters from "../Components/Roasters";
import Management from "../Components/Management";

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
