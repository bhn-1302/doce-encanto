type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Bolos Artesanais",
    description:
      "Feitos com ingredientes selecionados e decoração única para encantar seus momentos.",
    image: "/images/bolos-artesanais.png",
  },

  {
    id: 2,
    name: "Doces Finos",
    description:
      "Perfeitos para festas, casamentos e ocasiões especiais, com sabor e elegância.",
    image: "/images/doces-variados.png",
  },

  {
    id: 3,
    name: "Tortas Variadas",
    description:
      "Tortas doces e salgadas, sempre fresquinhas e com recheios irresistíveis.",
    image: "/images/tortas.png",
  },

  {
    id: 4,
    name: "Pães Especiais",
    description:
      "Produzidos artesanalmente com fermentação natural para um sabor incomparável.",
    image: "/images/paes.png",
  },
];

export const Products = () => {
  return (
    <section className="bg-background py-20  px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-secondary text-primary font-bold cursor-default">
          Nossos Produtos
        </h2>

        <p className="text-text-muted mt-4 max-w-2xl mx-auto cursor-default">
          Cada item é preparado com carinho, qualidade e dedicação para tornar
          sua experiência única.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((produto) => (
          <div
            key={produto.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={produto.image}
              alt={produto.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-6 space-y-3">
              <h3 className="font-secondary text-2xl text-primary cursor-default">
                {produto.name}
              </h3>
              <p className="font-primary text-text-muted cursor-default">
                {produto.description}
              </p>
              <a
                href="/menu"
                className="inline-block mt-2 py-2 px-6 bg-primary text-white font-primary font-medium rounded-lg shadow hover:bg-secondary transition-colors"
              >
                Ver no Cardápio
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
