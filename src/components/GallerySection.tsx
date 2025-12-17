import { useState } from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
// import gallery1 from "@/assets/gallery-1.jpg";
// import gallery2 from "@/assets/gallery-2.jpg";
// import gallery3 from "@/assets/gallery-3.jpg";
// import gallery4 from "@/assets/gallery-4.jpg";
// import gallery5 from "@/assets/gallery-5.jpg";
// import gallery6 from "@/assets/gallery-6.jpg";
import gallery1 from "@/assets/c1.webp";
import gallery2 from "@/assets/c2.webp";
import gallery3 from "@/assets/c3.webp";
import gallery4 from "@/assets/c4.webp";
import gallery5 from "@/assets/c5.webp";
import gallery6 from "@/assets/c6.webp";

const galleryItems = [
  // {
  //   id: 1,
  //   image: gallery1,
  //   title: "Diamond Solitaire Ring",
  //   category: "Rings",
  // },
  // { id: 2, image: gallery2, title: "Tennis Bracelet", category: "Bracelets" },
  // { id: 3, image: gallery3, title: "Pendant Necklace", category: "Necklaces" },
  // { id: 4, image: gallery4, title: "Diamond Studs", category: "Earrings" },
  // { id: 5, image: gallery5, title: "Royal Choker", category: "Necklaces" },
  // { id: 6, image: gallery6, title: "Eternity Bands", category: "Rings" },

  {
    id: 1,
    image: gallery1,
  },
  { id: 2, image: gallery2 },
  { id: 3, image: gallery3 },
  { id: 4, image: gallery4 },
  { id: 5, image: gallery5 },
  { id: 6, image: gallery6 },
];

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
};

const GallerySection = () => {
  return (
    <section id="collection" className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
            MODERN CRAFTSMANSHIP
          </span>
          <h2 className="heading-section mt-4 text-foreground">
            Our Lab-Grown Collection{" "}
          </h2>
          <p className="text-luxury mt-4">
            A refined selection of lab-grown diamond jewellery, crafted with
            precision, purity, and modern elegance.
          </p>
        </motion.div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative mb-5 overflow-hidden rounded-sm"
            >
              <img
                src={item.image}
                // alt={item.title}
                className="w-full h-auto object-cover image-zoom"
              />

              {/* Overlay */}
              <div className="overlay-dark flex flex-col justify-end p-6">
                <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
                  {/* {item.category} */}
                </span>
                <h3 className="font-heading text-xl text-primary-foreground mt-2">
                  {/* {item.title} */}
                </h3>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default GallerySection;
