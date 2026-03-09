"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Map, Navigation, Send } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-onyx-black min-h-screen pt-32 pb-24 text-[#C4C8C9] relative flex flex-col justify-center overflow-hidden">
      {/* Minimal Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <section className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE: Heading & Contact Info */}
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-8 lg:pr-10 text-left"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-kaushan italic text-white leading-[1.1] mb-6">
                Contact Us
              </h1>
              <p className="text-base text-[#C4C8C9] font-sans font-light tracking-wide leading-relaxed max-w-sm">
                Not sure what you need? The team at Simmer Restaurant will be
                happy to listen to you and suggest dining experiences or private
                event ideas you hadn&apos;t considered.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              <a
                href="mailto:info@mysimmer.com"
                className="flex items-center gap-4 group w-fit"
              >
                <Mail className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
                <span className="text-sm font-light text-white group-hover:text-gold transition-colors tracking-wide">
                  info@mysimmer.com
                </span>
              </a>
              <a
                href="tel:09163891140"
                className="flex items-center gap-4 group w-fit"
              >
                <Phone className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
                <span className="text-sm font-light text-white group-hover:text-gold transition-colors tracking-wide">
                  Support: (+234) 916 389 1140
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Dark Form Card */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-4xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md"
          >
            {/* Top Right Decorative Corner Lines (CSS effect matching inspiration but adopting brand styling) */}
            <div className="absolute top-0 right-0 w-40 h-40 border-b border-l border-white/10 rounded-bl-[100px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-white/10 rounded-bl-[80px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-white/10 rounded-bl-[60px] pointer-events-none"></div>

            <h2 className="text-2xl md:text-3xl font-sans text-white mb-10 leading-snug">
              We&apos;d love to hear from you! <br />
              <span className="font-medium text-gold tracking-tight">
                Let&apos;s get in touch
              </span>
            </h2>

            {submitStatus === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 text-emerald-400 gap-4">
                <Send className="w-12 h-12 mb-2" />
                <h4 className="text-xl font-medium text-white">
                  Message sent successfully!
                </h4>
                <p className="font-light text-sm text-[#C4C8C9]">
                  Thank you for reaching out. Our team will get back to you
                  shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-6 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/20 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium tracking-widest text-[#C4C8C9] uppercase ml-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-hidden focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-light"
                    />
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-medium tracking-widest text-[#C4C8C9] uppercase ml-1"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 916 389 1140"
                      className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-hidden focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-light placeholder:text-white/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium tracking-widest text-[#C4C8C9] uppercase ml-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-white/40" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="info@mysimmer.com"
                      className="bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 w-full text-sm text-white focus:outline-hidden focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-light placeholder:text-white/20"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium tracking-widest text-[#C4C8C9] uppercase ml-1"
                  >
                    Your Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    rows={4}
                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-hidden focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all font-light placeholder:text-white/20 resize-none"
                  />
                </div>

                {submitStatus === "error" && (
                  <p className="text-red-400 text-xs font-medium">
                    Failed to send message. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gold text-onyx-black hover:bg-white self-start px-8 py-3.5 rounded-xl text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 disabled:opacity-50 mt-2 shadow-lg shadow-gold/20"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactScreen;
