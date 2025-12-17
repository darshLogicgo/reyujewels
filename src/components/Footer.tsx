import { Diamond } from "lucide-react";
import logo from "@/assets/Diamond_Logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container-luxury">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src={logo}
                alt="Reyu Jewels"
                className="h-12 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-md">
              Crafting timeless diamond elegance since 1999. Every piece tells a
              story of love, celebration, and the pursuit of perfection.
            </p>
            <div className="flex items-center gap-2 mt-6 text-primary">
              <Diamond className="w-5 h-5" />
              <span className="text-sm uppercase tracking-[0.2em]">
                Certified Excellence
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-foreground font-medium mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Diamonds",
                "Collection",
                "Services",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-primary-foreground/60 text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary-foreground font-medium mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-primary-foreground/60 text-sm">
              <li>+91 98980 76868</li>
              <li>info@reyujewels.com</li>
              <li>
                301, Silver Stone Arcade, Causeway Rd, Katargam,
                <br />
                Surat, Gujarat 395004
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Reyu Jewels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-primary-foreground/40 text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/40 text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
