import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  textColor?: "foreground" | "background" | "primary-foreground";
  className?: string;
}

const SectionHeader = ({
  subtitle,
  title,
  description,
  maxWidth = "2xl",
  textColor = "foreground",
  className = "",
}: SectionHeaderProps) => {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
  };

  const textColorClasses = {
    foreground: "text-foreground",
    background: "text-background",
    "primary-foreground": "text-primary-foreground",
  };

  const descriptionColorClasses = {
    foreground: "text-luxury",
    background: "text-background/70",
    "primary-foreground": "text-primary-foreground/70",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`text-center ${maxWidthClasses[maxWidth]} mx-auto mb-16 ${className}`}
    >
      <span className="text-primary text-sm uppercase tracking-[0.25em] font-medium">
        {subtitle}
      </span>
      <h2 className={`heading-section mt-4 ${textColorClasses[textColor]}`}>
        {title}
      </h2>
      {description && (
        <p className={`${descriptionColorClasses[textColor]} mt-4`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
