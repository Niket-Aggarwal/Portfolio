import React from "react";
import Hero from "../component/Hero";
import Skills from "../component/Skills";
import Experience from "../component/Experience";
import Projects from "../component/Projects";
import Contact from "../component/Contact";

const Page = () => {
  return (
    <main className="relative z-10 w-full overflow-x-hidden">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Page;