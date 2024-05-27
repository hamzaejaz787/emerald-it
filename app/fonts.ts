import { Orbitron, Lexend, Plus_Jakarta_Sans } from "next/font/google";

export const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const lexend = Lexend({
  weight: ["400", "500", "700"],
  variable: "--font-lexend",
  subsets: ["latin-ext"],
});

export const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  variable: "--font-jakarta",
  subsets: ["latin"],
});
