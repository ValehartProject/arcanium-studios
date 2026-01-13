/*
 * ARCANIUM STUDIOS - Home Page
 * Design: "Forge & Flame" - Dark Academia meets Industrial Craft
 * Typography: Cormorant Infant (display) + Cormorant Garamond (body)
 * 
 * Sections:
 * 1. Hero - Main theme tagline with user's feature image
 * 2. Mission - Studio philosophy and purpose
 * 3. Triptych - 3-piece feature case (Past/Present/Future)
 * 4. Process - Human vs AI collaboration breakdown
 * 5. Contact - Simple call-to-action
 */

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Animation variants for consistent feel
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    } as const
  }
};

// Process data from the user's table
const processStages = [
  {
    stage: "Research",
    ai: "Organises references, checks cultural and historical context, and summarises source material for faster review.",
    human: "Deep-dives into sources, selects what is culturally appropriate, and sets the artistic and ethical direction."
  },
  {
    stage: "Concept Modelling",
    ai: "Maps logic and constraints, tests structures virtually, and highlights potential conflicts or missing links.",
    human: "Sketches and prototypes ideas, defines function and form, and chooses which concepts move forward."
  },
  {
    stage: "Design Planning",
    ai: "Predicts material behaviour, flags structural risks, and suggests options for load, balance, or wear.",
    human: "Makes final design and engineering decisions, plans workflow, and adapts designs to real-world tools and limits."
  },
  {
    stage: "Crafting",
    ai: "No role in visual or physical generation. AI does not sculpt, cast, paint, or generate imagery.",
    human: "Hand sculpts, casts, sands, paints, finishes, and assembles every piece – from dice and hairpins to props and sculptures."
  },
  {
    stage: "Practical Effects & Illusions",
    ai: "Models light, flow, and visibility, and helps predict how fog, resin, and lighting will interact.",
    human: "Builds and installs the actual rigs: fog systems, lighting, supports, and environmental setups for live displays."
  },
  {
    stage: "Testing",
    ai: "Suggests test parameters and highlights potential weak points in the logic or intended use.",
    human: "Performs stress tests, wear tests, and real-world checks; adjusts materials, fit, balance, and finish."
  },
  {
    stage: "Cultural Context & Lore",
    ai: "Helps structure write-ups, surfaces primary sources, and keeps track of references for later citation.",
    human: "Writes the final lore cards and plaques, ensures tone and framing are respectful, and confirms cultural accuracy."
  },
  {
    stage: "Documentation",
    ai: "Assists with summarising process notes, organising logs, and formatting information for clarity.",
    human: "Reviews for accuracy and ethics, signs off on what is shared publicly, and decides what becomes part of the record."
  }
];

// Triptych data
const triptychPieces = [
  {
    id: "past",
    title: "The Past",
    subtitle: "Ancient Traditions",
    description: "Hand-painted artwork reviving techniques from centuries past. Traditional pigments, natural materials, and methods preserved through careful study.",
    image: "/images/feature-past.jpg"
  },
  {
    id: "present",
    title: "The Present",
    subtitle: "Living Craft",
    description: "Where ancient knowledge meets contemporary practice. Every piece is shaped by human hands, guided by machine-verified historical reasoning.",
    image: "/images/feature-present.jpg"
  },
  {
    id: "future",
    title: "The Future",
    subtitle: "Traditions Reborn",
    description: "Relics and symbols reinterpreted for the world we're building. Not replicas, but living traditions made new.",
    image: "/images/feature-future.jpg"
  }
];

