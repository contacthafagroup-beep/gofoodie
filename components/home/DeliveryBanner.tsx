"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Truck, Clock, MapPin, MessageCircle } from "lucide-react";

export default function DeliveryBanner() {
  return (
    <section className="section-pad bg-[#FFF4E8]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Truck size={14} />
              Fast Delivery
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-5 leading-tight">
              Order From
              <br />
              <span className="gradient-text">Anywhere in</span>
              <br />
              Tulu Dimtu 📍
            </h2>
            <p className="text-[#B0B0B0] text-lg mb-8 leading-relaxed">
              Hot, fresh food delivered straight to your door. Just WhatsApp us
              or call to place your order — it&apos;s that simple.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Clock, title: "30-45 min", sub: "Delivery time" },
                { icon: MapPin, title: "Tulu Dimtu", sub: "Coverage area" },
              ].map(({ icon: Icon, title, sub }) => (
                <div key={title} className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#FF6B35]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1E1E1E] text-sm">{title}</p>
                    <p className="text-[#B0B0B0] text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons — stacked on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/251975111444?text=Hi%20Gofoodie!%20I%20want%20to%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg text-sm"
              >
                <MessageCircle size={17} />
                Order via WhatsApp
              </a>
              <Link
                href="/delivery"
                className="inline-flex items-center justify-center gap-2 orange-gradient text-white px-6 py-3.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg text-sm"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-3xl p-8 text-white overflow-hidden shadow-2xl shadow-orange-200">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="text-6xl mb-4">🛵</div>
                <h3 className="text-2xl font-black mb-2">We Deliver to You!</h3>
                <p className="text-white/80 mb-6 text-sm">Fresh, hot food at your doorstep</p>

                <div className="space-y-3">
                  {[
                    "📱 WhatsApp your order",
                    "✅ We confirm in minutes",
                    "🍽️ Food prepared fresh",
                    "🛵 Delivered hot to you",
                  ].map((step) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3 text-sm font-medium"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
