import { Sparkles } from "lucide-react";
import { MenuItem } from "./MenuItem";

const specials = [
  {
    name: "Стейк Рибай с трюфелем",
    description: "Мраморная говядина, картофельное пюре, черный трюфель и соус демиглас",
    price: "2500 ₽",
  },
  {
    name: "Салат с камчатским крабом",
    description: "Авокадо, томаты черри, соус юдзу и свежий краб",
    price: "1800 ₽",
  },
  {
    name: "Утиная грудка Су-вид",
    description: "Утка 72ч, трюфельное пюре и соус Порто",
    price: "1650 ₽",
  },
];

export const SpecialsSection = () => {
  return (
    <section className="relative py-8">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent rounded-3xl -mx-2" />
      
      <div className="relative">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium">
            Эксклюзив
          </span>
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
        </div>
        
        <h2 className="text-center font-display text-2xl md:text-3xl gold-shimmer mb-8">
          Новинки от Шефа
        </h2>
        
        <div className="space-y-4">
          {specials.map((item, index) => (
            <div key={item.name} className={`slide-up stagger-${index + 1}`} style={{ opacity: 0 }}>
              <MenuItem {...item} isSpecial />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
