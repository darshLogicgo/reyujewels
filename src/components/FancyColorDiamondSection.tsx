// Fancy Color Diamond videos - Update with your actual video URLs
const fancyColorVideos = [
  {
    id: 1,
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/bd5d752adc7a42db8564d17532c2f0a6.mp4",
  },
  {
    id: 2,
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/e5ee792f9d394ae8af085f5233e591de.mp4",
  },
  {
    id: 3,
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/bd5d752adc7a42db8564d17532c2f0a6.mp4",
  },
  {
    id: 4,
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/e5ee792f9d394ae8af085f5233e591de.mp4",
  },
  {
    id: 5,
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/bd5d752adc7a42db8564d17532c2f0a6.mp4",
  },
  {
    id: 6,
    videoUrl:
      "https://cdn.shopify.com/videos/c/o/v/e5ee792f9d394ae8af085f5233e591de.mp4",
  },
];

const FancyColorDiamondSection = () => {
  // Duplicate videos for seamless infinite scroll
  const duplicatedVideos = [...fancyColorVideos, ...fancyColorVideos];

  return (
    <>
      <style>{`
        @keyframes fancy-color-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .fancy-color-track {
          animation: fancy-color-scroll 20s linear infinite;
          display: flex;
          gap: 1.5rem;
          will-change: transform;
          width: max-content;
          transform: translate3d(0, 0, 0);
        }

        .fancy-color-track:hover {
          animation-play-state: paused;
        }

        .fancy-color-bleed {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding-left: 0;
          padding-right: 0;
        }

        .fancy-color-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .fancy-color-item {
        }

        .fancy-color-frame {
          height: clamp(320px, 60vh, 520px);
        }
      `}</style>
      <section
        id="fancy-color-diamonds"
        className="py-24 bg-secondary/30 overflow-hidden"
      >
        <div className="container-luxury mx-auto px-6 relative">
          {/* ===== Heading Section ===== */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary uppercase tracking-[0.25em] text-sm mb-4">
              EXCEPTIONAL COLORS
            </p>
            <h2 className="text-4xl font-heading text-foreground mb-4">
              Fancy Color Diamonds
            </h2>
            <p className="text-foreground/70">
              Explore our stunning collection of fancy color lab-grown diamonds,
              each one a masterpiece of nature's palette recreated with
              precision and brilliance.
            </p>
          </div>

          {/* ===== Custom Infinite Scroll Carousel ===== */}
          <div className="fancy-color-bleed">
            <div className="fancy-color-wrapper">
              <div className="fancy-color-track">
                {duplicatedVideos.map((video, index) => (
                  <div
                    key={`${video.id}-${index}`}
                    className="fancy-color-item"
                  >
                    <div className="relative aspect-[9/16] fancy-color-frame rounded-2xl overflow-hidden">
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

export default FancyColorDiamondSection;
