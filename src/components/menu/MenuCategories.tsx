import { Salad, ChefHat, IceCream, Wine } from "lucide-react";
import { MenuSection } from "./MenuSection";
import { MenuItem } from "./MenuItem";

const menuData = {
  entradas: [
    {
      name: "Карпаччо из Вагю",
      description: "Тонкие слайсы Вагю А5, каперсы, руккола и пармезан 36 месяцев",
      price: "1200 ₽",
    },
    {
      name: "Гребешки на гриле",
      description: "Свежие гребешки, пюре из цветной капусты и икра лайма",
      price: "950 ₽",
    },
    {
      name: "Буррата с трюфелем",
      description: "Сливочная буррата, конфи из томатов, песто и трюфельный мед",
      price: "850 ₽",
    },
    {
      name: "Луковый суп",
      description: "Классический французский рецепт с сыром грюйер и гренками",
      price: "650 ₽",
    },
  ],
  principais: [
    {
      name: "Филе Миньон с соусом Беарнез",
      description: "Филе 300г, картофель дофинуа и сезонные овощи",
      price: "1900 ₽",
    },
    {
      name: "Утиное конфи",
      description: "Утиная ножка конфи 8ч, пюре из зеленого яблока",
      price: "1450 ₽",
    },
    {
      name: "Сибас в травах",
      description: "Свежий сибас, ризотто с лимоном и пена из шампанского",
      price: "1350 ₽",
    },
    {
      name: "Равиоли с грибами",
      description: "Свежая паста с миксом лесных грибов и шалфеем",
      price: "890 ₽",
    },
  ],
  sobremesas: [
    {
      name: "Ванильный Крем-брюле",
      description: "Французская классика с мадагаскарской ванилью",
      price: "550 ₽",
    },
    {
      name: "Шоколадный Фондан",
      description: "Кекс из 70% шоколада с жидким центром и мороженым",
      price: "600 ₽",
    },
    {
      name: "Тарт Татен",
      description: "Деревенский пирог с карамелизированными яблоками",
      price: "500 ₽",
    },
    {
      name: "Сырная тарелка",
      description: "Бри, Конте, Рокфор с медом и орехами",
      price: "1100 ₽",
    },
  ],
  bebidas: [
    {
      name: "Шампанское Moët & Chandon",
      description: "Бокал 150мл - Brut Imperial, фруктовые ноты",
      price: "1800 ₽",
    },
    {
      name: "Красное вино - Château Margaux",
      description: "Бокал 150мл - Бордо, бархатные танины",
      price: "2500 ₽",
    },
    {
      name: "Негрони",
      description: "Джин Tanqueray, Кампари, Вермут Россо",
      price: "750 ₽",
    },
    {
      name: "Вода San Pellegrino",
      description: "Итальянская минеральная вода - 750мл",
      price: "450 ₽",
    },
  ],
};

export const MenuCategories = () => {
  return (
    <div className="space-y-2">
      <MenuSection title="Закуски" icon={<Salad className="w-4 h-4" />}>
        {menuData.entradas.map((item, index) => (
          <div key={item.name} className={`slide-up stagger-${index + 1}`} style={{ opacity: 0 }}>
            <MenuItem {...item} />
          </div>
        ))}
      </MenuSection>

      <MenuSection title="Основные Блюда" icon={<ChefHat className="w-4 h-4" />}>
        {menuData.principais.map((item, index) => (
          <div key={item.name} className={`slide-up stagger-${index + 1}`} style={{ opacity: 0 }}>
            <MenuItem {...item} />
          </div>
        ))}
      </MenuSection>

      <MenuSection title="Десерты" icon={<IceCream className="w-4 h-4" />}>
        {menuData.sobremesas.map((item, index) => (
          <div key={item.name} className={`slide-up stagger-${index + 1}`} style={{ opacity: 0 }}>
            <MenuItem {...item} />
          </div>
        ))}
      </MenuSection>

      <MenuSection title="Напитки" icon={<Wine className="w-4 h-4" />}>
        {menuData.bebidas.map((item, index) => (
          <div key={item.name} className={`slide-up stagger-${index + 1}`} style={{ opacity: 0 }}>
            <MenuItem {...item} />
          </div>
        ))}
      </MenuSection>
    </div>
  );
};
