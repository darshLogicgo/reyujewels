import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Reyu Jewels | Lab-Grown Diamonds – All Cuts & Shapes",
  description = "Explore premium lab-grown diamonds in all cuts and shapes at Reyu Jewels. Ethically sourced, IGI certified, custom-made jewellery available.",
  keywords = "lab grown diamonds, diamond shapes, round cut diamond, oval diamond, emerald cut diamond, cushion cut diamond, ethical diamonds, Reyu Jewels",
  ogTitle = "Lab-Grown Diamonds – All Cuts & Shapes | Reyu Jewels",
  ogDescription = "Discover ethically crafted lab-grown diamonds in every cut and shape. Premium quality, certified stones, and custom jewellery at Reyu Jewels.",
  ogImage,
  ogUrl,
  twitterTitle = "Lab-Grown Diamonds – All Cuts & Shapes | Reyu Jewels",
  twitterDescription = "Premium lab-grown diamonds in all shapes & cuts. Ethical, certified, and custom-made jewellery by Reyu Jewels.",
  twitterImage,
  structuredData,
}: SEOProps) => {
  // Get base URL dynamically (works in dev and production)
  // Priority: 1. VITE_SITE_URL from .env, 2. Current origin, 3. Empty string
  const envSiteUrl = import.meta.env.VITE_SITE_URL;
  const baseUrl = envSiteUrl || (typeof window !== "undefined" ? window.location.origin : "");

  // Get current path for URL
  const currentPath =
    typeof window !== "undefined"
      ? window.location.pathname
      : "/lab-grown-diamond-shapes";

  // Use provided ogUrl, or construct from baseUrl and path
  const fullUrl =
    ogUrl ||
    `${baseUrl}${
      currentPath === "/" ? "/lab-grown-diamond-shapes" : currentPath
    }`;

  // Default OG image - use Diamond_Logo.png from public folder
  const defaultOgImage =
    ogImage || (baseUrl ? `${baseUrl}/Diamond_Logo.png` : "/Diamond_Logo.png");
  const defaultTwitterImage = twitterImage || defaultOgImage;

  // Default structured data for JewelryStore
  const defaultStructuredData = structuredData || {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: "Reyu Jewels",
    url: baseUrl || undefined,
    description:
      "Premium lab-grown diamonds in all cuts and shapes. Ethical, certified, and custom-made jewellery.",
    areaServed: ["IN", "US", "EU"],
    priceRange: "$$$",
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Reyu Jewels" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Reyu Jewels" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={defaultTwitterImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
