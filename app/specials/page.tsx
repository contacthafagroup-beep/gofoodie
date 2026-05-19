"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tag, Clock, Star, Flame, ChefHat, Zap } from "lucide-react";

const combos = [
  {
    name: "Gofoodie Mega Combo",
    items: ["Double Burger", "Large Fries", "Fresh Juice", "Dessert"],
    originalPrice: "450 ETB",
    price: "350 ETB",
    savings: "Save 100 ETB",
    emoji: "🌟",
    bg: "from-orange-500 to-amber-500",
    popular: true,
  },
  {
    name: "Breakfast Combo",
    items: ["Full Ethiopian Breakfast", "Coffee/Tea", "Fresh Juice"],
    originalPrice: "250 ETB",
    price: "190 ETB",
    savings: "Save 60 ETB",
    emoji: "🌅",
    bg: "from-yellow-400 to-orange-400",
    popular: false,
  },
  {
    name: "Pizza Party Combo",
    items: ["Large Pizza", "2 Soft Drinks", "Garlic Bread"],
    originalPrice: "380 ETB",
    price: "300 ETB",
    savings: "Save 80 ETB",
    emoji: "🍕",
    bg: "from-red-500 to-orange-500",
    popular: false,
  },
  {
    name: "Ethiopian Feast for 2",
    items: ["Doro Wat", "Tibs", "Shiro", "Injera", "2 Drinks"],
    originalPrice: "500 ETB",
    price: "400 ETB",
    savings: "Save 100 ETB",
    emoji: "🫓",
    bg: "from-green-500 to-emerald-500",
    popular: true,
  },
];

const dailySpecials = [
  { day: "Monday", dish: "Doro Wat Special", discount: "15% OFF", emoji: "🍗" },
  { day: "Tuesday", dish: "Burger Tuesday", discount: "Buy 1 Get 1", emoji: "🍔" },
  { day: "Wednesday", dish: "Pizza Wednesday", discount: "20% OFF", emoji: "🍕" },
  { day: "Thursday", dish: "Pasta Thursday", discount: "Free Drink", emoji: "🍝" },
  { day: "Friday", dish: "TGIF Combo", discount: "25% OFF", emoji: "🎉" },
  { day: "Saturday", dish: "Family Platter", discount: "Free Dessert", emoji: "👨‍👩‍👧‍👦" },
  { day: "Sunday", dish: "Sunday Brunch", discount: "All Day Special", emoji: "🌞" },
];

const chefRecommendations = [
  { name: "Kitfo Special", emoji: "🥩", description: "Chef's signature kitfo with ayib and gomen", price: "280 ETB", rating: 5.0 },
  { name: "Signature Tibs", emoji: "🍖", description: "Slow-cooked tibs with chef's secret spice blend", price: "260 ETB", rating: 4.9 },
  { name: "Gofoodie Lava Cake", emoji: "🍫", description: "Our famous chocolate lava cake with Ethiopian coffee ice cream", price: "140 ETB", rating: 5.0 },
];

export default function SpecialsPage() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#e55a25]" />
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-5 py-2 mb-6">
              <Tag size={14} className="text-white" />
              <span className="text-white text-sm font-medium">Limited Time Deals</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Today&apos;s Specials 🎉
            </h1>
            <p className="text-white/90 text-xl max-w-xl mx-auto">
              Exclusive deals, combos, and chef recommendations — updated daily
            </p>
          </motion.div>
        </div>
      </section>

      {/* Happy Hour Banner */}
      <section className="bg-[#1E1E1E] py-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          >
            <div className="flex items-center gap-2 text-[#FF6B35]">
              <Clock size={20} />
              <span className="font-bold text-lg">Happy Hour</span>
            </div>
            <span className="text-white/60 hidden sm:block">|</span>
            <p className="text-white">
              <span className="text-[#FF6B35] font-bold">20% OFF</span> all combo meals
              every weekday{" "}
              <span className="font-semibold">2PM – 5PM</span>
            </p>
            <span className="text-white/60 hidden sm:block">|</span>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">Limited seats!</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Combo Meals */}
      <section className="section-pad bg-[#FFF4E8]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white text-[#FF6B35] rounded-full px-4 py-1.5 text-sm font-semibold mb-4 shadow-sm">
              <Flame size={14} />
              Combo Deals
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-4">
              Value Combos 🔥
            </h2>
            <p className="text-[#B0B0B0] text-lg max-w-xl mx-auto">
              More food, more savings — our best value deals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {combos.map((combo, i) => (
              <motion.div
                key={combo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {combo.popular && (
                  <div className="absolute top-4 right-4 bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    🔥 Most Popular
                  </div>
                )}
                <div className={`bg-gradient-to-r ${combo.bg} p-8 flex items-center gap-4`}>
                  <span className="text-6xl">{combo.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-black text-white">{combo.name}</h3>
                    <p className="text-white/80 text-sm mt-1">{combo.savings}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {combo.items.map((item) => (
                      <span key={item} className="bg-orange-50 text-[#FF6B35] text-xs font-medium px-3 py-1 rounded-full">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#B0B0B0] line-through text-sm">{combo.originalPrice}</span>
                      <span className="text-[#FF6B35] font-black text-2xl ml-2">{combo.price}</span>
                    </div>
                    <a
                      href="https://wa.me/251975111444"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="orange-gradient text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Specials */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-4">
              Daily Specials 📅
            </h2>
            <p className="text-[#B0B0B0] text-lg">A special deal every single day of the week</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {dailySpecials.map((special, i) => (
              <motion.div
                key={special.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-2xl p-4 text-center border-2 transition-all ${
                  today === special.day
                    ? "border-[#FF6B35] bg-orange-50 shadow-lg shadow-orange-100"
                    : "border-gray-100 bg-gray-50 hover:border-orange-200"
                }`}
              >
                {today === special.day && (
                  <div className="text-[#FF6B35] text-xs font-bold mb-1">TODAY</div>
                )}
                <div className="text-3xl mb-2">{special.emoji}</div>
                <p className="font-bold text-[#1E1E1E] text-xs mb-1">{special.day}</p>
                <p className="text-[#5C4033] text-xs mb-2">{special.dish}</p>
                <span className="bg-[#FF6B35] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {special.discount}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Recommendations */}
      <section className="section-pad bg-[#FFF4E8]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white text-[#5C4033] rounded-full px-4 py-1.5 text-sm font-semibold mb-4 shadow-sm">
              <ChefHat size={14} />
              Chef&apos;s Picks
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-4">
              Chef Recommendations 👨‍🍳
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chefRecommendations.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 text-center"
              >
                <div className="text-6xl mb-4">{item.emoji}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-[#B0B0B0] ml-1">{item.rating}</span>
                </div>
                <h3 className="font-black text-[#1E1E1E] text-xl mb-2">{item.name}</h3>
                <p className="text-[#B0B0B0] text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#FF6B35] font-black text-xl">{item.price}</span>
                  <a
                    href="https://wa.me/251975111444"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="orange-gradient text-white px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                  >
                    Order
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
