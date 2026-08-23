import React from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center border-t border-white/5 px-6 py-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-zinc-600 font-mono">
            05 — Contact
          </p>
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Let's build
            <span className="block text-zinc-500">something together.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-500 sm:text-lg">
            Feel free to reach out for collaborations, project inquiries, or just to say hello.
          </p>

          <div className="mt-10 flex flex-wrap gap-3.5">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200"
            >
              Back to top
              <FiArrowUpRight size={16} />
            </button>
            <a
              href="https://github.com/Niket-Aggarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-3 text-sm text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/6 hover:text-white"
            >
              <FiGithub size={17} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/niket-aggarwal-11785038a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-3 text-sm text-zinc-400 transition-all duration-300 hover:border-white/20 hover:bg-white/6 hover:text-white"
            >
              <FiLinkedin size={17} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
