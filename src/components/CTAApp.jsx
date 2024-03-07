const CTAApp = () => {
  return (
    <section className="cta__app">
      <div className="cta__app--img">
        <img
          src="https://cdn.dribbble.com/userupload/5026970/file/original-eab5e9c8b13cae1b97265cc8374d491d.png?resize=2048x1536"
          alt="App"
        />
      </div>
      <div className="cta__app--text">
        <div>
          <p>Download App</p>

          <p>
            Download the app from App store or <br /> Google Play Store for a
            better experience
          </p>
          <div className="cta__apps">
            <div className="cta__apple">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App store"
              />
            </div>
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Google playstore"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAApp;
