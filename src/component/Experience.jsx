import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const EXPERIENCE_DATA = [
  {
    id: 1,
    period: "2025",
    role: "High School Graduate",
    category: "Education",
    description:
      "completed schooling from Hansraj Smarak Sr. Sec. School with background of Math, Physics, Chemistry, English and Compter Science",
    highlights: ["Computer Science", "Science & Math"],
    side: "left",
  },
  {
    id: 2,
    period: "2025-present",
    role: "Bachelor of Science (Honours) in Computer Science",
    category: "Higher Education",
    description:
      "currently pursuing Bachelor of Science (Honours) in Computer Science, building strong foundation in programming, algorithms, and software development",
    highlights: ["Data Structures", "Problem Solving", "Web Development"],
    side: "right",
  },
  {
    id: 3,
    period: "2025 — Present",
    role: "Society Member & Event Contributor",
    category: "Community",
    description:
      "contributing as an active member of a college society by supporting the organization of student hackathons, campus events and TEDx sessions. Collaborating with teams to manage event activities and engage with the student community",
    highlights: ["Event Coordination", "Team Collaboration", "Community Engagement"],
    side: "left",
  },
  {
    id: 4,
    period: "2025 — Present",
    role: "Freelance Developer",
    category: "Current Focus",
    description:
      "building web applications using React, Node.js, Express, and MongoDB. Focused on clean architecture, responsive designs, and scalable backend services.",
    highlights: ["MERN Stack", "REST APIs", "Tailwind CSS"],
    side: "right",
  },
];

const SectionTitle = ({ number, title, description }) => {
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

const ExperienceCard = ({ experience }) => {
  const isRight = experience.side === "right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full pl-10 md:w-[calc(50%-2.5rem)] md:pl-0 ${isRight ? "md:ml-auto" : "md:mr-auto"
        }`}
    >
      <div className="absolute left-1.5 top-6 h-3 w-3 -translate-x-1/2 rounded-full border border-white/60 bg-zinc-950 shadow-[0_0_10px_rgba(255,255,255,0.4)] md:hidden" />
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative rounded-2xl border border-transparent bg-transparent p-5 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.03] hover:shadow-2xl sm:p-7"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-zinc-400">
            {experience.period}
          </span>
          <span className="rounded-full border border-transparent bg-white/4 px-2.5 py-0.5 text-[10px] font-medium text-zinc-400 transition-colors duration-300 group-hover:border-white/10 group-hover:text-zinc-200">
            {experience.category}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-white sm:text-xl">
          {experience.role}
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-zinc-400 sm:text-sm sm:leading-6">
          {experience.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 pt-1">
          {experience.highlights.map((item, idx) => (
            <span key={idx}
              className="rounded-md border border-transparent bg-white/3 px-2 py-0.5 text-[11px] font-medium text-zinc-400 transition-colors duration-300 group-hover:border-white/10 group-hover:bg-white/6 group-hover:text-zinc-200">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const circleY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section id="experience"
      className="relative z-10 w-full overflow-hidden bg-transparent px-5 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          title="Where it all started"
          description="My journey through education, learning full-stack development, organizing events and building web applications"
        />
        <div ref={timelineRef} className="relative mx-auto mt-14 max-w-5xl pb-6 sm:mt-20">
          <div className="absolute bottom-12 left-1.5 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute bottom-12 left-1.5 top-0 w-px bg-gradient-to-b from-white via-white/80 to-white/20 will-change-transform md:left-1/2 md:-translate-x-1/2"
          />
          <motion.div
            style={{ top: circleY, x: "-50%" }}
            className="hidden md:block absolute left-1/2 z-20 h-4 w-4 rounded-full border-2 border-white bg-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.6)] will-change-transform"
          />
          <div className="relative space-y-8 sm:space-y-12">
            {EXPERIENCE_DATA.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;