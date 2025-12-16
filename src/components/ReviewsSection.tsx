import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review: "Absolutely stunning craftsmanship! The diamond ring I purchased exceeded all my expectations. Reyu Jewels truly understands luxury.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Delhi",
    rating: 5,
    review: "Exceptional service and beautiful pieces. The custom engagement ring they created was perfect. My fiancée was speechless!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Bangalore",
    rating: 5,
    review: "The quality of diamonds at Reyu Jewels is unmatched. Their attention to detail and customer service made my shopping experience memorable.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    review: "I've purchased from many jewellers, but Reyu Jewels stands out. Their collection is exquisite and the team is incredibly knowledgeable.",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Neha Kapoor",
    location: "Chennai",
    rating: 5,
    review: "From selection to delivery, everything was seamless. The necklace I ordered is a true masterpiece. Highly recommend!",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Arjun Reddy",
    location: "Hyderabad",
    rating: 5,
    review: "The craftsmanship is remarkable. Every piece tells a story of elegance and sophistication. Will definitely return for more.",
    date: "1 month ago"
  }
];

const ReviewsSection = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <>
      <style>{`
        @keyframes reviews-infinite-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .reviews-track {
          animation: reviews-infinite-scroll 30s linear infinite;
          display: flex;
          gap: 1.25rem;
          will-change: transform;
          width: max-content;
          transform: translate3d(0, 0, 0);
        }

        .reviews-track:hover {
          animation-play-state: paused;
        }

        .reviews-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .reviews-bleed {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding-left: 0;
          padding-right: 0;
        }

        .review-card {
          flex: 0 0 340px;
          min-width: 340px;
        }

        @media (max-width: 1024px) {
          .review-card {
            flex: 0 0 300px;
            min-width: 300px;
          }
        }

        @media (max-width: 768px) {
          .review-card {
            flex: 0 0 260px;
            min-width: 260px;
          }
        }
      `}</style>

      <section id="reviews" className="section-padding bg-secondary/20 overflow-hidden">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
              Testimonials
            </span>
            <h2 className="heading-section mt-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-luxury mt-4">
              Discover why discerning customers choose Reyu Jewels for their most precious moments.
            </p>
          </motion.div>

          <div className="reviews-bleed">
            <div className="reviews-wrapper">
              <div className="reviews-track">
                {duplicatedReviews.map((review, index) => (
                  <div
                    key={`${review.id}-${index}`}
                    className="review-card bg-background p-8 rounded-sm shadow-soft transition-all duration-500 relative"
                  >
                    {/* Quote Icon */}
                    <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                      "{review.review}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="border-t border-border/50 pt-4">
                      <h4 className="font-heading text-foreground font-medium">
                        {review.name}
                      </h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-muted-foreground text-xs">
                          {review.location}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {review.date}
                        </span>
                      </div>
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

export default ReviewsSection;
