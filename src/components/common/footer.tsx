"use client";

import { useScopedI18n } from "@/locales/client";
import { Icon } from "@iconify/react";
import { Sedgwick_Ave_Display } from "next/font/google";

const sedgwickAveDisplay = Sedgwick_Ave_Display({ subsets: [], weight: "400" });

export default function Footer() {
  const t = useScopedI18n("footer");

  return (
    <footer className="text-center p-4 bg-amber-400">
      <span className="flex flex-row justify-center text-purple-600 pb-4">
        <Icon icon="la:heart-solid" width="36" className="animate-bounce" />
        <Icon icon="la:heart" width="36" className="animate-bounce" />
        <Icon icon="la:heart-solid" width="36" className="animate-bounce" />
      </span>
      <p className={`md:text-4xl sm:text-2xl ${sedgwickAveDisplay.className}`}>
        Lizzy & Braden
      </p>
      <p className="tracking-wide">{t("text")}</p>
    </footer>
  );
}
