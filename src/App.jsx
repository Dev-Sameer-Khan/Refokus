import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";


const App = () => {
  return (
    <main className="bg-zinc-900 text-zinc-100">
      <Cursor/>
      <Hero />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </main>
  );
};

export default App;
