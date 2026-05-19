"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Selam Tadesse",
    role: "Regular Customer",
    avatar: "ST",
    rating: 5,
    text: "Gofoodie is my go-to spot in Tulu Dimtu! The burgers are incredible and the coffee is the best I've had. Love the modern vibe!",
    color: "bg-orange-100 text-[#FF6B35]",
  },
  {
    name: "Biruk Alemu",
    role: "Food Blogger",
    avatar: "BA",
    rating: 5,
    text: "Finally a modern café in Addis that gets it right. Fresh ingredients, great presentation, and the Ethiopian dishes are authentic and delicious.",
    color: "bg-green-100 text-[#6BA368]",
  },
  {
    name: "Hana Girma",
    role: "University Student",
    avatar: "HG",
    rating: 5,
    text: "The avocado smoothie and club sandwich combo is everything! Perfect study spot with great WiFi and even better food. 10/10!",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Dawit Bekele",
    role: "Office Worker",
    avatar: "DB",
    rating: 5,
    text: "I order delivery almost every week. Always on time, always hot, always delicious. The WhatsApp ordering is so convenient!",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Meron Haile",
    role: "Foodie",
    avatar: "MH",
    rating: 5,
    text: "The pizza here rivals anything I've had in the city. Crispy crust, generous toppings, and the service is always friendly and fast.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    name: "Abel Tesfaye",
    role: "Entrepreneur",
    avatar: "AT",
    rating: 5,
    text: "Great place for business meetings or casual hangouts. The atmosphere is modern, the food is premium, and the prices are very reasonable.",
    color: "bg-red-100 text-red-500",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B35] rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Star size={14} className="fill-[#FF6B35]" />
            Customer Love
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-4">
            What People Say 💬
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-xl mx-auto">
            Real reviews from our amazing community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote size={24} className="text-[#FF6B35]/30" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#5C4033] text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-sm`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1E1E1E] text-sm">
                    {t.name}
                  </p>
                  <p className="text-[#B0B0B0] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
