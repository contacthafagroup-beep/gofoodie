"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Phone, Clock, MapPin, CheckCircle, Truck, Package, Star } from "lucide-react";

const steps = [
  { step: "01", icon: MessageCircle, title: "Place Your Order", description: "WhatsApp us or call 097 511 1444 with your order", color: "bg-blue-50 text-blue-500" },
  { step: "02", icon: CheckCircle, title: "Order Confirmed", description: "We confirm your order and estimated delivery time", color: "bg-green-50 text-[#6BA368]" },
  { step: "03", icon: Package, title: "Food Prepared", description: "Our chefs prepare your fresh meal with care", color: "bg-orange-50 text-[#FF6B35]" },
  { step: "04", icon: Truck, title: "Out for Delivery", description: "Your hot food is on its way to your location", color: "bg-purple-50 text-purple-500" },
];

const deliveryAreas = [
  "Tulu Dimtu Center",
  "Tulu Dimtu Market Area",
  "Nearby Residential Areas",
  "Local Business Districts",
  "Schools & Universities Nearby",
  "Office Buildings in Area",
];

export default function DeliveryPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1920&h=600&fit=crop&auto=format"
            alt="Delivery hero"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E]/85 via-[#2d1a0e]/80 to-[#1E1E1E]/90" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
              <Truck size={14} className="text-[#FF6B35]" />
              <span className="text-white/80 text-sm font-medium">Fast Delivery</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              We Deliver <span className="gradient-text">To You</span> 🛵
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              Hot, fresh food delivered to your door in Tulu Dimtu, Addis Ababa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-[#FF6B35] py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-1">
                Ready to Order? It&apos;s Easy!
              </h2>
              <p className="text-white/80">Call or WhatsApp us — we&apos;ll handle the rest</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:0975111444"
                className="flex items-center justify-center gap-2 bg-white text-[#FF6B35] px-7 py-3.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
              >
                <Phone size={18} />
                097 511 1444
              </a>
              <a
                href="https://wa.me/251975111444?text=Hi%20Gofoodie!%20I%20want%20to%20order%20delivery."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
              >
                <MessageCircle size={18} />
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E] mb-4">
              How It Works 📱
            </h2>
            <p className="text-[#B0B0B0] text-lg max-w-xl mx-auto">
              Ordering is simple — just 4 easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-dashed border-t-2 border-dashed border-gray-200" />
                )}
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}>
                  <step.icon size={28} />
                </div>
                <div className="text-[#FF6B35] font-black text-sm mb-2">{step.step}</div>
                <h3 className="font-bold text-[#1E1E1E] text-lg mb-2">{step.title}</h3>
                <p className="text-[#B0B0B0] text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="section-pad bg-[#FFF4E8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Delivery Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-[#1E1E1E] mb-6">
                Delivery Details 📋
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Clock, title: "Delivery Time", value: "30–45 minutes", sub: "From order confirmation" },
                  { icon: MapPin, title: "Coverage Area", value: "Tulu Dimtu", sub: "Addis Ababa, Ethiopia" },
                  { icon: Phone, title: "Order By Phone", value: "097 511 1444", sub: "Call to place your order" },
                  { icon: MessageCircle, title: "Order via WhatsApp", value: "+251 975 111 444", sub: "Message us anytime" },
                  { icon: Clock, title: "Delivery Hours", value: "7:00 AM – 10:30 PM", sub: "Every day of the week" },
                ].map(({ icon: Icon, title, value, sub }) => (
                  <div key={title} className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#FF6B35]" />
                    </div>
                    <div>
                      <p className="text-[#B0B0B0] text-xs font-medium">{title}</p>
                      <p className="font-bold text-[#1E1E1E]">{value}</p>
                      <p className="text-[#B0B0B0] text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Coverage Map Placeholder + Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-lg mb-6" style={{ height: "220px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.8!3d8.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTulu%20Dimtu%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gofoodie Delivery Area - Tulu Dimtu"
                />
              </div>

              {/* Coverage Areas */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#1E1E1E] text-lg mb-4">📍 We Deliver To:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {deliveryAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-sm text-[#5C4033]">
                      <CheckCircle size={14} className="text-[#6BA368] flex-shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
                <p className="text-[#B0B0B0] text-xs mt-4">
                  * Call us to confirm delivery to your specific location
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Order Tracking UI */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-black text-[#1E1E1E] mb-4">
              Track Your Order 📍
            </h2>
            <p className="text-[#B0B0B0] text-lg">Real-time updates on your delivery</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-[#FFF4E8] rounded-3xl p-8 border border-orange-100"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[#B0B0B0] text-sm">Order #GF-2024</p>
                <p className="font-black text-[#1E1E1E] text-xl">Your Order</p>
              </div>
              <div className="bg-[#6BA368] text-white text-sm font-bold px-4 py-1.5 rounded-full">
                On the Way 🛵
              </div>
            </div>

            <div className="space-y-0">
              {[
                { label: "Order Placed", time: "12:30 PM", done: true },
                { label: "Order Confirmed", time: "12:32 PM", done: true },
                { label: "Being Prepared", time: "12:35 PM", done: true },
                { label: "Out for Delivery", time: "12:55 PM", done: true },
                { label: "Delivered", time: "~1:15 PM", done: false },
              ].map((track, i, arr) => (
                <div key={track.label} className="flex gap-4">
                  {/* Left: icon + connector */}
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      track.done ? "bg-[#6BA368]" : "bg-gray-200"
                    }`}>
                      {track.done ? (
                        <CheckCircle size={16} className="text-white" />
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-gray-400" />
                      )}
                    </div>
                    {i < arr.length - 1 && (
                      <div className={`w-0.5 h-8 mt-1 ${track.done ? "bg-[#6BA368]/40" : "bg-gray-200"}`} />
                    )}
                  </div>
                  {/* Right: label */}
                  <div className="flex-1 flex items-start justify-between pb-6">
                    <span className={`font-medium text-sm ${track.done ? "text-[#1E1E1E]" : "text-[#B0B0B0]"}`}>
                      {track.label}
                    </span>
                    <span className="text-[#B0B0B0] text-xs">{track.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-orange-200 text-center">
              <p className="text-[#B0B0B0] text-sm">
                Questions about your order?{" "}
                <a href="tel:0975111444" className="text-[#FF6B35] font-semibold hover:underline">
                  Call us
                </a>{" "}
                or{" "}
                <a href="https://wa.me/251975111444" className="text-[#25D366] font-semibold hover:underline">
                  WhatsApp
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-pad bg-[#FFF4E8]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-[#1E1E1E] mb-8">
              What Delivery Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { text: "Always on time and food is always hot! Best delivery in Tulu Dimtu.", name: "Dawit B.", rating: 5 },
                { text: "WhatsApp ordering is so convenient. They confirm fast and deliver faster!", name: "Tigist M.", rating: 5 },
                { text: "The packaging is great — food arrives fresh and well-presented every time.", name: "Yonas A.", rating: 5 },
              ].map((review, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-left">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[#5C4033] text-sm mb-4">&ldquo;{review.text}&rdquo;</p>
                  <p className="font-semibold text-[#1E1E1E] text-sm">— {review.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
