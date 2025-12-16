import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Mehta",
    location: "Mumbai, India",
    rating: 5,
    review:
      "Reyu Jewels delivered exactly what they promised. The diamond quality, transparency, and timely delivery exceeded my expectations. Truly a brand you can trust.",
    date: "1 month ago",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    location: "Los Angeles, USA",
    rating: 5,
    review:
      "The diamonds from Reyu Jewels are absolutely stunning. Their attention to detail and ethical sourcing give me complete confidence in the brand.",
    date: "1 month ago",
  },
  {
    id: 2,
    name: "Neha Shah",
    location: "Surat, India",
    rating: 5,
    review:
      "As someone from the diamond city itself, I am very particular about quality. Reyu Jewels impressed me with their precision, certification, and honest pricing.",
    date: "2 months ago",
  },
  {
    id: 10,
    name: "Ahmed Al-Farsi",
    location: "Dubai, UAE",
    rating: 5,
    review:
      "Reyu Jewels is a name I rely on for premium diamonds. Their service, clarity in dealings, and product quality are world-class.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ahmedabad, India",
    rating: 5,
    review:
      "The craftsmanship and consistency of Reyu Jewels are remarkable. Every stone speaks of trust and expertise. Highly recommended for long-term business.",
    date: "3 weeks ago",
  },
  {
    id: 9,
    name: "Olivia Brown",
    location: "London, UK",
    rating: 5,
    review:
      "I appreciate Reyu Jewels’ commitment to trust and long-term relationships. Their diamonds truly reflect quality and care.",
    date: "2 month ago",
  },
  {
    id: 4,
    name: "Priya Jain",
    location: "Jaipur, India",
    rating: 5,
    review:
      "Buying diamonds felt effortless with Reyu Jewels. Their team explained everything clearly and helped me choose the perfect piece. A wonderful experience.",
    date: "1 week ago",
  },
  {
    id: 8,
    name: "Daniel Fischer",
    location: "Frankfurt, Germany",
    rating: 5,
    review:
      "The diamonds from Reyu Jewels are absolutely stunning. Their attention to detail and ethical sourcing give me complete confidence in the brand.",
    date: "1 month ago",
  },
  {
    id: 5,
    name: "Kunal Desai",
    location: "Bengaluru, India",
    rating: 5,
    review:
      "Reyu Jewels stands for reliability. From selection to delivery, everything was smooth and professional. I will definitely return for future purchases.",
    date: "2 months ago",
  },
  {
    id: 6,
    name: "Michael Thompson",
    location: "New York, USA",
    rating: 5,
    review:
      "Reyu Jewels combines exceptional diamond quality with transparent communication. Even from overseas, the process felt secure and seamless.",
    date: "2 month ago",
  },
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

      <section
        id="reviews"
        className="section-padding bg-secondary/20 overflow-hidden"
      >
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
              Discover why discerning customers choose Reyu Jewels for their
              most precious moments.
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
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
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
