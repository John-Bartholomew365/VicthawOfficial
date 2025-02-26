import localFont from "next/font/local";
// import "./globals.css";
import AppWrapper from "@/components/dashboard/AppWrapper";

export const metadata = {
  title: "Victhaw Official Unity Cup",
  description: "The Battle of Champions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
