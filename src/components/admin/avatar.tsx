"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import user from "../../../public/user.png";
import { SessionProps } from "@/lib/props";

export default function Avatar({ session = {} }: SessionProps) {
  const [isOpen, setIsOpen] = useState(false);
  // const options: string[] = ["Log out", "Second", "Third"];
  console.log("session! ", session);
  const router = useRouter();
  const options: {
    label: string;
    visible: boolean;
    onClick: () => void;
  }[] = [
    {
      label: "Admin",
      visible: session ? true : false,
      onClick: () => router?.push("/admin"),
    },
    {
      label: "Log out",
      visible: session ? true : false,
      onClick: () => signOut(),
    },
    {
      label: "Log in",
      visible: session ? false : true,
      onClick: () => router?.push("/login"),
    },
    // {
    //   label: "Log out",
    //   onClick: () => signOut(),
    // },
    // {
    //   label: "Log out",
    //   onClick: () => signOut(),
    // },
  ];

  return (
    // <Image
    //   className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
    //   src="/lizzy-and-braden-cover.jpg"
    //   alt="avatar"
    //   width={500}
    //   height={300}
    //   sizes="100vw"
    // />

    // <div className="relative text-left mt-2">
    <div className="flex xxs:justify-center text-right mt-2 justify-end relative xxs:mt-3 md:mt-0 md:ml-3">
      <div>
        <button
          type="button"
          //   className="inline-flex w-full justify-center gap-x-1.5 rounded-md
          // bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm
          //   ring-1 ring-inset ring-gray-300
          // hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
          id="menu-button"
        >
          <Image
            className="inline-block h-8 w-8 rounded-full ring-2 ring-purple-700"
            // src="/lizzy-and-braden-cover.jpg"
            src={session?.user?.image || user}
            priority
            alt="avatar"
            width={500}
            height={300}
            sizes="100vw"
          />
        </button>
      </div>

      {/* <div className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"> */}
      {/* <div className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"> */}
      {isOpen && (
        <div
          // className="relative py-2 pl-3 pr-9 absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100
          //  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          className="text-white text-left mt-12 border-2 border-white hover:bg-purple-500 bg-purple-700 rounded-xl inline-grid fixed cursor-default select-none py-2 pl-3 pr-9"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {options.map((option) => (
            <button
              className={`text-left ${option.visible ? "" : "hidden"}`}
              onClick={option.onClick}
              key={option.label}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
      {/* </div> */}
    </div>
  );
}
