/*
 * Behind the Build Page - Arcanium Studios
 * Design: "Forge & Flame" - Blog-style with interactive image hotspots
 * Features: Article cards, featured images with hotspots linking to store
 */

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, ShoppingBag, BookOpen, X } from "lucide-react";

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
      staggerChildren: 0.15,
      delayChildren: 0.1
    } as const
  }
};

// Hotspot type
interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  productId: string;
  price: number;
}

// Blog posts with hotspots
const blogPosts = [
  {
    id: "1",
    slug: "mesopotamian-guardian-process",
    title: "Reconstructing the Lamassu: A 3,000-Year Journey",
    excerpt: "How we combined ancient Assyrian symbolism with contemporary sculpture techniques to create the Mesopotamian Guardian.",
    date: "January 8, 2025",
    readTime: "12 min read",
    category: "Process",
    image: "/images/feature-future.jpg",
    hotspots: [
      { id: "h1", x: 45, y: 35, title: "Mesopotamian Guardian", productId: "1", price: 2400 },
    ]
  },
  {
    id: "2",
    slug: "pigments-of-the-past",
    title: "Pigments of the Past: Reviving Medieval Color",
    excerpt: "Exploring the lost art of natural pigment preparation, from grinding lapis lazuli to extracting vermillion from cinnabar.",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Materials",
    image: "/images/feature-past.jpg",
    hotspots: [
      { id: "h2", x: 30, y: 60, title: "Illuminated Manuscript Study", productId: "2", price: 850 },
    ]
  },
  {
    id: "3",
    slug: "ai-verification-workflow",
    title: "How AI Helps Us Verify Historical Accuracy",
    excerpt: "A deep dive into our unique workflow where machine learning assists in cross-referencing cultural and historical sources.",
    date: "November 28, 2024",
    readTime: "10 min read",
    category: "Process",
    image: "/images/feature-present.jpg",
    hotspots: [
      { id: "h3", x: 50, y: 45, title: "The Craftsman's Journey", productId: "4", price: 1800 },
    ]
  },
  {
    id: "4",
    slug: "forge-setup",
    title: "Building the Forge: Our Workshop Story",
    excerpt: "From an empty warehouse to a fully equipped craft studio. The story of how Arcanium's physical space came to be.",
    date: "October 10, 2024",
    readTime: "6 min read",
    category: "Studio",
    image: "/images/hero-workshop.jpg",
    hotspots: [
      { id: "h4", x: 65, y: 50, title: "Artisan's Dice Set", productId: "3", price: 180 },
    ]
  },
];

// Interactive Image Component with Hotspots
function InteractiveImage({ 
  src, 
  alt, 
  hotspots 
}: { 
  src: string; 
  alt: string; 
  hotspots: Hotspot[];
}) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="relative group">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
      
      {/* Hotspots */}
      {hotspots.map((hotspot) => (
        <div key={hotspot.id}>
          {/* Hotspot Marker */}
          <button
            className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            aria-label={`View ${hotspot.title}`}
          >
            <span className="absolute inset-0 bg-primary/80 rounded-full animate-ping opacity-75" />
            <span className="relative flex items-center justify-center w-full h-full bg-primary rounded-full border-2 border-primary-foreground shadow-lg">
              <ShoppingBag className="w-4 h-4 text-primary-foreground" />
            </span>
          </button>
          
          {/* Hotspot Popup */}
          <AnimatePresence>
            {activeHotspot === hotspot.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute z-20 w-64 bg-card border border-border shadow-xl"
                style={{ 
                  left: `${Math.min(Math.max(hotspot.x, 20), 80)}%`, 
                  top: `${hotspot.y + 8}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-[Cormorant_Infant] text-lg font-semibold pr-4">
                      {hotspot.title}
                    </h4>
                    <button 
                      onClick={() => setActiveHotspot(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-[Cormorant_SC] text-primary tracking-wide mb-4">
                    ${hotspot.price.toLocaleString()}
                  </p>
                  <Link 
                    href="/store"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View in Store
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      
      {/* Hint overlay */}
      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm text-xs font-[Cormorant_SC] tracking-wide text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        Click hotspots to shop
      </div>
    </div>
  );
}

export default function BehindTheBuild() {
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
              Stories & Process
            </motion.p>
            <motion.h1 
              className="font-[Cormorant_Infant] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
              variants={fadeInUp}
            >
              Behind the Build
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
              variants={fadeInUp}
            >
              Explore the stories, techniques, and philosophy behind our work. 
              Each piece has a journey—from historical research to final creation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.article 
            className="grid lg:grid-cols-2 gap-8 bg-card/30 border border-border/50"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Image with Hotspots */}
            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
              <InteractiveImage 
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                hotspots={blogPosts[0].hotspots}
              />
            </div>
            
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-[Cormorant_SC] tracking-[0.1em]">
                  Featured
                </span>
                <span className="text-xs text-muted-foreground">
                  {blogPosts[0].category}
                </span>
              </div>
              
              <h2 className="font-[Cormorant_Infant] text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                {blogPosts[0].title}
              </h2>
              
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                <span>{blogPosts[0].date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              
              <div>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-[Cormorant_SC] tracking-[0.15em] text-sm hover:bg-primary/90 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {blogPosts.slice(1).map((post) => (
              <motion.article 
                key={post.id}
                className="group"
                variants={fadeInUp}
              >
                <div className="bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Image with Hotspots */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <InteractiveImage 
                      src={post.image}
                      alt={post.title}
                      hotspots={post.hotspots}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-[Cormorant_SC] tracking-[0.1em] text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="font-[Cormorant_Infant] text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                      <button className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Read
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="font-[Cormorant_Infant] text-2xl md:text-3xl font-semibold mb-12 text-center"
              variants={fadeInUp}
            >
              Explore by Topic
            </motion.h2>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={fadeInUp}
            >
              {["All", "Process", "Materials", "Studio", "History", "Techniques"].map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 border border-border/50 font-[Cormorant_SC] tracking-[0.1em] text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
