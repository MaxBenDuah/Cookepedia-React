const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial__grid--item">
      <div className="testimonial__img--name">
        <img
          src={testimonial.testimonialImg}
          alt={testimonial.testimonialAlt}
          className="header__user--img testimonial__img"
        />
        <div className="testimonial__recipe-name--container">
          <p className="testimonial__recipe--name">{testimonial.recipeName}</p>
          <p className="testimonial__name">{testimonial.name}</p>
        </div>
      </div>
      <div className="testimonial__rating">
        {(testimonial.likes === "Like" || testimonial.likes === 2) && (
          <>
            <ion-icon size="small" name="star"></ion-icon>
            <ion-icon size="small" name="star"></ion-icon>
            <ion-icon size="small" name="star"></ion-icon>
            <ion-icon size="small" name="star"></ion-icon>
            <ion-icon size="small" name="star-half"></ion-icon>
          </>
        )}
        {(testimonial.likes === 17 || testimonial.likes === 5) && (
          <>
            <ion-icon size="small" name="star"></ion-icon>
            <ion-icon size="small" name="star"></ion-icon>
            <ion-icon size="small" name="star"></ion-icon>
            <ion-icon size="small" name="star"></ion-icon>
            <ion-icon size="small" name="star"></ion-icon>
          </>
        )}
      </div>
      <p className="testimonial__text">{testimonial.description}</p>
      <img
        src={testimonial.foodImg}
        alt={testimonial.foodAlt}
        className="testimonial__client--img"
      />
      <div className="testimonial__icon-bottom--container">
        <div className="testimonial__icon--bottom">
          <ion-icon
            style={{ color: testimonial.likes === 17 && "green" }}
            size="small"
            name={testimonial.likes === 17 ? "thumbs-up" : "thumbs-up-outline"}
          ></ion-icon>
          <p>{testimonial.likes}</p>
        </div>
        <div className="testimonial__icon--bottom">
          <ion-icon size="small" name="share-social-outline"></ion-icon>
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
