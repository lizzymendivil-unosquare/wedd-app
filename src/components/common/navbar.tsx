"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@iconify/react";

import { NAV_ITEMS } from "@/lib/constants";
import LocalSwitcher from "../locale/locale-switcher";
import { useScopedI18n } from "@/locales/client";
import Avatar from "../admin/avatar";
import AvatarWrapper from "../admin/avatar-wrapper";

export default function Navbar({ session }: { session?: {} }) {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const t = useScopedI18n("navbar");

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="flex text-2xl text-amber-400 font-bold ">
                  {/* <Icon icon="game-icons:linked-rings" /> */}
                  <Icon icon="mdi:bus" width="32" height="32" />
                  <span className="pl-2">BRIZZY</span>
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Icon
                      icon="icon-park-outline:close"
                      width="26"
                      height="26"
                    />
                  ) : (
                    <Icon icon="pajamas:hamburger" width="26" height="26" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <div className="h-screen md:h-auto items-center justify-center md:flex ">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="
                        text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0
                        hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent"
                    >
                      <Link
                        href={item.path}
                        onClick={() => setNavbar(!Navbar)}
                        className={`text-sm lg:text-lg transition duration-700${
                          "/" + params.locale + item.path === pathname
                            ? " text-purple-600"
                            : ""
                        }`}
                      >
                        {t(`${item.key}`)}
                      </Link>
                    </div>
                  );
                })}
                <LocalSwitcher />
                <Avatar session={session} />
                {/* <AvatarWrapper /> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
