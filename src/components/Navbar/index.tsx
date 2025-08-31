import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-background shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-primary text-2xl font-bold cursor-default">Doce Encanto</h1>

        <ul className="hidden md:flex gap-8 text-text font-medium">
          <li className="hover:text-primary transition-colors cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li> <a href="#about" className="hover:text-primary transition-colors cursor-pointer">Sobre</a>
          </li>
          <li className="hover:text-primary transition-colors cursor-pointer">
            <Link to={"/menu"}>Cardápio</Link>
          </li>
          <li className="hover:text-primary transition-colors cursor-pointer">
           <Link to={"/products"}>Produtos</Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors cursor-pointer">Contato</a>
          </li>
        </ul>

        <button
          className="hidden md:inline-block bg-primary text-white px-5 py-2 rounded-full font-semibold
                 shadow-md hover:opacity-90 transition cursor-pointer"
        >
          Peça Agora
        </button>

        {/* Menu Mobile */}

        <button className="md:hidden text-primary cursor-pointer
        " onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-background shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-text font-medium">
            <li className="hover:text-primary transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Sobre
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Produtos
            </li>
            <li className="hover:text-primary transition-colors cursor-pointer">
              Contato
            </li>
          </ul>
          <div className="flex justify-center pb-6">
            <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition cursor-pointer">
              Peça Agora
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
