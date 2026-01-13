/*
 * Navigation Component - Arcanium Studios
 * Design: "Forge & Flame" - Fixed header with warm metallic accents
 */

import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Store" },
  { href: "/behind-the-build", label: "Behind the Build" },
  { href: "/events", label: "Events" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items, totalItems, totalPrice, isCartOpen, setIsCartOpen, removeItem, updateQuantity } = useCart();
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-[Cormorant_Infant] text-xl md:text-2xl tracking-[0.1em] text-foreground hover:text-primary transition-colors">
          ARCANIUM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 font-[Cormorant_SC] text-sm tracking-[0.1em]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                location === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Cart & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
            <SheetTrigger asChild>
              <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-[Cormorant_SC]">
                    {totalItems}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent className="bg-card border-border w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle className="font-[Cormorant_Infant] text-2xl tracking-wide">Your Cart</SheetTitle>
              </SheetHeader>
              
              <div className="mt-8 flex flex-col h-[calc(100vh-200px)]">
                {items.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-muted-foreground text-center">Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 bg-background/50 border border-border/50">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-[Cormorant_Infant] text-lg">{item.name}</h4>
                            <p className="text-primary font-[Cormorant_SC] tracking-wide">
                              ${item.price.toFixed(2)}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-muted rounded"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-muted rounded"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="ml-auto p-1 text-muted-foreground hover:text-destructive"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-border pt-4 mt-4 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-[Cormorant_SC] tracking-wide text-muted-foreground">Total</span>
                        <span className="font-[Cormorant_Infant] text-2xl text-primary">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-[Cormorant_SC] tracking-[0.15em]">
                        Checkout
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border/50">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-[Cormorant_SC] text-lg tracking-[0.1em] py-2 transition-colors ${
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
