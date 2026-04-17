import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Amber Motors | Quality Dealership",
  description: "The widest selection of pre-owned vehicles and guaranteed auto financing.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="font-sans bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
