import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import mockup1 from '@/assets/mockup-1.png';
import mockup2 from '@/assets/mockup-2.png';
import mockup3 from '@/assets/mockup-3.png';

const Hero = () => {
  const handleLearnMore = () => {
    const element = document.getElementById('about-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mockups = [mockup1, mockup2, mockup3];

  return (
    <section className="relative w-full">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {mockups.map((mockup, index) => (
            <CarouselItem key={index}>
              <div className="w-full">
                <img
                  src={mockup}
                  alt={`D2 Tecnologia Mockup ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Hero;
