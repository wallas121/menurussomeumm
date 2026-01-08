import { cn } from "@/lib/utils";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  isSpecial?: boolean;
  className?: string;
}

export const MenuItem = ({ name, description, price, isSpecial, className }: MenuItemProps) => {
  return (
    <article className={cn("menu-item-card group", className)}>
      {isSpecial && <span className="special-badge">Novo</span>}
      
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        <span className="price-tag whitespace-nowrap">
          {price}
        </span>
      </div>
    </article>
  );
};
