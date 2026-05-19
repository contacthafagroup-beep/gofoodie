"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tag, ArrowRight } from "lucide-react";

export default function SpecialOfferBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1E1E1E] via-[#2d1a0e] to-[#5C4033] p-8 md:p-12"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FF6B35]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#6BA368]/15 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left text */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FF6B35]/20 text-[#FF6B35] rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                <Tag size={14} />
                Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                Happy Hour 🎉
              </h2>
              <p className="text-white/70 text-base md:text-lg max-w-md">
                Get{" "}
                <span className="text-[#FF6B35] font-bold">20% OFF</span> on all
                combo meals every weekday from{" "}
                <span className="text-white font-semibold">2PM – 5PM</span>
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-[#FF6B35]">20%</div>
                <div className="text-white/60 text-sm font-medium">OFF Combos</div>
              </div>
              <Link
                href="/specials"
                className="group inline-flex items-center gap-2 orange-gradient text-white px-7 py-3.5 rounded-full font-bold text-base shadow-lg shadow-orange-500/30 hover:scale-105 transition-all"
              >
                See All Specials
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
