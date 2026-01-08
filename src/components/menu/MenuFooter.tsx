import { MapPin, Phone, Clock } from "lucide-react";

export const MenuFooter = () => {
  return (
    <footer className="mt-12 pb-8 text-center fade-in">
      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
        <span className="w-2 h-2 rotate-45 border border-primary/30" />
        <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
      </div>
      
      <div className="space-y-4 text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4 text-primary/70" />
          <span>Rua das Flores, 123 - Jardins, São Paulo</span>
        </div>
        
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 text-primary/70" />
          <span>(11) 3456-7890</span>
        </div>
        
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-primary/70" />
          <span>Ter-Dom: 19h às 00h</span>
        </div>
      </div>
      
      <p className="mt-8 text-xs text-muted-foreground/50">
        10% de serviço não incluído • Reservas recomendadas
      </p>
      
      <p className="mt-4 text-xs text-muted-foreground/30">
        © 2026 La Maison Dorée
      </p>
    </footer>
  );
};
