import CallToAction from "../components/CallToAction";
import TestimonialSection from "../components/TestimonialSection";
import CTAApp from "../components/CTAApp";
import Footer from "../components/Footer";
import PopularRecipes from "../components/PopularRecipes";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* SECTION POPULAR RECIPES */}
      <PopularRecipes />

      {/* CTA SECTION */}
      <CallToAction />

      {/* TESTIMONIAL SECTION */}
      <TestimonialSection />

      {/* CTA APP */}
      <CTAApp />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Homepage;
