import React from "react";
import { motion } from "motion/react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Ted from "../assets/project/tedxsscbs.png";
import Mic from "../assets/project/mic.png";
import Waiver from "../assets/project/waiver.png";
import Nexlink from "../assets/project/nexlink.png";
import apiawake from "../assets/project/pluseops.png";

const PROJECTS = [
  {
    id: 5,
    title: "PulseOps",
    description:
      "An API monitoring platform that keeps deployed APIs active and continuously monitors their uptime, response time and health. Get monitoring history, failure alerts and a public status page to stay informed about your APIs",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Node-Cron"],
    image: apiawake,
    liveUrl: null,
    githubUrl: "https://github.com/Niket-Aggarwal/PluseOps",
  },
  {
    id: 4,
    title: "NexLink",
    description:
      "A digital identity platform that brings all your important links together in one place. Create a personalized public NexLink profile and share a single URL as your digital visiting card",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: Nexlink,
    liveUrl: "https://www.mynexlink.niket.live",
    githubUrl: "https://github.com/Niket-Aggarwal/Digital-Visiting-Card",
    featured: true,
  },
  {
    id: 3,
    title: "Management Interaction Cell",
    description:
      "A modern and responsive website developed for the Management Interaction Cell, showcasing the organization's activities, initiatives and information",
    technologies: ["React", "Tailwind CSS"],
    image: Mic,
    liveUrl: "https://www.micsscbs.in",
    githubUrl: null,
  },
  {
    id: 2,
    title: "MIC Waiver System",
    description:
      "A full stack management system built to streamline and organize internal processes for the Management Interaction Cell, with a modern and scalable MERN-based architecture",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    image: Waiver,
    liveUrl: "https://waivers.micsscbs.in",
    githubUrl: null,
  },
  {
    id: 1,
    title: "TEDxSSCBS Website",
    description:
      "A responsive event website developed for TEDx, providing visitors with essential event information, updates and details in a clean and accessible interface",
    technologies: ["React", "CSS"],
    image: Ted,
    liveUrl: "https://tedxsscbs.vercel.app",
    githubUrl: null,
  },
];

const SectionTitle = ({ title, description }) => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base sm:leading-8">
        {description}
      </p>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const radiusStyle = index % 2 === 0 ? "rounded-[2rem_0.5rem_2rem_0.5rem]" : "rounded-[0.5rem_2rem_0.5rem_2rem]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`flex flex-col justify-between overflow-hidden border border-transparent bg-transparent p-5 sm:p-7 ${radiusStyle}`}
    >
      <div>
        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
          <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="mt-4 flex items-center justify-between gap-2">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">
            {project.title}
          </h3>
          <div className="flex items-center gap-3">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <FiGithub size={18} />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                <FiArrowUpRight size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="mt-2.5 text-xs leading-relaxed text-zinc-400 sm:text-sm sm:leading-6">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology}
              className="rounded-md border border-white/8 bg-white/3 px-2.5 py-1 text-[10px] font-medium text-zinc-400 sm:text-xs"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {

  return (
    <section id="projects"
      className="relative z-10 w-full overflow-hidden bg-transparent px-5 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          title="Things I've built"
          description="A selection of web applications and software projects I've designed and developed"
        />
        <div className="mt-14 grid gap-6 sm:mt-20 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;