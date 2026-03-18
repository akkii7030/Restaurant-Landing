import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const categories = [
  "Starters", "Main Course", "Tandoori", "Biryani & Rice", "Indian Breads", "Desserts"
];

const menuData: Record<string, any[]> = {
  "Starters": [
    { name: "Paneer Tikka", desc: "Cottage cheese marinated in spices and grilled in a tandoor", isVeg: true, price: "₹280", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
    { name: "Chicken Banjara Kebab", desc: "Spicy chicken chunks roasted to perfection", isVeg: false, price: "₹320", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80" },
    { name: "Hara Bhara Kebab", desc: "Healthy pan-fried patties made with spinach and peas", isVeg: true, price: "₹250", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80" },
    { name: "Fish Koliwada", desc: "Maharashtrian style spicy fried fish", isVeg: false, price: "₹380", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80" },
    { name: "Samosa", desc: "Crispy pastry filled with spiced potatoes and peas", isVeg: true, price: "₹80", img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&q=80" },
    { name: "Chicken Malai Tikka", desc: "Tender chicken in a creamy cashew marinade", isVeg: false, price: "₹340", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },
  ],
  "Main Course": [
    { name: "Dal Makhani", desc: "Black lentils cooked overnight with butter and cream", isVeg: true, price: "₹240", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80" },
    { name: "Butter Chicken", desc: "Classic chicken tikka in a rich tomato gravy", isVeg: false, price: "₹350", img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80" },
    { name: "Paneer Lababdar", desc: "Cottage cheese in a creamy, mildly sweet gravy", isVeg: true, price: "₹290", img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=400&q=80" },
    { name: "Mutton Rogan Josh", desc: "Tender mutton pieces in a robust, spicy gravy", isVeg: false, price: "₹420", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80" },
    { name: "Palak Paneer", desc: "Cottage cheese cubes in a smooth spinach gravy", isVeg: true, price: "₹270", img: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&q=80" },
    { name: "Chicken Kadai", desc: "Chicken cooked with bell peppers in a spicy kadai masala", isVeg: false, price: "₹370", img: "https://images.unsplash.com/photo-1567188040759-fb8a254b4fe8?w=400&q=80" },
  ],
  "Tandoori": [
    { name: "Tandoori Chicken", desc: "Whole chicken marinated in yogurt and spices", isVeg: false, price: "₹450", img: "https://images.unsplash.com/photo-1567188040759-fb8a254b4fe8?w=400&q=80" },
    { name: "Mushroom Tikka", desc: "Fresh mushrooms roasted with tandoori spices", isVeg: true, price: "₹270", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" },
    { name: "Seekh Kebab", desc: "Minced lamb mixed with spices, grilled on skewers", isVeg: false, price: "₹360", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" },
    { name: "Tandoori Prawns", desc: "Juicy prawns marinated in tandoori masala", isVeg: false, price: "₹520", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80" },
    { name: "Achari Paneer Tikka", desc: "Paneer marinated in tangy pickle spices", isVeg: true, price: "₹300", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80" },
  ],
  "Biryani & Rice": [
    { name: "Chicken Dum Biryani", desc: "Aromatic basmati rice cooked with marinated chicken", isVeg: false, price: "₹320", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80" },
    { name: "Veg Hyderabadi Biryani", desc: "Mixed vegetables and rice in authentic spices", isVeg: true, price: "₹260", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&q=80" },
    { name: "Jeera Rice", desc: "Basmati rice tempered with cumin seeds", isVeg: true, price: "₹150", img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&q=80" },
    { name: "Mutton Biryani", desc: "Slow-cooked mutton with fragrant basmati rice", isVeg: false, price: "₹420", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80" },
  ],
  "Indian Breads": [
    { name: "Garlic Naan", desc: "Soft flatbread topped with minced garlic", isVeg: true, price: "₹65", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80" },
    { name: "Butter Roti", desc: "Traditional whole wheat bread with butter", isVeg: true, price: "₹45", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80" },
    { name: "Lachha Paratha", desc: "Layered whole wheat flatbread", isVeg: true, price: "₹55", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80" },
    { name: "Peshwari Naan", desc: "Naan stuffed with coconut, almonds and raisins", isVeg: true, price: "₹85", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80" },
  ],
  "Desserts": [
    { name: "Gulab Jamun", desc: "Deep fried milk solid dumplings in sugar syrup", isVeg: true, price: "₹120", img: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=400&q=80" },
    { name: "Rasmalai", desc: "Cottage cheese dumplings in sweetened thickened milk", isVeg: true, price: "₹140", img: "https://images.unsplash.com/photo-1666195966573-f2c5e9b5e5e5?w=400&q=80" },
    { name: "Gajar Ka Halwa", desc: "Traditional sweet carrot pudding", isVeg: true, price: "₹130", img: "https://images.unsplash.com/photo-1571167366136-b57e07161714?w=400&q=80" },
    { name: "Kulfi", desc: "Traditional Indian ice cream with pistachios", isVeg: true, price: "₹110", img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80" },
    { name: "Kheer", desc: "Creamy rice pudding with cardamom and saffron", isVeg: true, price: "₹100", img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=400&q=80" },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="menu" className="py-24 bg-card border-y border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Discover Our <span className="text-glow">Menu</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore our wide variety of authentic Indian dishes, prepared fresh with traditional spices and love.</p>
          </motion.div>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold tracking-wider transition-colors duration-300 ${
                activeCategory === cat ? "text-primary-foreground" : "text-foreground/70 hover:text-secondary"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {menuData[activeCategory].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group bg-background rounded-xl overflow-hidden border border-secondary/10 hover:border-secondary/40 transition-all duration-300 shadow-lg hover:shadow-secondary/5 flex"
                >
                  <div className="w-1/3 overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-2/3 p-4 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-serif font-bold text-lg leading-tight text-foreground pr-2">{item.name}</h4>
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 border flex items-center justify-center mt-1 ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{item.desc}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-bold text-secondary">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            Download Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
