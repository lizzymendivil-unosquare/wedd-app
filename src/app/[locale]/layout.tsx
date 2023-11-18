import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lizzy & Braden",
  description: "Lizzy and Braden Wedding website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* <div className="flex">
          <Navbar />
          <main className="flex-1 bg-zinc-100 xs:pt-14 sm:pt-14 md:pt-12">
            {children}
          </main>
        </div>
        <Footer /> */}
        {children}
      </body>
    </html>
  );
}
