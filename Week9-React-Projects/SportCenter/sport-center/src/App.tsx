import BMI from "./components/BMI/BMI";
import Classes from "./components/Classes/Classes";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import Stats from "./components/Stats/Stats";
import Trainers from "./components/Trainers/Trainers";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Classes />
      <BMI />
      <Trainers />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
