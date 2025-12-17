import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

const ContactForm = ({ isOpen, onClose, serviceTitle }: ContactFormProps) => {
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
          onClose();
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-background border-border p-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8"
        >
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-heading text-2xl text-foreground">
                {serviceTitle
                  ? `Enquire About ${serviceTitle}`
                  : "Send Enquiry"}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                We'll respond within 24 hours
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="input-luxury rounded-sm"
              placeholder="Your full name"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-luxury rounded-sm"
              placeholder="your@email.com"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-luxury rounded-sm"
              placeholder="+91 98980 76868"
            />

            <textarea
              name="message"
              rows={4}
              className="input-luxury rounded-sm resize-none"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className="btn-gold w-full rounded-sm"
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
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
