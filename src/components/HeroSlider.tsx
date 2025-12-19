import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/i1.webp";
import hero2 from "@/assets/i2.webp";
import hero3 from "@/assets/i3.webp";

const slides = [
  { image: hero1, tagline: "We Believe in Consistency" },
  { image: hero2, tagline: "Crafted with Precision" },
  { image: hero3, tagline: "From First Spark to Final Brilliance" },
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
    <section className="relative w-full overflow-hidden bg-transparent mt-[100px]">
      <div className="relative w-full">
        {/* Reference image to determine container height */}
        <img
          src={slides[currentSlide].image}
          alt=""
          className="w-full h-auto opacity-0 pointer-events-none"
          aria-hidden="true"
        />

        {/* ===== BACKGROUND SLIDES (NO UNMOUNT) ===== */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            initial={false}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/50 pointer-events-none" />
          </motion.div>
        ))}

        {/* ===== CONTENT ===== */}
        {/* <div className="relative h-full flex items-center justify-center text-center z-10">
          <div className="container-luxury">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >

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
        </div> */}

        <div className="absolute inset-0 pointer-events-none z-10">
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 z-20 pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 z-20 pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* ===== DOTS ===== */}
          <div className="absolute bottom-2 sm:bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20 pointer-events-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 sm:w-10 md:w-12 h-1 transition-all duration-500 ${
                  index === currentSlide
                    ? "bg-primary"
                    : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
