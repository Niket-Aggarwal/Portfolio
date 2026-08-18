import React from "react";
import Hero from "../component/Hero";
import About from "../component/About";

const Page = () => {
  return (
    <main className="relative z-10 w-full overflow-x-hidden">
      <Hero />
      <About/>
    </main>
  );
};

export default Page;