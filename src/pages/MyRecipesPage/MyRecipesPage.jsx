import { useState } from "react";
import Header from "../../components/Header";
import MyRecipes from "./MyRecipes";
import dailyBestRecipeData from "./DailyBestRecipeData";
import Footer from "../../components/Footer";

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
      <Header />
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
