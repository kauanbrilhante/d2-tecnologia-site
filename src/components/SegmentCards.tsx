import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import restaurantImage from '@/assets/restaurant.jpg';
import petshopImage from '@/assets/petshop.jpg';
import bakeryImage from '@/assets/bakery.jpg';
import marketImage from '@/assets/market.jpg';
import workshopImage from '@/assets/workshop.jpg';
import armazemImage from '@/assets/armazem.jpg';
import servicosImage from '@/assets/servicos.jpg';
import distribuidoraImage from '@/assets/distribuidora.jpg';
import logo from '@/assets/logo-d2.png';

interface Segment {
  title: string;
  image: string;
  color: string;
  slug: string;
}

const segments: Segment[] = [
  { title: 'Padarias', image: bakeryImage, color: '', slug: 'padaria' },
  { title: 'Mercados', image: marketImage, color: '', slug: 'mercado' },
  { title: 'Restaurantes', image: restaurantImage, color: '', slug: 'restaurante' },
  { title: 'Pet Shop', image: petshopImage, color: '', slug: 'petshop' },
  { title: 'Oficinas', image: workshopImage, color: '', slug: 'oficina' },
  { title: 'Serviços', image: servicosImage, color: '', slug: 'servico' },
  { title: 'Armazéns', image: armazemImage, color: '', slug: 'armazem' },
  { title: 'Distribuidora', image: distribuidoraImage, color: '', slug: 'distribuidora' },
];

const SegmentCards = () => {
  return (
    <section id="segments" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções Especializadas por Segmento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos sistemas personalizados para cada tipo de comércio
          </p>
        </div>

        {/* Mural layout with empty center */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* First row - 3 cards */}
          {segments.slice(0, 3).map((segment) => (
            <Link key={segment.title} to={`/segmento/${segment.slug}`}>
              <Card className="group relative overflow-hidden rounded-xl border-none shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <div className="relative">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white">{segment.title}</h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
          
          {/* Second row - card, empty space with logo, card */}
          {segments.slice(3, 4).map((segment) => (
            <Link key={segment.title} to={`/segmento/${segment.slug}`}>
              <Card className="group relative overflow-hidden rounded-xl border-none shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <div className="relative">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white">{segment.title}</h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
          
          {/* Empty center space with logo */}
          <div className="hidden md:flex items-center justify-center">
            <img src={logo} alt="D2 Tecnologia" className="w-32 h-32 object-contain" />
          </div>
          
          {segments.slice(4, 5).map((segment) => (
            <Link key={segment.title} to={`/segmento/${segment.slug}`}>
              <Card className="group relative overflow-hidden rounded-xl border-none shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <div className="relative">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white">{segment.title}</h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
          
          {/* Third row - three cards */}
          {segments.slice(5, 8).map((segment) => (
            <Link key={segment.title} to={`/segmento/${segment.slug}`}>
              <Card className="group relative overflow-hidden rounded-xl border-none shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <div className="relative">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white">{segment.title}</h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentCards;
