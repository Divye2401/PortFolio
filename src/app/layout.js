import { Nunito, Outfit } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});
import "./globals.css";

export const metadata = {
  title: "Divye's Portfolio",
  description: "Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${outfit.variable} antialiased font-nunito`}
      >
        {children}
      </body>
    </html>
  );
}
