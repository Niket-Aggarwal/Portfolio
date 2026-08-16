import React from "react";

const particles = [
  { left: "-8%", delay: "-2s", duration: "8s", length: 80, opacity: 0.35 },
  { left: "-3%", delay: "-7s", duration: "11s", length: 110, opacity: 0.25 },
  { left: "2%", delay: "-13s", duration: "9s", length: 65, opacity: 0.4 },

  { left: "7%", delay: "-4s", duration: "10s", length: 95, opacity: 0.3 },
  { left: "12%", delay: "-10s", duration: "13s", length: 70, opacity: 0.25 },
  { left: "17%", delay: "-16s", duration: "8s", length: 115, opacity: 0.35 },

  { left: "22%", delay: "-1s", duration: "9s", length: 75, opacity: 0.35 },
  { left: "27%", delay: "-8s", duration: "12s", length: 105, opacity: 0.25 },
  { left: "32%", delay: "-14s", duration: "10s", length: 60, opacity: 0.3 },

  { left: "37%", delay: "-5s", duration: "11s", length: 100, opacity: 0.3 },
  { left: "42%", delay: "-12s", duration: "8s", length: 70, opacity: 0.35 },
  { left: "47%", delay: "-3s", duration: "10s", length: 115, opacity: 0.25 },

  { left: "52%", delay: "-9s", duration: "13s", length: 75, opacity: 0.35 },
  { left: "57%", delay: "-17s", duration: "9s", length: 90, opacity: 0.3 },
  { left: "62%", delay: "-6s", duration: "12s", length: 65, opacity: 0.3 },

  { left: "67%", delay: "-15s", duration: "9s", length: 110, opacity: 0.25 },
  { left: "72%", delay: "-2s", duration: "8s", length: 85, opacity: 0.35 },
  { left: "77%", delay: "-11s", duration: "11s", length: 120, opacity: 0.25 },

  { left: "82%", delay: "-4s", duration: "10s", length: 65, opacity: 0.3 },
  { left: "87%", delay: "-13s", duration: "13s", length: 115, opacity: 0.25 },
  { left: "92%", delay: "-1s", duration: "9s", length: 85, opacity: 0.35 },

  { left: "97%", delay: "-8s", duration: "12s", length: 105, opacity: 0.25 },
  { left: "102%", delay: "-16s", duration: "10s", length: 70, opacity: 0.3 },
];

const edgeParticles = [
  { left: "-12%", delay: "-5s", duration: "9s", length: 90, opacity: 0.3 },
  { left: "-10%", delay: "-14s", duration: "12s", length: 70, opacity: 0.25 },
  { left: "0%", delay: "-18s", duration: "11s", length: 105, opacity: 0.3 },

  { left: "100%", delay: "-6s", duration: "10s", length: 90, opacity: 0.3 },
  { left: "103%", delay: "-12s", duration: "13s", length: 75, opacity: 0.25 },
  { left: "108%", delay: "-19s", duration: "9s", length: 110, opacity: 0.3 },
];

const allParticles = [...particles, ...edgeParticles];

const Background = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.065),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(255,255,255,0.018),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.018),transparent_30%)]" />
      <div className="absolute inset-0">
        {allParticles.slice(0, 25).map((particle, index) => (
          <span key={`star-${index}`} className="absolute rounded-full bg-white"
            style={{
              left: particle.left,
              top: `${(index * 37) % 97}%`,
              width: index % 4 === 0 ? "2px" : "1px",
              height: index % 4 === 0 ? "2px" : "1px",
              opacity: particle.opacity * 0.65,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0">
        {allParticles.map((particle, index) => (
          <span key={`particle-${index}`} className="falling-particle absolute block"
            style={{
              left: particle.left,
              top: "-160px",
              width: `${particle.length}px`,
              height: "2px",
              opacity: particle.opacity,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
            }}
          >
            <span className="absolute inset-0 rounded-full"
              style={{
                background:"linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 20%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0.42) 88%, rgba(255,255,255,0.9) 100%)",
                filter: "blur(0.5px)",
              }}
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white"
              style={{
                width: "3px",
                height: "3px",
                boxShadow:"0 0 5px rgba(255,255,255,0.9), 0 0 12px rgba(255,255,255,0.45)",
              }}
            />
          </span>
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
};

export default Background;