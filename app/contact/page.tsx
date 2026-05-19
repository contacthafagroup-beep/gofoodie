"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

const businessHours = [
  { day: "Monday", hours: "7:00 AM – 11:30 PM" },
  { day: "Tuesday", hours: "7:00 AM – 11:30 PM" },
  { day: "Wednesday", hours: "7:00 AM – 11:30 PM" },
  { day: "Thursday", hours: "7:00 AM – 11:30 PM" },
  { day: "Friday", hours: "7:00 AM – 11:30 PM" },
  { day: "Saturday", hours: "7:00 AM – 11:30 PM" },
  { day: "Sunday", hours: "7:00 AM – 11:30 PM" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&h=600&fit=crop&auto=format"
            alt="Contact hero"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E]/85 via-[#2d1a0e]/80 to-[#1E1E1E]/90" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Get in <span className="gradient-text">Touch</span> 👋
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              We&apos;d love to hear from you — reach out anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "097 511 1444",
                href: "tel:0975111444",
                color: "bg-orange-50 text-[#FF6B35]",
                btnColor: "orange-gradient text-white",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "+251 975 111 444",
                href: "https://wa.me/251975111444",
                color: "bg-green-50 text-[#6BA368]",
                btnColor: "bg-[#25D366] text-white",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: "Tulu Dimtu, Addis Ababa",
                href: "#map",
                color: "bg-blue-50 text-blue-500",
                btnColor: "bg-blue-500 text-white",
              },
            ].map(({ icon: Icon, title, value, href, color, btnColor }) => (
              <motion.a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-[#B0B0B0] text-xs font-medium">{title}</p>
                  <p className="font-bold text-[#1E1E1E] text-sm">{value}</p>
                </div>
                <div className={`${btnColor} text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Contact
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#FFF4E8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-black text-[#1E1E1E] mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Full name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="09X XXX XXXX"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                          Subject *
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option>General Inquiry</option>
                          <option>Reservation</option>
                          <option>Delivery Question</option>
                          <option>Feedback</option>
                          <option>Event Booking</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="How can we help you?"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full orange-gradient text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                      >
                        <Send size={18} />
                        Send Message
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                    >
                      <CheckCircle size={40} className="text-[#6BA368]" />
                    </motion.div>
                    <h3 className="text-2xl font-black text-[#1E1E1E] mb-2">Message Sent! ✅</h3>
                    <p className="text-[#B0B0B0] mb-6">
                      Thanks <span className="text-[#FF6B35] font-semibold">{form.name}</span>! We&apos;ll get back to you soon.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", subject: "", message: "" }); }}
                      className="orange-gradient text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#1E1E1E] text-lg mb-4">📍 Find Us</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <MapPin size={18} className="text-[#FF6B35] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#1E1E1E] text-sm">Gofoodie Ethiopia</p>
                      <p className="text-[#B0B0B0] text-sm">Tulu Dimtu, Addis Ababa</p>
                      <p className="text-[#B0B0B0] text-sm">Ethiopia 1976</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={18} className="text-[#FF6B35] flex-shrink-0" />
                    <a href="tel:0975111444" className="text-[#1E1E1E] text-sm font-semibold hover:text-[#FF6B35] transition-colors">
                      097 511 1444
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#1E1E1E] text-lg mb-4">
                  <Clock size={16} className="inline mr-2 text-[#FF6B35]" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {businessHours.map(({ day, hours }) => (
                    <div
                      key={day}
                      className={`flex justify-between text-sm py-1.5 px-2 rounded-lg ${
                        today === day ? "bg-orange-50 font-semibold" : ""
                      }`}
                    >
                      <span className={today === day ? "text-[#FF6B35]" : "text-[#5C4033]"}>
                        {day} {today === day && "✓"}
                      </span>
                      <span className={today === day ? "text-[#FF6B35]" : "text-[#B0B0B0]"}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#1E1E1E] text-lg mb-4">Follow Us</h3>
                <div className="space-y-3">
                  {[
                    { icon: <InstagramIcon />, label: "@gofoodie_ethiopia", href: "#", color: "bg-pink-50 text-pink-500" },
                    { icon: <FacebookIcon />, label: "Gofoodie Ethiopia", href: "#", color: "bg-blue-50 text-blue-600" },
                    { icon: <YoutubeIcon />, label: "Gofoodie Ethiopia", href: "#", color: "bg-red-50 text-red-500" },
                    { icon: <MessageCircle size={16} />, label: "WhatsApp Us", href: "https://wa.me/251975111444", color: "bg-green-50 text-[#6BA368]" },
                  ].map(({ icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:bg-gray-50 rounded-xl p-2 transition-colors group"
                    >
                      <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center`}>
                        {icon}
                      </div>
                      <span className="text-sm font-medium text-[#1E1E1E] group-hover:text-[#FF6B35] transition-colors">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="bg-white py-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg"
            style={{ height: "380px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.8!3d8.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTulu%20Dimtu%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gofoodie Ethiopia Location - Tulu Dimtu, Addis Ababa"
            />
          </motion.div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com/?q=Tulu+Dimtu+Addis+Ababa+Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 orange-gradient text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg"
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
