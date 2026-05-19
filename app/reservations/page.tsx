"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, Users, CheckCircle, Phone, MessageCircle } from "lucide-react";

const occasions = [
  "Regular Dining",
  "Birthday Celebration",
  "Anniversary",
  "Business Meeting",
  "Family Gathering",
  "Date Night",
  "Group Event",
  "Other",
];

const timeSlots = [
  "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM",
];

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "Regular Dining",
    requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop&auto=format"
            alt="Reservations hero"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E]/85 via-[#2d1a0e]/80 to-[#1E1E1E]/90" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Reserve a <span className="gradient-text">Table</span> 🍽️
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              Book your spot at Gofoodie — for any occasion, any day
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-[#FFF4E8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-3xl p-8 shadow-sm"
                  >
                    <h2 className="text-2xl font-black text-[#1E1E1E] mb-6">
                      Make a Reservation
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="09X XXX XXXX"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors"
                        />
                      </div>

                      {/* Date & Time */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                            <Calendar size={14} className="inline mr-1" />
                            Date *
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                            min={today}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                            <Clock size={14} className="inline mr-1" />
                            Time *
                          </label>
                          <select
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors bg-white"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Guests & Occasion */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                            <Users size={14} className="inline mr-1" />
                            Number of Guests *
                          </label>
                          <select
                            name="guests"
                            value={form.guests}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors bg-white"
                          >
                            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                              <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                            Occasion
                          </label>
                          <select
                            name="occasion"
                            value={form.occasion}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors bg-white"
                          >
                            {occasions.map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Special Requests */}
                      <div>
                        <label className="block text-sm font-semibold text-[#1E1E1E] mb-1.5">
                          Special Requests
                        </label>
                        <textarea
                          name="requests"
                          value={form.requests}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Any dietary requirements, special arrangements, or notes..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full orange-gradient text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:scale-[1.02] transition-all duration-200"
                      >
                        Confirm Reservation 🎉
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-3xl p-12 shadow-sm text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle size={48} className="text-[#6BA368]" />
                    </motion.div>
                    <h2 className="text-3xl font-black text-[#1E1E1E] mb-3">
                      Reservation Confirmed! 🎉
                    </h2>
                    <p className="text-[#B0B0B0] text-lg mb-2">
                      Thank you, <span className="text-[#FF6B35] font-semibold">{form.name}</span>!
                    </p>
                    <p className="text-[#5C4033] mb-6">
                      Your table for <strong>{form.guests} guests</strong> on{" "}
                      <strong>{form.date}</strong> at <strong>{form.time}</strong> is reserved.
                    </p>
                    <p className="text-[#B0B0B0] text-sm mb-8">
                      We&apos;ll call you at <strong>{form.phone}</strong> to confirm. See you soon!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", date: "", time: "", guests: "2", occasion: "Regular Dining", requests: "" }); }}
                        className="orange-gradient text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                      >
                        Make Another Reservation
                      </button>
                      <a
                        href="tel:0975111444"
                        className="flex items-center justify-center gap-2 border-2 border-[#FF6B35] text-[#FF6B35] px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors"
                      >
                        <Phone size={16} />
                        Call Us
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#1E1E1E] text-lg mb-4">📋 Reservation Info</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Hours", value: "7:00 AM – 11:30 PM" },
                    { label: "Days", value: "Monday – Sunday" },
                    { label: "Max Group", value: "Up to 20 guests" },
                    { label: "Confirmation", value: "Via phone call" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-[#B0B0B0]">{label}</span>
                      <span className="font-semibold text-[#1E1E1E]">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#1E1E1E] text-lg mb-4">📞 Prefer to Call?</h3>
                <p className="text-[#B0B0B0] text-sm mb-4">
                  Call or WhatsApp us directly to make your reservation
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:0975111444"
                    className="flex items-center gap-3 orange-gradient text-white px-4 py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-transform"
                  >
                    <Phone size={16} />
                    097 511 1444
                  </a>
                  <a
                    href="https://wa.me/251975111444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-transform"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
                  </a>
                </div>
              </motion.div>

              {/* Occasions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-2xl p-6 text-white"
              >
                <h3 className="font-bold text-xl mb-3">🎉 Special Events</h3>
                <p className="text-white/80 text-sm mb-4">
                  Planning a birthday, anniversary, or corporate event? We&apos;ll make it special!
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Birthday 🎂", "Anniversary 💑", "Corporate 💼", "Graduation 🎓"].map((tag) => (
                    <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
