import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const CVDHPHTSection = () => {
  return (
    <section id="cvd-hpht" className="section-padding bg-foreground">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
            Lab-Grown Excellence
          </span>
          <h2 className="heading-section mt-4 text-primary-foreground">
            CVD & HPHT Diamonds
          </h2>
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mt-4">
            Discover the two advanced methods we use to create our ethically
            sourced, brilliant lab-grown diamonds.
          </p>
        </motion.div>

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
                src={aboutImage}
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
            <div className="space-y-5 text-primary-foreground/80">
              <p>
                Chemical Vapor Deposition (CVD) is a cutting-edge method that
                creates diamonds by depositing carbon atoms layer by layer in a
                controlled environment. This process mimics the natural formation
                of diamonds deep within the Earth, resulting in crystals of
                exceptional purity and brilliance.
              </p>
              <p>
                CVD diamonds are grown in a vacuum chamber using a carbon-rich
                gas, where carbon atoms are carefully deposited onto a diamond
                seed. This method produces diamonds with remarkable clarity and
                allows for precise control over the growth process, ensuring
                consistent quality and ethical sourcing.
              </p>
              <p>
                At Reyu Jewels, we select only the finest CVD diamonds, each
                certified and graded to meet the highest standards of
                excellence. These diamonds offer the same physical, chemical,
                and optical properties as natural diamonds, with the added
                benefits of sustainability and traceability.
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
            <div className="space-y-5 text-primary-foreground/80">
              <p>
                High Pressure High Temperature (HPHT) is a method that replicates
                the extreme conditions found deep within the Earth where natural
                diamonds form. This process subjects a diamond seed to intense
                pressure and high temperature, allowing carbon atoms to
                crystallize into stunning diamonds.
              </p>
              <p>
                HPHT technology creates diamonds with exceptional color and
                brilliance, often producing stones with remarkable fire and
                scintillation. The process involves placing a diamond seed in a
                press that applies over 1.5 million pounds per square inch of
                pressure and temperatures exceeding 2,000°C.
              </p>
              <p>
                Our HPHT diamonds undergo rigorous quality control and
                certification, ensuring each stone meets our exacting standards.
                These diamonds are indistinguishable from natural diamonds in
                appearance and properties, offering you the beauty of nature with
                the assurance of ethical and sustainable sourcing.
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
                src={aboutImage}
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

