import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MenuSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const MenuSection = ({ title, icon, children, className }: MenuSectionProps) => {
  return (
    <section className={cn("py-6", className)}>
      <div className="section-divider">
        <div className="category-badge mx-4">
          {icon}
          <span>{title}</span>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        {children}
      </div>
    </section>
  );
};
