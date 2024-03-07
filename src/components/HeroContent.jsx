import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__primary--heading">
            <span>The easiest way</span> <span>to make your</span>
            <br /> <span>Favourite meal</span>
          </h1>
          <p className="hero__sub">
            Discover 1000+ recipes in your hand with the best recipe.
            <br /> Help you to find the easiest way to cook
          </p>
          <div style={{ textAlign: "center" }}>
            <Link to="/myrecipes" className="btn btn--explore">
              Explore Recipes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
