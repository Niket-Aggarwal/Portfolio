import React, { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled((prev) => {
        const next = window.scrollY > 40;
        return prev === next ? prev : next;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center p-4 sm:p-5">
        <nav className={`pointer-events-auto flex items-center justify-between transition-all duration-500 cubic-bezier(0.16,1,0.3,1)
            ${scrolled
            ? "w-full max-w-4xl rounded-full border border-white/10 bg-[#0a0a0a]/80 px-4 py-2.5 shadow-2xl shadow-black/80 backdrop-blur-xl"
            : "w-full max-w-6xl bg-transparent px-2 py-2"
          }
          `}
        >
          <button onClick={() => scrollTo("home")} aria-label="Niket Aggarwal Home"
            className="group cursor-pointer flex items-center gap-2.5 rounded-full p-1 text-left transition-all duration-300 focus-visible:ring-1 focus-visible:ring-white"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/8
                text-xs font-bold tracking-widest text-white transition-all duration-300
                group-hover:border-white/40 group-hover:bg-white/15"
            >
              NA
            </span>
            <span className="text-sm font-semibold tracking-tight text-white transition-opacity duration-300">
              Niket Aggarwal
            </span>
          </button>
          <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/2 p-1 lg:flex">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <button key={link.id} onClick={() => scrollTo(link.id)}
                  className={`group cursor-pointer relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300
                    ${isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span
                    className={`absolute inset-0 z-0 rounded-full bg-white/8 transition-all duration-200
                      ${isActive
                        ? "bg-white/12 opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <a href="/Niket_Aggarwal.pdf" target="_blank" rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full border border-white bg-white px-4 py-1.5
                text-xs font-semibold text-black shadow-md shadow-white/5 transition-all duration-300
                hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-lg
                active:translate-y-0 lg:inline-flex"
            >
              <span>Resume</span>
              <FiArrowUpRight size={13} />
            </a>
            <button onClick={() => setMobileOpen(true)} aria-label="Open mobile menu" aria-expanded={mobileOpen}
              className="cursor-pointer p-1 text-white transition-transform duration-200 hover:scale-110 active:scale-95 lg:hidden"
            >
              <FiMenu size={22} />
            </button>
          </div>
        </nav>
      </header>
      <div onClick={() => setMobileOpen(false)} aria-hidden="true"
        className={`fixed inset-0 z-60 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
          }
        `}
      />
      <aside aria-label="Mobile Navigation"
        className={`fixed right-0 top-0 z-70 cursor-pointer flex h-full w-[82vw] max-w-xs flex-col
          border-l border-white/10 bg-[#080808]/95 p-6 shadow-2xl backdrop-blur-2xl
          transition-transform duration-400 ease-out lg:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xs font-bold text-white">
              NA
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">
              Niket Aggarwal
            </span>
          </div>
          <button onClick={() => setMobileOpen(false)} aria-label="Close mobile menu"
              className="cursor-pointer p-1 text-white transition-transform duration-200 hover:scale-110 active:scale-95 lg:hidden"
            >
            <FiX size={18} />
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-1">
          {links.map((link, index) => {
            const isActive = active === link.id;
            return (
              <button key={link.id} onClick={() => scrollTo(link.id)}
                style={{
                  transitionDelay: mobileOpen
                    ? `${index * 50 + 100}ms`
                    : "0ms",
                }}
                className={`group cursor-pointer flex items-center justify-between rounded-xl px-4 py-3
                  text-left text-sm font-medium transition-all duration-300
                  ${mobileOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                  }
                  ${isActive
                    ? "bg-white/10 font-semibold text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <span>{link.name}</span>
              </button>
            );
          })}
        </nav>
        <div className="mt-4 px-1">
          <a href="/Niket_Aggarwal.pdf" target="_blank" rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white
              bg-white px-4 py-2.5 text-xs font-semibold text-black
              transition-all duration-200 hover:bg-zinc-200"
          >
            <span>Resume</span>
            <FiArrowUpRight size={14} />
          </a>
        </div>
        <div className="mt-auto border-t border-white/10 pt-6">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-widest text-zinc-500">
            Find me online
          </p>
          <div className="grid grid-cols-2 gap-2">
            <a href="https://github.com/Niket-Aggarwal" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/10
                bg-white/3 px-3 py-2 text-xs font-medium text-zinc-300
                transition-all duration-200 hover:border-white/30
                hover:bg-white/8 hover:text-white"
            >
              <FiGithub size={15} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/niket-aggarwal-11785038a/" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/10
                bg-white/3 px-3 py-2 text-xs font-medium text-zinc-300
                transition-all duration-200 hover:border-white/30
                hover:bg-white/8 hover:text-white"
            >
              <FiLinkedin size={15} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;