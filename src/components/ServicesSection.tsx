import { motion } from "framer-motion";
import { Diamond, Sparkles, Palette } from "lucide-react";

const services = [
  {
    icon: Diamond,
    title: "Make to Order Fancy Diamonds",
    description: "Exquisite fancy colored diamonds crafted to your exact specifications. From rare pinks to vivid yellows, we source and set your perfect stone.",
  },
  {
    icon: Sparkles,
    title: "Make to Order Jewellery",
    description: "Commission unique pieces designed and crafted exclusively for you. Our artisans bring your vision to life with precision and artistry.",
  },
  {
    icon: Palette,
    title: "Customize Jewellery Design",
    description: "Transform your ideas into reality. Work with our designers to create bespoke pieces that reflect your personal style and story.",
  },
];

interface ServicesSectionProps {
  onServiceClick: (serviceTitle: string) => void;
}

const ServicesSection = ({ onServiceClick }: ServicesSectionProps) => {
  return (
    <section id="services" className="section-padding bg-foreground">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
            Bespoke Excellence
          </span>
          <h2 className="heading-section mt-4 text-primary-foreground">
            Our Services
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mt-4">
            Experience the art of personalized luxury with our exclusive services, 
            tailored to your unique desires and discerning taste.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => onServiceClick(service.title)}
              className="group cursor-pointer"
            >
              <div className="relative p-8 lg:p-10 bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary/50 transition-all duration-500 rounded-sm h-full">
                <div className="w-14 h-14 flex items-center justify-center bg-primary/20 rounded-sm mb-6 group-hover:bg-primary/30 transition-colors duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-heading text-xl text-primary-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                  <span className="text-primary text-sm uppercase tracking-wider font-medium group-hover:tracking-[0.2em] transition-all duration-300">
                    Enquire Now →
                  </span>
                </div>

                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-8 bg-primary/50 group-hover:bg-primary transition-colors duration-500" />
                  <div className="absolute top-0 right-0 w-8 h-1 bg-primary/50 group-hover:bg-primary transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
