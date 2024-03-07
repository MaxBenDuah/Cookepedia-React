const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo--text">
        <div className="header__icon--logo">
          <ion-icon
            className="header__icon"
            name="fast-food-outline"
            size="large"
          ></ion-icon>
          <span className="header__logo">Cookepedia</span>
        </div>
        <div>
          <p>
            Discover 1000+ recipes in your hand
            <br /> with the best recipe. Help you to find
            <br /> the easiest way to cook.
          </p>
        </div>
      </div>
      <div className="footer__links">
        <p>Sign up for our newsletter</p>
        <div className="footer__inputs">
          <input type="text" placeholder="You email address" />
          <input type="button" value="Submit" />
        </div>
        <div className="footer__link--container">
          <div className="footer__link--flex">
            <p>Menu</p>
            <p>Home</p>
            <p>Recipes</p>
            <p>Articles</p>
            <p>About Us</p>
          </div>
          <div className="footer__link--flex">
            <p>Help</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div className="footer__link--flex">
            <p>Social</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>YouTube</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
