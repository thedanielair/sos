import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "SOS - Gaming",
  description: "Survive at all costs. Experience new social battle royale game",
};

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${bebasNeue.variable}`}
    >
      <head>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
