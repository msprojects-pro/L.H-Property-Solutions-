import { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutTrust } from './components/AboutTrust';
import { ContactQuote } from './components/ContactQuote';
import { Footer } from './components/Footer';
import { SERVICES } from './data/siteData';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    SERVICES[0].title
  );
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => {
        nameInputRef.current?.focus({ preventScroll: true });
      }, 450);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5] flex flex-col">
      <Navbar onQuoteClick={() => scrollToQuote()} />
      <main className="flex-1">
        <Hero onQuoteClick={() => scrollToQuote()} />
        <Services onSelectService={(title) => scrollToQuote(title)} />
        <AboutTrust onSelectService={(title) => scrollToQuote(title)} />
        <ContactQuote
          selectedService={selectedService}
          nameInputRef={nameInputRef}
        />
      </main>
      <Footer />
    </div>
  );
}
