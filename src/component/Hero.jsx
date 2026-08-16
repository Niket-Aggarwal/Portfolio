import React from "react";
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

const SectionTitle = ({ number, title, description }) => {
  return (
    <div className="max-w-2xl">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-zinc-600">
        {number}
      </p>
      <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-6 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
        {description}
      </p>
    </div>
  );
};

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <section id="home" className="relative flex min-h-screen items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  MERN Stack Developer
                </span>
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Building digital
                <span className="block text-zinc-500">
                  experiences that matter.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
                I'm Niket Aggarwal, a MERN Stack Developer focused on building
                modern, scalable and thoughtful web applications.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <button onClick={() => scrollTo("projects")}
                  className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200"
                >
                  Explore my work
                  <FiArrowUpRight size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
                <button onClick={() => scrollTo("contact")}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  Let's connect
                </button>
              </div>
            </div>
            <div className="relative mx-auto h-95 w-full max-w-md sm:h-112.5">
              <div className="absolute inset-0 rounded-4xl border border-white/10 bg-white/[0.018] backdrop-blur-[2px]" />
              <div className="absolute inset-6 rounded-3xl border border-white/6" />
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/4.5 text-4xl font-semibold text-white shadow-[0_0_80px_rgba(255,255,255,0.06)]">
                N
              </div>
              <div className="absolute left-5 top-12 rounded-xl border border-white/10 bg-[#080808]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-xs text-zinc-600">Frontend</p>
                <p className="mt-1 text-sm text-zinc-300">React.js</p>
              </div>
              <div className="absolute right-4 top-28 rounded-xl border border-white/10 bg-[#080808]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-xs text-zinc-600">Backend</p>
                <p className="mt-1 text-sm text-zinc-300">Node.js</p>
              </div>
              <div className="absolute bottom-28 left-10 rounded-xl border border-white/10 bg-[#080808]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-xs text-zinc-600">Database</p>
                <p className="mt-1 text-sm text-zinc-300">MongoDB</p>
              </div>
              <div className="absolute bottom-10 right-8 rounded-xl border border-white/10 bg-[#080808]/90 px-4 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-xs text-zinc-600">Architecture</p>
                <p className="mt-1 text-sm text-zinc-300">Full Stack</p>
              </div>
            </div>
          </div>
          <button onClick={() => scrollTo("about")}
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-zinc-700 transition-colors duration-300 hover:text-white"
          >
            <span className="text-[10px] uppercase tracking-[0.35em]">
              Scroll
            </span>
            <FiArrowDown size={15} className="animate-bounce" />
          </button>
        </div>
      </section>
      <section id="about"
        className="flex min-h-[110vh] items-center border-t border-white/5 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <SectionTitle
            number="01 — About"
            title="A little about me."
            description="This is a temporary section used to test the navbar's scrolling and active-section behavior. The real About section will eventually contain your story, background, approach and personality."
          />
          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {["Curious", "Focused", "Always Learning"].map((item, index) => (
              <div key={item}
                className="rounded-2xl border border-white/[0.07] bg-white/2 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/4"
              >
                <span className="text-sm text-zinc-700">0{index + 1}</span>
                <h3 className="mt-16 text-xl font-medium text-white">
                  {item}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Temporary content for testing the visual system.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="skills"
        className="flex min-h-[110vh] items-center border-t border-white/5 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <SectionTitle
            number="02 — Skills"
            title="Tools I work with."
            description="Your actual technical skills will go here. For now this section provides enough height to properly test the navbar scrolling behavior."
          />
          <div className="mt-20 flex flex-wrap gap-3">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "Git",
              "REST APIs",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-full border border-white/10 bg-white/2.5 px-5 py-3 text-sm text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/6 hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="experience"
        className="flex min-h-[110vh] items-center border-t border-white/5 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <SectionTitle
            number="03 — Experience"
            title="Where I've been."
            description="Experience, internships, freelance work and other professional milestones will be displayed here."
          />
          <div className="mt-20 max-w-3xl border-l border-white/10 pl-7">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-600">
              2025 — Present
            </span>
            <h3 className="mt-4 text-2xl font-medium text-white">
              MERN Stack Developer
            </h3>
            <p className="mt-5 max-w-xl leading-8 text-zinc-500">
              Temporary experience content. This will later be replaced with
              your actual professional experience.
            </p>
          </div>
        </div>
      </section>
      <section id="projects"
        className="flex min-h-[120vh] items-center border-t border-white/5 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <SectionTitle
            number="04 — Projects"
            title="Things I've built."
            description="This will become the main showcase of your portfolio. Your best projects should receive the most visual attention here."
          />
          <div className="mt-20 grid gap-5 md:grid-cols-2">
            {[1, 2, 3, 4].map((project) => (
              <div key={project}
                className="group min-h-80 rounded-3xl border border-white/[0.07] bg-white/2 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/15 hover:bg-white/4"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-zinc-700">
                    PROJECT 0{project}
                  </span>
                  <FiArrowUpRight size={20}
                    className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
                <div className="flex h-full flex-col justify-end pb-4">
                  <h3 className="text-2xl font-medium text-white">
                    Project {project}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-zinc-600">
                    Temporary project card for testing hover interactions and
                    spacing.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact"
        className="flex min-h-[110vh] items-center border-t border-white/5 px-6 py-32 sm:px-10 lg:px-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-600">
              05 — Contact
            </p>
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let's build
              <span className="block text-zinc-500">something together.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
              This temporary section is here to test the final navigation
              point and mobile drawer behavior.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button onClick={() => scrollTo("home")}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200"
              >
                Back to top
                <FiArrowUpRight size={16} />
              </button>
              <a href="#"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-3 text-sm text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/6 hover:text-white"
              >
                <FiGithub size={17} />
                GitHub
              </a>
              <a href="#"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-3 text-sm text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/6 hover:text-white"
              >
                <FiLinkedin size={17} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;