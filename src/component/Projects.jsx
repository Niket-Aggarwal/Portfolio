import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

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

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center border-t border-white/5 px-6 py-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          number="04 — Projects"
          title="Things I've built."
          description="A selection of recent web applications and full-stack software solutions."
        />
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((project, idx) => {
            // Asymmetric shapes for each project card
            const radiusStyle = idx % 2 === 0
              ? "rounded-[3rem_0.5rem_3rem_0.5rem]"
              : "rounded-[0.5rem_3rem_0.5rem_3rem]";

            return (
              <div
                key={project}
                className={`group min-h-[300px] border border-white/[0.07] bg-white/2 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/15 hover:bg-white/4 flex flex-col justify-between ${radiusStyle}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono text-zinc-600 font-semibold">
                    PROJECT 0{project}
                  </span>
                  <FiArrowUpRight
                    size={20}
                    className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-medium text-white">
                    Project Title 0{project}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    Full stack web application built with React, Node.js, and modern CSS architecture.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
