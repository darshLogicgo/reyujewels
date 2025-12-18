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
import SectionHeader from "@/components/SectionHeader";
import asscherImage from "@/assets/10.webp";
import emeraldImage from "@/assets/07.webp";
import cushionImage from "@/assets/05.webp";
import princessImage from "@/assets/02.webp";
import radiantImage from "@/assets/08.webp";
import marquiseImage from "@/assets/04.webp";
import heartImage from "@/assets/03.webp";
import pearImage from "@/assets/11.webp";
import elongatedCushionImage from "@/assets/01.webp";
import roundImage from "@/assets/09.webp";
import ovalImage from "@/assets/06.webp";

const diamondShapes = [
  { name: "Asscher", image: asscherImage, description: "Art deco style" },
  { name: "Emerald", image: emeraldImage, description: "Sophisticated charm" },
  { name: "Cushion", image: cushionImage, description: "Romantic allure" },
  { name: "Princess", image: princessImage, description: "Modern elegance" },
  { name: "Radiant", image: radiantImage, description: "Brilliant fire" },
  { name: "Marquise", image: marquiseImage, description: "Regal elegance" },
  { name: "Heart", image: heartImage, description: "Symbol of love" },
  { name: "Pear", image: pearImage, description: "Distinctive beauty" },
  {
    name: "Elongated Cushion",
    image: elongatedCushionImage,
    description: "Extended elegance",
  },
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
          padding-left: 0;
          padding-right: 0;
        }

        .shapes-track:hover {
          animation-play-state: paused;
        }

        .shapes-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        /* Fixed basis keeps first + duplicate widths identical, removing flicker */
        .shape-card {
          flex: 0 0 200px;
          min-width: 200px;
        }

        .shape-image-wrapper {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-center;
          overflow: hidden;
        }

        .shape-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .shape-image-wrapper:hover img {
          transform: scale(1.1);
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

          .shape-image-wrapper {
            padding: 1rem;
          }
        }

        @media (max-width: 640px) {
          .shape-card {
            flex: 0 0 140px;
            min-width: 140px;
          }

          .shape-image-wrapper {
            padding: 0.75rem;
          }
        }
      `}</style>
      <section id="diamonds" className="bg-secondary/30 py-16">
        <div className="container-luxury mb-16">
          <SectionHeader
            subtitle="Lab-grown focus, very minimal"
            title="Lab-Grown Diamond Shapes"
            description="Discover beautifully crafted lab-grown diamond cuts, designed for modern elegance and conscious luxury."
            textColor="foreground"
            className="mb-0"
          />
        </div>

        <div className="shapes-wrapper w-full">
          <div className="shapes-track">
            {duplicated.map((diamond, index) => (
              <div
                key={`${diamond.name}-${index}`}
                className="shape-card min-w-0"
              >
                <div
                  className="relative bg-background rounded-sm shadow-soft"
                  onClick={() => handleShapeClick(diamond.name)}
                >
                  <div className="shape-image-wrapper">
                    <img
                      src={diamond.image}
                      alt={`${diamond.name} cut diamond`}
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
              </div>
            ))}
          </div>
        </div>

        {/* Click Video Model */}

        {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
       

          <DialogContent className="max-w-full h-full align-middle p-0 bg-transparent border-none shadow-none">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="p-6 bg-background/20 backdrop-blur-sm rounded-lg relative"
            >
              <DialogClose asChild>
                <button
                  className="absolute top-4 right-4 rounded-full p-2 bg-background/80 hover:bg-background transition-colors z-10"
                  onClick={() => setIsDialogOpen(false)}
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </DialogClose>


              <div className="w-full flex justify-center mb-4">
                <div className="w-full max-w-md">
                  <video
                    style={{ borderRadius: "30px" }}
                    key={selectedVideoIndex}
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      src={videoUrls[selectedVideoIndex]}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

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
        </Dialog> */}
      </section>
    </>
  );
};

export default DiamondShapes;
