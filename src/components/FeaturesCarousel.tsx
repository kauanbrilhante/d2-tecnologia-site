import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import banner1 from '@/assets/banner-1.png';
import banner2 from '@/assets/banner-2.png';
import banner3 from '@/assets/banner-3.png';
import Autoplay from 'embla-carousel-autoplay';

const FeaturesCarousel = () => {
  const [api, setApi] = useState<any>();

  const banners = [
    { id: 1, image: banner1, alt: 'Soluções Essenciais para sua Empresa' },
    { id: 2, image: banner2, alt: 'Mobilidade e Agilidade' },
    { id: 3, image: banner3, alt: 'O Software da sua loja está aqui' },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5581941017004?text=Olá,%20vim%20do%20seu%20site!', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {banners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={banner.image} 
                    alt={banner.alt}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        <div className="text-center mt-8">
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Clique aqui e vamos conversar!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
