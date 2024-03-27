import Footer from "../../components/Footer";
import Chefs from "./Chefs";
import Navigation from "../../components/Navigation";
import Logo from "../../components/Logo";
import User from "../../components/User";

const Chefspage = () => {
  return (
    <div>
      <div className="header__sub--cont padding-header">
        <Logo />
        <Navigation />
        <User />
      </div>
      <Chefs />
      <Footer />
    </div>
  );
};

export default Chefspage;
