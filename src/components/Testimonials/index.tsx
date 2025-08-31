import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Clara",
    text: "Os bolos da Doce Encanto são simplesmente maravilhosos! Sempre fresquinhos e lindos.",
    image: "/images/anaClara.png",
    rating: 5,
  },

  {
    id: 2,
    name: "Carlos Silva",
    text: "Os doces finos foram o destaque da minha festa. Todos elogiaram!",
    image: "/images/carlos.png",
    rating: 5,
  },

  {
    id: 3,
    name: "Mariana Souza",
    text: "Atendimento excelente e produtos de altíssima qualidade. Recomendo demais.",
    image: "/images/mariana.png",
    rating: 4,
  },
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section id="depoimentos" className="bg-background py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-secondary text-3xl md:text-4xl text-primary mb-10 cursor-default">
          O que dizem nossos clientes
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-md p-8 text-left space-y-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-lg text-primary cursor-default">
                    {testimonial.name}
                  </p>

                  <div className="flex text-yellow-500">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="gold" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text-muted font-primary italic cursor-default">
                "{testimonial.text}"
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-secondary transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-secondary transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-primary" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};
