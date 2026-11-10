import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pro Framer Templates — The Designer Marketplace",
  description: "A template library built with high precision and the best UI/UX practices in mind so you'll always find the perfect template for your next big idea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#f6f6f8] text-neutral-900 font-sans selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
