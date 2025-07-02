import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
const TARGET_EMAIL = "sudharshanvalar@gmail.com";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    sender: "",
    name: "",
    message: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!form.name || !form.sender || !form.message) return;
  //   const mailtoLink = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(
  //     `Message from ${form.name}`
  //   )}&body=${encodeURIComponent(
  //     `Name: ${form.name}\nEmail: ${form.sender}\n\n${form.message}`
  //   )}`;
  //   window.location.href = mailtoLink;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_pyuvbub", "template_u7zna1c", form.current, {
        publicKey: "portfolio_gmail",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-dark-lighter relative overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute right-0 top-20 w-64 h-64 bg-primary opacity-5 blur-3xl -z-10" />
      <div className="absolute left-10 bottom-10 w-32 h-32 bg-accent opacity-5 blur-2xl -z-10" />
      <div className="absolute left-1/4 top-1/3 w-16 h-16 bg-dark-lightest rounded-full -z-10" />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptLTI0IDBoNnY2aC02di02em0wLTEyaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02em0tMjQtMTJoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="section-title">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Contact <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div
            className="underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left: Form Fields */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-dark-lighter rounded-xl shadow-dark-md p-8"
            variants={itemVariants}
          >
            <div>
              <label className="block text-darkText-secondary text-sm mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-primary focus:border-accent text-white py-1 px-0 outline-none transition-colors placeholder-darkText-secondary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-darkText-secondary text-sm mb-1">
                E-mail
              </label>
              <input
                type="email"
                name="sender"
                value={form.sender}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-primary focus:border-accent text-white py-1 px-0 outline-none transition-colors placeholder-darkText-secondary"
                placeholder="your@email.com"
              />
            </div>
            <motion.button
              type="submit"
              className="btn btn-outline flex items-center justify-center gap-2 px-6 py-3 rounded-md text-center w-full transition-transform"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiSend className="w-5 h-5" />
              SEND
            </motion.button>
          </motion.form>

          {/* Right: Message Box */}
          <motion.div
            className="flex flex-col bg-dark rounded-xl shadow-dark-md p-8 h-full"
            variants={itemVariants}
          >
            <label className="block text-darkText-secondary text-sm mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full h-full bg-transparent border-b-2 border-primary focus:border-accent text-white py-1 px-0 outline-none transition-colors min-h-[120px] resize-none placeholder-darkText-secondary"
              placeholder="Write text here..."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
