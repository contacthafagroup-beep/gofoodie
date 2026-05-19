import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Gofoodie Ethiopia Café & Restaurant | Fresh Food. Great Vibes.",
  description:
    "Experience one of Addis Ababa's rising modern cafés — serving delicious meals, refreshing drinks, and unforgettable moments. Located in Tulu Dimtu, Addis Ababa.",
  keywords:
    "Ethiopian restaurant, café Addis Ababa, Tulu Dimtu restaurant, Ethiopian food, modern café Ethiopia, Gofoodie",
  openGraph: {
    title: "Gofoodie Ethiopia Café & Restaurant",
    description:
      "Fresh Food. Great Vibes. Experience modern dining in Addis Ababa.",
    type: "website",
    locale: "en_ET",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
          <LoadingScreen />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </body>
    </html>
  );
}