export default function Home() {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay - Using user's hero image */}
        <div className="absolute inset-0">
          <img 
            src="/images/arcanium-hero.png" 
            alt="Arcanium Studios"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        </div>
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p 
            className="font-[Cormorant_SC] text-primary tracking-[0.2em] text-sm mb-6"
            variants={fadeInUp}
          >
            A Human–AI Craft Studio
          </motion.p>
          
          <motion.h1 
            className="font-[Cormorant_Infant] text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8"
            variants={fadeInUp}
          >
            <span className="block">Reconstructing the past</span>
            <span className="block text-primary">in the present,</span>
            <span className="block">for the future</span>
          </motion.h1>
          
          <motion.div 
            className="divider-gold w-32 mx-auto mb-8"
            variants={fadeInUp}
          />
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Working at the edge of history, reviving ancient traditions, materials, 
            and mythologies through contemporary practice.
          </motion.p>
          
          <motion.div 
            className="mt-12"
            variants={fadeInUp}
          >
            <a 
              href="#work" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary/50 text-primary font-[Cormorant_SC] tracking-[0.15em] text-sm hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              Explore Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p 
              className="font-[Cormorant_SC] text-primary tracking-[0.2em] text-sm mb-6"
              variants={fadeInUp}
            >
              Our Mission
            </motion.p>
            
            <motion.h2 
              className="font-[Cormorant_Infant] text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 leading-tight"
              variants={fadeInUp}
            >
              Recovering what would otherwise disappear
            </motion.h2>
            
            <motion.div 
              className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed"
              variants={fadeInUp}
            >
              <p>
                Arcanium is a human–AI craft studio working at the edge of history and reviving 
                ancient traditions, materials, and mythologies through contemporary practice.
              </p>
              <p>
                We combine physical and modern craftsmanship with machine-guided historical reasoning 
                to recover techniques, processes, and forms that would otherwise disappear.
              </p>
              <p>
                Our work reinterprets relics, symbols, and artefacts from past civilisations. 
                <span className="text-foreground font-medium"> Not as replicas, but as living traditions</span>, 
                re-made for the world we're building now.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-16 pt-16 border-t border-border/50"
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                <p className="font-[Cormorant_Infant] text-2xl md:text-3xl text-foreground">
                  Built & designed by humans.
                </p>
                <p className="font-[Cormorant_Infant] text-2xl md:text-3xl text-primary">
                  Verified by AI.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Triptych Section - 3-Piece Feature Case */}
      <section id="work" className="py-32 relative bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p 
              className="font-[Cormorant_SC] text-primary tracking-[0.2em] text-sm mb-6"
              variants={fadeInUp}
            >
              Featured Work
            </motion.p>
            <motion.h2 
              className="font-[Cormorant_Infant] text-3xl md:text-4xl lg:text-5xl font-semibold"
              variants={fadeInUp}
            >
              A Journey Through Time
            </motion.h2>
          </motion.div>
          
          {/* Triptych Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {triptychPieces.map((piece, index) => (
              <motion.article 
                key={piece.id}
                className={`group relative ${index === 1 ? 'md:-mt-8 md:mb-8' : ''}`}
                variants={fadeInUp}
              >
                <div className="relative overflow-hidden bg-card border border-border/50 glow-warm">
                  {/* Image */}
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={piece.image} 
                      alt={piece.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p className="font-[Cormorant_SC] text-primary tracking-[0.15em] text-xs mb-2">
                      {piece.subtitle}
                    </p>
                    <h3 className="font-[Cormorant_Infant] text-xl lg:text-2xl mb-3">
                      {piece.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {piece.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/30" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p 
              className="font-[Cormorant_SC] text-primary tracking-[0.2em] text-sm mb-6"
              variants={fadeInUp}
            >
              Our Process
            </motion.p>
            <motion.h2 
              className="font-[Cormorant_Infant] text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
              variants={fadeInUp}
            >
              Human–AI Collaboration
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Every stage of our work is a dialogue between human creativity and machine-assisted verification.
            </motion.p>
          </motion.div>
          
          {/* Process Table */}
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Header */}
            <motion.div 
              className="hidden md:grid md:grid-cols-[200px_1fr_1fr] gap-6 pb-4 mb-4 border-b border-border/50"
              variants={fadeInUp}
            >
              <div className="font-[Cormorant_SC] text-primary tracking-[0.15em] text-sm">
                Stage
              </div>
              <div className="font-[Cormorant_SC] text-primary tracking-[0.15em] text-sm">
                AI Contribution
              </div>
              <div className="font-[Cormorant_SC] text-primary tracking-[0.15em] text-sm">
                Human Contribution
              </div>
            </motion.div>
            
            {/* Rows */}
            {processStages.map((item, index) => (
              <motion.div 
                key={item.stage}
                className={`
                  group grid md:grid-cols-[200px_1fr_1fr] gap-4 md:gap-6 py-6 border-b border-border/30
                  cursor-pointer transition-all duration-300
                  ${activeProcess === index ? 'bg-card/50' : 'hover:bg-card/30'}
                `}
                variants={fadeInUp}
                onClick={() => setActiveProcess(activeProcess === index ? null : index)}
              >
                <div className="font-[Cormorant_Infant] text-foreground text-lg font-semibold">
                  {item.stage}
                </div>
                
                {/* Mobile labels */}
                <div className="md:hidden font-[Cormorant_SC] text-primary tracking-[0.1em] text-xs mt-2">
                  AI Contribution
                </div>
                <div className="text-muted-foreground text-sm leading-relaxed">
                  {item.ai}
                </div>
                
                {/* Mobile labels */}
                <div className="md:hidden font-[Cormorant_SC] text-primary tracking-[0.1em] text-xs mt-2">
                  Human Contribution
                </div>
                <div className="text-foreground text-sm leading-relaxed">
                  {item.human}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p 
              className="font-[Cormorant_SC] text-primary tracking-[0.2em] text-sm mb-6"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.p>
            
            <motion.h2 
              className="font-[Cormorant_Infant] text-3xl md:text-4xl lg:text-5xl font-semibold mb-8"
              variants={fadeInUp}
            >
              Commission a Piece
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-lg mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              Whether you're seeking a custom artefact, a collaboration on cultural preservation, 
              or simply want to learn more about our process, we'd love to hear from you.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <a 
                href="mailto:hello@arcanium-studios.com" 
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-[Cormorant_SC] tracking-[0.15em] text-sm hover:bg-primary/90 transition-all duration-300 glow-warm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
