import { Sedgwick_Ave_Display } from "next/font/google";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { getScopedI18n } from "@/locales/server";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

const sedgwickAveDisplay = Sedgwick_Ave_Display({ subsets: [], weight: "400" });

export default async function MainPage() {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   return redirect("/login");
  // } else {
  //   console.log("****session ", session);
  //   // return redirect("/");
  // }
  const t = await getScopedI18n("main");

  return (
    <section className="text-white items-center">
      <div className="sm:container mx-auto px-8 lg:flex items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2
            className={`xxs:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-amber-400 font-bold leading-none  ${sedgwickAveDisplay.className}`}
          >
            Lizzy & Braden
          </h2>
          <h3 className="mt-6 xxs:text-sm md:text-xl font-light">
            {t("welcome")}
          </h3>
          <p className="mt-4 xxs:text-sm md:text-xl font-light">
            {t("summary")}
          </p>
          <div className="relative flex py-8 lg:px-8 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 xxs:text-sm  md:text-xl">
              {t("date")}
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
        </div>
        <div className="lg:pl-8 lg:w-1/2">
          <Image
            src="/lizzy-and-braden-cover.jpg"
            priority
            alt="lizzy and braden cover image"
            width="1600"
            height="1059"
            className="rounded-lg sepia shadow-xl shadow-indigo-500/50"
          />
        </div>
      </div>
    </section>
  );
}
