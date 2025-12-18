import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import cvdImage from "@/assets/cvd.webp";
import hphtImage from "@/assets/hpht.webp";

const CVDHPHTSection = () => {
  return (
    <section id="cvd-hpht" className="section-padding bg-foreground">
      <div className="container-luxury">
        {/* Section Header */}
        <SectionHeader
          subtitle="Lab-Grown Excellence"
          title="CVD & HPHT Diamonds"
          description="Discover the two advanced methods we use to create our ethically sourced, brilliant lab-grown diamonds."
          textColor="primary-foreground"
        />

        {/* CVD Section - Image Left, Content Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-sm" />
              <img
                src={cvdImage}
                alt="CVD Diamond Process"
                className="w-full h-auto md:max-h-[55vh] lg:max-h-none lg:h-[500px] xl:h-[600px] object-contain lg:object-cover object-center rounded-sm relative"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2"
          >
            <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
              Chemical Vapor Deposition
            </span>
            <h2 className="heading-section mt-4 mb-6 text-primary-foreground">
              CVD Diamonds
            </h2>
            <div className="space-y-4 text-primary-foreground/80">
              <p>
                Chemical Vapor Deposition (CVD) grows diamonds by depositing
                carbon atoms layer-by-layer inside a controlled chamber. This
                advanced process creates crystals with exceptional purity and
                brilliance.
              </p>
              <p>
                CVD diamonds are loved for their ethical sourcing, consistent
                quality, and high clarity. Each stone is certified and carries
                the same physical, chemical, and optical properties as natural
                diamonds—delivering beauty with sustainability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-primary-foreground/10">
              <div>
                <span className="text-2xl md:text-3xl font-heading text-primary font-medium">
                  High
                </span>
                <p className="text-primary-foreground/60 text-sm mt-1">
                  Clarity & Purity
                </p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-heading text-primary font-medium">
                  Eco-Friendly
                </span>
                <p className="text-primary-foreground/60 text-sm mt-1">
                  Sustainable Process
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HPHT Section - Image Right, Content Left */}
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
              High Pressure High Temperature
            </span>
            <h2 className="heading-section mt-4 mb-6 text-primary-foreground">
              HPHT Diamonds
            </h2>
            <div className="space-y-4 text-primary-foreground/80">
              <p>
                The HPHT process replicates the natural formation of diamonds
                deep within the Earth, using extreme pressure and heat to
                crystallize carbon into brilliant gemstones.
              </p>
              <p>
                HPHT diamonds exhibit exceptional fire, scintillation, and
                impressive color grades. These diamonds are certified and
                indistinguishable from natural diamonds to the naked eye while
                offering sustainable sourcing and affordability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-primary-foreground/10">
              <div>
                <span className="text-2xl md:text-3xl font-heading text-primary font-medium">
                  Exceptional
                </span>
                <p className="text-primary-foreground/60 text-sm mt-1">
                  Color & Brilliance
                </p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-heading text-primary font-medium">
                  Certified
                </span>
                <p className="text-primary-foreground/60 text-sm mt-1">
                  Quality Assured
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
                src={hphtImage}
                alt="HPHT Diamond Process"
                className="w-full h-auto md:max-h-[55vh] lg:max-h-none lg:h-[500px] xl:h-[600px] object-contain lg:object-cover object-center rounded-sm relative"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CVDHPHTSection;
