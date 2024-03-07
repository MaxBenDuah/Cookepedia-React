import MyRecipe from "./MyRecipe";
import myRecipesData from "./MyRecipesData";
import styles from "./MyRecipes.module.css";
import RecipeList from "./RecipeList";
import { useState } from "react";

const MyRecipes = ({
  onAddRecipes,
  recipeData,
  onDeleteRecipe,
  onEditRecipeForm,
}) => {
  const [openAddRecipeForm, setAddRecipeForm] = useState(false);
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  const handleAddRecipe = () => {
    setAddRecipeForm((curr) => !curr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!img || !content) return;

    const recipeObject = {
      id: Date.now(),
      img,
      content,
    };

    onAddRecipes(recipeObject);

    setImg("");
    setContent("");

    setAddRecipeForm(false);
  };

  return (
    <>
      <ul className={styles.myRecipeContainer}>
        {myRecipesData.map((myRecipe) => (
          <MyRecipe key={myRecipe.id} myRecipe={myRecipe} />
        ))}
      </ul>

      {/* DAILY BEST RECIPES */}
      <div>
        <div className={styles.addCont}>
          <p>Daily Best Recipes</p>
          <div className={styles.add} onClick={handleAddRecipe}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>Add New</p>
          </div>
        </div>

        {/* FORM */}
        {openAddRecipeForm && (
          <div className={styles.formCont}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div>
                <label className={styles.label}>Enter image url</label>
                <input
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  type="text"
                  placeholder="Enter image"
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.label}>Enter recipe</label>
                <input
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  type="text"
                  placeholder="Enter the description"
                  className={styles.input}
                />
              </div>
              <button className={styles.inputBtn} type="submit">
                Add Recipe
              </button>
            </form>
          </div>
        )}

        <ul className={styles.dailyRecipeCont}>
          {recipeData.map((recipe) => (
            <RecipeList
              key={recipe.id}
              recipe={recipe}
              onDeleteRecipe={onDeleteRecipe}
              onEditRecipeForm={onEditRecipeForm}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyRecipes;
