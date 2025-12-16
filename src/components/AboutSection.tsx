import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background pt-20 pb-20">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
              Our Legacy
            </span>
            <h2 className="heading-section mt-4 mb-6 text-foreground">
              About Reyu Jewels
            </h2>
            <div className="space-y-5 text-luxury">
              <p>
                At Reyu Jewels, we believe that every diamond tells a story. For
                over two decades, we have been crafting exquisite jewellery
                pieces that capture the essence of timeless elegance and
                unparalleled beauty.
              </p>
              <p>
                Our master artisans combine centuries-old techniques with modern
                innovation, ensuring each creation meets the highest standards
                of excellence. From sourcing the finest conflict-free diamonds
                to the final polish, every step reflects our commitment to
                quality.
              </p>
              <p>
                Whether you seek a bespoke engagement ring, a custom necklace,
                or a unique piece to commemorate life's precious moments, our
                dedicated team works closely with you to bring your vision to
                life.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
              <div>
                <span className="text-3xl md:text-4xl font-heading text-primary font-medium">
                  100%
                </span>
                <p className="text-muted-foreground text-sm mt-1">
                  Certified Diamonds
                </p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-heading text-primary font-medium">
                  10K+
                </span>
                <p className="text-muted-foreground text-sm mt-1">
                  Happy Customers
                </p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-heading text-primary font-medium">
                  100%
                </span>
                <p className="text-muted-foreground text-sm mt-1">
                  Secure & Insured Delivery
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-sm" />
              <img
                src={aboutImage}
                alt="Elegant woman wearing Reyu Jewels diamond jewellery"
                className="w-full h-[500px] lg:h-[650px] object-cover rounded-sm relative"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
                <p className="font-heading text-xl text-primary-foreground italic">
                  "Where dreams become diamonds"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
