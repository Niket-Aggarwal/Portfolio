import React from "react";

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

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex min-h-screen items-center border-t border-white/5 px-6 py-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          number="03 — Experience"
          title="Where I've been."
          description="My journey building web software, contributing to full-stack projects, and mastering software development."
        />
        <div className="mt-20 max-w-3xl border-l border-white/10 pl-8">
          <div className="group relative rounded-[2rem_0.5rem_2rem_0.5rem] border border-white/[0.06] bg-white/[0.01] p-8 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.03]">
            {/* Timeline node */}
            <span className="absolute -left-[39px] top-9 h-4 w-4 rounded-full border border-white/40 bg-zinc-950 transition-all duration-500 group-hover:scale-125 group-hover:bg-white" />
            
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-mono font-semibold">
              2025 — Present
            </span>
            <h3 className="mt-3 text-2xl font-medium text-white transition-colors duration-300 group-hover:text-zinc-200">
              Full Stack Web Developer
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              Developing scalable web applications using the MERN stack (MongoDB, Express, React, Node.js) and modern CSS frameworks like Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
