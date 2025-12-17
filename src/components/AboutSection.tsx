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
                At Reyu Jewels, we believe every diamond begins with a conscious
                choice. For over two decades, we have been redefining fine
                jewellery through expertly crafted lab-grown diamond creations
                that embody modern elegance, brilliance, and responsibility.
              </p>
              <p>
                Our master artisans blend time-honored craftsmanship with
                advanced technology, transforming ethically created diamonds
                into stunning works of art. From precision-grown, conflict-free
                diamonds to the final flawless finish, every piece reflects our
                unwavering commitment to quality, transparency, and
                sustainability.
              </p>
              <p>
                Whether you’re envisioning a bespoke engagement ring, a custom
                necklace, or a meaningful piece to celebrate life’s milestones,
                our dedicated team collaborates closely with you to bring your
                vision to life—beautifully, responsibly, and without compromise.
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
                className="w-full h-auto md:max-h-[55vh] lg:max-h-none lg:h-[500px] xl:h-[650px] object-contain lg:object-cover object-center rounded-sm relative"
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
