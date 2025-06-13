import React from "react";
import "../../styles/hero.css";
import HeroLabel from "./HeroLabel";
import HeroButtons from "./HeroButtons";
import HeroText from "./HeroText";

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <HeroLabel />
        <HeroText />
        <HeroButtons />
      </div>
    </section>
  );
};

export default Hero;
