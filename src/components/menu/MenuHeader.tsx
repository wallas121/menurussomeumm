import { UtensilsCrossed } from "lucide-react";

export const MenuHeader = () => {
  return (
    <header className="relative pt-8 pb-6 text-center fade-in">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Logo */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4">
        <UtensilsCrossed className="w-8 h-8 text-primary" />
      </div>
      
      {/* Restaurant Name */}
      <h1 className="font-display text-3xl md:text-4xl tracking-wide gold-shimmer">
        La Maison Dorée
      </h1>
      
      <p className="mt-2 text-sm text-muted-foreground tracking-widest uppercase">
        Изысканная Французская Кухня
      </p>
      
      {/* Decorative line */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
        <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
      </div>
    </header>
  );
};
