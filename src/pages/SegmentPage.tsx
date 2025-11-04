import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SegmentCTA from '@/components/SegmentCTA';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

// Import images
import restaurantImage from '@/assets/restaurant.jpg';
import petshopImage from '@/assets/petshop.jpg';
import bakeryImage from '@/assets/bakery.jpg';
import marketImage from '@/assets/market.jpg';
import workshopImage from '@/assets/workshop.jpg';
import armazemImage from '@/assets/armazem.jpg';
import servicosImage from '@/assets/servicos.jpg';
import distribuidoraImage from '@/assets/distribuidora.jpg';

interface SegmentData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  emoji: string;
}

const segmentsData: Record<string, SegmentData> = {
  restaurante: {
    title: 'Restaurante',
    subtitle: 'Conheça a D2 Tecnologia: Seu restaurante mais ágil e pronto para crescer!',
    description: `No restaurante, cada detalhe conta: o atendimento de qualidade, a experiência do cliente e a agilidade na cozinha. A D2 Tecnologia traz soluções que otimizam o seu atendimento e aumentam a eficiência da sua operação.

Nosso sistema possui: 
- 3 totem de auto atendimento 
- 4 impressão direto na sua cozinha
- 2 tablet, celular, computador ou terminal o garçom escolhe
- 6 painel de pedidos na cozinha
- 1 cardápio eletrônico
- 5 pedido eletrônico na mesa
- O sistema roda direto na sua maquininha de cartão`,
    image: restaurantImage,
    emoji: '👨‍🍳',
  },
  petshop: {
    title: 'Petshop',
    subtitle: 'Conheça a D2 Tecnologia PET: Seu petshop mais ágil e pronto para crescer!',
    description: 'No petshop, a confiança dos clientes e o cuidado com os animais são essenciais. A D2 Tecnologia oferece soluções que tornam sua gestão mais eficiente, ajudando a cuidar dos seus clientes e pets com agilidade.',
    image: petshopImage,
    emoji: '🐾',
  },
  padaria: {
    title: 'Padaria',
    subtitle: 'Conheça a D2 Tecnologia: Sua padaria mais ágil e pronta para crescer!',
    description: 'Para uma padaria de sucesso, a gestão eficiente e o controle de produção são cruciais. Com a D2 Tecnologia, sua padaria funcionará de forma mais ágil e com um atendimento impecável.',
    image: bakeryImage,
    emoji: '🍞',
  },
  mercado: {
    title: 'Mercado',
    subtitle: 'Conheça a D2 Tecnologia: Seu mercado mais ágil e pronto para crescer!',
    description: 'Em um mercado, cada segundo conta. A D2 Tecnologia oferece soluções que garantem um fluxo de trabalho mais rápido, preciso e seguro, aumentando a satisfação dos seus clientes e a eficiência do seu time.',
    image: marketImage,
    emoji: '🛒',
  },
  oficina: {
    title: 'Oficina',
    subtitle: 'Conheça a D2 Tecnologia: Sua oficina mais ágil e pronta para crescer!',
    description: 'Na oficina, a organização e o controle de serviços são fundamentais. Você emite ordens de serviço e notas fiscais direto do seu celular de onde você estiver garantindo. A D2 Tecnologia traz ferramentas para que sua oficina funcione com mais agilidade e precisão, melhorando o atendimento e a gestão de recursos.',
    image: workshopImage,
    emoji: '👨‍🔧',
  },
  servico: {
    title: 'Serviço',
    subtitle: 'Conheça a D2 Tecnologia: Seu serviço mais ágil e pronto para crescer!',
    description: 'Para prestadores de serviço, a eficiência e o controle são essenciais para manter a qualidade. Com as soluções da D2 Tecnologia, você garante uma gestão ágil, que acompanha o ritmo do seu negócio e melhora o atendimento ao cliente.',
    image: servicosImage,
    emoji: '📝',
  },
  armazem: {
    title: 'Armazém',
    subtitle: 'Conheça a D2 Tecnologia: Seu armazém mais ágil e pronto para crescer!',
    description: 'Em um armazém, a eficiência no controle de estoque e a agilidade na movimentação de produtos são essenciais. A D2 Tecnologia oferece soluções que otimizam o gerenciamento do seu armazém, garantindo precisão no inventário e maior produtividade na operação.',
    image: armazemImage,
    emoji: '🚜',
  },
  distribuidora: {
    title: 'Distribuidora',
    subtitle: 'Conheça a D2 Tecnologia: Sua distribuidora mais ágil e pronta para crescer!',
    description: 'Em uma distribuidora, você emite ordens de serviço e notas fiscais direto do seu celular de onde você estiver garantindo a automação dos processos é crucial para otimizar a entrega e o controle de estoque. A D2 Tecnologia tem as melhores soluções para gerenciar seu fluxo de trabalho com agilidade e precisão.',
    image: distribuidoraImage,
    emoji: '📦',
  },
};

const SegmentPage = () => {
  const { segment } = useParams<{ segment: string }>();
  const navigate = useNavigate();
  const data = segment ? segmentsData[segment] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [segment]);

  const handleContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  if (!data) {
    return <div>Segmento não encontrado</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20" id="segment-top">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                    {data.emoji} {data.title}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {data.subtitle}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {data.description}
                </p>
                <Button
                  size="lg"
                  onClick={handleContact}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8 py-6"
                >
                  Fale com um especialista →
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative badge */}
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold shadow-lg">
                  Agilidade e Eficiência!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <SegmentCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SegmentPage;
