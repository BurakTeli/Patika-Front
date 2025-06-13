import BMI from "./components/BMI/BMI";
import Classes from "./components/Classes/Classes";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
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
    </>
  );
}
