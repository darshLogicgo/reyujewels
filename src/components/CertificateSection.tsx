import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import c1Pdf from "@/assets/certificates/c1.pdf";
import c2Pdf from "@/assets/certificates/c2.pdf";

// Certificate data
const certificates = [
  {
    id: 1,
    title: "Diamond Certification",
    description: "Certified by International Gemological Institute",
    pdfPath: c1Pdf,
  },
  {
    id: 2,
    title: "Quality Assurance Certificate",
    description: "ISO 9001:2015 Quality Management System",
    pdfPath: c2Pdf, // Update when c2.pdf is added: import c2Pdf from "@/assets/certificates/c2.pdf";
  },
  {
    id: 3,
    title: "Business License",
    description: "Registered Jewellery Business License",
    pdfPath: c1Pdf, // Update when c3.pdf is added: import c3Pdf from "@/assets/certificates/c3.pdf";
  },
  {
    id: 4,
    title: "Hallmark Certification",
    description: "Bureau of Indian Standards Hallmark",
    pdfPath: c1Pdf, // Update when c4.pdf is added: import c4Pdf from "@/assets/certificates/c4.pdf";
  },
];

const CertificateSection = () => {
  const handleCertificateClick = (pdfPath: string) => {
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
            Trust & Excellence
          </span>
          <h2 className="heading-section mt-4 text-foreground">
            Our Certifications
          </h2>
          <p className="text-luxury mt-4">
            We are proud to showcase our certifications and accreditations that
            demonstrate our commitment to quality, authenticity, and excellence
            in every piece we create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
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
                  className="relative w-full h-64 bg-muted/30 overflow-hidden certificate-preview"
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="w-full h-full bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 relative"
                    style={{
                      overflow: "hidden",
                      clipPath: "inset(0 17px 0 0)",
                    }}
                  >
                    {/* PDF Preview using object tag for better scrollbar control */}
                    <object
                      data={`${certificate.pdfPath}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                      type="application/pdf"
                      className="w-full h-full pointer-events-none border-0"
                      aria-label={`${certificate.title} Preview`}
                      style={{
                        overflow: "hidden",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                    >
                      {/* Fallback if object doesn't load */}
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <FileText className="w-16 h-16 text-primary/50 mb-4" />
                        <p className="text-primary/70 text-sm font-medium uppercase tracking-wider">
                          PDF Certificate
                        </p>
                      </div>
                    </object>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-center justify-center">
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
