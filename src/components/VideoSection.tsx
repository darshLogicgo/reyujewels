import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "The Art of Diamond Cutting",
    description: "Witness the precision and artistry behind every brilliant cut",
    videoUrl: "https://videos.pexels.com/video-files/4267537/4267537-uhd_2560_1440_30fps.mp4",
    poster: "https://images.pexels.com/videos/4267537/pexels-photo-4267537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Crafting Timeless Elegance",
    description: "From raw beauty to refined masterpiece",
    videoUrl: "https://videos.pexels.com/video-files/4268290/4268290-uhd_2560_1440_30fps.mp4",
    poster: "https://images.pexels.com/videos/4268290/pexels-photo-4268290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "The Journey of a Diamond",
    description: "Experience the transformation from earth to excellence",
    videoUrl: "https://videos.pexels.com/video-files/4268515/4268515-uhd_2560_1440_30fps.mp4",
    poster: "https://images.pexels.com/videos/4268515/pexels-photo-4268515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const VideoSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 8000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="video" className="py-20 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
            Behind The Scenes
          </span>
          <h2 className="heading-section mt-4 text-background">
            Our Craftsmanship
          </h2>
          <p className="text-background/70 mt-4 text-lg">
            Discover the artistry and dedication that goes into creating every Reyu Jewels masterpiece.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 backdrop-blur-sm p-3 lg:p-4 rounded-full transition-all duration-300"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-background" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-background/20 hover:bg-background/40 backdrop-blur-sm p-3 lg:p-4 rounded-full transition-all duration-300"
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-background" />
          </button>

          {/* Video Carousel */}
          <div className="overflow-hidden rounded-sm" ref={emblaRef}>
            <div className="flex">
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="flex-[0_0_100%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative aspect-video max-w-5xl mx-auto rounded-sm overflow-hidden shadow-2xl"
                  >
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={video.poster}
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    
                    {/* Video Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                      <h3 className="font-heading text-2xl lg:text-3xl text-background mb-2">
                        {video.title}
                      </h3>
                      <p className="text-background/80 text-sm lg:text-base max-w-xl">
                        {video.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? "bg-primary w-8" 
                    : "bg-background/40 hover:bg-background/60"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
