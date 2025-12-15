import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import diamondRound from "@/assets/diamond-round.png";
import diamondPrincess from "@/assets/diamond-princess.png";
import diamondOval from "@/assets/diamond-oval.png";
import diamondEmerald from "@/assets/diamond-emerald.png";
import diamondCushion from "@/assets/diamond-cushion.png";
import diamondPear from "@/assets/diamond-pear.png";
import diamondEuropean from "@/assets/diamond-european.png";
import diamondAsscher from "@/assets/diamond-asscher.png";
import diamondRadiant from "@/assets/diamond-radiant.png";
import diamondMarquise from "@/assets/diamond-marquise.png";
import diamondHeart from "@/assets/diamond-heart.png";
import diamondOldminar from "@/assets/diamond-oldminar.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const diamondShapes = [
  { name: "Round", image: diamondRound, description: "Classic brilliance" },
  { name: "Princess", image: diamondPrincess, description: "Modern elegance" },
  { name: "Oval", image: diamondOval, description: "Timeless grace" },
  { name: "Pear", image: diamondPear, description: "Distinctive beauty" },
  { name: "Emerald", image: diamondEmerald, description: "Sophisticated charm" },
  { name: "European Cut", image: diamondEuropean, description: "Vintage allure" },
  { name: "Cushion", image: diamondCushion, description: "Romantic allure" },
  { name: "Asscher", image: diamondAsscher, description: "Art deco style" },
  { name: "Radiant", image: diamondRadiant, description: "Brilliant fire" },
  { name: "Marquise", image: diamondMarquise, description: "Regal elegance" },
  { name: "Heart", image: diamondHeart, description: "Symbol of love" },
  { name: "Old Minar", image: diamondOldminar, description: "Antique charm" },
];

const DiamondShapes = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="diamonds" className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
            Shapes of Brilliance
          </span>
          <h2 className="heading-section mt-4 text-foreground">
            Shapes of Diamonds
          </h2>
          <p className="text-luxury mt-4">
            Each diamond shape possesses its own unique character and fire. 
            Discover the perfect cut that speaks to your soul.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background p-3 rounded-full shadow-soft hover:shadow-gold transition-all duration-300 -translate-x-4 lg:-translate-x-6"
            aria-label="Previous diamond"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background p-3 rounded-full shadow-soft hover:shadow-gold transition-all duration-300 translate-x-4 lg:translate-x-6"
            aria-label="Next diamond"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden px-4" ref={emblaRef}>
            <div className="flex gap-6">
              {diamondShapes.map((diamond, index) => (
                <motion.div
                  key={diamond.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex-[0_0_45%] sm:flex-[0_0_30%] md:flex-[0_0_22%] lg:flex-[0_0_16%] min-w-0 group"
                >
                  <div className="relative bg-background rounded-sm p-4 lg:p-6 shadow-soft hover:shadow-gold transition-all duration-500 cursor-pointer">
                    <div className="aspect-square flex items-center justify-center">
                      <img
                        src={diamond.image}
                        alt={`${diamond.name} cut diamond`}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
                  </div>
                  
                  <div className="text-center mt-4">
                    <h3 className="font-heading text-base lg:text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {diamond.name}
                    </h3>
                    <p className="text-muted-foreground text-xs lg:text-sm mt-1">
                      {diamond.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondShapes;
