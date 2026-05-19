"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const categories = ["All", "Food", "Drinks", "Interior", "Desserts", "Events"];

const galleryItems = [
  { id: 1, category: "Food", title: "Classic Beef Burger", size: "large", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=750&fit=crop&auto=format" },
  { id: 2, category: "Drinks", title: "Ethiopian Coffee", size: "small", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop&auto=format" },
  { id: 3, category: "Food", title: "Doro Wat & Injera", size: "small", image: "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=400&h=400&fit=crop&auto=format" },
  { id: 4, category: "Interior", title: "Café Interior", size: "large", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=750&fit=crop&auto=format" },
  { id: 5, category: "Desserts", title: "Cheesecake Slice", size: "small", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop&auto=format" },
  { id: 6, category: "Drinks", title: "Avocado Smoothie", size: "small", image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=400&fit=crop&auto=format" },
  { id: 7, category: "Food", title: "BBQ Chicken Pizza", size: "large", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=750&fit=crop&auto=format" },
  { id: 8, category: "Events", title: "Birthday Celebration", size: "small", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop&auto=format" },
  { id: 9, category: "Desserts", title: "Chocolate Lava Cake", size: "small", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&auto=format" },
  { id: 10, category: "Interior", title: "Evening Ambiance", size: "large", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=750&fit=crop&auto=format" },
  { id: 11, category: "Food", title: "Fresh Salad Bowl", size: "small", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&auto=format" },
  { id: 12, category: "Drinks", title: "Fresh Juice Bar", size: "small", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=400&fit=crop&auto=format" },
  { id: 13, category: "Food", title: "Club Sandwich", size: "small", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop&auto=format" },
  { id: 14, category: "Events", title: "Social Dining", size: "large", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=750&fit=crop&auto=format" },
  { id: 15, category: "Desserts", title: "Ice Cream Sundae", size: "small", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop&auto=format" },
  { id: 16, category: "Interior", title: "Green Corner", size: "small", image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&h=400&fit=crop&auto=format" },
  { id: 17, category: "Food", title: "Spaghetti Bolognese", size: "small", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=400&fit=crop&auto=format" },
  { id: 18, category: "Drinks", title: "Spiced Tea", size: "small", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop&auto=format" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop&auto=format"
            alt="Gallery hero"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E]/80 via-[#1E1E1E]/70 to-[#1E1E1E]/90" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Our <span className="gradient-text">Gallery</span> 📸
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              A visual feast — food, vibes, and unforgettable moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white sticky top-16 md:top-20 z-30 border-b border-gray-100 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "orange-gradient text-white shadow-md"
                    : "bg-gray-100 text-[#5C4033] hover:bg-orange-50 hover:text-[#FF6B35]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-pad bg-[#FFF4E8]">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="columns-2 md:columns-3 lg:columns-4 gap-4"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer break-inside-avoid mb-4 ${
                    item.size === "large" ? "aspect-[4/5]" : "aspect-square"
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <ZoomIn size={28} className="text-white" />
                    <p className="text-white font-semibold text-sm text-center px-4">
                      {item.title}
                    </p>
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-2xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.image.replace("w=400&h=400", "w=800&h=600").replace("w=600&h=750", "w=800&h=600")}
                alt={selectedItem.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-black text-white text-2xl">{selectedItem.title}</p>
                <span className="bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {selectedItem.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instagram CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#1E1E1E] mb-4">
              Share Your Gofoodie Moment 📸
            </h2>
            <p className="text-[#B0B0B0] text-lg mb-6">
              Tag us <span className="text-[#FF6B35] font-semibold">@gofoodie_ethiopia</span> for a chance to be featured!
            </p>
            <a
              href="https://instagram.com/gofoodie_ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
            >
              <InstagramIcon size={18} />
              Follow @gofoodie_ethiopia
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
