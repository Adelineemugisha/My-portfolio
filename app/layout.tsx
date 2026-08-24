import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adeline Mugisha | Portfolio | Software Engineer & Product Manager",
  description: "Professional portfolio showcasing full-stack development, mobile apps, machine learning, and UX design research.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white text-black flex flex-col">
        {children}
      </body>
    </html>
  );
}
