const Recipe = ({ recipe }) => {
  return (
    <li>
      <div className="popular__recipes--card">
        <div className="popular__recipes-img--container">
          <img
            src={recipe.img}
            alt={recipe.alt}
            className="popular__recipes--img"
          />
        </div>
        <p className="popular__recipes--food">{recipe.recipeName}</p>
        <p className="popular__recipes--name">{recipe.recipeChef}</p>
      </div>
    </li>
  );
};

export default Recipe;
