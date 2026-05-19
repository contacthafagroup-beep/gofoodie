"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

// Social SVG icons (lucide-react v1 removed brand icons)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Our Menu" },
  { href: "/specials", label: "Specials" },
  { href: "/delivery", label: "Delivery" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

const menuHighlights = [
  "Ethiopian Breakfast",
  "Burgers & Sandwiches",
  "Pizza & Pasta",
  "Fresh Juices",
  "Ethiopian Dishes",
  "Coffee & Drinks",
  "Desserts",
  "Special Meals",
];

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      {/* Top CTA Banner */}
      <div className="orange-gradient py-12">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Ready to Order? 🍽️
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Call us or WhatsApp to place your order now
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0975111444"
                className="flex items-center justify-center gap-2 bg-white text-[#FF6B35] px-8 py-3.5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
              >
                <Phone size={20} />
                097 511 1444
              </a>
              <a
                href="https://wa.me/251975111444"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
              >
                <MessageCircle size={20} />
                WhatsApp Order
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl orange-gradient flex items-center justify-center">
                <span className="text-white font-black text-lg">G</span>
              </div>
              <div>
                <div className="font-black text-xl">Gofoodie</div>
                <div className="text-[10px] text-[#FF6B35] font-medium tracking-widest uppercase">
                  Ethiopia
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Fresh Food. Great Vibes. Experience one of Addis Ababa&apos;s
              rising modern cafés — serving delicious meals, refreshing drinks,
              and unforgettable moments.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                {
                  icon: InstagramIcon,
                  href: "#",
                  color: "hover:bg-pink-500",
                  label: "Instagram",
                },
                {
                  icon: FacebookIcon,
                  href: "#",
                  color: "hover:bg-blue-600",
                  label: "Facebook",
                },
                {
                  icon: YoutubeIcon,
                  href: "#",
                  color: "hover:bg-red-600",
                  label: "YouTube",
                },
                {
                  icon: MessageCircle,
                  href: "https://wa.me/251975111444",
                  color: "hover:bg-green-500",
                  label: "WhatsApp",
                },
              ].map(({ icon: Icon, href, color, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center ${color} transition-colors`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#FF6B35] text-sm transition-colors group"
                  >
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Our Menu</h3>
            <ul className="space-y-2.5">
              {menuHighlights.map((item) => (
                <li key={item}>
                  <Link
                    href="/menu"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#FF6B35] text-sm transition-colors group"
                  >
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={15} className="text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Location</p>
                  <p className="text-gray-400 text-sm">
                    Tulu Dimtu, Addis Ababa
                    <br />
                    Ethiopia 1976
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={15} className="text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <a
                    href="tel:0975111444"
                    className="text-gray-400 text-sm hover:text-[#FF6B35] transition-colors"
                  >
                    097 511 1444
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={15} className="text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Hours</p>
                  <p className="text-gray-400 text-sm">
                    Mon – Sun
                    <br />
                    7:00 AM – 11:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Gofoodie Ethiopia Café & Restaurant.
            All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Tulu Dimtu, Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}
