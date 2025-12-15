import { motion } from "framer-motion";
import diamondRound from "@/assets/diamond-round.png";
import diamondPrincess from "@/assets/diamond-princess.png";
import diamondOval from "@/assets/diamond-oval.png";
import diamondEmerald from "@/assets/diamond-emerald.png";
import diamondCushion from "@/assets/diamond-cushion.png";
import diamondPear from "@/assets/diamond-pear.png";

const diamondShapes = [
  { name: "Round", image: diamondRound, description: "Classic brilliance" },
  { name: "Princess", image: diamondPrincess, description: "Modern elegance" },
  { name: "Oval", image: diamondOval, description: "Timeless grace" },
  { name: "Emerald", image: diamondEmerald, description: "Sophisticated charm" },
  { name: "Cushion", image: diamondCushion, description: "Romantic allure" },
  { name: "Pear", image: diamondPear, description: "Distinctive beauty" },
];

const DiamondShapes = () => {
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {diamondShapes.map((diamond, index) => (
            <motion.div
              key={diamond.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative bg-background rounded-sm p-6 lg:p-8 shadow-soft hover:shadow-gold transition-all duration-500 cursor-pointer">
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
                <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {diamond.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {diamond.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiamondShapes;
