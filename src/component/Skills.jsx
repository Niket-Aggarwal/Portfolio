import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SiCplusplus, SiPython, SiJavascript, SiReact, SiVite, SiTailwindcss, SiHtml5, SiCss, SiNodedotjs, SiExpress, SiDjango } from "react-icons/si";
import { SiMongodb, SiMysql, SiGit, SiGithub, SiPostman, SiFigma, SiVercel, SiRender, SiGoogle, SiFastapi } from "react-icons/si";
import { FiGlobe, FiLayout, FiServer, FiDatabase, FiTool, FiUploadCloud } from "react-icons/fi";

const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Languages",
    icon: FiGlobe,
    skills: [
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: FiLayout,
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Vite", Icon: SiVite, color: "#A259FF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Frameworks",
    icon: FiServer,
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
      { name: "Django", Icon: SiDjango, color: "#44B78B" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" }
    ]
  },
  {
    id: "database",
    title: "Database & Cloud",
    icon: FiDatabase,
    skills: [
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" }
    ]
  },
  {
    id: "deployment",
    title: "Deployment & Optimization",
    icon: FiUploadCloud,
    skills: [
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
      { name: "Render", Icon: SiRender, color: "#46E3B7" },
      { name: "SEO", Icon: SiGoogle, color: "#4285F4" }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: FiTool,
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" }
    ]
  },
];

const SkillCard = ({ skill, index }) => {
  const Icon = skill.Icon;
  return (
    <motion.div layout
      initial={{ opacity: 0, scale: 0.8, y: 25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -15 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.04 }}
      className="group flex flex-col items-center justify-center"
    >
      <div
        className="relative flex h-18 w-18 items-center justify-center rounded-[1.25rem] border border-white/8 bg-[#171d28] shadow-lg shadow-black/20 transition-all duration-300 group-hover:border-white/20 sm:h-24 sm:w-24"
      >
        <div className="absolute inset-2 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30"
          style={{ backgroundColor: skill.color }}
        />
        <Icon className="relative z-10 h-9 w-9 sm:h-12 sm:w-12" style={{ color: skill.color }} />
      </div>
      <p className="mt-2.5 text-center text-[11px] font-medium text-zinc-500 transition-colors duration-300 group-hover:text-zinc-200 sm:mt-3 sm:text-sm">
        {skill.name}
      </p>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("languages");
  const activeData = SKILL_CATEGORIES.find((category) => category.id === activeCategory) || SKILL_CATEGORIES[0];
  const ActiveIcon = activeData.icon;

  return (
    <section id="skills" className="relative z-20 w-full overflow-hidden px-5">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tech Stack & Tools
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-3xl bg-white/1.5 backdrop-blur-sm sm:rounded-4xl"
        >
          <div className="flex flex-col lg:min-h-107.5 lg:flex-row">
            <div className="border-b border-white/[0.07] bg-white/1.5 p-3 lg:w-72 lg:shrink-0 lg:border-b-0 lg:border-r lg:p-5">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
                {SKILL_CATEGORIES.map((category) => {
                  const CategoryIcon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <button key={category.id} type="button" onClick={() => setActiveCategory(category.id)}
                      className={`relative flex min-h-12 items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-all duration-300
                        ${isActive ? "bg-white/9 text-white" : "bg-white/1.5 text-zinc-500 hover:bg-white/4 hover:text-zinc-300"}
                      `}
                    >
                      <CategoryIcon className={`h-4 w-4 shrink-0 ${isActive ? "text-white" : ""}`} />
                      <span className="text-[10px] font-medium leading-tight sm:text-xs">
                        {category.title}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeCategoryMobile"
                          className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-white"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="hidden lg:flex lg:flex-col lg:gap-2">
                {SKILL_CATEGORIES.map((category) => {
                  const CategoryIcon = category.icon;
                  const isActive = activeCategory === category.id;
                  return (
                    <button key={category.id} type="button"
                      onClick={() => setActiveCategory(category.id)}
                      className={`cursor-pointer group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300
                        ${isActive ? "bg-white/9 text-white" : "text-zinc-500 hover:bg-white/4 hover:text-zinc-300"}
                      `}
                    >
                      <CategoryIcon className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                      <span className="text-sm font-medium">
                        {category.title}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeCategoryDesktop"
                          className="absolute left-0 h-8 w-0.5 rounded-full bg-white"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex min-h-75 flex-1 flex-col justify-center p-5 sm:min-h-82.5 sm:p-10 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-7 flex items-center gap-3 sm:mb-8">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4">
                      <ActiveIcon className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div>
                      <p className="text-base font-semibold tracking-tight text-white sm:text-xl">
                        {activeData.title}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-7 min-[420px]:grid-cols-4 sm:gap-x-8 sm:gap-y-9 md:grid-cols-5">
                    {activeData.skills.map((skill, index) => (
                      <SkillCard key={`${activeData.id}-${skill.name}`} skill={skill} index={index} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;