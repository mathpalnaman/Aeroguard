import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";

// Configuring font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Including various weights
});

export const metadata: Metadata = {
  title: "AeroGuard - Precision UAV Systems",
  description: "Military-grade drone systems for advanced autonomy.", // Set the description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Applying the font class to the body */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}