import { Metadata } from "next";
import { Playfair_Display, Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";
import { ReservationProvider } from "@/context/reservation-context";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ReservationSidebar from "@/components/ui/reservation-sidebar";
import ReservationModal from "@/components/ui/reservation-modal";
import FloatingReservationButton from "@/components/ui/floating-reservation-button";
import { restaurantConfig } from "@/config/restaurant";
import RestaurantSchema from "@/components/seo/restaurant-schema";
import OrganizationSchema from "@/components/seo/organization-schema";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const kaushan = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Simm3r Restaurant & Café | Exquisite & Serene Dining in Jos",
    template: "%s | Simm3r Restaurant & Café",
  },
  description:
    "Experience the finest high-end dining in Jos, Plateau State. Simm3r offers a serene sanctuary for exquisite cuisine, lounging, and reading. Best restaurant for catering and culinary excellence.",
  keywords: [
    "Simm3r Restaurant",
    "Jos Dining",
    "Plateau State Restaurant",
    "High-end cafe Jos",
    "Catering services Jos",
    "Culinary school Nigeria",
    "Best restaurant in Jos",
  ],
  authors: [{ name: "Simm3r Team" }],
  creator: "Simm3r Restaurant",
  publisher: "Simm3r Restaurant",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(restaurantConfig.baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Simm3r Restaurant & Café | Exquisite & Serene Dining in Jos",
    description:
      "A high-end sanctuary for dining, lounging, and reading in Jos. Experience exquisite culinary delights.",
    url: restaurantConfig.baseUrl,
    siteName: "Simm3r Restaurant & Café",
    images: [
      {
        url: restaurantConfig.seoImages.home,
        width: 1200,
        height: 630,
        alt: "Simm3r Restaurant Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simm3r Restaurant & Café | Exquisite & Serene",
    description:
      "A high-end sanctuary for dining, lounging, and reading in Jos.",
    images: [restaurantConfig.seoImages.home],
    creator: "@simmerbysnb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to the two heaviest external origins */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload the LCP image — must match the srcSet in hero.tsx exactly to avoid a double-fetch */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dvjslohdt/video/upload/f_auto,q_auto,so_0,w_828,c_fill,g_auto/simmer-restaurant/reel1.jpg"
          fetchPriority="high"
          imageSrcSet={[
            "https://res.cloudinary.com/dvjslohdt/video/upload/f_auto,q_auto,so_0,w_640,c_fill,g_auto/simmer-restaurant/reel1.jpg 640w",
            "https://res.cloudinary.com/dvjslohdt/video/upload/f_auto,q_auto,so_0,w_828,c_fill,g_auto/simmer-restaurant/reel1.jpg 828w",
            "https://res.cloudinary.com/dvjslohdt/video/upload/f_auto,q_auto,so_0,w_1080,c_fill,g_auto/simmer-restaurant/reel1.jpg 1080w",
            "https://res.cloudinary.com/dvjslohdt/video/upload/f_auto,q_auto,so_0,w_1920,c_fill,g_auto/simmer-restaurant/reel1.jpg 1920w",
          ].join(", ")}
          imageSizes="100vw"
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${kaushan.variable} antialiased relative`}
      >
        <ReservationProvider>
          <RestaurantSchema />
          <OrganizationSchema />
          <Navbar />
          {children}
          <Footer />
          <ReservationSidebar />
          <ReservationModal />
          <FloatingReservationButton />
        </ReservationProvider>
      </body>
    </html>
  );
}
