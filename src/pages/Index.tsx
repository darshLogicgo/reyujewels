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
import BackToTop from "@/components/BackToTop";
import SEO from "@/components/SEO";

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
      <SEO
        title="Reyu Jewels | Lab-Grown Diamonds – All Cuts & Shapes"
        description="Explore premium lab-grown diamonds in all cuts and shapes at Reyu Jewels. Ethically sourced, IGI certified, custom-made jewellery available."
        keywords="lab grown diamonds, diamond shapes, round cut diamond, oval diamond, emerald cut diamond, cushion cut diamond, ethical diamonds, Reyu Jewels"
        ogTitle="Lab-Grown Diamonds – All Cuts & Shapes | Reyu Jewels"
        ogDescription="Discover ethically crafted lab-grown diamonds in every cut and shape. Premium quality, certified stones, and custom jewellery at Reyu Jewels."
        twitterTitle="Lab-Grown Diamonds – All Cuts & Shapes | Reyu Jewels"
        twitterDescription="Premium lab-grown diamonds in all shapes & cuts. Ethical, certified, and custom-made jewellery by Reyu Jewels."
      />
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

      {/* <CertificateSection /> */}

      <ContactSection onBookAppointment={handleContactClick} />

      <ReviewsSection />

      <Footer />

      <WhatsAppButton />
      <BackToTop />

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleCloseForm}
        serviceTitle={selectedService}
      />
    </main>
  );
};

export default Index;
