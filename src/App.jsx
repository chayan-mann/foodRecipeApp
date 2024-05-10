import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Favourites from "./pages/favourites/Favourites.jsx";
import Details from "./pages/details/Details.jsx";

function App() {
  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/RecipeItem/:id" element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
