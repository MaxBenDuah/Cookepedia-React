import Testimonial from "./Testimonial";
import testimonialData from "../TestimonialData";

const TestimonialSection = () => {
  return (
    <section className="testimonials section--padding">
      <div className="testimonial--heading">
        <h1 className="hero__primary--heading testimonial--heading">
          Fresh from our community
        </h1>
      </div>

      {/* TESTIMONIAL GRID */}
      <ul className="testimonial__grid">
        {testimonialData.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </ul>

      <div className="testimonial__pagination">
        <p>01/08</p>
        <div className="testimonial__pagination-page--indicator">
          <div className="green"></div>
        </div>
        <div className="testimonial__pagination-arrow--icons">
          <div className="first">
            <ion-icon size="large" name="arrow-back"></ion-icon>
          </div>
          <div className="last">
            <ion-icon size="large" name="arrow-forward"></ion-icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
