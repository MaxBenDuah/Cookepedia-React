import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Favourites from "../pages/FavouritesPages/FavouritesPage";
import MyRecipes from "../pages/MyRecipesPage/MyRecipesPage";
import ChefsPage from "../pages/ChefsPage/ChefsPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="chefs" element={<ChefsPage />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="myrecipes" element={<MyRecipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
