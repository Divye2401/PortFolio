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
  description:
    "MACS graduate passionate about full-stack development, AI, and problem-solving. Check out my projects!",
  keywords:
    "full stack developer, React, Next.js, Node.js, Python, JavaScript, MACS graduate",
  openGraph: {
    title: "Divye Pugaloke - Full Stack Developer",
    url: "https://portfolio-git-main-divyes-projects-1e240bae.vercel.app/",
    description:
      "MACS graduate passionate about full-stack development, AI, and problem-solving.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Divye Pugaloke - Full Stack Developer",
      },
    ],
  },
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
