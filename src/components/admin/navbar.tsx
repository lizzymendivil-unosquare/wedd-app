"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import Avatar from "./avatar";
import { SessionProps } from "@/lib/props";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/" },
  { name: "Admin", href: "/admin" },
  { name: "Blog", href: "/admin/blog" },
];

export default function Navbar({ session }: SessionProps) {
  const pathName = usePathname();
  const params = useParams();

  return (
    <div className="bg-amber-400">
      <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex ">
        <div className="flex items-center">
          <ul className="lg:flex gap-x-4 hidden">
            {links.map((link, idx) => (
              <div key={idx}>
                {/* {pathName.includes(link.href) ? ( */}
                {pathName === "/" + params.locale + link.href ? (
                  <li>
                    <Link
                      href={link.href}
                      className="bg-purple-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      className="text-black hover:bg-purple-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-8">
          <Avatar session={session} />
        </div>
      </div>
    </div>
  );
}
