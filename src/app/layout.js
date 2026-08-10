// import { Inter, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/landing-page/Navbar";
// import Footer from "@/components/landing-page/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Victhaw Official Unity Cup",
//   description: "The Battle of Champions",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const siteUrl = "http://www.victhawofficial.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Victhaw Official | Unity Cup 2.0 – The Battle of Champions",
    template: "%s | Victhaw Official",
  },
  description:
    "Official home of the Victhaw Unity Cup 2.0 (August 2026) — 8 teams, two groups, one champion. Follow live fixtures, scores, standings, top scorers & prizes. Plus Tradfit Rhythms events and The Visionary certification & services.",
  keywords: [
    "Victhaw",
    "Victhaw Official",
    "Unity Cup",
    "Unity Cup 2.0",
    "football tournament",
    "grassroots football",
    "Nigeria football",
    "live scores",
    "fixtures",
    "standings",
    "top scorers",
    "Tradfit Rhythms",
    "The Visionary",
    "sports event",
  ],
  authors: [{ name: "Victhaw Official" }],
  creator: "Victhaw Official",
  publisher: "Victhaw Official",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Victhaw Official",
    title: "Victhaw Official | Unity Cup 2.0 – The Battle of Champions",
    description:
      "The official home of Unity Cup 2.0 — 8 teams, two groups, one champion. Live fixtures, scores, standings and prizes. Plus Tradfit Rhythms and The Visionary.",
    images: [
      {
        url: "/victhaw-official.jpg",
        width: 1200,
        height: 630,
        alt: "Victhaw Official Unity Cup 2.0",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Victhaw Official | Unity Cup 2.0 – The Battle of Champions",
    description:
      "The official home of Unity Cup 2.0 — 8 teams, two groups, one champion. Live fixtures, scores, standings and prizes.",
    images: ["/victhaw-official.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/victhaw-logo.svg",
  },
};

export const viewport = {
  themeColor: "#C81E23",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Victhaw Official",
  url: siteUrl,
  logo: `${siteUrl}/victhaw-logo.svg`,
  email: "victhawofficial@gmail.com",
  telephone: "+2348106163804",
  contactPoint: {
    "@type": "ContactPoint",
    email: "victhawofficial@gmail.com",
    telephone: "+2348106163804",
    contactType: "customer service",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
