"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Flame } from "lucide-react";

const dishes = [
  {
    id: 1,
    name: "Classic Beef Burger",
    category: "Burgers",
    price: "180 ETB",
    rating: 4.9,
    reviews: 120,
    tag: "Best Seller",
    tagColor: "bg-[#FF6B35] text-white",
    description: "Juicy beef patty with fresh veggies, special sauce & brioche bun",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=380&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Ethiopian Firfir",
    category: "Ethiopian",
    price: "120 ETB",
    rating: 4.8,
    reviews: 95,
    tag: "Local Fave",
    tagColor: "bg-[#6BA368] text-white",
    description: "Traditional injera firfir with spiced berbere sauce",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=380&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Avocado Smoothie",
    category: "Drinks",
    price: "90 ETB",
    rating: 5.0,
    reviews: 200,
    tag: "Trending",
    tagColor: "bg-purple-500 text-white",
    description: "Creamy fresh avocado blended with milk and a hint of honey",
    image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=500&h=380&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Margherita Pizza",
    category: "Pizza",
    price: "220 ETB",
    rating: 4.7,
    reviews: 88,
    tag: "Popular",
    tagColor: "bg-red-500 text-white",
    description: "Stone-baked pizza with fresh tomato, mozzarella & basil",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&h=380&fit=crop&auto=format",
  },
  {
    id: 5,
    name: "Ethiopian Coffee",
    category: "Coffee",
    price: "60 ETB",
    rating: 5.0,
    reviews: 310,
    tag: "Must Try",
    tagColor: "bg-[#5C4033] text-white",
    description: "Authentic Ethiopian coffee ceremony experience in a cup",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=380&fit=crop&auto=format",
  },
  {
    id: 6,
    name: "Club Sandwich",
    category: "Sandwiches",
    price: "150 ETB",
    rating: 4.8,
    reviews: 76,
    tag: "Fresh",
    tagColor: "bg-[#6BA368] text-white",
    description: "Triple-decker with grilled chicken, bacon, egg & fresh veggies",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=380&fit=crop&auto=format",
  },
];

export default function FeaturedDishes() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF6B35] rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Flame size={14} />
            Trending Now
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-4">
            Fan Favorites 🔥
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-xl mx-auto">
            Our most-loved dishes, handpicked by our customers
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 badge text-xs ${dish.tagColor}`}>
                  {dish.tag}
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#5C4033] text-xs font-medium px-3 py-1 rounded-full">
                  {dish.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[#1E1E1E] text-lg leading-tight flex-1 mr-2">
                    {dish.name}
                  </h3>
                  <span className="text-[#FF6B35] font-black text-lg whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
                <p className="text-[#B0B0B0] text-sm mb-4 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-[#1E1E1E]">{dish.rating}</span>
                    <span className="text-[#B0B0B0] text-xs">({dish.reviews})</span>
                  </div>
                  <Link
                    href="/menu"
                    className="flex items-center gap-1 text-[#FF6B35] text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Order <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 orange-gradient text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:scale-105 transition-all duration-300"
          >
            View Full Menu <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
