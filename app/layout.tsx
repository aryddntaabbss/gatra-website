import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GATRA - Gamalama Trail Runners",
  description: "Komunitas trail running berbasis di Ternate, Maluku Utara",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
