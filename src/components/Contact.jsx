import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Target email and EmailJS credentials read dynamically from environment variables (.env)
const targetEmail =
  import.meta.env.VITE_EMAIL ||
  import.meta.env.VITE_TARGET_EMAIL ||
  import.meta.env.VITE_CONTACT_EMAIL ||
  "";

const emailServiceId =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_3on2h5m";
const emailTemplateId =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_u7zna1c";
const emailPublicKey =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Nj9QaumWahmMlt_1E";

export default function Contact() {
  const [form, setForm] = useState({
    sender: "",
    name: "",
    message: "",
    subject: "",
  });
  const [status, setStatus] = useState("");
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .sendForm(emailServiceId, emailTemplateId, formRef.current, {
        publicKey: emailPublicKey,
      })
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ sender: "", name: "", message: "", subject: "" });
        },
        () => {
          setStatus("Failed to send message. Please reach out via LinkedIn or GitHub.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-dark-lighter/20 relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center w-full">
        {/* Section Title */}
        <div className="section-title mb-14 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
            initial={{ opacity: 0, y: -16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.div
            className="underline h-1 w-16 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-xs font-mono uppercase tracking-widest text-accent mt-4">
            Software Development · Python & Intelligent Systems · Systems Exploration
          </p>
        </div>

        <motion.div
          ref={ref}
          className="w-full max-w-5xl grid lg:grid-cols-12 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Direct channels & info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-dark/75 rounded-2xl border border-slate-800/70 p-5 sm:p-6 md:p-8 space-y-6 shadow-dark-md">
              <h3 className="text-lg font-bold text-darkText-primary font-mono">
                Direct Channels
              </h3>
              <p className="text-sm text-darkText-secondary leading-relaxed">
                I'm actively interested in software engineering, Python development, and intelligent systems opportunities. Feel free to reach out directly through any of these platforms:
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="https://github.com/Sudharshan-3904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-dark-lighter/75 border border-slate-800/80 hover:border-primary/40 text-sm text-darkText-secondary hover:text-darkText-primary transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <FiGithub className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-darkText-muted block">GitHub</span>
                    <span className="font-mono text-xs text-darkText-primary">github.com/Sudharshan-3904</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/sudharshan-m-prabhu-384a421b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-dark-lighter/75 border border-slate-800/80 hover:border-primary/40 text-sm text-darkText-secondary hover:text-darkText-primary transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <FiLinkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-darkText-muted block">LinkedIn</span>
                    <span className="font-mono text-xs text-darkText-primary">Sudharshan M Prabhu</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-dark/75 rounded-2xl border border-slate-800/70 p-5 sm:p-6 md:p-8 shadow-dark-md space-y-5"
            >
              <h3 className="text-lg font-bold text-darkText-primary font-mono mb-2">
                Send a Message
              </h3>

              {status && (
                <div
                  className={`p-3 rounded-lg text-xs font-mono ${
                    status.includes("successfully")
                      ? "bg-blue-950/40 text-blue-300 border border-blue-800/60"
                      : "bg-red-950/40 text-red-400 border border-red-800/60"
                  }`}
                >
                  {status}
                </div>
              )}

              {/* Target recipient email loaded dynamically from .env */}
              {targetEmail && (
                <input type="hidden" name="email" value={targetEmail} />
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-darkText-muted text-xs font-mono mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-lighter/75 border border-slate-800/80 rounded-lg text-darkText-primary py-2.5 px-3.5 text-sm outline-none focus:border-primary transition-colors placeholder:text-darkText-muted"
                    placeholder="e.g. Alex Chen"
                  />
                </div>
                <div>
                  <label className="block text-darkText-muted text-xs font-mono mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="sender"
                    value={form.sender}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-lighter/75 border border-slate-800/80 rounded-lg text-darkText-primary py-2.5 px-3.5 text-sm outline-none focus:border-primary transition-colors placeholder:text-darkText-muted"
                    placeholder="alex@domain.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-darkText-muted text-xs font-mono mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-lighter/75 border border-slate-800/80 rounded-lg text-darkText-primary py-2.5 px-3.5 text-sm outline-none focus:border-primary transition-colors placeholder:text-darkText-muted"
                  placeholder="Python & AI Systems Opportunity"
                />
              </div>

              <div>
                <label className="block text-darkText-muted text-xs font-mono mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-dark-lighter/75 border border-slate-800/80 rounded-lg text-darkText-primary py-2.5 px-3.5 text-sm outline-none focus:border-primary transition-colors resize-none placeholder:text-darkText-muted"
                  placeholder="Share details about the role, project, or collaboration..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-darkText-primary bg-primary hover:bg-primary-dark transition-all duration-200 shadow-sm shadow-primary/30"
              >
                <FiSend className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
