import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";

interface ContactSectionProps {
  onBookAppointment: () => void;
}

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Absolutely stunning pieces! The craftsmanship is impeccable.",
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    text: "My wife loves her engagement ring. Thank you Reyu Jewels!",
  },
];

const ContactSection = ({ onBookAppointment }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
            Get in Touch
          </span>
          <h2 className="heading-section mt-4 text-foreground">
            Contact Us
          </h2>
          <p className="text-luxury mt-4">
            We'd love to hear from you. Reach out for inquiries, appointments, 
            or to discuss your custom jewellery needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-background p-8 md:p-10 rounded-sm shadow-elegant">
              <h3 className="font-heading text-2xl text-foreground mb-6">
                Send Enquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="input-luxury rounded-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-luxury rounded-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-luxury rounded-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-luxury rounded-sm resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button type="submit" className="btn-gold w-full rounded-sm">
                  Send Enquiry
                </button>
              </form>
            </div>
          </motion.div>

          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Address & Contact */}
            <div className="bg-background p-8 rounded-sm shadow-elegant">
              <h3 className="font-heading text-2xl text-foreground mb-6">
                Visit Our Showroom
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Address</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      123 Diamond District, Zaveri Bazaar,<br />
                      Mumbai, Maharashtra 400003, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Phone</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      +91 22 2345 6789<br />
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      info@reyujewels.com<br />
                      sales@reyujewels.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Working Hours</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      Mon - Sat: 10:00 AM - 8:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={onBookAppointment}
                className="btn-gold w-full rounded-sm mt-8"
              >
                Book an Appointment
              </button>
            </div>

            {/* Testimonials */}
            <div className="bg-background p-8 rounded-sm shadow-elegant">
              <h3 className="font-heading text-xl text-foreground mb-6">
                Customer Reviews
              </h3>

              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm italic">
                      "{testimonial.text}"
                    </p>
                    <p className="text-foreground text-sm font-medium mt-2">
                      — {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
