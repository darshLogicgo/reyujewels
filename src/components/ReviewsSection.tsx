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
  return (
    <section id="reviews" className="section-padding bg-secondary/20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-background p-8 rounded-sm shadow-soft hover:shadow-gold transition-all duration-500 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
              
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
