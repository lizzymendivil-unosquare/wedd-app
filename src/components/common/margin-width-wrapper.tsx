"use client";

import Navbar from "./navbar";
import Footer from "./footer";

export default function MarginWidthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <Navbar />
        <main className="flex-1 bg-zinc-100 xs:pt-14 sm:pt-14 md:pt-12">
          <div className="flex flex-col xxs:mt-20 xs:mt-12 sm:mt-14 md:mt-16 sm:min-h-screen">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
