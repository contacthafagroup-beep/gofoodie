"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";

const floatingFoods = [
  { emoji: "🍔", top: "15%", right: "12%", delay: 0 },
  { emoji: "☕", top: "25%", right: "5%", delay: 0.5 },
  { emoji: "🍕", bottom: "35%", right: "10%", delay: 1 },
  { emoji: "🥗", bottom: "20%", right: "4%", delay: 0.8 },
  { emoji: "🧃", top: "55%", right: "16%", delay: 1.2 },
  { emoji: "🍰", bottom: "45%", right: "20%", delay: 0.3 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Pure dark gradient — no image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#2d1a0e] to-[#5C4033]" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#FF6B35]/20 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#FF6B35]/15 blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[#6BA368]/10 blur-[80px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Floating food emojis — right side only, won't overlap text */}
      {floatingFoods.map((food, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl md:text-4xl select-none pointer-events-none z-10 hidden sm:block"
          style={{
            top: food.top,
            right: food.right,
            bottom: food.bottom,
          }}
          animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: food.delay,
            ease: "easeInOut",
          }}
        >
          {food.emoji}
        </motion.div>
      ))}

      {/* Main content — left-aligned on large screens, centered on mobile */}
      <div className="container-custom relative z-20 w-full pt-28 pb-16">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#6BA368] animate-pulse flex-shrink-0" />
            <span className="text-white/90 text-sm font-medium">
              Now Open · Tulu Dimtu, Addis Ababa
            </span>
            <span className="text-white/40 hidden md:block">·</span>
            <span className="text-[#FF6B35] text-sm font-semibold hidden md:block">
              7AM – 11:30PM
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-[1.0] mb-6"
          >
            Fresh Food.
            <br />
            <span className="gradient-text">Great Vibes.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/65 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Experience one of Addis Ababa&apos;s rising modern cafés — serving
            delicious meals, refreshing drinks, and unforgettable moments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 orange-gradient text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
            >
              Explore Menu
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/delivery"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Order Online
            </Link>
          </motion.div>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: Star, text: "4.9 Rating", sub: "500+ Reviews" },
              { icon: Clock, text: "Fast Delivery", sub: "30-45 min" },
              { icon: MapPin, text: "Tulu Dimtu", sub: "Addis Ababa" },
            ].map(({ icon: Icon, text, sub }) => (
              <div
                key={text}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3"
              >
                <div className="w-8 h-8 rounded-xl bg-[#FF6B35]/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{text}</p>
                  <p className="text-white/50 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col items-center gap-2 mt-16 w-full"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#FF6B35]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
