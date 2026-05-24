import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const laCentralita = localFont({
  src: "./LaCentralita.otf",
  variable: "--font-lacentralita",
});

export const metadata: Metadata = {
  title: "The Homepage of Kyungmin Kim",
  description: "A Brutalist Retro Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`antialiased relative ${laCentralita.variable}`}>
        <div className="sand-texture" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
