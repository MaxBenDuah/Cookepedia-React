import Recipe from "./Recipe";
import recipesData from "../PopularRecipesData";
import { Link } from "react-router-dom";

const PopularRecipes = () => {
  return (
    <section className="popular__recipes section--padding">
      <div className="popular__recipes--heading">
        <h1 className="hero__primary--heading popular__recipes--heading">
          Popular recipes of the week
        </h1>
        <Link to="/favourites" className="popular__see--all">
          See all
        </Link>
      </div>
      <p className="hero__sub">Our most popular recipes of the week</p>

      {/* RECIPES */}
      <ul className="popular__recipes--cards">
        {recipesData.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </section>
  );
};

export default PopularRecipes;
