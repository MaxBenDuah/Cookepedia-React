import { useState } from "react";
import MyRecipes from "./MyRecipes";
import dailyBestRecipeData from "./DailyBestRecipeData";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import User from "../../components/User";

const MyRecipesPage = () => {
  const [recipeData, setRecipeData] = useState(dailyBestRecipeData);

  const handleAddRecipe = (recipeObj) => {
    setRecipeData((prevRecipeData) => [...prevRecipeData, recipeObj]);
  };

  const handleDeleteRecipe = (id) => {
    setRecipeData((prevRecipeData) =>
      prevRecipeData.filter((recipe) => recipe.id !== id)
    );
  };

  const handleEditRecipeForm = (editRecipeObj) => {
    setRecipeData((prevRecipeData) =>
      prevRecipeData.map((recipe) =>
        recipe.id === editRecipeObj.id ? editRecipeObj : recipe
      )
    );
  };

  return (
    <h1>
      <div className="header__sub--cont padding-header">
        <Logo />
        <Navigation />
        <User />
      </div>
      <MyRecipes
        onAddRecipes={handleAddRecipe}
        recipeData={recipeData}
        onDeleteRecipe={handleDeleteRecipe}
        onEditRecipeForm={handleEditRecipeForm}
      />
      <Footer />
    </h1>
  );
};

export default MyRecipesPage;
