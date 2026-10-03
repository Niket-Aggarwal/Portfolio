import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown, FiEye, FiX } from "react-icons/fi";
import CMID from "../assets/achievement/CampusMantriID.png";

const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    role: "Campus Mantri",
    organization: "GeeksforGeeks",
    period: "June 2026 - Present",
    image: CMID,
    certificate: null,
    hasCertificate: false,
    description:
      "Selected as a GeeksforGeeks Campus Mantri, contributing to the growth of the campus coding community through promotional activities, student engagement and awareness of technical resources and learning opportunities",
    points: [
      "Selected as a Campus Mantri for GeeksforGeeks, representing the platform within the college community",
      "Promoted GeeksforGeeks resources and technical learning opportunities among students",
      "Engaged with peers to encourage participation in coding activities, skill development and programming initiatives",
      "Supported community outreach and promotional campaigns to increase awareness and student participation"
    ],
    highlights: ["Community Outreach", "Promotional Activities", "Student Engagement"],
  }
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

const CertificateModal = ({ certificateImage, onClose }) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!certificateImage) return null;

  return createPortal(
    <div className="fixed inset-0 z-99999 flex items-center justify-center p-4 sm:p-8 touch-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-xl"
      />
      <button onClick={onClose} aria-label="Close certificate"
        className="fixed right-4 top-4 sm:right-8 sm:top-8 z-100000 cursor-pointer rounded-full border border-white/20 bg-black/80 p-2.5 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-110 hover:border-white/40 active:scale-95"
      >
        <FiX size={22} />
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-99999 flex max-h-[85vh] max-w-[92vw] sm:max-w-4xl items-center justify-center p-0"
      >
        <img src={certificateImage} alt="Certificate" className="max-h-[80vh] sm:max-h-[85vh] w-auto max-w-full rounded-xl object-contain drop-shadow-2xl" />
      </motion.div>
    </div>,
    document.body
  );
};

const AchievementCard = ({ achievement, index, isExpanded, onToggle, onOpenCertificate }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-transparent bg-transparent transition-all duration-300 md:hover:border-white/10 md:hover:bg-white/2"
    >
      <div className={`hidden md:flex items-center gap-6 lg:gap-10 p-5 sm:p-7 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
        <div className="w-5/12 shrink-0">
          <div className="relative flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-xl bg-transparent">
            <img src={achievement.image} alt={achievement.role} loading="lazy"
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex w-7/12 flex-col justify-center">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-white lg:text-2xl">
              {achievement.role}
            </h3>
            <span className="font-mono text-xs font-semibold tracking-wider text-zinc-400 shrink-0">
              {achievement.period}
            </span>
          </div>
          <p className="mt-1 text-xs font-medium text-zinc-400 sm:text-sm">
            {achievement.organization}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-zinc-400 sm:text-sm sm:leading-6">
            {achievement.description}
          </p>
          {achievement.points && (
            <ul className="mt-3 space-y-1.5">
              {achievement.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-500 group-hover:bg-zinc-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex flex-wrap gap-2">
              {achievement.highlights.map((tag, idx) => (
                <span key={idx}
                  className="rounded-md border border-transparent bg-white/3 px-2.5 py-1 text-[11px] font-medium text-zinc-400 transition-colors duration-300 group-hover:border-white/10 group-hover:bg-white/6 group-hover:text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            {achievement.hasCertificate && achievement.certificate && (
              <button onClick={() => onOpenCertificate(achievement.certificate)}
                className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
              >
                <span>View Certificate</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-3 p-4 text-left"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-transparent">
              <img src={achievement.image} alt={achievement.role} loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-bold text-white">
                {achievement.role}
              </h3>
              <div className="mt-0.5 flex items-center gap-2 text-xs text-zinc-400">
                <span className="truncate">{achievement.organization}</span>
                <span className="shrink-0 font-mono text-[11px] text-zinc-500">• {achievement.period}</span>
              </div>
            </div>
          </div>
          <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-zinc-400 transition-transform duration-300 ${isExpanded ? "rotate-180 text-white" : ""}`}>
            <FiChevronDown size={16} />
          </div>
        </button>
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden px-4 pb-5 pt-1"
            >
              <p className="text-xs leading-relaxed text-zinc-400">{achievement.description}</p>
              {achievement.points && (
                <ul className="mt-2.5 space-y-1.5">
                  {achievement.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-zinc-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {achievement.highlights.map((tag, idx) => (
                  <span key={idx} className="rounded-md border border-white/5 bg-white/3 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
              {achievement.hasCertificate && achievement.certificate && (
                <div className="mt-3.5 pt-1">
                  <button onClick={() => onOpenCertificate(achievement.certificate)}
                    className="cursor-pointer flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <span>View Certificate</span>
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Achievement = () => {
  const [selectedCertificateImage, setSelectedCertificateImage] = useState(null);
  const [expandedId, setExpandedId] = useState(ACHIEVEMENTS_DATA[0]?.id || null);

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="achievements"
      className="relative z-10 w-full overflow-hidden bg-transparent px-5 py-16 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          title="Milestones & Recognition"
          description="A showcase of hackathons, internships, leadership initiatives and competitive problem solving milestones"
        />
        <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
          {ACHIEVEMENTS_DATA.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} isExpanded={expandedId === achievement.id}
              onToggle={() => handleToggle(achievement.id)} onOpenCertificate={(img) => setSelectedCertificateImage(img)}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedCertificateImage && (
          <CertificateModal certificateImage={selectedCertificateImage} onClose={() => setSelectedCertificateImage(null)}/>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievement;