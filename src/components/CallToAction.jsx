import { NavLink } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta__background--img"></div>
      <div className="cta__text">
        <p className="popular__recipes--food margin-btm">
          50+ breakfast recipes that <br /> is very easy and quick
        </p>
        <p className="popular__recipes--name margin-btm-bg">
          Find the perfect food ideas to start your day with
          <br /> the quick and easiest way
        </p>

        <NavLink className="btn" to="/myrecipes">
          Explore Recipes
        </NavLink>
      </div>
    </section>
  );
};

export default CallToAction;
