import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import DiamondShapes from "@/components/DiamondShapes";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleContactClick = () => {
    setSelectedService(undefined);
    setIsContactFormOpen(true);
  };

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsContactFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsContactFormOpen(false);
    setSelectedService(undefined);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar onContactClick={handleContactClick} />
      
      <HeroSlider onContactClick={handleContactClick} />
      
      <AboutSection />
      
      <DiamondShapes />
      
      <GallerySection />
      
      <ServicesSection onServiceClick={handleServiceClick} />
      
      <ContactSection onBookAppointment={handleContactClick} />
      
      <Footer />
      
      <WhatsAppButton />
      
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleCloseForm}
        serviceTitle={selectedService}
      />
    </main>
  );
};

export default Index;
