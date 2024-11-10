import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/Header";
import Footer from "@/component/layout/Footer";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
