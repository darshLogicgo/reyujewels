import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

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

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const data = new FormData();

    // Form data fields
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);

    // FormSubmit required hidden fields
    data.append("_subject", "New Enquiry from Reyu Jewels Website");
    data.append("_captcha", "false");
    data.append("_template", "table"); // professional table layout
    data.append("_replyto", formData.email);

    try {
      const response = await fetch(
        "https://formsubmit.co/info@reyujewels.com",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({ fullName: "", email: "", phone: "", message: "" });

        setTimeout(() => {
          setSuccess(false);
        }, 2500);
      } else {
        alert("Failed to send. Please try again later.");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <SectionHeader
          subtitle="Get in Touch"
          title="Contact Us"
          description="We'd love to hear from you. Reach out for inquiries, appointments, or to discuss your custom jewellery needs."
          textColor="foreground"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-full"
          >
            <div className="bg-background p-8 md:p-10 rounded-sm shadow-elegant h-full flex flex-col">
              <h3 className="font-heading text-2xl text-foreground mb-6">
                Send Enquiry
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 flex-1 flex flex-col"
              >
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
                    placeholder="+91 98980 76868"
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

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full rounded-sm mt-auto"
                >
                  {loading
                    ? "Sending..."
                    : success
                    ? "✓ Sent Successfully"
                    : "Send Enquiry"}
                </button>

                {success && (
                  <p className="text-center text-green-600 text-sm mt-2">
                    Thank you! Your enquiry has been sent successfully.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Business Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 h-full"
          >
            {/* Address & Contact */}
            <div className="bg-background p-8 rounded-sm shadow-elegant h-full flex flex-col">
              <h3 className="font-heading text-2xl text-foreground mb-6">
                Visit Our Showroom
              </h3>

              <div className="space-y-5 flex-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Address</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      301, Silver Stone Arcade, Causeway Rd, Katargam,
                      <br />
                      Surat, Gujarat 395004
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
                      +91 98980 76868
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
                      info@reyujewels.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">
                      Working Hours
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      Mon - Sat: 10:00 AM - 8:00 PM
                      <br />
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
