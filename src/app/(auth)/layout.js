import AppWrapper from "@/components/(auth)/AppWrapper";
<link
  href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap"
  rel="stylesheet"
/>;

import { Geist, Geist_Mono } from "next/font/google";
// import "/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Victhaw Official Unity Cup",
  description: "The Battle of Champions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppWrapper>
          <main>{children}</main>
        </AppWrapper>
      </body>
    </html>
  );
}
