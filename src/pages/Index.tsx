import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import CVDHPHTSection from "@/components/CVDHPHTSection";
import DiamondShapes from "@/components/DiamondShapes";
import FancyColorDiamondSection from "@/components/FancyColorDiamondSection";
import VideoSection from "@/components/VideoSection";
import CustomShapeSection from "@/components/CustomShapeSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import CertificateSection from "@/components/CertificateSection";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
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
    <main className="min-h-screen bg-background overflow-x-hidden max-w-full">
      <Navbar onContactClick={handleContactClick} />

      <HeroSlider onContactClick={handleContactClick} />

      <AboutSection />

      <CVDHPHTSection />

      <DiamondShapes />

      <CustomShapeSection onContactClick={handleContactClick} />

      <GallerySection />

      <VideoSection />

      <FancyColorDiamondSection />

      <ServicesSection onServiceClick={handleServiceClick} />

      <CertificateSection />

      <ContactSection onBookAppointment={handleContactClick} />

      <ReviewsSection />

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
