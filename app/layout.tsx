import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components";
import { Toaster } from "sonner"; 
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Audiophile - Premium Audio Gear",
  description:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-manrope antialiased`}>
        <CartProvider>
          {children}
          <Toaster/>
        </CartProvider>
      </body>
    </html>
  );
}
