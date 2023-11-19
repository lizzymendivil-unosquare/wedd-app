"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export default function LocalSwitcher() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <div className="flex xxs:justify-center justify-end relative xxs:mt-3 md:mt-0 md:ml-3">
      <button
        title="swtich to english"
        className="bg-purple-700  hover:bg-purple-300 hover:text-black
       text-white font-semibold py-1 px-2 border mx-1 border-gray-400 rounded-xl shadow"
        onClick={() => changeLocale("en")}
      >
        EN
      </button>
      <button
        title="cambia el lenguaje a espanol"
        className="bg-purple-700  hover:bg-purple-300 hover:text-black
       text-white font-semibold py-1 px-2 border mx-1 border-gray-400 rounded-xl shadow"
        onClick={() => changeLocale("es")}
      >
        ES
      </button>
    </div>
  );
}
