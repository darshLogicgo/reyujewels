import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import headerLogo from "@/assets/Diamond_Logo.png";

interface NavbarProps {
  onContactClick: () => void;
}

type NavLink =
  | { href: string; label: string; hasDropdown?: never; dropdownItems?: never }
  | {
      label: string;
      hasDropdown: true;
      dropdownItems: { href: string; label: string }[];
      href?: never;
    };

const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  {
    label: "Diamonds",
    hasDropdown: true,
    dropdownItems: [
      { href: "#diamonds", label: "Diamond Shapes" },
      { href: "#cvd-hpht", label: "CVD & HPHT" },
      { href: "#fancy-color-diamonds", label: "Fancy Color Diamonds" },
    ],
  },
  { href: "#collection", label: "Collection" },
  {
    label: "Services",
    hasDropdown: true,
    dropdownItems: [
      { href: "#custom-shape", label: "Custom Shape" },
      { href: "#services", label: "Our Services" },
    ],
  },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [expandedMobileDropdown, setExpandedMobileDropdown] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
          isScrolled ? "shadow-elegant py-4" : "py-6"
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-50 inline-flex items-center">
            <img
              src={headerLogo}
              alt="Reyu Jewels"
              className="h-10 md:h-12 w-auto transition-opacity duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown && link.dropdownItems) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setHoveredDropdown(link.label)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    <button className="text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:text-primary text-foreground flex items-center gap-1">
                      {link.label}
                      <ChevronDown
                        className="w-4 h-4 transition-transform duration-300"
                        style={{
                          transform:
                            hoveredDropdown === link.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      />
                    </button>
                    <AnimatePresence>
                      {hoveredDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-background border border-border shadow-elegant rounded-sm overflow-hidden z-50"
                        >
                          {link.dropdownItems.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-3 text-sm uppercase tracking-[0.1em] font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              if ("href" in link) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:text-primary text-foreground"
                  >
                    {link.label}
                  </a>
                );
              }
              return null;
            })}
            <button
              onClick={onContactClick}
              className="btn-gold rounded-sm text-xs py-3 px-6"
            >
              Enquiry Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 transition-colors duration-300 z-50 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <img
                  src={headerLogo}
                  alt="Reyu Jewels"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Navigation */}
              <nav className="flex-1 overflow-y-auto px-6 py-8">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => {
                    if (link.hasDropdown && link.dropdownItems) {
                      const isExpanded = expandedMobileDropdown === link.label;
                      return (
                        <div key={link.label} className="mb-2">
                          <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            onClick={() =>
                              setExpandedMobileDropdown(
                                isExpanded ? null : link.label
                              )
                            }
                            className="w-full flex items-center justify-between py-4 px-4 text-left text-lg font-heading text-foreground hover:text-primary hover:bg-primary/5 rounded-sm transition-all duration-300"
                          >
                            <span>{link.label}</span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </motion.button>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-2 space-y-1 border-l-2 border-primary/20 ml-4">
                                  {link.dropdownItems.map((item, subIndex) => (
                                    <motion.a
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setExpandedMobileDropdown(null);
                                      }}
                                      initial={{ opacity: 0, x: 10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        duration: 0.2,
                                        delay: subIndex * 0.05,
                                      }}
                                      className="block py-3 px-4 text-base font-body text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-sm transition-all duration-300"
                                    >
                                      {item.label}
                                    </motion.a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="block py-4 px-4 text-lg font-heading text-foreground hover:text-primary hover:bg-primary/5 rounded-sm transition-all duration-300"
                      >
                        {link.label}
                      </motion.a>
                    );
                  })}
                </div>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-border">
                <motion.button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="btn-gold w-full rounded-sm"
                >
                  Book Appointment
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
