import type { Metadata } from "next";
import "./globals.css";
import TopHeader from "@/components/TopHeader/TopHeader";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopHeader />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
