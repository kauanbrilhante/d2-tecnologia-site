import { Smile, Star, Globe, Zap } from 'lucide-react';

const AboutUs = () => {
  const facts = [
    {
      icon: Smile,
      title: 'Quem Somos',
      description: 'Na D2 Tecnologia, somos especialistas em automação comercial e gestão empresarial, com mais de 20 anos de experiência no mercado. Ao longo de nossa trajetória, nos tornamos referência na venda de sistemas. Sempre com as mais novas tecnologias com gestão de ponta a ponta, clareza e segurança nas informações, além de um suporte sempre pronto para te atender. Nosso compromisso é ajudar os nossos clientes a otimizar suas operações e aumentar a eficiência de seus negócios com tecnologia de ponta e suporte dedicado.'
    },
    {
      icon: Star,
      title: 'Por Que Fazemos',
      description: 'Nosso trabalho é movido pela paixão por transformar o cotidiano de empresas e comércios por meio ta tecnologia e gestão. Sabemos o quão desafiador é administrar um negócio com tantas variáveis, e é por isso que estamos aqui: para simplificar processos, garantir a conformidade fiscal e proporcionar soluções que melhorem a gestão e o desempenho de nossos clientes. Nosso foco é proporcionar uma experiência sem complicações, com a garantia de que cada cliente tenha o suporte necessário para evoluir.'
    },
    {
      icon: Globe,
      title: 'O Que Fazemos',
      description: 'Oferecemos sistemas de automação comercial de alta performance, que são projetados para garantir operações rápidas, seguras e eficientes. Além disso, nossos clientes e parceiros contam com um suporte contínuo, ajudando a se manterem em conformidade e a tomarem decisões estratégicas baseadas em dados precisos. Nosso diferencial é o atendimento personalizado e o suporte integral, acompanhando cada cliente em todas as etapas da implementação e operação do sistema.'
    },
    {
      icon: Zap,
      title: 'Nosso Propósito',
      description: 'Na D2 Tecnologia, acreditamos que a automação comercial não é apenas sobre tecnologia; é sobre proporcionar uma experiência mais fluida e estratégica para os nossos clientes. Nosso propósito é fazer com que cada processo de venda, pagamento e gestão seja otimizado, com sistemas que realmente atendam às necessidades do negócio. Estamos comprometidos em fornecer não apenas produtos de qualidade, mas também suporte contínuo, para que você nunca se sinta sozinho na jornada. Nossa missão é ser o parceiro tecnológico e de gestão que você pode contar, sempre.'
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Fatos sobre nós
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{fact.title}</h3>
                  <p className="text-foreground leading-relaxed">{fact.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
