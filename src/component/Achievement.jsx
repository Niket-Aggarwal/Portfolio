import { motion } from "motion/react";
import { FiAward, FiArrowUpRight, FiStar } from "react-icons/fi";
import { RiTrophyLine, RiMedalLine } from "react-icons/ri";

const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "Hackathon Winner / Finalist",
    organization: "National Tech Hackathon",
    date: "2025",
    category: "Hackathon",
    icon: RiTrophyLine,
    color: "#F59E0B",
    description:
      "Secured top rank by developing an innovative full-stack solution under 36 hours, solving real-world challenges with high scalability and sleek UI.",
    highlights: ["MERN Stack", "Rapid Prototyping", "Team Lead"],
    link: null,
  },
  {
    id: 2,
    title: "Full Stack Development Internship",
    organization: "Tech Organization / Startup",
    date: "2025",
    category: "Internship",
    icon: FiAward,
    color: "#38BDF8",
    description:
      "Engineered responsive user interfaces and robust RESTful API endpoints, optimizing database queries and collaborating in agile sprint cycles.",
    highlights: ["React", "Node.js", "API Integration", "Agile"],
    link: null,
  },
  {
    id: 3,
    title: "Leadership & Community Recognition",
    organization: "TEDx & Technical Societies",
    date: "2025",
    category: "Leadership",
    icon: RiMedalLine,
    color: "#34D399",
    description:
      "Led digital initiatives and collaborated across cross-functional teams to build high-traffic web portals and streamline event management operations.",
    highlights: ["Event Tech", "Team Collaboration", "Operations"],
    link: null,
  },
  {
    id: 4,
    title: "Problem Solving & DSA Milestones",
    organization: "Competitive Coding Platforms",
    date: "2024 - Present",
    category: "Milestone",
    icon: FiStar,
    color: "#A78BFA",
    description:
      "Solved 200+ algorithmic problems across Data Structures & Algorithms, mastering algorithmic thinking, data structures, and code optimization.",
    highlights: ["Data Structures", "Algorithms", "C++", "JavaScript"],
    link: null,
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

const AchievementCard = ({ achievement, index }) => {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/8 bg-[#171d28]/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-[#171d28]/70 hover:shadow-2xl hover:shadow-black/50 sm:p-7"
    >
      {/* Subtle background glow on hover */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ backgroundColor: achievement.color }}
      />

      <div>
        {/* Header: Icon, Category Badge & Date */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 shadow-inner transition-transform duration-300 group-hover:scale-110"
            >
              <Icon className="h-5 w-5" style={{ color: achievement.color }} />
            </div>
            <div>
              <span className="rounded-full border border-white/8 bg-white/4 px-2.5 py-0.5 text-[10px] font-medium text-zinc-300 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white">
                {achievement.category}
              </span>
              <p className="mt-0.5 text-xs text-zinc-500 font-medium">
                {achievement.organization}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-zinc-400">
              {achievement.date}
            </span>
            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View details for ${achievement.title}`}
                className="rounded-lg p-1 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FiArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-white sm:text-xl">
          {achievement.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-xs leading-relaxed text-zinc-400 sm:text-sm sm:leading-6">
          {achievement.description}
        </p>
      </div>

      {/* Highlights / Tags */}
      <div className="mt-6 flex flex-wrap gap-2 pt-2">
        {achievement.highlights.map((highlight, idx) => (
          <span
            key={idx}
            className="rounded-md border border-white/6 bg-white/3 px-2.5 py-1 text-[11px] font-medium text-zinc-400 transition-colors duration-300 group-hover:border-white/10 group-hover:bg-white/6 group-hover:text-zinc-200"
          >
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Achievement = () => {
  return (
    <section
      id="achievements"
      className="relative z-10 w-full overflow-hidden bg-transparent px-5 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          title="Honors & Achievements"
          description="A track record of hackathons, milestones, technical contributions, and recognitions"
        />

        <div className="mt-14 grid gap-6 sm:mt-20 md:grid-cols-2">
          {ACHIEVEMENTS_DATA.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
