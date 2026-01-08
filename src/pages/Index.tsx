import { MenuHeader } from "@/components/menu/MenuHeader";
import { SpecialsSection } from "@/components/menu/SpecialsSection";
import { MenuCategories } from "@/components/menu/MenuCategories";
import { MenuFooter } from "@/components/menu/MenuFooter";

const Index = () => {
  return (
    <div className="min-h-screen min-h-dvh bg-background">
      <div className="mx-auto max-w-lg px-5">
        <MenuHeader />
        <main>
          <SpecialsSection />
          <MenuCategories />
        </main>
        <MenuFooter />
      </div>
    </div>
  );
};

export default Index;
