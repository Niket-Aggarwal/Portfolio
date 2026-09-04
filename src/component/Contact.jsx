import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiArrowUpRight, FiSend, FiCheck, FiAlertCircle, FiLoader, } from "react-icons/fi";
import { sendContactForm } from "../utility/Work";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/niket-aggarwal-developer/",
    icon: FiLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/Niket-Aggarwal",
    icon: FiGithub,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/buddy.cyber/",
    icon: FiInstagram,
  },
  {
    name: "Email",
    handle: "21.xiia.niketaggarwal@gmail.com",
    url: "mailto:21.xiia.niketaggarwal@gmail.com",
    icon: FiMail,
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

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", title: "", reason: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  useEffect(() => {
    if (status.error || status.success) {
      const timer = setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: null, success: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status.error, status.success]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.reason.trim()) {
      newErrors.reason = "Description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
    if (status.success || status.error) {
      setStatus({ submitting: false, success: false, error: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setStatus({ submitting: true, success: false, error: null });
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      title: formData.title.trim(),
      reason: formData.reason.trim(),
    };
    try {
      const result = await sendContactForm(payload);
      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: "", email: "", title: "", reason: "" });
        setErrors({});
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: "Something went wrong. Please try again",
        });
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: "Something went wrong. Please try again",
      });
    }
  };

  return (
    <section id="contact"
      className="relative z-10 w-full overflow-hidden bg-transparent px-5 py-16 sm:py-24 pb-24 sm:pb-32 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle
          title="Let's build something together."
          description="Feel free to reach out for collaborations, project inquiries or just to say hello"
        />
        <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="rounded-[2rem_0.5rem_2rem_0.5rem] border border-white/8 bg-white/2 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Let's Connect</h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((item) => {
                  const IconComponent = item.icon;
                  const isExternal = item.url !== "#" && !item.url.startsWith("mailto:");
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/2 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/8">
                          <IconComponent size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{item.name}</p>
                          <p className="text-xs text-zinc-500">{item.handle || item.name}</p>
                        </div>
                      </div>
                      <FiArrowUpRight
                        size={18}
                        className="text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:col-span-7"
          >
            <div className="rounded-[0.5rem_2rem_0.5rem_2rem] border border-white/8 bg-white/2 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name"
                      className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-300"
                    >
                      Name
                    </label>
                    <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required
                      autoComplete="name" aria-invalid={errors.name ? "true" : "false"}
                      className={`w-full rounded-xl border bg-white/3 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition-all duration-300 ${errors.name
                        ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
                        : "border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/20"
                        }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <FiAlertCircle size={13} />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      required
                      autoComplete="email"
                      aria-invalid={errors.email ? "true" : "false"}
                      className={`w-full rounded-xl border bg-white/3 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition-all duration-300 ${errors.email
                        ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
                        : "border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/20"
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                        <FiAlertCircle size={13} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-title"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-300"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="contact-title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    aria-invalid={errors.title ? "true" : "false"}
                    className={`w-full rounded-xl border bg-white/3 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition-all duration-300 ${errors.title
                      ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
                      : "border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/20"
                      }`}
                  />
                  {errors.title && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <FiAlertCircle size={13} />
                      {errors.title}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-reason"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-300"
                  >
                    Description
                  </label>
                  <textarea
                    id="contact-reason"
                    name="reason"
                    rows={5}
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Tell me a little about your project, idea, or reason for reaching out..."
                    required
                    aria-invalid={errors.reason ? "true" : "false"}
                    className={`w-full resize-none rounded-xl border bg-white/3 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 transition-all duration-300 ${errors.reason
                      ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
                      : "border-white/10 hover:border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/20"
                      }`}
                  />
                  {errors.reason && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
                      <FiAlertCircle size={13} />
                      {errors.reason}
                    </p>
                  )}
                </div>

                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-sm text-emerald-300"
                  >
                    <FiCheck size={18} className="shrink-0 text-emerald-400" />
                    <span>Message submitted successfully.</span>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-sm text-red-300"
                  >
                    <FiAlertCircle size={18} className="shrink-0 text-red-400" />
                    <span>{status.error}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="group flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status.submitting ? (
                    <>
                      <FiLoader size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send message</span>
                      <FiSend size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        {/* Mobile Horizontal Social Links Footer */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center lg:hidden">
          <p className="mb-4 text-xs font-mono font-semibold uppercase tracking-widest text-zinc-400">
            Other platforms to contact
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            {SOCIAL_LINKS.map((item) => {
              const IconComponent = item.icon;
              const isExternal = item.url !== "#" && !item.url.startsWith("mailto:");
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-3.5 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <IconComponent size={14} className="text-white transition-transform group-hover:scale-110" />
                  <span>{item.name}</span>
                  <FiArrowUpRight size={12} className="text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;