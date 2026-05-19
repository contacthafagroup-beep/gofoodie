"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Leaf, Users, Award, Coffee, Star } from "lucide-react";

const values = [
  { icon: Heart, title: "Passion for Food", description: "Every dish we create comes from a deep love for food and a commitment to making every bite memorable.", color: "bg-red-50 text-red-500" },
  { icon: Leaf, title: "Fresh & Local", description: "We source fresh, locally-grown ingredients to support Ethiopian farmers and deliver the best flavors.", color: "bg-green-50 text-[#6BA368]" },
  { icon: Users, title: "Community First", description: "Gofoodie is more than a café — it's a gathering place for the Tulu Dimtu community.", color: "bg-blue-50 text-blue-500" },
  { icon: Award, title: "Quality Always", description: "We never compromise on quality. Every plate that leaves our kitchen meets our high standards.", color: "bg-orange-50 text-[#FF6B35]" },
  { icon: Coffee, title: "Ethiopian Heritage", description: "We celebrate Ethiopia's rich food culture while embracing modern culinary techniques.", color: "bg-amber-50 text-amber-600" },
  { icon: Star, title: "Customer Delight", description: "Your satisfaction is our success. We go above and beyond to create unforgettable experiences.", color: "bg-purple-50 text-purple-500" },
];

const team = [
  { name: "Chef Abebe", role: "Head Chef", specialty: "Ethiopian Cuisine", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200&h=200&fit=crop&auto=format" },
  { name: "Tigist", role: "Pastry Chef", specialty: "Desserts & Baking", image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=200&h=200&fit=crop&auto=format" },
  { name: "Yonas", role: "Barista", specialty: "Coffee & Drinks", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop&auto=format" },
  { name: "Sara", role: "Manager", specialty: "Operations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#2d1a0e] to-[#5C4033]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF6B35]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#6BA368]/10 blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
              <span className="text-white/80 text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              About <span className="gradient-text">Gofoodie</span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Born in the heart of Tulu Dimtu, Addis Ababa — we&apos;re on a mission
              to redefine modern dining in Ethiopia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B35] rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
                🌟 Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-6 leading-tight">
                Where Modern Meets
                <span className="gradient-text"> Ethiopian Soul</span>
              </h2>
              <div className="space-y-4 text-[#5C4033] leading-relaxed">
                <p>
                  Gofoodie Ethiopia Café & Restaurant was born from a simple but
                  powerful idea: to create a space where the rich flavors of
                  Ethiopian cuisine meet the energy of modern café culture.
                </p>
                <p>
                  Located in Tulu Dimtu, Addis Ababa, we opened our doors with
                  a vision to serve not just food, but experiences. From our
                  authentic Ethiopian breakfast to our handcrafted burgers and
                  artisan coffee, every item on our menu tells a story.
                </p>
                <p>
                  We believe that great food brings people together. Whether
                  you&apos;re catching up with friends, working remotely, or
                  celebrating a special moment — Gofoodie is your place.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop&auto=format"
                  alt="Our food"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: "🍽️", label: "50+ Menu Items", bg: "from-orange-100 to-amber-50" },
                  { emoji: "😊", label: "500+ Happy Customers", bg: "from-green-100 to-emerald-50" },
                  { emoji: "⭐", label: "4.9 Star Rating", bg: "from-yellow-100 to-amber-50" },
                  { emoji: "📅", label: "Open 7 Days", bg: "from-blue-100 to-indigo-50" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`bg-gradient-to-br ${item.bg} rounded-2xl p-4 text-center`}
                  >
                    <div className="text-3xl mb-1">{item.emoji}</div>
                    <p className="font-bold text-[#1E1E1E] text-xs">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Food showcase */}
      <section className="py-12 bg-[#FFF4E8] overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {[
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=300&fit=crop&auto=format",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-sm"
              >
                <Image src={src} alt={`Food ${i + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-500" unoptimized />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-4">Our Values</h2>
            <p className="text-[#B0B0B0] text-lg max-w-xl mx-auto">The principles that guide everything we do</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#FFF4E8] rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-4`}>
                  <value.icon size={22} />
                </div>
                <h3 className="font-bold text-[#1E1E1E] text-lg mb-2">{value.title}</h3>
                <p className="text-[#B0B0B0] text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-[#FFF4E8]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-4">Meet Our Team 👨‍🍳</h2>
            <p className="text-[#B0B0B0] text-lg max-w-xl mx-auto">The passionate people behind every delicious dish</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-28 h-28 mx-auto rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <h3 className="font-bold text-[#1E1E1E] text-lg">{member.name}</h3>
                <p className="text-[#FF6B35] text-sm font-medium">{member.role}</p>
                <p className="text-[#B0B0B0] text-xs mt-1">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
