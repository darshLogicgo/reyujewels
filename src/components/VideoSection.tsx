const videos = [
  {
    id: 1,
    // title: "Cushion Cut Diamond",
    // description: "EX Cut · VS Clarity · IGI Certified",
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/bd5d752adc7a42db8564d17532c2f0a6.mp4",
  },
  {
    id: 2,
    // title: "Oval Cut Diamond",
    // description: "Brilliant Fire & Sparkle",
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/e5ee792f9d394ae8af085f5233e591de.mp4",
  },
  {
    id: 3,
    // title: "Round Brilliant",
    // description: "Classic Perfection",
    videoUrl:
      "https://www.pexels.com/download/video/6763534/",
  },
  {
    id: 4,
    // title: "Marquise Cut",
    // description: "Elegant & Elongated",
    videoUrl:
      "https://www.shutterstock.com/shutterstock/videos/3649043049/preview/stock-footage-timeless-devotion-luxurious-emerald-and-diamond-wedding-rings-elegant-bridal-jewelry-and.webm",
  },
  {
    id: 5,
    // title: "Marquise Cut",
    // description: "Elegant & Elongated",
    videoUrl:
      "https://www.shutterstock.com/shutterstock/videos/3802129801/preview/stock-footage-round-brilliant-cut-diamond-swaying-in-tweezers-on-gray-background-seamless-loop-vertical-d.webm",
  },
  {
    id: 6,
    // title: "Marquise Cut",
    // description: "Elegant & Elongated",
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/e5ee792f9d394ae8af085f5233e591de.mp4",
  },
  {
    id: 7,
    // title: "Marquise Cut",
    // description: "Elegant & Elongated",
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/c07099bbb0a9497a89c9c5436580ac8d.mp4",
  },
];

const VideoSection = () => {
  // Duplicate videos for seamless infinite scroll
  const duplicatedVideos = [...videos, ...videos];

  return (
    <>
      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .video-carousel-track {
          animation: infinite-scroll 20s linear infinite;
          display: flex;
          gap: 1.5rem;
          will-change: transform;
          width: max-content; /* prevent flex container from shrinking so translateX stays consistent */
          transform: translate3d(0, 0, 0); /* reduce flicker */
        }

        .video-carousel-track:hover {
          animation-play-state: paused;
        }

        .video-carousel-bleed {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding-left: 0;
          padding-right: 0;
        }

        .video-carousel-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .video-item {
          // flex: 0 0 calc(25% - 1.125rem);
          // min-width: calc(25% - 1.125rem);
        }

        .video-frame {
          height: clamp(320px, 60vh, 520px);
        }

        // @media (max-width: 1024px) {
        //   .video-item {
        //     flex: 0 0 calc(33.333% - 1rem);
        //     min-width: calc(33.333% - 1rem);
        //   }
        // }

        // @media (max-width: 768px) {
        //   .video-item {
        //     flex: 0 0 calc(50% - 0.75rem);
        //     min-width: calc(50% - 0.75rem);
        //   }
        // }

        // @media (max-width: 640px) {
        //   .video-item {
        //     flex: 0 0 calc(100% - 0.5rem);
        //     min-width: calc(100% - 0.5rem);
        //   }
        // }
      `}</style>
      <section className="py-24 bg-foreground overflow-hidden">
        <div className="container-luxury mx-auto px-6 relative">
          {/* ===== Heading Section (AS IT IS) ===== */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary uppercase tracking-[0.25em] text-sm mb-4">
              Our Diamonds
            </p>
            <h2 className="text-4xl font-heading text-background mb-4">
              Shapes of Brilliance
            </h2>
            <p className="text-background/70">
              Precision-cut lab-grown diamonds crafted to perfection.
            </p>
          </div>

          {/* ===== Custom Infinite Scroll Carousel ===== */}
          <div className="video-carousel-bleed">
            <div className="video-carousel-wrapper">
              <div className="video-carousel-track">
                {duplicatedVideos.map((video, index) => (
                <div key={`${video.id}-${index}`} className="video-item">
                  <div className="relative aspect-[9/16] video-frame rounded-2xl overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                      </video>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/25" />

                      {/* Text Overlay */}
                      {/* <div className="absolute bottom-6 w-full text-center px-4">
                        <h3 className="text-white text-xl tracking-widest font-semibold">
                          {video.title}
                        </h3>
                        <p className="text-white/70 text-xs mt-1">
                          {video.subtitle}
                        </p>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
