/*
 * Store Page - Arcanium Studios
 * Design: "Forge & Flame" - Gallery-style product display with warm accents
 * Features: Product grid, cart integration, category filtering
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    } as const
  }
};

// Placeholder products
const products = [
  {
    id: "1",
    name: "Mesopotamian Guardian",
    category: "Sculptures",
    price: 2400,
    image: "/images/feature-future.jpg",
    description: "Bronze sculpture inspired by ancient Assyrian lamassu, reimagined with contemporary geometric forms."
  },
  {
    id: "2",
    name: "Illuminated Manuscript Study",
    category: "Paintings",
    price: 850,
    image: "/images/feature-past.jpg",
    description: "Hand-painted artwork using traditional pigments and techniques from medieval scriptoriums."
  },
  {
    id: "3",
    name: "Artisan's Dice Set",
    category: "Artifacts",
    price: 180,
    image: "/images/hero-workshop.jpg",
    description: "Hand-cast metal dice featuring ancient Celtic knotwork patterns."
  },
  {
    id: "4",
    name: "The Craftsman's Journey",
    category: "Sculptures",
    price: 1800,
    image: "/images/feature-present.jpg",
    description: "A tribute to the eternal dialogue between maker and material."
  },
  {
    id: "5",
    name: "Ritual Vessel",
    category: "Artifacts",
    price: 650,
    image: "/images/feature-future.jpg",
    description: "Ceremonial vessel inspired by Bronze Age craftsmanship, finished with patinated copper."
  },
  {
    id: "6",
    name: "Ancestral Patterns",
    category: "Paintings",
    price: 1200,
    image: "/images/feature-past.jpg",
    description: "Mixed media piece exploring the visual language of ancient textile traditions."
  },
];

const categories = ["All", "Sculptures", "Paintings", "Artifacts"];

export default function Store() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addItem } = useCart();

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p 
              className="font-[Cormorant_SC] text-primary tracking-[0.2em] text-sm mb-4"
              variants={fadeInUp}
            >
              The Collection
            </motion.p>
            <motion.h1 
              className="font-[Cormorant_Infant] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
              variants={fadeInUp}
            >
              Store
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
              variants={fadeInUp}
            >
              Each piece is handcrafted in our studio, combining ancient techniques 
              with contemporary vision. Every artifact tells a story of traditions reborn.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-[Cormorant_SC] tracking-[0.1em] text-sm border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            key={activeCategory}
          >
            {filteredProducts.map((product) => (
              <motion.article 
                key={product.id}
                className="group"
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden bg-card border border-border/50 glow-warm">
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  </div>
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-8 py-3 bg-primary text-primary-foreground font-[Cormorant_SC] tracking-[0.15em] text-sm hover:bg-primary/90 transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-xs font-[Cormorant_SC] tracking-[0.1em] text-primary">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="pt-6">
                  <h3 className="font-[Cormorant_Infant] text-xl mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="font-[Cormorant_SC] text-primary tracking-wide text-lg">
                    ${product.price.toLocaleString()}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commission CTA */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="font-[Cormorant_Infant] text-3xl md:text-4xl font-semibold mb-6"
              variants={fadeInUp}
            >
              Looking for Something Unique?
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg mb-8"
              variants={fadeInUp}
            >
              We accept commissions for custom pieces. Share your vision with us, 
              and we'll bring ancient traditions to life in a form made just for you.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a 
                href="mailto:commissions@arcanium-studios.com"
                className="inline-flex items-center gap-2 px-8 py-3 border border-primary/50 text-primary font-[Cormorant_SC] tracking-[0.15em] text-sm hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                Inquire About Commissions
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
