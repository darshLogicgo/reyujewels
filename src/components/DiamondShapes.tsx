import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import asscherImage from "@/assets/Asscher.jpg";
import emeraldImage from "@/assets/Emerald.jpg";
import cushionImage from "@/assets/Cushion.jpg";
import princessImage from "@/assets/Princess.jpg";
import radiantImage from "@/assets/Radiant.jpg";
import marquiseImage from "@/assets/Marquise.jpg";
import heartImage from "@/assets/Heart.jpg";
import pearImage from "@/assets/Pear.jpg";
import elongatedCushionImage from "@/assets/Elongated Cushion.jpg";
import roundImage from "@/assets/Round.jpg";
import ovalImage from "@/assets/Oval.jpg";

const diamondShapes = [
  { name: "Asscher", image: asscherImage, description: "Art deco style" },
  { name: "Emerald", image: emeraldImage, description: "Sophisticated charm" },
  { name: "Cushion", image: cushionImage, description: "Romantic allure" },
  { name: "Princess", image: princessImage, description: "Modern elegance" },
  { name: "Radiant", image: radiantImage, description: "Brilliant fire" },
  { name: "Marquise", image: marquiseImage, description: "Regal elegance" },
  { name: "Heart", image: heartImage, description: "Symbol of love" },
  { name: "Pear", image: pearImage, description: "Distinctive beauty" },
  { name: "Elongated Cushion", image: elongatedCushionImage, description: "Extended elegance" },
  { name: "Round", image: roundImage, description: "Classic brilliance" },
  { name: "Oval", image: ovalImage, description: "Timeless grace" },
];

const DiamondShapes = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  
  // Video URLs
  const videoUrls = [
    "https://cdn.shopify.com/videos/c/o/v/bd5d752adc7a42db8564d17532c2f0a6.mp4",
    "https://cdn.shopify.com/videos/c/o/v/e5ee792f9d394ae8af085f5233e591de.mp4",
  ];

  const handleShapeClick = (shapeName: string) => {
    setSelectedShape(shapeName);
    setSelectedVideoIndex(0);
    setIsDialogOpen(true);
  };

  // Duplicate for seamless infinite scroll
  const duplicated = [...diamondShapes, ...diamondShapes];

  return (
    <>
      <style>{`
        @keyframes shapes-infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .shapes-track {
          animation: shapes-infinite-scroll 30s linear infinite;
          display: flex;
          gap: 1rem;
          will-change: transform;
          width: max-content; /* prevent layout shifts during loop */
        }

        .shapes-track:hover {
          animation-play-state: paused;
        }

        .shapes-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        /* Fixed basis keeps first + duplicate widths identical, removing flicker */
        .shape-card {
          flex: 0 0 200px;
          min-width: 200px;
        }

        @media (max-width: 1024px) {
          .shape-card {
            flex: 0 0 180px;
            min-width: 180px;
          }
        }

        @media (max-width: 768px) {
          .shape-card {
            flex: 0 0 160px;
            min-width: 160px;
          }
        }

        @media (max-width: 640px) {
          .shape-card {
            flex: 0 0 140px;
            min-width: 140px;
          }
        }
      `}</style>
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

          <div className="shapes-wrapper">
            <div className="shapes-track">
              {duplicated.map((diamond, index) => (
                <motion.div
                  key={`${diamond.name}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="shape-card min-w-0"
                >
                  <div 
                    className="relative bg-background rounded-sm p-4 lg:p-6 shadow-soft cursor-pointer transition-transform hover:scale-105"
                    onClick={() => handleShapeClick(diamond.name)}
                  >
                    <div className="aspect-square flex items-center justify-center">
                      <img
                        src={diamond.image}
                        alt={`${diamond.name} cut diamond`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <h3 className="font-heading text-base lg:text-lg text-foreground">
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

        {/* Video Modal Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {/* <style>{`
  [data-radix-dialog-overlay] {
    backdrop-filter: blur(8px) !important;
    -webkit-backdrop-filter: blur(8px) !important;
    background: rgba(0, 0, 0, 0.10) !important;
  }

  [data-radix-dialog-content] {
    border: none !important;
    box-shadow: none !important;
  }
`}</style> */}

          <DialogContent className="max-w-full h-full align-middle p-0 bg-transparent border-none shadow-none">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} className="p-6 bg-background/20 backdrop-blur-sm rounded-lg relative">
              {/* Close Button */}
              <DialogClose asChild>
                <button
                  className="absolute top-4 right-4 rounded-full p-2 bg-background/80 hover:bg-background transition-colors z-10"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </DialogClose>
              
              {/* <DialogHeader className="mb-4">
                <DialogTitle className="text-xl font-heading text-center text-foreground">
                  {selectedShape} Diamond
                </DialogTitle>
              </DialogHeader> */}
              
              {/* Main Video - Centered */}
              <div className="w-full flex justify-center mb-4">
                <div className="w-full max-w-md">
                  <video
                  style={{ borderRadius: "30px" }}
                    key={selectedVideoIndex}
                    className="w-full h-auto"
                    // controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={videoUrls[selectedVideoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Video Thumbnails */}
              <div className="flex justify-center gap-2 mt-4">
                {videoUrls.map((videoUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVideoIndex(index)}
                    className={`relative w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                      selectedVideoIndex === index
                        ? "border-primary scale-105"
                        : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <video
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      onMouseEnter={(e) => {
                        e.currentTarget.play();
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    >
                      <source src={videoUrl} type="video/mp4" />
                    </video>
                    {selectedVideoIndex === index && (
                      <div className="absolute inset-0 bg-primary/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default DiamondShapes;