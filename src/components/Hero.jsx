import React from "react";
import Navbar from "./Navbar";
import Work from "./Work";
import Stripes from "./Stripes";

const Hero = () => {
  return (
    <section className="w-full h-screen">
      <Navbar />
      <Work />
      <Stripes/>
    </section>
  );
};

export default Hero;
