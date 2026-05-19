"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingCart, Search, Filter, CheckCircle } from "lucide-react";

const categories = [
  { id: "all", label: "All Items", emoji: "🍽️" },
  { id: "breakfast", label: "Breakfast", emoji: "🌅" },
  { id: "burgers", label: "Burgers & Sandwiches", emoji: "🍔" },
  { id: "ethiopian", label: "Ethiopian Foods", emoji: "🫓" },
  { id: "pizza", label: "Pizza & Pasta", emoji: "🍕" },
  { id: "coffee", label: "Coffee & Hot Drinks", emoji: "☕" },
  { id: "juices", label: "Juices & Smoothies", emoji: "🧃" },
  { id: "desserts", label: "Desserts", emoji: "🍰" },
  { id: "specials", label: "Special Meals", emoji: "⭐" },
];

const menuItems = [
  // Breakfast
  { id: 1, category: "breakfast", name: "Full Ethiopian Breakfast", price: "130 ETB", rating: 4.9, description: "Injera with tibs, eggs, and fresh vegetables", tag: "Popular", tagColor: "bg-[#FF6B35] text-white", image: "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=400&h=300&fit=crop&auto=format" },
  { id: 2, category: "breakfast", name: "Firfir with Egg", price: "100 ETB", rating: 4.8, description: "Spiced injera firfir topped with fried egg", tag: "Local Fave", tagColor: "bg-[#6BA368] text-white", image: "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=400&h=300&fit=crop&auto=format" },
  { id: 3, category: "breakfast", name: "Pancake Stack", price: "90 ETB", rating: 4.7, description: "Fluffy pancakes with honey and fresh fruit", tag: null, tagColor: "", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&auto=format" },
  { id: 4, category: "breakfast", name: "Avocado Toast", price: "110 ETB", rating: 4.8, description: "Toasted bread with smashed avocado and seasoning", tag: "Trending", tagColor: "bg-purple-500 text-white", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&h=300&fit=crop&auto=format" },
  { id: 5, category: "breakfast", name: "Omelette Plate", price: "95 ETB", rating: 4.6, description: "3-egg omelette with cheese, veggies and toast", tag: null, tagColor: "", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop&auto=format" },
  { id: 6, category: "breakfast", name: "Ful Medames", price: "80 ETB", rating: 4.7, description: "Ethiopian-style fava beans with spices and bread", tag: "Classic", tagColor: "bg-amber-500 text-white", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&auto=format" },
  // Burgers
  { id: 7, category: "burgers", name: "Classic Beef Burger", price: "180 ETB", rating: 4.9, description: "Juicy beef patty, special sauce, fresh veggies, brioche bun", tag: "Best Seller", tagColor: "bg-[#FF6B35] text-white", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&auto=format" },
  { id: 8, category: "burgers", name: "Chicken Burger", price: "160 ETB", rating: 4.8, description: "Crispy fried chicken with coleslaw and mayo", tag: "Popular", tagColor: "bg-[#FF6B35] text-white", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop&auto=format" },
  { id: 9, category: "burgers", name: "Double Smash Burger", price: "220 ETB", rating: 5.0, description: "Double smashed patties with American cheese and pickles", tag: "Premium", tagColor: "bg-[#5C4033] text-white", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop&auto=format" },
  { id: 10, category: "burgers", name: "Club Sandwich", price: "150 ETB", rating: 4.8, description: "Triple-decker with chicken, bacon, egg and fresh veggies", tag: "Fresh", tagColor: "bg-[#6BA368] text-white", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop&auto=format" },
  { id: 11, category: "burgers", name: "Veggie Burger", price: "140 ETB", rating: 4.6, description: "Plant-based patty with fresh garden vegetables", tag: "Healthy", tagColor: "bg-[#6BA368] text-white", image: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&h=300&fit=crop&auto=format" },
  { id: 12, category: "burgers", name: "Grilled Chicken Wrap", price: "145 ETB", rating: 4.7, description: "Grilled chicken, lettuce, tomato in a warm tortilla wrap", tag: null, tagColor: "", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop&auto=format" },
  // Ethiopian
  { id: 13, category: "ethiopian", name: "Doro Wat", price: "200 ETB", rating: 5.0, description: "Traditional spiced chicken stew with injera", tag: "Signature", tagColor: "bg-[#FF6B35] text-white", image: "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=400&h=300&fit=crop&auto=format" },
  { id: 14, category: "ethiopian", name: "Tibs (Beef)", price: "220 ETB", rating: 4.9, description: "Sautéed beef with onions, peppers and Ethiopian spices", tag: "Popular", tagColor: "bg-[#FF6B35] text-white", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format" },
  { id: 15, category: "ethiopian", name: "Shiro Wat", price: "120 ETB", rating: 4.8, description: "Creamy chickpea stew with berbere spice blend", tag: "Vegan", tagColor: "bg-[#6BA368] text-white", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&auto=format" },
  { id: 16, category: "ethiopian", name: "Kitfo", price: "250 ETB", rating: 4.9, description: "Ethiopian-style minced beef with mitmita and kibbeh", tag: "Premium", tagColor: "bg-[#5C4033] text-white", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format" },
  { id: 17, category: "ethiopian", name: "Vegetarian Combo", price: "160 ETB", rating: 4.8, description: "Assorted vegetarian dishes on injera — shiro, gomen, misir", tag: "Fasting", tagColor: "bg-[#6BA368] text-white", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&auto=format" },
  { id: 18, category: "ethiopian", name: "Firfir Special", price: "110 ETB", rating: 4.7, description: "Torn injera cooked in spiced berbere sauce", tag: "Classic", tagColor: "bg-amber-500 text-white", image: "https://images.unsplash.com/photo-1567364816519-cbc9c4ffe1eb?w=400&h=300&fit=crop&auto=format" },
  // Pizza & Pasta
  { id: 19, category: "pizza", name: "Margherita Pizza", price: "220 ETB", rating: 4.7, description: "Classic tomato, mozzarella and fresh basil", tag: "Classic", tagColor: "bg-amber-500 text-white", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop&auto=format" },
  { id: 20, category: "pizza", name: "BBQ Chicken Pizza", price: "260 ETB", rating: 4.9, description: "BBQ sauce, grilled chicken, red onion, mozzarella", tag: "Best Seller", tagColor: "bg-[#FF6B35] text-white", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format" },
  { id: 21, category: "pizza", name: "Pepperoni Pizza", price: "270 ETB", rating: 4.8, description: "Loaded with pepperoni and extra mozzarella cheese", tag: "Popular", tagColor: "bg-[#FF6B35] text-white", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop&auto=format" },
  { id: 22, category: "pizza", name: "Spaghetti Bolognese", price: "180 ETB", rating: 4.7, description: "Al dente spaghetti with rich beef bolognese sauce", tag: null, tagColor: "", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=300&fit=crop&auto=format" },
  { id: 23, category: "pizza", name: "Creamy Pasta", price: "170 ETB", rating: 4.6, description: "Penne in creamy white sauce with mushrooms and chicken", tag: "Creamy", tagColor: "bg-blue-400 text-white", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop&auto=format" },
  { id: 24, category: "pizza", name: "Veggie Pizza", price: "200 ETB", rating: 4.6, description: "Bell peppers, mushrooms, olives, onions on tomato base", tag: "Vegan", tagColor: "bg-[#6BA368] text-white", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop&auto=format" },
  // Coffee
  { id: 25, category: "coffee", name: "Ethiopian Coffee", price: "60 ETB", rating: 5.0, description: "Authentic Ethiopian coffee ceremony experience", tag: "Must Try", tagColor: "bg-[#5C4033] text-white", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&auto=format" },
  { id: 26, category: "coffee", name: "Macchiato", price: "50 ETB", rating: 4.9, description: "Ethiopian-style espresso with a touch of milk foam", tag: "Local Fave", tagColor: "bg-[#6BA368] text-white", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop&auto=format" },
  { id: 27, category: "coffee", name: "Cappuccino", price: "80 ETB", rating: 4.8, description: "Rich espresso with steamed milk and foam art", tag: null, tagColor: "", image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=400&h=300&fit=crop&auto=format" },
  { id: 28, category: "coffee", name: "Latte", price: "90 ETB", rating: 4.7, description: "Smooth espresso with velvety steamed milk", tag: null, tagColor: "", image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=300&fit=crop&auto=format" },
  { id: 29, category: "coffee", name: "Hot Chocolate", price: "85 ETB", rating: 4.8, description: "Rich Belgian chocolate with steamed milk", tag: "Cozy", tagColor: "bg-amber-600 text-white", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=300&fit=crop&auto=format" },
  { id: 30, category: "coffee", name: "Spiced Tea", price: "55 ETB", rating: 4.7, description: "Ethiopian spiced tea with ginger and cardamom", tag: null, tagColor: "", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&auto=format" },
  // Juices
  { id: 31, category: "juices", name: "Avocado Smoothie", price: "90 ETB", rating: 5.0, description: "Creamy fresh avocado blended with milk and honey", tag: "Trending", tagColor: "bg-purple-500 text-white", image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=300&fit=crop&auto=format" },
  { id: 32, category: "juices", name: "Mango Juice", price: "75 ETB", rating: 4.9, description: "Fresh squeezed Ethiopian mango juice", tag: "Fresh", tagColor: "bg-[#6BA368] text-white", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop&auto=format" },
  { id: 33, category: "juices", name: "Mixed Fruit Juice", price: "85 ETB", rating: 4.8, description: "Seasonal fruit blend — mango, papaya, banana", tag: "Popular", tagColor: "bg-[#FF6B35] text-white", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop&auto=format" },
  { id: 34, category: "juices", name: "Papaya Smoothie", price: "80 ETB", rating: 4.7, description: "Fresh papaya blended with yogurt and honey", tag: null, tagColor: "", image: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=300&fit=crop&auto=format" },
  { id: 35, category: "juices", name: "Green Detox", price: "95 ETB", rating: 4.6, description: "Spinach, cucumber, apple and ginger blend", tag: "Healthy", tagColor: "bg-[#6BA368] text-white", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&auto=format" },
  { id: 36, category: "juices", name: "Passion Fruit Juice", price: "80 ETB", rating: 4.8, description: "Tangy fresh passion fruit juice with a hint of mint", tag: null, tagColor: "", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop&auto=format" },
  // Desserts
  { id: 37, category: "desserts", name: "Chocolate Lava Cake", price: "120 ETB", rating: 5.0, description: "Warm chocolate cake with molten center and ice cream", tag: "Must Try", tagColor: "bg-[#5C4033] text-white", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&auto=format" },
  { id: 38, category: "desserts", name: "Cheesecake Slice", price: "110 ETB", rating: 4.9, description: "Creamy New York-style cheesecake with berry compote", tag: "Popular", tagColor: "bg-[#FF6B35] text-white", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&auto=format" },
  { id: 39, category: "desserts", name: "Ice Cream Sundae", price: "95 ETB", rating: 4.8, description: "3 scoops with chocolate sauce, nuts and whipped cream", tag: null, tagColor: "", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&auto=format" },
  { id: 40, category: "desserts", name: "Tiramisu", price: "130 ETB", rating: 4.9, description: "Classic Italian tiramisu with espresso and mascarpone", tag: "Premium", tagColor: "bg-[#5C4033] text-white", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&auto=format" },
  { id: 41, category: "desserts", name: "Banana Bread", price: "80 ETB", rating: 4.7, description: "Moist homemade banana bread with walnuts", tag: "Homemade", tagColor: "bg-amber-500 text-white", image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop&auto=format" },
  { id: 42, category: "desserts", name: "Fruit Salad", price: "85 ETB", rating: 4.6, description: "Fresh seasonal fruits with honey and mint", tag: "Healthy", tagColor: "bg-[#6BA368] text-white", image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop&auto=format" },
  // Specials
  { id: 43, category: "specials", name: "Gofoodie Special Combo", price: "350 ETB", rating: 5.0, description: "Burger + fries + juice + dessert — the ultimate meal", tag: "Best Value", tagColor: "bg-[#FF6B35] text-white", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format" },
  { id: 44, category: "specials", name: "Ethiopian Feast", price: "400 ETB", rating: 4.9, description: "Full Ethiopian spread for 2 — doro wat, tibs, shiro, injera", tag: "For 2", tagColor: "bg-[#5C4033] text-white", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format" },
  { id: 45, category: "specials", name: "Family Platter", price: "800 ETB", rating: 4.9, description: "Mixed grill, pizza, pasta, salads and drinks for 4", tag: "For 4", tagColor: "bg-blue-500 text-white", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format" },
  { id: 46, category: "specials", name: "Chef's Daily Special", price: "200 ETB", rating: 4.8, description: "Ask your server for today's chef-curated special dish", tag: "Daily", tagColor: "bg-purple-500 text-white", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedId, setAddedId] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const filtered = menuItems.filter((item) => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAdd = (item: (typeof menuItems)[0]) => {
    setAddedId(item.id);
    setToast(`${item.name} added! Call 097 511 1444 to order.`);
    setTimeout(() => setAddedId(null), 1500);
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <div className="pt-20">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -60, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -60, x: "-50%" }}
            className="fixed top-24 left-1/2 z-50 bg-[#1E1E1E] text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-medium max-w-sm w-[90vw]"
          >
            <CheckCircle size={18} className="text-[#6BA368] flex-shrink-0" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E1E] via-[#2d1a0e] to-[#5C4033]" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF6B35]/20 blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Our <span className="gradient-text">Menu</span>
            </h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto">
              From Ethiopian classics to modern favorites — something for everyone
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white sticky top-16 md:top-20 z-30 border-b border-gray-100 shadow-sm">
        <div className="container-custom py-4">
          <div className="relative mb-4">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B0B0B0]" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF6B35] text-sm bg-gray-50 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B0B0B0] hover:text-[#FF6B35]"
              >
                ✕
              </button>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "orange-gradient text-white shadow-md shadow-orange-200"
                    : "bg-gray-100 text-[#5C4033] hover:bg-orange-50 hover:text-[#FF6B35]"
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="section-pad bg-[#FFF4E8]">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <p className="text-[#5C4033] font-medium">
              <span className="text-[#FF6B35] font-bold">{filtered.length}</span> items found
            </p>
            <div className="flex items-center gap-2 text-[#B0B0B0] text-sm">
              <Filter size={14} />
              {activeCategory === "all" ? "All Categories" : categories.find((c) => c.id === activeCategory)?.label}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                      {item.tag && (
                        <span className={`absolute top-2 left-2 badge text-xs ${item.tagColor}`}>
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-1.5">
                        <h3 className="font-bold text-[#1E1E1E] text-sm leading-tight flex-1 mr-2">
                          {item.name}
                        </h3>
                        <span className="text-[#FF6B35] font-black text-sm whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-[#B0B0B0] text-xs mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-amber-400 fill-amber-400" />
                          <span className="text-xs font-semibold text-[#1E1E1E]">{item.rating}</span>
                        </div>
                        <button
                          onClick={() => handleAdd(item)}
                          className={`flex items-center gap-1 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                            addedId === item.id
                              ? "bg-[#6BA368] scale-95"
                              : "bg-[#FF6B35] hover:bg-[#e55a25]"
                          }`}
                        >
                          {addedId === item.id ? (
                            <><CheckCircle size={11} /> Added!</>
                          ) : (
                            <><ShoppingCart size={11} /> Add</>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">No items found</h3>
                <p className="text-[#B0B0B0]">Try a different search or category</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#1E1E1E] mb-4">
              Ready to Order? 🍽️
            </h2>
            <p className="text-[#B0B0B0] text-lg mb-6">
              Call us or WhatsApp to place your order
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0975111444"
                className="flex items-center justify-center gap-2 orange-gradient text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform"
              >
                📞 097 511 1444
              </a>
              <a
                href="https://wa.me/251975111444"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform"
              >
                💬 WhatsApp Order
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
