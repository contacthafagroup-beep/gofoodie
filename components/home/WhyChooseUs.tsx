"use client";

import { motion } from "framer-motion";
import { Zap, Leaf, Award, Heart, Clock, Truck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Quick service whether you dine in or order delivery. We respect your time.",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    accent: "border-l-yellow-400",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source fresh, quality ingredients daily for every dish we serve.",
    iconBg: "bg-green-100",
    iconColor: "text-[#6BA368]",
    accent: "border-l-[#6BA368]",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every dish is crafted with care, consistency, and culinary passion.",
    iconBg: "bg-orange-100",
    iconColor: "text-[#FF6B35]",
    accent: "border-l-[#FF6B35]",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Our chefs pour heart and soul into every plate that leaves our kitchen.",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    accent: "border-l-red-400",
  },
  {
    icon: Clock,
    title: "Open Every Day",
    description: "We're open 7 days a week from 7AM to 11:30PM — always here for you.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    accent: "border-l-blue-400",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Hot food delivered to your door. Order via WhatsApp or call us directly.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    accent: "border-l-purple-400",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-[#FFF4E8]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white text-[#FF6B35] rounded-full px-4 py-1.5 text-sm font-semibold mb-4 shadow-sm">
            ✨ Why Gofoodie?
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-4">
            The Gofoodie Difference
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-xl mx-auto">
            We&apos;re not just a restaurant — we&apos;re an experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`bg-white rounded-2xl p-6 border-l-4 ${feature.accent} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon size={22} className={feature.iconColor} />
              </div>
              <h3 className="font-bold text-[#1E1E1E] text-lg mb-2">{feature.title}</h3>
              <p className="text-[#B0B0B0] text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
