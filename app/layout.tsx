import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import MainMenuModal from "@/app/components/menus/MainMenuModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "STUDIO KATRA - Agence Design Nantes Création design produit & graphique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="w-full overflow-hidden">
          <Header />
          <main>{children}</main>
          <Footer />
          <MainMenuModal />
        </div>
      </body>
    </html>
  );
}
