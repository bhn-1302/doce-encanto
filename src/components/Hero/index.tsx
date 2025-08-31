import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-background min-h[80vh] flex items-center justify-center pt-24 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-secondary text-4xl sm:text-5xl md:text-6xl text-primary leading-tight cursor-default">
            O sabor que encanta em cada detalhe
          </h1>
          <p className="font-primary text-base sm:text-lg text-text-muted cursor-default">
            Na <span className="text-tertiary font-semibold">Doce Encanto</span>
            , cada receita é preparada artesanalmente para transformar seus
            momentos em experiências inesquecíveis.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-primary text-white font-primary font-medium rounded-xl shadow-md hover:bg-secondary transition-colors cursor-pointer">
              Peça já o seu doce
            </button>

            <button
              onClick={() => navigate("/menu")}
              className="px-6 py-3 bg-primary text-white font-primary font-medium rounded-xl shadow-md hover:bg-secondary transition-colors cursor-pointer"
            >
              Veja nosso Cardápio
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/bolo-confeitado.png"
            alt="Bolo confeitado"
            className="w-64 sm:w-80 md:w-[23rem] rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
