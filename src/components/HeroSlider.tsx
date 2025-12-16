import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/banner1.webp";
import hero2 from "@/assets/banner2.webp";
import hero3 from "@/assets/banner3.webp";

const slides = [
  { image: hero1, tagline: "Crafting Timeless Diamond Elegance" },
  { image: hero2, tagline: "Where Luxury Meets Artistry" },
  { image: hero3, tagline: "Brilliance Beyond Compare" },
];

interface HeroSliderProps {
  onContactClick: () => void;
}

const HeroSlider = ({ onContactClick }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-foreground">
      
      {/* ===== BACKGROUND SLIDES (NO UNMOUNT) ===== */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/50" />
        </motion.div>
      ))}

      {/* ===== CONTENT ===== */}
      <div className="relative h-full flex items-center justify-center text-center z-10">
        <div className="container-luxury">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="inline-block text-primary-foreground/90 text-sm md:text-base uppercase tracking-[0.3em] mb-6"
            >
              Reyu Jewels
            </motion.span> */}

            <h1 className="heading-display text-primary-foreground mb-8">
              {slides[currentSlide].tagline}
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button onClick={onContactClick} className="btn-gold rounded-sm">
                Book Appointment
              </button>
              <a
                href="#collection"
                className="btn-outline-gold border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground hover:text-foreground rounded-sm"
              >
                View Collection
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== NAVIGATION ===== */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ===== DOTS ===== */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 transition-all duration-500 ${
              index === currentSlide
                ? "bg-primary"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
