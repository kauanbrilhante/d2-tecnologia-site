import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SegmentCards from '@/components/SegmentCards';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string };
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <SegmentCards />
        <AboutUs />
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
