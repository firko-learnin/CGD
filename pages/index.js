import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import TitleBar from "../Components/TitleBar";
import Grinders from "../Components/Grinders/Grinders";
import NewRecipe from "../Components/NewRecipe";
import Machines from "../Components/Machines";
import Roasters from "../Components/Roasters";
import Management from "../Components/Management";
import { useRouter } from "next/router";

function App() {
  const router = useRouter();
  const URL = router.pathname;

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
