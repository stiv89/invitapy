import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvitaPy – Invitaciones digitales en Paraguay | Entrega 24-48h",
  description: "Invitaciones digitales que hacen brillar tu evento. RSVP integrado, galería, countdown, música y más. Planes desde Gs. 200.000. Entrega en 24-48 horas.",
  keywords: ["invitaciones digitales", "Paraguay", "bodas", "eventos", "RSVP", "invitaciones web", "digital", "countdown"],
  authors: [{ name: "InvitaPy" }],
  creator: "InvitaPy",
  publisher: "InvitaPy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "InvitaPy – Invitaciones digitales en Paraguay",
    description: "Invitaciones digitales que hacen brillar tu evento. RSVP integrado, galería, countdown y más.",
    url: "https://invitapy.vercel.app",
    siteName: "InvitaPy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InvitaPy - Invitaciones digitales",
      },
    ],
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvitaPy – Invitaciones digitales en Paraguay",
    description: "Invitaciones digitales que hacen brillar tu evento. RSVP integrado, galería, countdown y más.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "InvitaPy",
              "description": "Invitaciones digitales en Paraguay",
              "url": "https://invitapy.vercel.app",
              "telephone": "+595-XXX-XXX-XXX",
              "email": "info@invitapy.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PY"
              },
              "priceRange": "Gs. 200.000 - Gs. 350.000",
              "serviceType": "Invitaciones digitales",
              "areaServed": "Paraguay"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
