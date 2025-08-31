import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-background text-text-muted py-10 mt-16 border-t border-gray-200"
    >
      <div className="max-w-6xl max-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-secondary text-primary mb-3 cursor-default">
            Doce Encanto
          </h2>
          <p className="text-sm font-primary cursor-default">
            O sabor que encanta em cada detalhe.
          </p>
        </div>

        <div className="flex flex-col space-y-2 cursor-default">
          <h3 className="text-lg font-secondary text-primary mb-2">
            Navegação
          </h3>
          <a href="/" className="hover:text-tertiary transition-colors">
            Home
          </a>
          <a href="/menu" className="hover:text-tertiary transition-colors">
            Menu
          </a>
          <a href="/products">Produtos</a>
          <a href="#depoimentos">Depoimentos</a>
        </div>

        <div className="flex flex-col space-y-2 cursor-default">
          <h3 className="text-lg font-secondary text-primary mb-2 cursor-default">
            Contato
          </h3>
          <p>📍 Rua das Flores, 123 - São Paulo/SP</p>
          <p>📞 (11) 98765-4321</p>
          <p>✉️ contato@doceencanto.com</p>

          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-tertiary transition-colors">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>

            <a href="#" className="hover:text-tertiary transition-colors">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>

            <a href="#" className="hover:text-tertiary transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500 cursor-default">
        © {new Date().getFullYear()} Doce Encanto. Todos os direitos reservados.
      </div>
    </footer>
  );
};
