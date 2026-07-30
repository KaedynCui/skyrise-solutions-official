import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyRise Solutions | Finance Made Clear",
  description:
    "Tailored home, investment, refinance and commercial finance solutions for Australians.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
