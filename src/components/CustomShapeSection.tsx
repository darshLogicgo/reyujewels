import { motion } from "framer-motion";
import { Upload, CheckCircle, Palette, Settings, Package } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const processSteps = [
  {
    step: 1,
    icon: Upload,
    title: "Share Shape or Reference",
    description: "Drawing, CAD, photo, or sample.",
  },
  {
    step: 2,
    icon: CheckCircle,
    title: "Approve mm Size & Ratio",
    description: "We confirm dimensions + tolerances.",
  },
  {
    step: 3,
    icon: Palette,
    title: "Select Color & Clarity",
    description: "D – K, VVS – SI, Certified or non-certified.",
  },
  {
    step: 4,
    icon: Settings,
    title: "Manufacturing Begins",
    description: "Cutting, polishing, QC, measurement.",
  },
  {
    step: 5,
    icon: Package,
    title: "Delivery & Certification",
    description: "Worldwide secure logistics.",
  },
];

interface CustomShapeSectionProps {
  onContactClick: () => void;
}

const CustomShapeSection = ({ onContactClick }: CustomShapeSectionProps) => {
  return (
    <section id="custom-shape" className="section-padding bg-foreground">
      <div className="container-luxury">
        {/* Header Section */}
        <SectionHeader
          subtitle="Bespoke Manufacturing"
          title="Custom Your Own Shape"
          description="From classic rounds to fancy one-of-a-kind shapes — we manufacture diamonds exactly the way you want, with calibrated sizes, premium make, with IGI certification upon request."
          maxWidth="3xl"
          textColor="primary-foreground"
        />

        {/* Process Steps Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-2">
              How It Works
            </h3>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-[0.2em]">
              Simple 5-Step Process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary/50 transition-all duration-500 rounded-sm p-6 lg:p-8 h-full flex flex-col items-center text-center group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading text-sm font-medium z-10">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center bg-primary/20 rounded-sm mb-6 mt-4 group-hover:bg-primary/30 transition-colors duration-500">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h4 className="font-heading text-lg text-primary-foreground mb-3">
                    {step.title}
                  </h4>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connecting Line (except last item) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30 -translate-y-1/2 z-0">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-primary/30 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="bg-primary-foreground/5 border border-primary/30 rounded-sm p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl text-primary-foreground mb-4">
              Ready to Create Your Custom Diamond?
            </h3>
            <p className="text-primary-foreground/70 text-base md:text-lg mb-8">
              Let's bring your unique vision to life. Contact us to discuss your
              custom diamond requirements.
            </p>
            <button onClick={onContactClick} className="btn-gold rounded-sm">
              Start Your Custom Order
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomShapeSection;
