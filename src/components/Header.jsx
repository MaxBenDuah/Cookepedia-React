import HeroContent from "./HeroContent";
import Logo from "./Logo";
import Navigation from "./Navigation";
import User from "./User";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__sub--cont padding--round">
          <Logo />
          <Navigation></Navigation>
          <User />
        </div>

        <HeroContent />
      </header>
    </>
  );
};

export default Header;
