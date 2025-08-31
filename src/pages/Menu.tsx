type MenuItem = {
  name: string;
  price: string;
};

type MenuCategory = {
  title: string;
  icon: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    title: "Bolos",
    icon: "🎂",
    items: [
      { name: "Bolo de Chocolate", price: "R$ 40,00" },
      { name: "Bolo Red Velvet", price: "R$ 55,00" },
      { name: "Bolo de Morando com Chantilly", price: "R$ 48,00" },
    ],
  },

  {
    title: "Doces",
    icon: "🍬",
    items: [
      { name: "Brigadeiro Gourmet", price: "R$ 3,50" },
      { name: "Beijinho", price: "R$ 3,00" },
      { name: "Trufa de Maracujá", price: "R$ 5,00" },
    ],
  },

  {
    title: "Tortas",
    icon: "🥧",
    items: [
      { name: "Torta de Limão", price: "R$ 32,00" },
      { name: "Torta Holandesa", price: "R$ 38,00" },
      { name: "Torta de Frutas Vermelhas", price: "R$ 42,00" },
    ],
  },

  {
    title: "Pães",
    icon: "🍞",
    items: [
      { name: "Pão Caseiro", price: "R$ 8,00" },
      { name: "Pão de Queijo (10  unid)", price: "R$ 15,00" },
      { name: "Pão Integral", price: "R$ 10,00" },
    ],
  },
];

export const Menu = () => {
  return (
    <section className="bg-background min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-secondary text-center text-primary font-bold mb-12 cursor-default">
          Nosso Cardápio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {menuData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-secondary text-primary mb-4 flex items-center gap-2 cursor-default">
                <span>{category.icon}</span> {category.title}
              </h2>
              <ul className="space-y-3 text-text font-primary">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b pb-2 cursor-default">
                    <span>{item.name}</span>
                    <span className="text-tertiaryfont-semibold">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
