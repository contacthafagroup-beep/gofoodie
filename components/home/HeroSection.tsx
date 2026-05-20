"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Clock, MapPin, Flame, Truck } from "lucide-react";

const dishes = [
  { emoji: "🍔", name: "Smash Burger", price: "180 ETB", rating: "4.9", delay: 0 },
  { emoji: "🍕", name: "BBQ Pizza", price: "260 ETB", rating: "4.9", delay: 0.15 },
  { emoji: "☕", name: "Ethiopian Coffee", price: "60 ETB", rating: "5.0", delay: 0.3 },
  { emoji: "🥑", name: "Avocado Smoothie", price: "90 ETB", rating: "5.0", delay: 0.45 },
];

const tags = [
  { icon: "🔥", text: "Trending Now" },
  { icon: "⚡", text: "Fast Delivery" },
  { icon: "🌿", text: "Fresh Daily" },
  { icon: "⭐", text: "Top Rated" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#2d1a0e] to-[#5C4033]" />

      {/* Glow orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#FF6B35]/20 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#FF6B35]/15 blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-[#6BA368]/10 blur-[80px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-custom relative z-10 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-7 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#6BA368] animate-pulse flex-shrink-0" />
              <span className="text-white/90 text-sm font-medium">
                Now Open · Tulu Dimtu, Addis Ababa
              </span>
              <span className="text-white/40 hidden sm:block">·</span>
              <span className="text-[#FF6B35] text-sm font-semibold hidden sm:block">7AM – 11:30PM</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl sm:text-7xl font-black text-white leading-[1.0] mb-5"
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
              className="text-white/65 text-lg max-w-md leading-relaxed mb-8"
            >
              Experience one of Addis Ababa&apos;s rising modern cafés — serving
              delicious meals, refreshing drinks, and unforgettable moments.
            </motion.p>

            {/* Scrolling tag pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={tag.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <span>{tag.icon}</span>
                  {tag.text}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-10"
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
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: Star, text: "4.9 Rating", sub: "500+ Reviews" },
                { icon: Clock, text: "30-45 min", sub: "Delivery" },
                { icon: MapPin, text: "Tulu Dimtu", sub: "Addis Ababa" },
              ].map(({ icon: Icon, text, sub }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FF6B35]/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-[#FF6B35]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xs leading-tight">{text}</p>
                    <p className="text-white/45 text-[10px]">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="hidden lg:flex flex-col gap-4 justify-center">

            {/* Top row: big stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Open Now card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6BA368] animate-pulse" />
                  <span className="text-[#6BA368] text-xs font-bold uppercase tracking-wide">Open Now</span>
                </div>
                <p className="text-white font-black text-2xl">7AM</p>
                <p className="text-white/50 text-xs">Until 11:30 PM · Every Day</p>
              </div>

              {/* Delivery card */}
              <div className="orange-gradient rounded-2xl p-5 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
                <Truck size={22} className="text-white relative z-10" />
                <p className="text-white font-black text-2xl relative z-10">30 min</p>
                <p className="text-white/80 text-xs relative z-10">Fast Delivery</p>
              </div>
            </motion.div>

            {/* Dish cards */}
            <div className="flex flex-col gap-3">
              {dishes.map((dish, i) => (
                <motion.div
                  key={dish.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + dish.delay }}
                  whileHover={{ x: -4, scale: 1.02 }}
                  className="flex items-center gap-4 bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3.5 cursor-pointer group hover:bg-white/15 hover:border-[#FF6B35]/40 transition-all duration-300"
                >
                  {/* Emoji with animated bg */}
                  <motion.div
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="text-3xl w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl flex-shrink-0"
                  >
                    {dish.emoji}
                  </motion.div>

                  {/* Name & price */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{dish.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Star size={10} className="text-amber-400 fill-amber-400" />
                      <span className="text-white/50 text-xs">{dish.rating}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    <span className="text-[#FF6B35] font-black text-sm">{dish.price}</span>
                  </div>

                  {/* Arrow on hover */}
                  <ArrowRight
                    size={14}
                    className="text-[#FF6B35] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom: animated marquee strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="overflow-hidden rounded-2xl bg-white/8 border border-white/10 py-3 px-4"
            >
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="flex gap-6 whitespace-nowrap"
              >
                {[
                  "🍔 Burgers", "🍕 Pizza", "☕ Coffee", "🥗 Salads",
                  "🍰 Desserts", "🧃 Juices", "🫓 Ethiopian", "🍝 Pasta",
                  "🍔 Burgers", "🍕 Pizza", "☕ Coffee", "🥗 Salads",
                  "🍰 Desserts", "🧃 Juices", "🫓 Ethiopian", "🍝 Pasta",
                ].map((item, i) => (
                  <span key={i} className="text-white/50 text-xs font-medium flex items-center gap-1.5">
                    {item}
                    <span className="text-[#FF6B35]/50 mx-1">·</span>
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Bottom stat row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { value: "500+", label: "Happy Customers", emoji: "😊" },
                { value: "50+", label: "Menu Items", emoji: "🍽️" },
                { value: "4.9★", label: "Avg Rating", emoji: "⭐" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/8 border border-white/10 rounded-2xl p-4 text-center"
                >
                  <div className="text-xl mb-1">{stat.emoji}</div>
                  <div className="text-white font-black text-lg leading-none">{stat.value}</div>
                  <div className="text-white/40 text-[10px] mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col items-center gap-2 mt-8"
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
