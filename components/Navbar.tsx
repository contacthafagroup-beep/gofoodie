"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/specials", label: "Specials" },
  { href: "/delivery", label: "Delivery" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Only the home page gets the transparent hero treatment
  const isHome = pathname === "/";

  // Navbar is "light" (white bg, dark text) when:
  // - on any non-home page, OR
  // - on home page after scrolling
  const isLight = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position (e.g. browser back navigation)
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    // Reset scroll state when navigating
    setScrolled(window.scrollY > 20);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLight
            ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl orange-gradient flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-lg">G</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-black text-lg tracking-tight transition-colors ${isLight ? "text-[#1E1E1E]" : "text-white"}`}>
                  Gofoodie
                </span>
                <span className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${isLight ? "text-[#FF6B35]" : "text-orange-200"}`}>
                  Ethiopia
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "text-[#FF6B35] bg-orange-50"
                      : isLight
                      ? "text-[#1E1E1E] hover:text-[#FF6B35] hover:bg-orange-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  } ${pathname === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:0975111444"
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#FF6B35] ${
                  isLight ? "text-[#5C4033]" : "text-white/80"
                }`}
              >
                <Phone size={15} />
                097 511 1444
              </a>
              <Link
                href="/menu"
                className="flex items-center gap-2 orange-gradient text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:scale-105 transition-all duration-200"
              >
                <ShoppingBag size={15} />
                Order Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isLight
                  ? "text-[#1E1E1E] hover:bg-orange-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-white shadow-2xl border-t border-orange-100 lg:hidden"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        pathname === link.href
                          ? "bg-orange-50 text-[#FF6B35] font-semibold"
                          : "text-[#1E1E1E] hover:bg-orange-50 hover:text-[#FF6B35]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                  <a
                    href="tel:0975111444"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#5C4033]"
                  >
                    <Phone size={15} />
                    097 511 1444
                  </a>
                  <Link
                    href="/menu"
                    className="flex items-center justify-center gap-2 orange-gradient text-white px-5 py-3 rounded-xl text-sm font-semibold"
                  >
                    <ShoppingBag size={15} />
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
