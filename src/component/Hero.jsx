import { useCallback, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import PlanetImage from "../assets/Planet.png";

const Hero = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(prev => {
        const newOffset = Math.min(window.scrollY * 0.5, 300);
        return prev === newOffset ? prev : newOffset;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden px-4 py-20 pt-24 sm:px-10 sm:py-32 sm:pt-28 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col lg:hidden">
          <div className="flex flex-col justify-center">
            <h1 className="mb-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Building digital
              <span className="block text-zinc-400">experiences</span>
              <span className="block">that matter</span>
            </h1>
            <p className="mb-8 text-sm leading-7 text-zinc-500 sm:text-base">
              I'm Niket Aggarwal, a Full Stack Developer focused on building
              modern, scalable and thoughtful web applications
            </p>
            <div className="flex items-start">
            <button 
              onClick={() => scrollTo("projects")}
              className="group flex w-fit items-center justify-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-lg active:translate-y-0 sm:px-8 sm:py-3"
            >
              <span>Explore my work</span>
              <FiArrowUpRight size={14} className="transition-transform duration-300 group-hover:rotate-45" />
            </button>
            </div>
          </div>
        </div>
        <div className="hidden items-center lg:flex min-h-[calc(100vh-10rem)]">
          <div className="flex flex-1 flex-col justify-center">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/3 px-4 py-2 w-fit">
              <span className="h-2 w-2 rounded-full bg-white/60" />
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                Full Stack Developer
              </span>
            </div>
            <h1 className="mb-8 text-6xl font-bold leading-tight tracking-tight text-white lg:text-7xl">
              Building digital
              <span className="block text-zinc-400">experiences</span>
              <span className="block">that matter</span>
            </h1>
            <p className="mb-10 max-w-lg text-base leading-7 text-zinc-500 lg:text-lg">
              I'm Niket Aggarwal, a Full Stack Developer focused on building
              modern, scalable and thoughtful web applications
            </p>
            <button 
              onClick={() => scrollTo("projects")}
              className="group flex w-fit items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-lg active:translate-y-0 sm:px-8 sm:py-3.5"
            >
              <span>Explore my work</span>
              <FiArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative aspect-square w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500/15 via-purple-500/5 to-purple-500/15 blur-3xl" />
              <div className="absolute inset-8 rounded-full bg-linear-to-t from-blue-400/8 via-transparent to-transparent blur-2xl" />
              <div className="absolute inset-12 rounded-full bg-linear-to-b from-cyan-500/5 via-transparent to-transparent blur-xl" />
              <img src={PlanetImage} alt="Planet" className="relative h-full w-full object-contain drop-shadow-2xl" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;