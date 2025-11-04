import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import logo from '@/assets/logo-d2.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="D2 Tecnologia" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/80 mb-4">
              O melhor sístema, soluções completas em tecnologia para sua empresa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Solutions by Segment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soluções por Segmento</h3>
            <ul className="space-y-2">
              <li><Link to="/segmento/restaurante" className="text-primary-foreground/80 hover:text-secondary transition-colors">Restaurantes</Link></li>
              <li><Link to="/segmento/petshop" className="text-primary-foreground/80 hover:text-secondary transition-colors">Pet Shop</Link></li>
              <li><Link to="/segmento/padaria" className="text-primary-foreground/80 hover:text-secondary transition-colors">Padarias</Link></li>
              <li><Link to="/segmento/mercado" className="text-primary-foreground/80 hover:text-secondary transition-colors">Mercados</Link></li>
              <li><Link to="/segmento/oficina" className="text-primary-foreground/80 hover:text-secondary transition-colors">Oficinas</Link></li>
              <li><Link to="/segmento/armazem" className="text-primary-foreground/80 hover:text-secondary transition-colors">Armazéns</Link></li>
              <li><Link to="/segmento/servico" className="text-primary-foreground/80 hover:text-secondary transition-colors">Serviços</Link></li>
              <li><Link to="/segmento/distribuidora" className="text-primary-foreground/80 hover:text-secondary transition-colors">Distribuidora</Link></li>
            </ul>
          </div>

          {/* Access Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Áreas de Acesso</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">Página inicial</Link></li>
              <li><Link to="/area-contador" className="text-primary-foreground/80 hover:text-secondary transition-colors">Área do Contador</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-secondary" />
                <span className="text-primary-foreground/80">(81) 4101-7004</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={18} className="text-secondary" />
                <a href="https://instagram.com/d2tecnologia_" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  @d2tecnologia_
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:suporte@d2tecnologia.com" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  suporte@d2tecnologia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} D2 Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
