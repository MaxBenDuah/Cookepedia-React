import { useState } from "react";
import styles from "./MyRecipes.module.css";

const RecipeList = ({ recipe, onDeleteRecipe, onEditRecipeForm }) => {
  const [openEditForm, setOpenEditForm] = useState(false);
  const [editImg, setEditImg] = useState(recipe.img);
  const [editContent, setEditContent] = useState(recipe.content);

  const handleOpenEditForm = () => {
    setOpenEditForm(true);
  };

  const handleCancelForm = () => {
    setOpenEditForm(false);
  };

  const handleEditSubmitForm = (e) => {
    e.preventDefault();

    const editObj = {
      id: recipe.id,
      img: editImg,
      content: editContent,
    };

    onEditRecipeForm(editObj);
    setOpenEditForm(false);
  };

  return (
    <>
      {openEditForm ? (
        <form className={styles.form} onSubmit={handleEditSubmitForm}>
          <div>
            <label className={styles.label}>Enter image url</label>
            <input
              value={editImg}
              onChange={(e) => setEditImg(e.target.value)}
              type="text"
              placeholder="Enter image url"
              className={styles.input}
            />
          </div>
          <div>
            <label className={styles.label}>Enter recipe</label>
            <input
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              type="text"
              placeholder="Enter recipe"
              className={styles.input}
            />
          </div>
          <button className={styles.inputBtn} type="submit">
            Save
          </button>
          <button className={styles.inputBtn} onClick={handleCancelForm}>
            Cancel
          </button>
        </form>
      ) : (
        <li className={styles.subContainer}>
          <div className={styles.recipesImgContainer}>
            <img src={recipe.img} alt={recipe.content} />
          </div>
          <div
            style={{ background: recipe.id % 2 === 0 ? "#fedfbb" : "#fbd4ea" }}
            className={styles.contentCont}
          >
            <p className={styles.desc}>{recipe.content}</p>
            <div
              onClick={() => onDeleteRecipe(recipe.id)}
              className={styles.trashIcon}
            >
              <ion-icon name="trash"></ion-icon>
            </div>
            <div onClick={handleOpenEditForm} className={styles.editButton}>
              <ion-icon name="create"></ion-icon>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default RecipeList;
