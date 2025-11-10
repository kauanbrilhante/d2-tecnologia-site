import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SegmentCTA = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-secondary rounded-full blur-3xl animate-twinkle"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-secondary rounded-full blur-3xl animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-secondary rounded-full blur-3xl animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-28 h-28 bg-secondary rounded-full blur-3xl animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Conheça a <span className="text-secondary">D2 Tecnologia</span>: Sua automação comercial mais ágil e pronta para crescer!
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Na D2 Tecnologia, oferecemos soluções completas de automação comercial para diferentes segmentos, para que sua empresa funcione com agilidade e precisão. Você precisa de uma gestão que acompanhe o ritmo do seu negócio, e nós estamos aqui para ajudar! Fale com um especialista e descubra como podemos otimizar o seu processo!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SegmentCTA;
