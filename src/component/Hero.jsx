import React, { useCallback } from "react";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import UserImage from "../assets/image.png";

const SectionTitle = ({title, description }) => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-6 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
        {description}
      </p>
    </div>
  );
};

const ProfileImage = ({ mobile = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative ${mobile ? "h-44 w-44 sm:h-64 sm:w-64" : "h-72 w-72 sm:h-96 sm:w-96 lg:h-105 lg:w-105"}`}
  >
    <div className="absolute -inset-4 rounded-[4.5rem_1.5rem_4.5rem_1.5rem] bg-radial from-white/10 via-transparent to-transparent blur-2xl transition-all duration-500 group-hover:from-white/20" />
    <div className="relative h-full w-full overflow-hidden rounded-[4.5rem_1.5rem_4.5rem_1.5rem] border border-white/15 bg-[#0a0a0a] p-2.5 shadow-2xl transition-all duration-500 group-hover:border-white/30 sm:p-3.5">
      <img src={UserImage} alt="Niket Aggarwal" loading="eager"
        className="h-full w-full rounded-[3.8rem_1rem_3.8rem_1rem] object-cover filter brightness-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  </motion.div>
);

const Hero = () => {
  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <section id="home" className="relative z-10 min-h-screen w-full overflow-hidden px-5 py-5"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid min-h-[calc(100vh-5rem)] gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden justify-center lg:col-span-5 lg:flex"
          >
            <ProfileImage />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <div className="mb-6 hidden lg:flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-linear-to-r from-white via-zinc-400 to-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-300">
                Full Stack Developer
              </span>
            </div>
            <div className="mb-5 flex justify-center lg:hidden">
              <ProfileImage mobile />
            </div>
            <h1 className="text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building digital
              <span className="block text-zinc-400">experiences</span>
              <span className="block">that matter</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              I'm Niket Aggarwal, a Full Stack Developer focused on building
              modern, scalable and thoughtful web applications. I turn complex
              problems into elegant, performant digital interfaces with SEO
            </p>
            <div className="mt-6 flex flex-wrap gap-4 sm:mt-8">
              <button onClick={() => scrollTo("projects")}
                className="cursor-pointer group flex w-fit items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-lg active:translate-y-0"
              >
                <span>Explore my work</span>
                <FiArrowUpRight size={16} className="transition-transform duration-300 group-hover:rotate-45" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;