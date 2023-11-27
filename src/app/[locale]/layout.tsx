import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/components/auth/next-auth-provider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Lizzy & Braden",
//   description: "Lizzy and Braden Wedding website",
//   keywords: ["wedding"],
//   creator: "Lizzy Mendivil",
//   openGraph: {
//     title: "Lizzy & Braden",
//     description: "Lizzy and Braden Wedding website",
//     url: "https://brizzy.vercel.app/",
//     siteName: "Brizzy",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dnfwz47kh/image/upload/v1700277474/IMG_0807_p3feyy.jpg",
//       },
//     ],
//     locale: "",
//     type: "website",
//   },
// };

export const metadata: Metadata = {
  title: "Lizzy & Braden",
  description: "Lizzy and Braden Wedding website",
  keywords: ["wedding"],
  creator: "Lizzy Mendivil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {/* <div className="flex">
          <Navbar />
          <main className="flex-1 bg-zinc-100 xs:pt-14 sm:pt-14 md:pt-12">
            {children}
          </main>
        </div>
        <Footer /> */}
        <NextAuthProvider>{children}</NextAuthProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
