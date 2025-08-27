import React from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pure Home Inspection LLC",
    template: "%s | Pure Home Inspection LLC",
  },
  description:
    "Protect your investment with an in-depth and honest home inspection. Serving South Jersey with integrity and expertise.",
  authors: [{ name: "Pure Home Inspection LLC" }],
  keywords: [
    "home inspection",
    "South Jersey",
    "licensed inspector",
    "property inspection",
    "mold testing",
    "radon testing",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/tabLogo.png" type="image/png" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-[color:var(--background)] text-[color:var(--foreground)]`}
      >
        {/* Header and Navigation */}
        {/* The navigation will be rendered by MainNav in page.tsx for flexibility */}
        {children}
        {/* Footer */}
        <footer className="bg-neutral-dark text-white py-8 mt-16 w-full z-40">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="font-heading font-bold text-lg">
                Pure Home Inspection LLC © {new Date().getFullYear()}
              </div>
              <div className="text-sm mt-1">
                326 Tuckerton Rd, Tabernacle, NJ 08088
              </div>
              <div className="text-sm mt-1">
                NJ Home Inspector License # 24GI00155400
              </div>
            </div>
            <div className="text-center md:text-right space-y-1">
              <div className="text-sm">
                Call:{" "}
                <a href="tel:6098201556" className="text-accent font-semibold">
                  (609) 820-1556
                </a>
              </div>
              <div className="text-sm">
                Email:{" "}
                <a
                  href="mailto:purehomeinspectionllc@gmail.com"
                  className="text-accent font-semibold"
                >
                  purehomeinspectionllc@gmail.com
                </a>
              </div>
              <div className="text-xs text-neutral-400 mt-2">
                Designed by AG Media
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
