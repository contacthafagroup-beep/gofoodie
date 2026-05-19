"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

const posts = [
  {
    likes: "234", comments: "18",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop&auto=format",
    alt: "Burger",
  },
  {
    likes: "189", comments: "24",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop&auto=format",
    alt: "Coffee",
  },
  {
    likes: "312", comments: "31",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop&auto=format",
    alt: "Salad",
  },
  {
    likes: "445", comments: "52",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop&auto=format",
    alt: "Pizza",
  },
  {
    likes: "278", comments: "19",
    image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=300&h=300&fit=crop&auto=format",
    alt: "Smoothie",
  },
  {
    likes: "521", comments: "67",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop&auto=format",
    alt: "Dessert",
  },
];

export default function InstagramFeed() {
  return (
    <section className="section-pad bg-[#FFF4E8]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <InstagramIcon />
            @gofoodie_ethiopia
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-4">
            Follow Our Journey 📸
          </h2>
          <p className="text-[#B0B0B0] text-lg max-w-xl mx-auto">
            Tag us <span className="text-[#FF6B35] font-semibold">@gofoodie_ethiopia</span> for a chance to be featured!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <div className="flex items-center gap-1 text-white text-xs font-semibold">
                  <Heart size={14} className="fill-white" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-1 text-white text-xs font-semibold">
                  <MessageCircle size={14} />
                  {post.comments}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://instagram.com/gofoodie_ethiopia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <InstagramIcon />
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
