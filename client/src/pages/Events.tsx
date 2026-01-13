/*
 * Events Page - Arcanium Studios
 * Design: "Forge & Flame" - Timeline-style event listings
 * Features: Upcoming events, past events archive, RSVP functionality
 */

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
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
      staggerChildren: 0.15,
      delayChildren: 0.1
    } as const
  }
};

// Placeholder events
const upcomingEvents = [
  {
    id: "1",
    title: "Open Studio: The Forge Awakens",
    date: "February 15, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Arcanium Studios, Melbourne",
    description: "Join us for an intimate look at our workshop. Watch live demonstrations of traditional metalworking techniques, meet the artisans, and see works in progress.",
    image: "/images/hero-workshop.jpg",
    type: "Open Studio"
  },
  {
    id: "2",
    title: "Workshop: Introduction to Lost-Wax Casting",
    date: "March 8, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Arcanium Studios, Melbourne",
    description: "A hands-on workshop exploring the ancient art of lost-wax casting. Learn the fundamentals of this 5,000-year-old technique and create your own small bronze piece.",
    image: "/images/feature-present.jpg",
    type: "Workshop",
    spots: 8
  },
  {
    id: "3",
    title: "Exhibition: Reconstructing Mesopotamia",
    date: "April 1 - May 30, 2025",
    time: "Gallery Hours",
    location: "State Library Victoria",
    description: "Our largest exhibition to date, featuring a collection of sculptures and artifacts inspired by ancient Mesopotamian civilizations. A collaboration with the Archaeology Department.",
    image: "/images/feature-future.jpg",
    type: "Exhibition"
  },
];

const pastEvents = [
  {
    id: "p1",
    title: "Lecture: AI in Cultural Preservation",
    date: "November 12, 2024",
    location: "University of Melbourne",
    type: "Lecture"
  },
  {
    id: "p2",
    title: "Workshop: Traditional Pigment Making",
    date: "October 5, 2024",
    location: "Arcanium Studios",
    type: "Workshop"
  },
  {
    id: "p3",
    title: "Open Studio: Winter Solstice",
    date: "June 21, 2024",
    location: "Arcanium Studios",
    type: "Open Studio"
  },
];

export default function Events() {
  const handleRSVP = (eventTitle: string) => {
    toast.success(`RSVP request sent for "${eventTitle}". We'll be in touch soon!`);
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
              Join Us
            </motion.p>
            <motion.h1 
              className="font-[Cormorant_Infant] text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
              variants={fadeInUp}
            >
              Events
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
              variants={fadeInUp}
            >
              From open studio days to hands-on workshops and exhibitions, 
              discover opportunities to engage with our craft and community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h2 
              className="font-[Cormorant_Infant] text-2xl md:text-3xl font-semibold mb-12"
              variants={fadeInUp}
            >
              Upcoming Events
            </motion.h2>
            
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.article 
                  key={event.id}
                  className="group grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-8 p-6 bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
                  variants={fadeInUp}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-[Cormorant_SC] tracking-[0.1em]">
                          {event.type}
                        </span>
                        {event.spots && (
                          <span className="text-xs text-muted-foreground">
                            {event.spots} spots available
                          </span>
                        )}
                      </div>
                      
                      <h3 className="font-[Cormorant_Infant] text-2xl md:text-3xl font-semibold mb-4 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        onClick={() => handleRSVP(event.title)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-[Cormorant_SC] tracking-[0.15em] text-sm hover:bg-primary/90 transition-all"
                      >
                        RSVP
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="font-[Cormorant_Infant] text-2xl md:text-3xl font-semibold mb-12"
              variants={fadeInUp}
            >
              Past Events
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <motion.article 
                  key={event.id}
                  className="p-6 border border-border/30 hover:border-border/50 transition-colors"
                  variants={fadeInUp}
                >
                  <span className="text-xs font-[Cormorant_SC] tracking-[0.1em] text-primary mb-2 block">
                    {event.type}
                  </span>
                  <h3 className="font-[Cormorant_Infant] text-lg font-semibold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {event.date} · {event.location}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24">
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
              Stay in the Loop
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg mb-8"
              variants={fadeInUp}
            >
              Be the first to know about upcoming events, workshops, and exhibitions. 
              Join our mailing list for exclusive invitations.
            </motion.p>
            <motion.form 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              variants={fadeInUp}
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Thank you for subscribing!");
              }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-card border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-[Cormorant_SC] tracking-[0.15em] text-sm hover:bg-primary/90 transition-all"
              >
                Subscribe
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
