import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import c1Pdf from "@/assets/certificates/c1.pdf";
import c2Pdf from "@/assets/certificates/c2.pdf";
import c3Pdf from "@/assets/certificates/c3.pdf";
import c4Pdf from "@/assets/certificates/c4.pdf";
import c5Pdf from "@/assets/certificates/c5.pdf";
import c6Pdf from "@/assets/certificates/c6.pdf";
import c7Pdf from "@/assets/certificates/c7.pdf";
import c8Pdf from "@/assets/certificates/c8.pdf";
import c9Pdf from "@/assets/certificates/c9.pdf";

// Certificate data
const certificates = [
  {
    id: 1,
    title: "Lab-Grown Diamond Certification – 3.02 Carat Marquise",
    description:
      "IGI-certified marquise brilliant diamond grown through CVD technology. Graded G color, VS2 clarity, with excellent finish and no fluorescence.",
    pdfPath: c1Pdf,
  },
  {
    id: 2,
    title: "Lab-Grown Diamond Certification – 2.00 Carat Round",
    description:
      "IGI laboratory report for a D-color VVS1 round brilliant grown via HPHT method. Ideal cut with excellent polish and symmetry, showing no post-growth treatment.",
    pdfPath: c2Pdf,
  },
  {
    id: 3,
    title: "Lab-Grown Diamond Certification – 0.28 Carat Round",
    description:
      "This IGI-certified round diamond is HPHT-grown and graded D color and VS1 clarity, featuring excellent cut, polish, and symmetry.",
    pdfPath: c3Pdf,
  },
  {
    id: 4,
    title: "Lab-Grown Diamond Certification – 3.51 Carat Oval Brilliant",
    description:
      "IGI-verified CVD-grown oval brilliant diamond featuring F color, VS2 clarity, and excellent finishing characteristics without fluorescence.",
    pdfPath: c4Pdf,
  },
  {
    id: 5,
    title: "Lab-Grown Diamond Certification – 0.30 Carat Round",
    description:
      "Certified by IGI. A D-color VVS1 round brilliant diamond grown using the HPHT process, verified as untreated and of excellent cut, polish, and symmetry.",
    pdfPath: c5Pdf,
  },
  {
    id: 6,
    title: "Lab-Grown Diamond Certification – 5.01 Carat Round Brilliant",
    description:
      "IGI-certified round brilliant diamond grown using the CVD process. Graded E color and VS1 clarity, featuring an ideal cut with excellent polish and symmetry, and no fluorescence.",
    pdfPath: c6Pdf,
  },
  {
    id: 7,
    title: "Lab-Grown Diamond Certification – 2.51 Carat Round Brilliant",
    description:
      "This IGI report verifies a CVD-grown round brilliant diamond with E color and VVS1 clarity. Ideal cut with excellent finish and no fluorescence, ensuring exceptional brilliance.",
    pdfPath: c7Pdf,
  },
  {
    id: 8,
    title: "Lab-Grown Diamond Certification – 0.30 Carat Round Brilliant",
    description:
      "IGI-certified laboratory-grown diamond produced through the CVD method. D color, VVS2 clarity, and ideal cut with excellent polish and symmetry for superior light performance.",
    pdfPath: c8Pdf,
  },
  {
    id: 9,
    title: "Lab-Grown Diamond Certification – 3.01 Carat Round Brilliant",
    description:
      "Certified by IGI, this CVD-grown round brilliant diamond features F color and VVS2 clarity. Ideal cut with excellent polish and symmetry, and no fluorescence for a clean, bright appearance.",
    pdfPath: c9Pdf,
  },
];

const CertificateSection = () => {
  const handleCertificateClick = (pdfPath: string) => {
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container-luxury">
        <SectionHeader
          subtitle="Trust & Excellence"
          title="Our Certifications"
          description="We are proud to showcase our certifications and accreditations that demonstrate our commitment to quality, authenticity, and excellence in every piece we create."
          textColor="foreground"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
              onClick={() => handleCertificateClick(certificate.pdfPath)}
            >
              <div className="relative bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-primary/50 transition-all duration-500 rounded-sm overflow-hidden h-full flex flex-col">
                {/* PDF Preview Container */}
                <div
                  className="relative w-full h-64 bg-white overflow-hidden certificate-preview"
                  style={{ overflow: "hidden" }}
                >
                  {/* White background layer to prevent black sections */}
                  <div className="absolute inset-0 bg-white z-0" />

                  {/* Mobile Fallback - Show on small screens only */}
                  <div className="md:hidden relative w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center">
                    <div className="w-full h-full flex flex-col items-center justify-center bg-white">
                      <FileText className="w-16 h-16 text-primary/50 mb-4" />
                      <p className="text-primary/70 text-sm font-medium uppercase tracking-wider">
                        PDF Certificate
                      </p>
                      <p className="text-muted-foreground text-xs mt-2 px-4 text-center">
                        Tap to view full certificate
                      </p>
                    </div>
                  </div>

                  {/* Desktop PDF Preview - Hidden on mobile */}
                  <div className="hidden md:flex relative w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-50 items-center justify-center">
                    {/* PDF Preview using object tag with improved view parameters */}
                    <object
                      data={`${certificate.pdfPath}#view=Fit&toolbar=0&navpanes=0&scrollbar=0`}
                      type="application/pdf"
                      className="w-full h-full pointer-events-none border-0"
                      aria-label={`${certificate.title} Preview`}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        minHeight: "100%",
                        backgroundColor: "white",
                      }}
                    >
                      {/* Fallback if object doesn't load */}
                      <div className="w-full h-full flex flex-col items-center justify-center bg-white">
                        <FileText className="w-16 h-16 text-primary/50 mb-4" />
                        <p className="text-primary/70 text-sm font-medium uppercase tracking-wider">
                          PDF Certificate
                        </p>
                      </div>
                    </object>
                  </div>

                  {/* Gradient fade at bottom for elegant transition */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-20" />

                  {/* Overlay on hover - Desktop only */}
                  <div className="hidden md:flex absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-primary-foreground">
                      <ExternalLink className="w-6 h-6" />
                      <span className="font-medium text-sm uppercase tracking-wider">
                        View Full Certificate
                      </span>
                    </div>
                  </div>

                  {/* Certificate Badge */}
                  <div className="absolute top-4 right-4 p-2 bg-primary/90 backdrop-blur-sm rounded-sm">
                    <FileText className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {certificate.description}
                  </p>

                  <div className="pt-4 border-t border-primary-foreground/10">
                    <span className="text-primary text-sm uppercase tracking-wider font-medium group-hover:tracking-[0.2em] transition-all duration-300 inline-flex items-center gap-2">
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
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

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            All certificates are verified and can be viewed in full detail by
            clicking on any certificate above.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;
