import { MessageCircle } from 'lucide-react';

const ContactForm = () => {
  const whatsappNumber = '5581941017004';
  const message = 'Olá, vim do seu site!';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Fale conosco pelo WhatsApp e descubra como podemos ajudar seu negócio
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
