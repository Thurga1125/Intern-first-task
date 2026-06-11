import type { Metadata } from "next";
import { Bubblegum_Sans, Nunito } from "next/font/google";
import "./globals.css";

const bubblegumSans = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bubblegum-var",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito-var",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chipper | Fun, Smiles & Endless Adventure",
  description:
    "Welcome to Chipper world! A place full of fun, smiles, and endless adventure. Token Supply 2m, 0% Buy/Sell Tax, Burnt Liquidity.",
  keywords: ["Chipper", "crypto", "meme coin", "token", "Ethereum", "blockchain"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bubblegumSans.variable} ${nunito.variable} scroll-smooth`}
    >
      <body className="font-nunito overflow-x-hidden antialiased" style={{ backgroundColor: "#111111" }}>
        {children}
      </body>
    </html>
  );
}
