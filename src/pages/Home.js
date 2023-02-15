import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Therapies from "../components/Therapies";
import Therapy from "../components/Therapy";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://www.talkspace.com/blog/wp-content/uploads/2020/10/therapists-trauma-experience-therapy-client1200s-800x500.jpg"
        title="Online Counselling Therapy With  Top Psychologists
        "
        text="Anytime, Anywhere, Any device."
        buttonText="Consult Now"
        url="/"
        btnClass="show"
      />
      <Therapies />
      <Therapy />
      <Footer />
    </>
  );
}

export default Home;
