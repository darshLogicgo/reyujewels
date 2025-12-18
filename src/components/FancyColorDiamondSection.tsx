import { useState, useEffect, useRef } from "react";
import SectionHeader from "@/components/SectionHeader";

// Fancy Color Diamond videos - Update with your actual video URLs
const fancyColorVideos = [
  {
    id: 1,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Yellow_2.MP4",
  },
  {
    id: 2,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Yellow_1.MP4",
  },
  {
    id: 3,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Blue.MP4",
  },
  {
    id: 4,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Yellow.MP4",
  },
  {
    id: 5,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Pink.MP4",
  },
  {
    id: 6,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Red.MP4",
  },
  {
    id: 7,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Pink_3.MP4",
  },
  {
    id: 8,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Pink_2.MP4",
  },
  {
    id: 9,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Orangy%20Pink.MP4",
  },
  {
    id: 10,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Green_4.MP4",
  },
  {
    id: 11,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Green_3.MP4",
  },
  {
    id: 12,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Green.MP4",
  },
  {
    id: 13,
    videoUrl:
      "https://guardianshot.blr1.cdn.digitaloceanspaces.com/65016504a45aa2335bfb67d3/Fancy%20Vivid%20Blue_2.MP4",
  },
];

const FancyColorDiamondSection = () => {
  const [currentIndex, setCurrentIndex] = useState(fancyColorVideos.length);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isResetting, setIsResetting] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Create extended array for seamless infinite loop (3 copies)
  const extendedVideos = [
    ...fancyColorVideos,
    ...fancyColorVideos,
    ...fancyColorVideos,
  ];
  const baseLength = fancyColorVideos.length;

  // Function to start/reset auto-advance timer
  const startAutoAdvance = () => {
    // Clear existing interval if any
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start new interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Allow animation to complete, then reset will happen in useEffect
        if (next >= baseLength * 2) {
          // Show the transition first
          return next;
        }
        return next;
      });
    }, 4000);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || isResetting) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    startAutoAdvance();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAutoPlaying, baseLength, isResetting]);

  // Seamless reset when reaching boundaries (after animation completes)
  useEffect(() => {
    if (currentIndex >= baseLength * 2) {
      // Wait for transition to complete (700ms), then reset without transition
      const timer = setTimeout(() => {
        // Disable transitions temporarily for seamless reset
        setIsResetting(true);
        // Use requestAnimationFrame to ensure DOM update happens
        requestAnimationFrame(() => {
          setCurrentIndex(baseLength);
          // Re-enable transitions after reset with a small delay to ensure browser applies them
          setTimeout(() => {
            setIsResetting(false);
          }, 50);
        });
      }, 750); // Slightly longer than transition duration (700ms) to ensure animation completes
      return () => clearTimeout(timer);
    } else if (currentIndex < baseLength) {
      const timer = setTimeout(() => {
        setIsResetting(true);
        requestAnimationFrame(() => {
          setCurrentIndex(baseLength + currentIndex);
          setTimeout(() => {
            setIsResetting(false);
          }, 50);
        });
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, baseLength]);

  const goToPrevious = () => {
    // Reset timer when manually navigating
    startAutoAdvance();

    const nextIndex = currentIndex - 1;
    if (nextIndex < baseLength) {
      // Allow animation to show, then reset
      setCurrentIndex(nextIndex);
      // Auto-scrolling continues - timer resets
      setTimeout(() => {
        setIsResetting(true);
        requestAnimationFrame(() => {
          setCurrentIndex(baseLength * 2 - 1);
          setTimeout(() => {
            setIsResetting(false);
          }, 50);
        });
      }, 750); // Wait for full transition to complete
    } else {
      setCurrentIndex(nextIndex);
      // Auto-scrolling continues - timer resets
    }
  };

  const goToNext = () => {
    // Reset timer when manually navigating
    startAutoAdvance();

    const nextIndex = currentIndex + 1;
    if (nextIndex >= baseLength * 2) {
      // Allow animation to show, then reset
      setCurrentIndex(nextIndex);
      // Auto-scrolling continues - timer resets
      setTimeout(() => {
        setIsResetting(true);
        requestAnimationFrame(() => {
          setCurrentIndex(baseLength);
          setTimeout(() => {
            setIsResetting(false);
          }, 50);
        });
      }, 750); // Wait for full transition to complete
    } else {
      setCurrentIndex(nextIndex);
      // Auto-scrolling continues - timer resets
    }
  };

  // Touch handlers for swipe gestures
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    // Timer is reset in goToNext/goToPrevious functions
  };

  return (
    <>
      <style>{`
        .fancy-color-carousel-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 3rem 0;
        }

        @media (max-width: 768px) {
          .fancy-color-carousel-container {
            padding: 1.5rem 0;
          }
        }

        .fancy-color-carousel-wrapper {
          position: relative;
          width: 100%;
          height: clamp(600px, 75vh, 800px);
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1500px;
        }

        .fancy-color-carousel-track {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fancy-color-item {
          position: absolute;
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          will-change: transform, opacity;
        }

        .fancy-color-carousel-track.resetting .fancy-color-item {
          transition: none;
        }

        .fancy-color-item.active {
          z-index: 5;
          transform: scale(1) translateX(0);
          opacity: 1;
        }

        .fancy-color-item.prev-2 {
          z-index: 1;
          transform: scale(0.65) translateX(-140%) rotateY(20deg);
          opacity: 0.3;
        }

        .fancy-color-item.prev-1 {
          z-index: 3;
          transform: scale(0.8) translateX(-70%) rotateY(10deg);
          opacity: 0.6;
        }

        .fancy-color-item.next-1 {
          z-index: 3;
          transform: scale(0.8) translateX(70%) rotateY(-10deg);
          opacity: 0.6;
        }

        .fancy-color-item.next-2 {
          z-index: 1;
          transform: scale(0.65) translateX(140%) rotateY(-20deg);
          opacity: 0.3;
        }

        .fancy-color-item.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .fancy-color-frame {
          width: clamp(300px, 28vw, 380px);
          aspect-ratio: 9 / 16;
          height: auto;
          max-height: clamp(600px, 75vh, 800px);
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
          transition: box-shadow 0.7s ease, transform 0.7s ease;
          background: #000;
        }

        .fancy-color-item.active .fancy-color-frame {
          box-shadow: 0 35px 90px rgba(0, 0, 0, 0.5);
          transform: scale(1);
        }

        .fancy-color-item.prev-1 .fancy-color-frame,
        .fancy-color-item.next-1 .fancy-color-frame {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
        }

        .fancy-color-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .fancy-color-nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .fancy-color-nav-button {
            display: none;
          }
        }

        .fancy-color-nav-button:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .fancy-color-nav-button:active {
          transform: translateY(-50%) scale(0.95);
        }

        .fancy-color-nav-button.prev {
          left: 1rem;
        }

        .fancy-color-nav-button.next {
          right: 1rem;
        }

        .fancy-color-nav-button svg {
          width: 24px;
          height: 24px;
          stroke: #1a1a1a;
        }

        .fancy-color-overlay {
          position: absolute;
          inset: 0;
          background: transparent;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .fancy-color-carousel-wrapper {
            height: clamp(550px, 70vh, 700px);
          }

          .fancy-color-frame {
            width: clamp(250px, 32vw, 320px);
            max-height: clamp(550px, 70vh, 700px);
          }

          .fancy-color-item.prev-2,
          .fancy-color-item.next-2 {
            opacity: 0;
            pointer-events: none;
          }

          .fancy-color-item.prev-1 {
            transform: scale(0.75) translateX(-65%) rotateY(8deg);
          }

          .fancy-color-item.next-1 {
            transform: scale(0.75) translateX(65%) rotateY(-8deg);
          }
        }

        @media (max-width: 768px) {
          .fancy-color-carousel-wrapper {
            height: clamp(450px, 60vh, 600px);
            padding: 0;
          }

          .fancy-color-frame {
            width: clamp(220px, 50vw, 280px);
            max-height: clamp(450px, 60vh, 600px);
            border-radius: 1rem;
          }

          .fancy-color-item.prev-1,
          .fancy-color-item.next-1 {
            opacity: 0.4;
            transform: scale(0.7) translateX(-60%);
          }

          .fancy-color-item.next-1 {
            transform: scale(0.7) translateX(60%);
          }

          .fancy-color-carousel-track {
            touch-action: pan-y;
            -webkit-overflow-scrolling: touch;
          }
        }

        @media (max-width: 640px) {
          .fancy-color-carousel-container {
            padding: 1rem 0;
          }

          .fancy-color-carousel-wrapper {
            height: clamp(400px, 55vh, 550px);
          }

          .fancy-color-frame {
            width: clamp(200px, 55vw, 250px);
            max-height: clamp(400px, 55vh, 550px);
          }

          .fancy-color-item.prev-1,
          .fancy-color-item.next-1 {
            opacity: 0.3;
            transform: scale(0.65) translateX(-65%);
          }

          .fancy-color-item.next-1 {
            transform: scale(0.65) translateX(65%);
          }
        }

        @media (max-width: 768px) {
          #fancy-color-diamonds {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
        }

        @media (max-width: 640px) {
          #fancy-color-diamonds {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
          }
        }
      `}</style>
      <section
        id="fancy-color-diamonds"
        className="py-24 bg-secondary/30 overflow-hidden"
      >
        <div className="container-luxury mx-auto px-6 relative">
          {/* ===== Heading Section ===== */}
          <SectionHeader
            subtitle="EXCEPTIONAL COLORS"
            title="Fancy Color Diamonds"
            description="Explore our stunning collection of fancy color lab-grown diamonds, each one a masterpiece of nature's palette recreated with precision and brilliance."
            textColor="foreground"
          />

          {/* ===== Tanishq-style Carousel ===== */}
          <div className="fancy-color-carousel-container">
            <div className="fancy-color-carousel-wrapper">
              {/* Navigation Buttons */}
              <button
                className="fancy-color-nav-button prev"
                onClick={goToPrevious}
                aria-label="Previous video"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                className="fancy-color-nav-button next"
                onClick={goToNext}
                aria-label="Next video"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Carousel Track */}
              <div
                className={`fancy-color-carousel-track ${
                  isResetting ? "resetting" : ""
                }`}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {extendedVideos.map((video, index) => {
                  const position = index - currentIndex;
                  let className = "fancy-color-item";

                  if (position === 0) {
                    className += " active";
                  } else if (position === -2) {
                    className += " prev-2";
                  } else if (position === -1) {
                    className += " prev-1";
                  } else if (position === 1) {
                    className += " next-1";
                  } else if (position === 2) {
                    className += " next-2";
                  } else {
                    className += " hidden";
                  }

                  return (
                    <div
                      key={`${video.id}-${index}`}
                      className={className}
                      onClick={() => {
                        setCurrentIndex(index);
                        // Reset timer when clicking on video
                        startAutoAdvance();
                      }}
                    >
                      <div className="fancy-color-frame">
                        <video
                          className="fancy-color-video"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src={video.videoUrl} type="video/mp4" />
                        </video>
                        <div className="fancy-color-overlay" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FancyColorDiamondSection;
