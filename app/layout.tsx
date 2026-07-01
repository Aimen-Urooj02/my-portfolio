import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aimen Urooj | AI & Automation Enthusiast",
  description: "Portfolio of Aimen Urooj, Software Engineering Student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased text-[#4b5563] bg-[#FDFBF7]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
