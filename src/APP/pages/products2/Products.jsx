import React, { useEffect } from "react";
import { HeroSection, ProductsSection, Teams, TechStack } from "./sections";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="p-3 md:px-10">
      <HeroSection />
      <ProductsSection />
      <TechStack />
      <Teams />
    </section>
  );
};

export default Products;
