/*
 * Footer Component - Arcanium Studios
 * Design: "Forge & Flame" - Warm, minimal footer
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-[Cormorant_Infant] text-xl tracking-[0.1em] mb-4">
              ARCANIUM STUDIOS
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A human–AI craft studio working at the edge of history, 
              reviving ancient traditions through contemporary practice.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-[Cormorant_SC] text-primary tracking-[0.15em] text-sm mb-4">
              Explore
            </h4>
            <div className="space-y-2">
              <Link href="/store" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Store
              </Link>
              <Link href="/behind-the-build" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Behind the Build
              </Link>
              <Link href="/events" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Events
              </Link>
              <Link href="/#process" className="block text-muted-foreground hover:text-foreground text-sm transition-colors">
                Our Process
              </Link>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-[Cormorant_SC] text-primary tracking-[0.15em] text-sm mb-4">
              Connect
            </h4>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:hello@arcanium-studios.com" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@arcanium-studios.com
              </a>
              <a 
                href="https://instagram.com/arcaniumstudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-[Cormorant_SC] text-sm tracking-[0.1em] text-muted-foreground">
            © 2025 Arcanium Studios
          </div>
          <div className="font-[Cormorant_Infant] text-sm text-muted-foreground italic">
            Built & designed by humans. Verified by AI.
          </div>
        </div>
      </div>
    </footer>
  );
}
