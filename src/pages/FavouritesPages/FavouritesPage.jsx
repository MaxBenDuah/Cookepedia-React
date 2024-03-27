import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import User from "../../components/User";
import Favourites from "./Favourites";

const FavouritesPage = () => {
  return (
    <h1>
      <div className="header__sub--cont padding-header">
        <Logo />
        <Navigation />
        <User />
      </div>
      <Favourites />
      <Footer />
    </h1>
  );
};

export default FavouritesPage;
