import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../images/therapy2.jpg";
import Footer from "../components/Footer";
import Therapy from "../components/Therapy";
function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Services"
        btnClass="hide"
      />
      <Therapy />
      <Footer />
    </>
  );
}

export default Services;
